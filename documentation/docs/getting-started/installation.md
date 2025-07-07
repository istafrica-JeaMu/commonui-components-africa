# Installation

Get started with Common UI Components Africa in your Vue.js project.

## Requirements

- **Node.js**: 18.0 or higher
- **Vue.js**: 3.3.0 or higher
- **TypeScript**: 5.0 or higher (recommended)

## Package Installation

### Using npm

```bash
npm install @ist/commonui-components-africa
```

### Using yarn

```bash
yarn add @ist/commonui-components-africa
```

### Using pnpm

```bash
pnpm add @ist/commonui-components-africa
```

## Peer Dependencies

The following peer dependencies are required:

```bash
npm install vue@^3.5.13 primevue@^4.3.3 tailwindcss-primeui@^0.6.1 @heroicons/vue@^2.1.5 @headlessui/vue@^1.7.23
```

## Setup in Your Project

### 1. Import Styles

Add the component styles to your main CSS file or import them in your main.js/main.ts:

```css
/* main.css */
@import '@ist/commonui-components-africa/style.css';
```

Or in your JavaScript entry file:

```javascript
// main.js
import '@ist/commonui-components-africa/style.css'
```

### 2. Register Components Globally (Optional)

You can register all components globally:

```javascript
// main.js
import { createApp } from 'vue'
import CommonUIComponents from '@ist/commonui-components-africa'
import App from './App.vue'

const app = createApp(App)
app.use(CommonUIComponents)
app.mount('#app')
```

### 3. Import Individual Components

Alternatively, import only the components you need:

```vue
<script setup>
import { BaseButton, BaseInput, BaseCard } from '@ist/commonui-components-africa'
</script>

<template>
  <BaseCard>
    <BaseInput 
      v-model="name" 
      label="Your Name"
      wcag-label="Name input field"
    />
    <BaseButton 
      variant="primary"
      wcag-label="Submit form"
      @click="submit"
    >
      Submit
    </BaseButton>
  </BaseCard>
</template>
```

## Tailwind CSS Configuration

If you're using Tailwind CSS in your project, you may need to configure it to work with our components:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@ist/commonui-components-africa/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    }
  },
  plugins: [
    require('tailwindcss-primeui')
  ]
}
```

## TypeScript Support

The library includes full TypeScript support. If you're using TypeScript, you can import types:

```typescript
import type { ButtonProps, InputProps } from '@ist/commonui-components-africa'
```

## Next Steps

- [Quick Start Guide](./quick-start.md) - Learn basic usage patterns
- [Configuration](./configuration.md) - Customize the library settings
- [Components](../components/) - Explore all available components

## Troubleshooting

### Common Issues

1. **Styles not loading**: Make sure you've imported the CSS file
2. **Components not found**: Verify the import path and component names
3. **TypeScript errors**: Ensure you have the correct Vue and TypeScript versions

### Getting Help

If you encounter issues:

1. Check our [FAQ](../contribute/faq.md)
2. Review the [component documentation](../components/)
3. Contact the Africa team for support 