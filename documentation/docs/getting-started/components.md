# Getting Started with Components

Learn how to use CommonUI Components Africa in your Vue.js applications. Our component library is built on PrimeVue and styled with Tailwind CSS, providing you with a robust foundation for building modern web applications.

## 🚀 Quick Start

### 1. Installation

First, install the component library in your Vue.js project:

```bash
# Using npm
npm install @ist/commonui-components-africa

# Using yarn
yarn add @ist/commonui-components-africa

# Using pnpm
pnpm add @ist/commonui-components-africa
```

### 2. Setup Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install vue@^3.5.13 primevue@^4.3.3 tailwindcss@^4.1.4
```

### 3. Configure Tailwind CSS

Add our component library to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Add this line to include our components
    "./node_modules/@ist/commonui-components-africa/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#6c757d',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        accent: '#FCD34D',
        light: '#f8f9fa',
        dark: '#212529',
        border: '#e9ecef',
        text: '#495057',
        muted: '#6c757d',
      }
    },
  },
  plugins: [],
}
```

### 4. Configure PrimeVue

Set up PrimeVue in your `main.js` or `main.ts`:

```javascript
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

// Import Tailwind CSS
import './style.css'

const app = createApp(App)

// Configure PrimeVue
app.use(PrimeVue, {
  unstyled: true // Important: We use Tailwind for styling
})

app.mount('#app')
```

### 5. Import and Use Components

Now you can import and use any component:

```vue
<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold">My Application</h1>
    
    <!-- Use components directly -->
    <RuneButton 
      text="Get Started" 
      variant="primary"
      wcag-label="Get started with the application"
      @click="handleClick"
    />
    
    <RuneInput
      v-model="userInput"
      label="Enter your name"
      wcag-label="User name input field"
      placeholder="Type your name here..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneButton, RuneInput } from '@ist/commonui-components-africa'

const userInput = ref('')

function handleClick() {
  console.log('Button clicked!')
}
</script>
```

## 📖 Component Usage Patterns

### Basic Import

Import components individually for tree shaking:

```javascript
import { RuneButton, RuneInput, RuneCard } from '@ist/commonui-components-africa'
```

### Global Registration (Optional)

For frequently used components, you can register them globally:

```javascript
// main.js
import { createApp } from 'vue'
import { RuneButton, RuneInput } from '@ist/commonui-components-africa'

const app = createApp(App)

app.component('RuneButton', RuneButton)
app.component('RuneInput', RuneInput)
```

### Using with TypeScript

All components include full TypeScript definitions:

```vue
<script setup lang="ts">
import { RuneButton } from '@ist/commonui-components-africa'
import type { ButtonIconType } from '@ist/commonui-components-africa'

const buttonIcon: ButtonIconType = {
  left: 'check',
  right: 'arrow-right'
}
</script>
```

## 🎯 Core Principles

### 1. Accessibility First

Every component requires a `wcagLabel` prop for accessibility:

```vue
<RuneButton 
  text="Delete Item"
  variant="danger" 
  wcag-label="Delete the selected item permanently"
/>
```

### 2. Consistent Variants

Most components support standard variants:

```vue
<!-- Different variants -->
<RuneButton variant="primary" text="Primary" wcag-label="Primary action" />
<RuneButton variant="secondary" text="Secondary" wcag-label="Secondary action" />
<RuneButton variant="danger" text="Delete" wcag-label="Delete action" />
```

### 3. Size Consistency

Standard sizing across components:

```vue
<!-- Different sizes -->
<RuneButton size="sm" text="Small" wcag-label="Small button" />
<RuneButton size="md" text="Medium" wcag-label="Medium button" />
<RuneButton size="lg" text="Large" wcag-label="Large button" />
```

## 🔧 Common Patterns

### Form Handling

```vue
<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <RuneInput
      v-model="form.name"
      label="Full Name"
      wcag-label="Enter your full name"
      :error="errors.name"
      required
    />
    
    <RuneSelect
      v-model="form.country"
      label="Country"
      wcag-label="Select your country"
      :options="countries"
      :error="errors.country"
    />
    
    <div class="flex space-x-2">
      <RuneButton 
        type="submit"
        text="Submit"
        variant="primary"
        :loading="isSubmitting"
        wcag-label="Submit the form"
      />
      
      <RuneButton 
        text="Cancel"
        variant="secondary"
        wcag-label="Cancel form submission"
        @click="handleCancel"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { RuneInput, RuneSelect, RuneButton } from '@ist/commonui-components-africa'

const form = ref({
  name: '',
  country: ''
})

const errors = ref({})
const isSubmitting = ref(false)

// Form handling logic...
</script>
```

### Loading States

```vue
<template>
  <div class="space-y-4">
    <!-- Button with loading -->
    <RuneButton 
      text="Save Changes"
      variant="primary"
      :loading="isSaving"
      wcag-label="Save current changes"
    />
    
    <!-- Skeleton loading -->
    <RuneSkeleton 
      v-if="isLoading"
      height="100px"
      class="w-full"
    />
    
    <!-- Spinner -->
    <RuneSpinner 
      v-if="isProcessing"
      size="lg"
      color="slate"
    />
  </div>
</template>
```

### Error Handling

```vue
<template>
  <div class="space-y-4">
    <!-- Alert for errors -->
    <RuneAlert 
      v-if="errorMessage"
      variant="danger"
      :message="errorMessage"
      closable
      @close="errorMessage = null"
    />
    
    <!-- Input with validation -->
    <RuneInput
      v-model="email"
      label="Email"
      type="email"
      wcag-label="Enter your email address"
      :error="emailError"
      @blur="validateEmail"
    />
  </div>
</template>
```

## 🎨 Customization

### Extending with Tailwind

All components accept standard HTML attributes and classes:

```vue
<RuneButton 
  text="Custom Button"
  wcag-label="Custom styled button"
  class="bg-purple-500 hover:bg-purple-600 text-white"
/>
```

### Dark Mode Support

Components automatically support Tailwind's dark mode:

```vue
<RuneCard class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content adapts to dark mode -->
</RuneCard>
```

## 🚀 Next Steps

1. **[Explore Components](/docs/components/)** - Browse our full component library
2. **[View Examples](/docs/components/inputs/button)** - See interactive examples
3. **[Design System](/docs/theme/)** - Learn about our design tokens
4. **[Contributing](/docs/contribute/)** - Help improve the library

---

Need help? Check out our [component documentation](/docs/components/) or [open an issue](https://github.com/ist-africa/commonui-components-africa/issues) on GitHub. 