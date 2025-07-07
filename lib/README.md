# CommonUI Components Africa

Vue.js component library built on PrimeVue and Tailwind CSS - Africa Edition

[![npm version](https://badge.fury.io/js/@ist%2Fcommonui-components-africa.svg)](https://badge.fury.io/js/@ist%2Fcommonui-components-africa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- 🎨 **Built on PrimeVue 4.3.3** - Leveraging the powerful unstyled PrimeVue components
- 🎯 **Tailwind CSS 4.1.4** - Modern utility-first CSS framework  
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **WCAG Compliant** - Built with accessibility in mind
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎭 **Vue 3 Composition API** - Modern Vue.js patterns
- 📦 **Tree Shakeable** - Import only what you need

## 📦 Installation

```bash
npm install @ist/commonui-components-africa
```

```bash
yarn add @ist/commonui-components-africa
```

```bash
pnpm add @ist/commonui-components-africa
```

## 🛠️ Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install vue@^3.5.13 primevue@^4.3.3 tailwindcss-primeui@^0.6.1 @headlessui/vue@^1.7.23 @heroicons/vue@^2.1.5
```

## 🚀 Quick Start

### 1. Import the library in your main.ts/js file:

```typescript
import { createApp } from 'vue'
import CommonUIAfrica from '@ist/commonui-components-africa'
import '@ist/commonui-components-africa/style.css'

const app = createApp(App)
app.use(CommonUIAfrica)
app.mount('#app')
```

### 2. Use components in your templates:

```vue
<template>
  <div>
    <RuneButton 
      text="Click me!" 
      variant="primary" 
      wcag-label="Primary action button"
    />
    
    <RuneIcon name="arrow-right" size="md" />
    
    <RuneSpinner size="lg" />
  </div>
</template>
```

### 3. Or import individual components:

```vue
<script setup lang="ts">
import { RuneButton, RuneIcon } from '@ist/commonui-components-africa'
</script>

<template>
  <RuneButton 
    text="Individual Import" 
    variant="secondary" 
    wcag-label="Secondary button"
  />
</template>
```

## 📚 Available Components

### Inputs
- **RuneButton** - Versatile button component with multiple variants and states

### Data Display  
- **RuneIcon** - SVG icon component with extensive icon library

### Feedback
- **RuneSpinner** - Loading spinner with multiple sizes and variants

### Volt Wrappers (PrimeVue)
- **VoltButton** - Styled PrimeVue Button wrapper
- **VoltInputText** - Styled PrimeVue InputText wrapper  
- **VoltTextarea** - Styled PrimeVue Textarea wrapper
- **VoltMessage** - Styled PrimeVue Message wrapper

## 🎨 Styling

This library uses Tailwind CSS. Make sure your project has Tailwind CSS configured.

### Tailwind Config Example

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@ist/commonui-components-africa/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#6c757d',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        accent: '#FCD34D'
      }
    }
  },
  plugins: []
}
```

## 📖 Documentation

For detailed documentation, examples, and API references, visit:
[https://github.com/istafrica-JeaMu/commonui-components-africa](https://github.com/istafrica-JeaMu/commonui-components-africa)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/istafrica-JeaMu/commonui-components-africa/blob/main/CONTRIBUTING.md) for details.

## 📄 License

MIT © [IST Africa Team](https://github.com/istafrica-JeaMu)

## 🔗 Links

- [GitHub Repository](https://github.com/istafrica-JeaMu/commonui-components-africa)
- [Documentation](https://github.com/istafrica-JeaMu/commonui-components-africa#readme)
- [Issues](https://github.com/istafrica-JeaMu/commonui-components-africa/issues)
- [Changelog](https://github.com/istafrica-JeaMu/commonui-components-africa/releases) 