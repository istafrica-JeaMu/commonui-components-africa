# Button

## Purpose

`RuneButton` is a simple button that can be used in any situation. It is the most common input component. Buttons serve as clickable elements designed to initiate actions, effectively communicating calls to action to users and enabling interaction with pages in various ways. The labels on buttons articulate the actions they will trigger upon user interaction.

---

## Interactive Demo

<ButtonDemo />

## Guidelines

### Best Practices

- Buttons should be utilised to communicate actionable steps for users and facilitate interaction with the page.
- Each page should feature a solitary primary button, with any additional calls to action represented as secondary buttons of lesser emphasis.
- Always provide a meaningful `wcag-label` prop for accessibility
- Use descriptive text that clearly indicates the action

### Avoid

- Do not use buttons as navigational elements. Instead, utilise links when the desired action is to redirect the user to a new page.
- Don't use more than one primary button per section
- Avoid generic labels like "Click here" or "Submit"
- Don't disable buttons without providing feedback why

## API

The RuneButton component accepts the following props:

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `text` | `string` | - | No | The button text content |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'success'` | `'primary'` | No | Button color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Button size |
| `disabled` | `boolean` | `false` | No | Disable the button |
| `loading` | `boolean` | `false` | No | Show loading state |
| `loadingPlacement` | `'left' \| 'right'` | `'right'` | No | Loading spinner position |
| `icon` | `ButtonIconType` | - | No | Icon configuration |
| `faded` | `boolean` | `false` | No | Faded appearance (secondary/tertiary only) |
| `wcagLabel` | `string` | - | **Yes** | Accessibility label |

## Basic Usage

```vue
<template>
  <div class="space-y-4">
    <RuneButton
      text="Click me"
      wcag-label="Primary action button"
    />
    
    <RuneButton
      text="Secondary Action"
      variant="secondary"
      wcag-label="Secondary action button"
    />
  </div>
</template>

<script setup>
import { RuneButton } from '@ist/commonui-components-africa'
</script>
```

## Examples

### Variants

```vue
<template>
  <div class="flex flex-wrap gap-4">
    <RuneButton variant="primary" text="Primary" wcag-label="Primary button" />
    <RuneButton variant="secondary" text="Secondary" wcag-label="Secondary button" />
    <RuneButton variant="tertiary" text="Tertiary" wcag-label="Tertiary button" />
    <RuneButton variant="danger" text="Danger" wcag-label="Danger button" />
    <RuneButton variant="success" text="Success" wcag-label="Success button" />
  </div>
</template>
```

### Sizes

```vue
<template>
  <div class="flex flex-wrap items-center gap-4">
    <RuneButton size="sm" text="Small" wcag-label="Small button" />
    <RuneButton size="md" text="Medium" wcag-label="Medium button" />
    <RuneButton size="lg" text="Large" wcag-label="Large button" />
  </div>
</template>
```

### With Icons

```vue
<template>
  <div class="flex flex-wrap gap-4">
    <RuneButton 
      text="Left Icon" 
      :icon="{ left: 'arrow-left' }" 
      wcag-label="Button with left icon"
    />
    <RuneButton 
      text="Right Icon" 
      :icon="{ right: 'arrow-right' }" 
      wcag-label="Button with right icon"
    />
    <RuneButton 
      :icon="{ center: 'plus' }" 
      wcag-label="Icon only button"
    />
  </div>
</template>
```

### Loading States

```vue
<template>
  <div class="flex flex-wrap gap-4">
    <RuneButton 
      text="Loading Right" 
      :loading="true"
      loading-placement="right"
      wcag-label="Button with loading state"
    />
    <RuneButton 
      text="Loading Left" 
      :loading="true"
      loading-placement="left"
      wcag-label="Button with loading state"
    />
  </div>
</template>
```

### Disabled State

```vue
<template>
  <div class="flex flex-wrap gap-4">
    <RuneButton 
      text="Disabled Button" 
      :disabled="true"
      wcag-label="Disabled button"
    />
    <RuneButton 
      variant="secondary"
      text="Disabled Secondary" 
      :disabled="true"
      wcag-label="Disabled secondary button"
    />
  </div>
</template>
```

### Faded Effect

Available for Secondary and Tertiary variants only:

```vue
<template>
  <div class="flex flex-wrap gap-4">
    <RuneButton 
      variant="secondary"
      text="Faded Secondary" 
      :faded="true"
      wcag-label="Faded secondary button"
    />
    <RuneButton 
      variant="tertiary"
      text="Faded Tertiary" 
      :faded="true"
      wcag-label="Faded tertiary button"
    />
  </div>
</template>
```

## Accessibility

- Always provide a meaningful `wcag-label` prop
- The component will set appropriate ARIA attributes
- Disabled state is properly communicated to screen readers
- Loading state includes `aria-busy` attribute

## Events

The component emits standard button events:

- `@click` - Triggered when button is clicked (not disabled or loading)
- All standard HTML button events are supported

## TypeScript

```typescript
import type { ButtonIconType } from '@ist/commonui-components-africa'

// Icon configuration
const buttonIcon: ButtonIconType = {
  left: 'check',
  // right: 'arrow-right',
  // center: 'plus'
}
``` 