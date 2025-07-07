import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      name: 'unit',
      include: ['tests/**/*.spec.ts'],
      environment: 'jsdom',
    },
  },
  {
    test: {
      name: 'browser',
      include: ['tests/**/*.browser.spec.ts'],
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
      },
    },
  },
]); 