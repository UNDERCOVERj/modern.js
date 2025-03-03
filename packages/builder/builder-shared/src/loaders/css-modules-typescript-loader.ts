/**
 * The following code is modified based on
 * https://github.com/seek-oss/css-modules-typescript-loader
 *
 * only generator .d.ts for css modules file
 *
 * MIT Licensed
 * Author mattcompiles
 * Copyright 2018 SEEK
 * https://github.com/seek-oss/css-modules-typescript-loader/blob/master/LICENSE
 */

import fs from 'fs';
import path from 'path';
// @ts-expect-error
import LineDiff from 'line-diff';
import type { LoaderContext } from 'webpack';
import { isCssModules, CssLoaderModules, isInNodeModules } from '../css';

const bannerMessage =
  '// This file is automatically generated.\n// Please do not change this file!';

const cssModuleExport =
  'export const cssExports: CssExports;\nexport default cssExports;\n';

const getNoDeclarationFileError = ({ filename }: { filename: string }) =>
  new Error(
    `Generated type declaration does not exist. Run webpack and commit the type declaration for '${filename}'`,
  );

const getTypeMismatchError = ({
  filename,
  expected,
  actual,
}: {
  filename: string;
  expected: string;
  actual: string;
}) => {
  const diff = new LineDiff(
    enforceLFLineSeparators(actual),
    expected,
  ).toString();

  return new Error(
    `Generated type declaration file is outdated. Run webpack and commit the updated type declaration for '${filename}'\n\n${diff}`,
  );
};

const cssModuleToInterface = (cssModuleKeys: string[]) => {
  const interfaceFields = cssModuleKeys
    .sort()
    .map(key => `  '${key}': string;`)
    .join('\n');

  return `interface CssExports {\n${interfaceFields}\n}`;
};

const filenameToTypingsFilename = (filename: string) => {
  const dirName = path.dirname(filename);
  const baseName = path.basename(filename);
  return path.join(dirName, `${baseName}.d.ts`);
};

const enforceLFLineSeparators = (text?: string) => {
  if (text) {
    // replace all CRLFs (Windows) by LFs (Unix)
    return text.replace(/\r\n/g, '\n');
  } else {
    return text;
  }
};

const compareText = (contentA: string, contentB: string) => {
  return (
    enforceLFLineSeparators(contentA) === enforceLFLineSeparators(contentB)
  );
};

const validModes = ['emit', 'verify'];

const isFileNotFound = (err?: { code: string }) => err && err.code === 'ENOENT';

const makeDoneHandlers = (callback: any, content: string, rest: any[]) => ({
  failed: (e: Error) => callback(e),
  success: () => callback(null, content, ...rest),
});

const makeFileHandlers = (filename: string) => ({
  read: (handler: (...args: any[]) => void) =>
    fs.readFile(filename, { encoding: 'utf-8' }, handler),
  write: (content: string, handler: (...args: any[]) => void) =>
    fs.writeFile(filename, content, { encoding: 'utf-8' }, handler),
});

const extractLocalExports = (content: string) => {
  let localExports = content.split('exports.locals')[1];
  if (!localExports) {
    localExports = content.split('___CSS_LOADER_EXPORT___.locals')[1];
  }
  return localExports;
};

const getCssModuleKeys = (content: string) => {
  const keyRegex = /"([^\\"]+)":/g;
  let match;
  const cssModuleKeys = [];

  const localExports = extractLocalExports(content);

  // eslint-disable-next-line no-cond-assign
  while ((match = keyRegex.exec(localExports))) {
    if (cssModuleKeys.indexOf(match[1]) < 0) {
      cssModuleKeys.push(match[1]);
    }
  }
  return cssModuleKeys;
};

// eslint-disable-next-line consistent-return
export default function (
  this: LoaderContext<{
    mode: string;
    modules: CssLoaderModules;
  }> & {
    cssModuleKeys?: string[];
  },
  content: string,
  ...rest: any[]
) {
  const { failed, success } = makeDoneHandlers(this.async(), content, rest);

  const filename = this.resourcePath;
  const { mode = 'emit', modules = true } = this.getOptions() || {};

  if (!validModes.includes(mode)) {
    return failed(new Error(`Invalid mode option: ${mode}`));
  }

  if (!isCssModules(filename, modules) || isInNodeModules(filename)) {
    return success();
  }

  const cssModuleInterfaceFilename = filenameToTypingsFilename(filename);
  const { read, write } = makeFileHandlers(cssModuleInterfaceFilename);

  const cssModuleKeys = this.cssModuleKeys || getCssModuleKeys(content);
  const cssModuleDefinition = `${bannerMessage}\n${cssModuleToInterface(
    cssModuleKeys,
  )}\n${cssModuleExport}`;

  if (mode === 'verify') {
    read((err, fileContents) => {
      if (isFileNotFound(err)) {
        return failed(
          getNoDeclarationFileError({
            filename: cssModuleInterfaceFilename,
          }),
        );
      }

      if (err) {
        return failed(err);
      }

      if (!compareText(cssModuleDefinition, fileContents)) {
        return failed(
          getTypeMismatchError({
            filename: cssModuleInterfaceFilename,
            expected: cssModuleDefinition,
            actual: fileContents,
          }),
        );
      }

      return success();
    });
  } else {
    read((_, fileContents) => {
      if (!compareText(cssModuleDefinition, fileContents)) {
        write(cssModuleDefinition, err => {
          if (err) {
            failed(err);
          } else {
            success();
          }
        });
      } else {
        success();
      }
    });
  }
}
