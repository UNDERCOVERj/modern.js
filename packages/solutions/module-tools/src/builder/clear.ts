import { fs, logger, chalk } from '@modern-js/utils';
import type { BaseBuildConfig } from '../types';
import { i18n, localeKeys } from '../locale';
import { dtsTempDirectory } from '../constants/dts';

export const clearDtsTemp = async () => {
  await fs.remove(dtsTempDirectory);
};

export const clearBuildConfigPaths = async (
  configs: BaseBuildConfig[],
  options?: {
    noClear?: boolean;
    projectAbsRootPath?: string;
  },
) => {
  const { noClear = false, projectAbsRootPath = process.cwd() } = options ?? {};

  if (noClear) {
    return;
  }

  for (const config of configs) {
    if (projectAbsRootPath === config.outDir) {
      logger.warn(chalk.bgYellowBright(i18n.t(localeKeys.warns.clearRootPath)));
    } else {
      await fs.remove(config.outDir);
    }
  }
};
