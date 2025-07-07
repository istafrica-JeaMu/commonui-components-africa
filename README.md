# Common UI Components - Africa Team

A comprehensive Vue.js component library built on PrimeVue and Tailwind CSS, designed for cross-project integration and maximum reusability.

## 🏗️ Project Structure

This is a monorepo containing:

- **`lib/`** - Core component library with TypeScript and Vue 3
- **`documentation/`** - VitePress documentation site with interactive examples
- **`mcp-server/`** - Model Context Protocol server for development tools

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm lib:dev

# Run documentation site
pnpm docs:dev
```

## 📦 Library Usage

```bash
# Install in your project
npm install @ist/commonui-components-africa
```

```vue
<script setup>
import { BaseButton, BaseInput } from '@ist/commonui-components-africa'
import '@ist/commonui-components-africa/style.css'
</script>

<template>
  <BaseButton variant="primary" wcag-label="Click me">
    Click me
  </BaseButton>
</template>
```

## 🧪 Development

```bash
# Run tests
pnpm lib:test

# Run tests in watch mode
pnpm lib:test:watch

# Run tests with coverage
pnpm lib:test:coverage

# Build library
pnpm lib:build

# Lint code
pnpm lib:lint
```

## 📚 Documentation

- **[Component Documentation](./documentation/)** - Complete API reference
- **[Development Guide](./documentation/docs/contribute/)** - How to contribute
- **[Design System](./documentation/docs/theme/)** - Design tokens and guidelines

## 🎨 Technology Stack

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **PrimeVue 4.3.3** as base component library
- **Tailwind CSS 4.1.4** for styling
- **Vite** for build tooling
- **Vitest** for testing
- **VitePress** for documentation

## 🏢 Team

Built by the Africa team for cross-project component standardization.

## 📄 License

Internal use only - IST Africa Team 