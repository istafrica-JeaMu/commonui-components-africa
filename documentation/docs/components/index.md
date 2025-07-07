# Components

Welcome to the CommonUI Components Africa component library! Our comprehensive collection of Vue.js components is designed to help you build beautiful, accessible, and performant user interfaces.

## 🎯 Component Categories

### 📊 Data Display
Components for displaying and organizing data in various formats.

- **[Accordion](/docs/components/data-display/accordion)** - Collapsible content sections
- **[Avatar](/docs/components/data-display/avatar)** - User profile images and initials
- **[Card](/docs/components/data-display/card)** - Flexible content containers
- **[DataTable](/docs/components/data-display/datatable)** - Advanced data tables with sorting and filtering
- **[Icon](/docs/components/data-display/icon)** - SVG icon system with Heroicons and Material Symbols
- **[List](/docs/components/data-display/list)** - Organized lists of items
- **[Tooltip](/docs/components/data-display/tooltip)** - Contextual information on hover

### 📝 Form Inputs
Interactive form elements for user input and data collection.

- **[Button](/docs/components/inputs/button)** - Primary action buttons with variants and icons
- **[Button Menu](/docs/components/inputs/button-menu)** - Dropdown action buttons
- **[Checkbox](/docs/components/inputs/checkbox)** - Toggle selection inputs
- **[Date Picker](/docs/components/inputs/date-picker)** - Calendar date selection
- **[Input](/docs/components/inputs/input)** - Text input fields with validation
- **[Link](/docs/components/inputs/link)** - Styled navigation links
- **[Multi Select](/docs/components/inputs/multi-select)** - Multiple option selection
- **[Radio Button](/docs/components/inputs/radio)** - Single option selection
- **[Search](/docs/components/inputs/search)** - Search input with suggestions
- **[Select](/docs/components/inputs/select)** - Dropdown selection menus
- **[Select Menu](/docs/components/inputs/select-menu)** - Advanced selection with filtering
- **[Toggle Switch](/docs/components/inputs/toggle)** - On/off toggle controls

### 💬 Feedback
Components for providing user feedback and status information.

- **[Alert](/docs/components/feedback/alert)** - System notifications and messages
- **[Skeleton](/docs/components/feedback/skeleton)** - Loading state placeholders
- **[Spinner](/docs/components/feedback/spinner)** - Loading indicators
- **[Toast](/docs/components/feedback/toast)** - Temporary notification messages

### 🏷️ Labels & Tags
Components for categorizing and labeling content.

- **[Badge](/docs/components/labels/badge)** - Small status indicators
- **[Status Label](/docs/components/labels/status)** - Status indicators with colors
- **[Tag](/docs/components/labels/tag)** - Content categorization tags

### 🧭 Navigation
Components for site navigation and user guidance.

- **[Breadcrumbs](/docs/components/navigation/breadcrumbs)** - Hierarchical navigation
- **[Sidebar](/docs/components/navigation/sidebar)** - Side navigation menus
- **[Stepper](/docs/components/navigation/stepper)** - Multi-step process navigation
- **[Tabs](/docs/components/navigation/tabs)** - Tabbed content organization

### 🛠️ Utilities
Utility components for layout and common interface patterns.

- **[Divider](/docs/components/utils/divider)** - Content section separators
- **[Modal](/docs/components/utils/modal)** - Overlay dialogs and confirmations

## 🎨 Design System

All components follow our consistent design system:

### Variants
- **Primary** - Main actions and emphasis
- **Secondary** - Supporting actions  
- **Tertiary** - Subtle actions
- **Danger** - Destructive actions
- **Success** - Positive confirmations

### Sizes
- **Small (sm)** - Compact interfaces
- **Medium (md)** - Default size
- **Large (lg)** - Prominent elements

### Colors
Our color palette is carefully designed for accessibility and consistency:
- Primary: `#667eea`
- Secondary: `#6c757d`
- Success: `#28a745`
- Warning: `#ffc107`
- Danger: `#dc3545`
- Accent: `#FCD34D`

## 🔧 Usage Guidelines

### Getting Started
1. Import the component you need
2. Pass required props (especially `wcagLabel` for accessibility)
3. Customize with optional props
4. Style with Tailwind classes if needed

### Example Usage
```vue
<template>
  <div class="space-y-4">
    <!-- Basic button -->
    <RuneButton 
      text="Click me" 
      wcag-label="Primary action button"
    />
    
    <!-- Button with icon -->
    <RuneButton 
      text="Save Changes"
      variant="success"
      :icon="{ left: 'check' }"
      wcag-label="Save current changes"
    />
    
    <!-- Loading state -->
    <RuneButton 
      text="Processing..."
      :loading="true"
      wcag-label="Processing your request"
    />
  </div>
</template>

<script setup>
import { RuneButton } from '@ist/commonui-components-africa'
</script>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **WCAG 2.1 AA Compliant** - Meets web accessibility standards
- **Required Labels** - All interactive elements require accessibility labels
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA attributes
- **High Contrast** - Supports high contrast mode
- **Focus Management** - Visible focus indicators

## 🚀 Performance

Our components are optimized for performance:

- **Tree Shaking** - Import only what you need
- **Lazy Loading** - Components load when needed
- **Optimized Bundle** - Minimal runtime overhead
- **Vue 3 Composition API** - Modern reactive patterns

## 📚 Interactive Examples

Each component page includes:
- **Live Playground** - Modify props in real-time
- **Code Generation** - Copy working code snippets
- **Variant Showcase** - See all available options
- **Accessibility Guide** - Proper usage examples

---

<div class="text-center mt-12">
  <p class="text-gray-600">
    Ready to start building? Pick a component above and dive into the documentation!
  </p>
</div> 