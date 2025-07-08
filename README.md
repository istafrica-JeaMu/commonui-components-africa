# CommonUI Components Africa

Vue.js component library built on PrimeVue and Tailwind CSS - Africa Edition

## Installation

```bash
npm install @ist/commonui-components-africa
```

## Usage

```typescript
import { RuneButton } from '@ist/commonui-components-africa'
import '@ist/commonui-components-africa/style.css'
```

### Example

```vue
<template>
  <div>
    <RuneButton variant="primary" size="md" wcag-label="Primary action button">
      Click me
    </RuneButton>
  </div>
</template>

<script setup>
import { RuneButton } from '@ist/commonui-components-africa'
</script>
```

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

# Run tests
pnpm run test

# Start development server
pnpm run dev
```

## Components

- `RuneButton` - Flexible button component with multiple variants
- `RuneNavButton` - Navigation-specific button component
- More components coming soon...

## License

MIT 