import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup-tests.ts'],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: resolve('./'),
    reporters: [['html', { outputFile: './uireport/index.html' }]],
    silent: false,
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['html', 'text'],
      reportsDirectory: './coverage',
      clean: true,
      all: true,
      skipFull: false,
      exclude: [
        '*.config.js',
        '*.config.ts',
        '*.d.ts',
        '*.workspace.ts',
        'types.ts',
        'dist/*',
        'scripts/*',
        'uireport/*',
      ],
    },
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tests': resolve(__dirname, './tests'),
      '@docs': resolve(__dirname, './docs'),
    },
  },
}); 