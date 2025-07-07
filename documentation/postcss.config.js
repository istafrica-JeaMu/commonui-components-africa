import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: resolve(__dirname, 'tailwind.config.js'),
      base: resolve(__dirname, '..'),
      optimize: true
    },
    'autoprefixer': {}
  }
}; 