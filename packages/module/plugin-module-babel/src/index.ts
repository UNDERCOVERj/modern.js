import { CliPlugin, ModuleTools } from '@modern-js/module-tools';
import { babelPlugin } from '@modern-js/libuild-plugin-babel';

export type Options = typeof babelPlugin extends (arg1: infer P) => void
  ? P
  : never;

// deprecated named export
export const ModulePluginBabel = (
  options?: Options,
): CliPlugin<ModuleTools> => ({
  name: 'babel-plugin',
  setup: () => ({
    modifyLibuild(config) {
      config.plugins?.unshift(babelPlugin(options ?? {}));
      return config;
    },
  }),
});

// right named export
export { ModulePluginBabel as modulePluginBabel };
