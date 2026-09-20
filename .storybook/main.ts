import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const { default: tailwindcss } = await import('@tailwindcss/vite')
    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())

    // rolldown ベースの Vite では先頭がドットの指定子が相対パス扱いされ、
    // tsconfig paths の ".storybook/*" エイリアスが効かないため明示的に張る
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(Array.isArray(config.resolve.alias) ? {} : config.resolve.alias),
      '.storybook': fileURLToPath(new URL('.', import.meta.url)),
    }
    return config
  },
}
export default config
