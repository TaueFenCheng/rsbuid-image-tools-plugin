import type { RsbuildPlugin } from '@rsbuild/core';

export type PluginImageToolsOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginExample = (
  options: PluginImageToolsOptions = {},
): RsbuildPlugin => ({
  name: 'plugin-example',

  setup() {
    console.log('Hello Rsbuild!', options);
  },
});
