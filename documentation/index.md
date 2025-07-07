---
layout: home

hero:
  name: "CommonUI Components"
  text: "Africa Edition"
  tagline: "Vue.js component library built on PrimeVue and Tailwind CSS"
  image:
    src: /icon.png
    alt: CommonUI Components Africa
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started/components
    - theme: alt
      text: View Components
      link: /docs/components/

features:
  - icon: 🎯
    title: Built on Standards
    details: Leveraging PrimeVue 4.3.3 foundation with Tailwind CSS 4.1.4 for consistent, accessible components
  - icon: ♿
    title: Accessibility First
    details: WCAG 2.1 AA compliant with required accessibility labels and proper ARIA support
  - icon: 🔧
    title: Developer Experience
    details: Full TypeScript support, comprehensive documentation, and interactive examples
  - icon: 🎨
    title: Design System
    details: Consistent variants, sizes, and colors across all components with dark mode support
  - icon: ⚡
    title: Performance
    details: Tree-shakable imports, optimized bundle size, and Vue 3 Composition API
  - icon: 🔄
    title: Reusable
    details: Designed for consumption by multiple Vue.js projects with minimal configuration
---

## Quick Start

Get up and running with CommonUI Components Africa in minutes:

```bash
# Install the package
npm install @ist/commonui-components-africa

# Import and use components
```

```vue
<script setup>
import { RuneButton, RuneInput } from '@ist/commonui-components-africa'
</script>

<template>
  <div class="space-y-4">
    <RuneInput
      v-model="name"
      label="Your name"
      wcag-label="Enter your full name"
    />
    <RuneButton
      text="Get Started"
      variant="primary"
      wcag-label="Submit form"
      @click="handleSubmit"
    />
  </div>
</template>
```

## Component Categories

:::info 📊 Data Display
**[Accordion](/docs/components/data-display/accordion)**, **[Avatar](/docs/components/data-display/avatar)**, **[Card](/docs/components/data-display/card)**, **[Icon](/docs/components/data-display/icon)**, **[DataTable](/docs/components/data-display/datatable)**, and more...
:::

:::info 📝 Form Inputs  
**[Button](/docs/components/inputs/button)**, **[Input](/docs/components/inputs/input)**, **[Select](/docs/components/inputs/select)**, **[Checkbox](/docs/components/inputs/checkbox)**, **[Toggle Switch](/docs/components/inputs/toggle)**, and more...
:::

:::info 💬 Feedback
**[Alert](/docs/components/feedback/alert)**, **[Skeleton](/docs/components/feedback/skeleton)**, **[Spinner](/docs/components/feedback/spinner)**, **[Toast](/docs/components/feedback/toast)**
:::

:::info 🏷️ Labels & Navigation
**[Badge](/docs/components/labels/badge)**, **[Breadcrumbs](/docs/components/navigation/breadcrumbs)**, **[Tabs](/docs/components/navigation/tabs)**, **[Modal](/docs/components/utils/modal)**, and more...
:::

## Why Choose CommonUI Africa?

- **🎯 Consistent**: All components follow the same design system and patterns
- **♿ Accessible**: Built with WCAG 2.1 AA compliance from the ground up  
- **🔧 TypeScript**: Full type safety and excellent IntelliSense support
- **📚 Well Documented**: Interactive examples and comprehensive API documentation
- **⚡ Modern**: Vue 3, Composition API, and latest web standards
- **🎨 Customizable**: Tailwind CSS utility classes and design tokens

# Common UI Components - Africa Team

Welcome to the Africa team's implementation of the Common UI Components library. This comprehensive Vue.js component library is built on PrimeVue and Tailwind CSS, designed for cross-project integration and maximum reusability.

## 🎯 Overview

Our component library provides a robust set of UI components that maintain consistency across all IST Africa projects while ensuring accessibility, performance, and developer experience.

## 🚀 Quick Start

### Installation

```bash
npm install @ist/commonui-components-africa
```

### Basic Usage

```vue
<script setup>
import { BaseButton, BaseInput } from '@ist/commonui-components-africa'
import '@ist/commonui-components-africa/style.css'
</script>

<template>
  <div>
    <BaseInput 
      v-model="inputValue" 
      label="Enter your name"
      wcag-label="Name input field"
    />
    <BaseButton 
      variant="primary" 
      wcag-label="Submit form"
      @click="handleSubmit"
    >
      Submit
    </BaseButton>
  </div>
</template>
```

## 📚 Component Categories

### 🖥️ Data Display
- **BaseAccordion** - Collapsible content sections
- **BaseAvatar** - User profile pictures and initials
- **BaseCard** - Content containers with consistent styling
- **BaseDataTable** - Feature-rich data tables
- **BaseIcon** - Consistent iconography system
- **BaseList** - Structured content lists
- **BaseTooltip** - Contextual information overlays

### 📝 Inputs
- **BaseButton** - Primary action buttons with variants
- **BaseInput** - Text input fields with validation
- **BaseSelect** - Dropdown selection controls
- **BaseCheckbox** - Binary choice controls
- **BaseToggleSwitch** - On/off toggle controls
- **BaseMultiSelect** - Multiple selection controls

### 💬 Feedback
- **BaseAlert** - Important message notifications
- **BaseSkeleton** - Loading state placeholders
- **BaseSpinner** - Loading indicators
- **BaseToast** - Temporary notification messages

### 🏷️ Labels
- **BaseBadge** - Status and count indicators
- **BaseTag** - Categorization labels
- **BaseStatusLabel** - Status indicators

### 🧭 Navigation
- **BaseBreadcrumbs** - Navigation trail
- **BaseSidebar** - Side navigation panels
- **BaseTabs** - Tabbed content organization

### 🔧 Utilities
- **BaseDivider** - Content separation
- **BaseModal** - Overlay dialogs

## 🎨 Design System

Our components follow a comprehensive design system with:

- **Consistent Color Palette** - Primary, secondary, and semantic colors
- **Typography Scale** - Harmonious text sizing and spacing
- **Spacing System** - Consistent margins and padding
- **Accessibility** - WCAG 2.1 AA compliance
- **Dark Mode** - Full dark theme support
- **Responsive Design** - Mobile-first approach

## 🛠️ Development

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm lib:dev

# Run documentation site
pnpm docs:dev

# Run tests
pnpm lib:test:watch
```

### Architecture

- **Vue 3** with Composition API and TypeScript
- **PrimeVue 4.3.3** as the foundation with unstyled mode
- **Tailwind CSS 4.1.4** for utility-first styling
- **Vite** for fast development and building
- **Vitest** for comprehensive testing

## 📖 Documentation

- **[Component API](./docs/components/)** - Detailed component documentation
- **[Design Tokens](./docs/theme/)** - Colors, spacing, and typography
- **[Development Guide](./docs/contribute/)** - How to contribute
- **[Migration Guide](./docs/migration/)** - Upgrading from previous versions

## 🏢 Team

Built with ❤️ by the IST Africa team for consistent, accessible, and maintainable UI components across all our projects.

---

*Get started by exploring our component documentation or diving into the quick start guide.* 