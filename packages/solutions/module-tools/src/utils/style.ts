import type { AcceptedPlugin } from 'postcss';
import type { PostcssOptions } from '@modern-js/libuild';
import { applyOptionsChain } from '@modern-js/utils';
import type {
  PartialBaseBuildConfig,
  PostCSSConfigUtils,
  LessOptions,
  SassOptions,
} from '../types';
import { getCompiledPath } from './path';

export const getLessConfig = async (config: PartialBaseBuildConfig) => {
  const mergedOptions = applyOptionsChain<LessOptions, never>(
    {
      lessOptions: { javascriptEnabled: true },
      implementation: await getCompiledPath('less'),
    },
    config?.style?.less || {},
  );

  return mergedOptions;
};

export const getSassConfig = async (config: PartialBaseBuildConfig) => {
  const mergedOptions = applyOptionsChain<SassOptions, never>(
    {
      implementation: await getCompiledPath('sass'),
    },
    config?.style?.sass || {},
  );

  return mergedOptions;
};

export const getPostcssConfig = async (config: PartialBaseBuildConfig) => {
  const extraPlugins: AcceptedPlugin[] = [];

  const utils = {
    addPlugins(plugins: AcceptedPlugin | AcceptedPlugin[]) {
      if (Array.isArray(plugins)) {
        extraPlugins.push(...plugins);
      } else {
        extraPlugins.push(plugins);
      }
    },
  };

  const targetLegacyBrowsers = config.target === 'es5';
  const getLegacyPostCSSPlugins = async () => [
    require(await getCompiledPath('postcss-custom-properties')),
    require(await getCompiledPath('postcss-initial')),
    require(await getCompiledPath('postcss-page-break')),
    require(await getCompiledPath('postcss-font-variant')),
  ];

  const mergedConfig = applyOptionsChain<
    PostcssOptions & { $$tools?: string },
    PostCSSConfigUtils
  >(
    {
      // TODO: when schema support redefine
      // $$tools: 'module-tools',
      plugins: [
        ...(targetLegacyBrowsers ? await getLegacyPostCSSPlugins() : []),
        require(await getCompiledPath('postcss-flexbugs-fixes')),
        require(await getCompiledPath('postcss-media-minmax')),
        require(await getCompiledPath('postcss-nesting')),
      ].filter(Boolean),
    },
    config?.style?.postcss || {},
    utils,
  );
  if (extraPlugins.length) {
    mergedConfig.plugins!.push(...extraPlugins);
  }

  return mergedConfig;
};

export const getStyleConfig = async (config: PartialBaseBuildConfig) => {
  const postcssConfig = await getPostcssConfig(config);
  const lessConfig = await getLessConfig(config);
  const sassConfig = await getSassConfig(config);
  return {
    less: lessConfig,
    sass: sassConfig,
    postcss: postcssConfig,
  };
};
