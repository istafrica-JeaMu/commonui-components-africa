/// <reference types="vitest" />

import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue', 'primevue', 'tailwindcss-primeui'],
  },
  plugins: [vue(), tailwindcss(), visualizer({ template: 'network' })],
  build: {
    copyPublicDir: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CommonUIComponentsAfrica',
      formats: ['es', 'cjs'], // ES modules and CommonJS
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      // External modules won't be bundled into your library
      external: [
        'vue',
        // PrimeVue core
        'primevue',
        'primevue/config',
        'primevue/passthrough',
        // Specific PrimeVue components used in the library
        'primevue/button',
        'primevue/inputtext',
        'primevue/message',
        'primevue/textarea',
        // Other dependencies
        '@heroicons/vue',
        '@headlessui/vue',
        'tailwindcss-primeui',
      ],
      treeshake: true, // Enable tree shaking for better optimization
      output: {
        compact: true,
        // Remove preserveModules to avoid module structure issues
        preserveModules: false,
        inlineDynamicImports: false,
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name][extname]',
        // Disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
          'primevue/config': 'PrimeVue.config',
          'primevue/passthrough': 'PrimeVue.passthrough',
          'primevue/button': 'PrimeVue.Button',
          'primevue/inputtext': 'PrimeVue.InputText',
          'primevue/message': 'PrimeVue.Message',
          'primevue/textarea': 'PrimeVue.Textarea',
          '@heroicons/vue': 'HeroiconsVue',
          '@headlessui/vue': 'HeadlessUIVue',
          'tailwindcss-primeui': 'TailwindCSS.PrimeUI',
        },
      },
    },
    emptyOutDir: true, // Clean the output directory before building
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@tests': resolve('./tests'),
    },
  },
});
