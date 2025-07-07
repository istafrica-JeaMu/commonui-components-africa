import { resolve } from 'path';
import vueDocgenPlugin from 'vite-plugin-vue-docgen';
import { defineConfig } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

export default defineConfig({
  title: 'CommonUI Components Africa',
  description: 'Vue.js component library built on PrimeVue and Tailwind CSS - Africa Edition',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  appearance: true,
  
  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'CommonUI Africa',
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Components', link: '/docs/components/' },
      { text: 'Theme', link: '/theme/' },
      {
        text: 'Version',
        items: [
          {
            text: 'Current',
            link: '/docs/components/versions',
          },
          {
            text: 'All versions',
            link: '/docs/components/versions',
          },
        ],
      },
    ],
    search: {
      provider: 'local',
    },

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            {
              text: 'Components',
              link: '/docs/getting-started/components',
            },
            {
              text: 'Installation', 
              link: '/docs/getting-started/installation',
            },
            {
              text: 'Quick Start',
              link: '/docs/getting-started/quick-start',
            },
          ],
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            {
              text: 'Data Display',
              collapsed: true,
              items: [
                { text: 'Accordion', link: '/docs/components/data-display/accordion' },
                { text: 'Avatar', link: '/docs/components/data-display/avatar' },
                { text: 'Card', link: '/docs/components/data-display/card' },
                { text: 'Icon', link: '/docs/components/data-display/icon' },
                { text: 'List', link: '/docs/components/data-display/list' },
                { text: 'DataTable', link: '/docs/components/data-display/datatable' },
                { text: 'Schedule', link: '/docs/components/data-display/schedule' },
                {
                  text: 'Tooltip',
                  link: '/docs/components/data-display/tooltip',
                },
              ],
            },
            {
              text: 'Feedback',
              collapsed: true,
              items: [
                { text: 'Alert', link: '/docs/components/feedback/alert' },
                { text: 'Skeleton', link: '/docs/components/feedback/skeleton' },
                { text: 'Spinner', link: '/docs/components/feedback/spinner' },
                { text: 'Toast', link: '/docs/components/feedback/toast' },
              ],
            },
            {
              text: 'Inputs',
              collapsed: true,
              items: [
                { text: 'Button', link: '/docs/components/inputs/button' },
                {
                  text: 'Button menu',
                  link: '/docs/components/inputs/button-menu',
                },
                { text: 'Checkbox', link: '/docs/components/inputs/checkbox' },
                { text: 'Date Picker', link: '/docs/components/inputs/date-picker' },
                { text: 'Link', link: '/docs/components/inputs/link' },
                {
                  text: 'Multi Select',
                  link: '/docs/components/inputs/multi-select',
                },
                { text: 'Navigation Button', link: '/docs/components/inputs/nav' },
                { text: 'Input', link: '/docs/components/inputs/input' },
                { text: 'Radio Button', link: '/docs/components/inputs/radio' },
                {
                  text: 'Search Field',
                  link: '/docs/components/inputs/search',
                },
                {
                  text: 'Select',
                  link: '/docs/components/inputs/select',
                },
                {
                  text: 'Select Menu',
                  link: '/docs/components/inputs/select-menu',
                },
                { text: 'Toggle Switch', link: '/docs/components/inputs/toggle' },
              ],
            },
            {
              text: 'Labels',
              collapsed: true,
              items: [
                { text: 'Badge', link: '/docs/components/labels/badge' },
                { text: 'Status Label', link: '/docs/components/labels/status' },
                { text: 'Tag', link: '/docs/components/labels/tag' },
              ],
            },
            {
              text: 'Navigation',
              collapsed: true,
              items: [
                { text: 'Breadcrumbs', link: '/docs/components/navigation/breadcrumbs' },
                { text: 'Sidebar', link: '/docs/components/navigation/sidebar' },
                { text: 'Stepper', link: '/docs/components/navigation/stepper' },
                { text: 'Tabs', link: '/docs/components/navigation/tabs' },
              ],
            },
            {
              text: 'Shared',
              collapsed: true,
              items: [
                { text: 'Dropdown List', link: '/docs/components/shared/dropdown-list' },
                { text: 'Dropdown Menu', link: '/docs/components/shared/dropdown-menu' },
                { text: 'Floater', link: '/docs/components/shared/floater' },
              ],
            },
            {
              text: 'Utils',
              collapsed: true,
              items: [
                { text: 'Divider', link: '/docs/components/utils/divider' },
                { text: 'Modal', link: '/docs/components/utils/modal' },
              ],
            },
            {
              text: 'Volt',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/docs/components/volt/' },
                { text: 'Utils', link: '/docs/components/volt/utils' },
              ],
            },
          ],
        },
        {
          text: 'Composables',
          collapsed: true,
          items: [
            { text: 'useFetchSvg', link: '/docs/composables/useFetchSvg' },
          ],
        },
        {
          text: 'Contribute',
          collapsed: true,
          items: [
            { text: 'Code of Conduct', link: '/docs/contribute/code-of-conduct' },
            { text: 'Code Standards', link: '/docs/contribute/code-standards' },
            {
              text: 'Components',
              collapsed: true,
              items: [
                { text: 'Generate Docs', link: '/docs/contribute/components/generate-docs' },
                { text: 'Tip Block', link: '/docs/contribute/components/tip-block' },
              ],
            },
            {
              text: 'Styleguide',
              collapsed: true,
              items: [
                { text: 'Component Documentation', link: '/docs/contribute/styleguide/component-documentation' },
                { text: 'Z-Index', link: '/docs/contribute/styleguide/z-index' },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/istafrica-JeaMu/commonui-components-africa' }
    ],

    footer: {
      message: 'Built with ❤️ by IST Africa Team',
      copyright: 'Copyright © 2024 IST Africa'
    }
  },

  vite: {
    resolve: {
      alias: {
        '@lib': resolve(__dirname, '../../lib/src'),
        '@src': resolve(__dirname, '../src'),
        '@': resolve(__dirname, '../../lib/src'),
      },
    },
    define: {
      // This is used to avoid dev warnings
      __DEV__: true,
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  transformPageData(pageData) {
    // Add any page data transformations here
    return pageData;
  },

  sitemap: {
    hostname: 'https://commonui-africa.docs.com'
  }
}) 