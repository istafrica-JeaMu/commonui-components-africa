# Spinner

A loading spinner component for indicating loading states and async operations.

## Features

- **Size Options**: xs, sm, md, lg, xl
- **Color Options**: Slate, White
- **Visibility Control**: Show/hide with animation
- **Lightweight**: Pure CSS animations

## Basic Usage

```vue
<template>
  <div class="space-y-4">
    <!-- Basic spinner -->
    <RuneSpinner 
      :visible="true" 
      color="slate" 
      size="md" 
    />
    
    <!-- Loading state -->
    <RuneSpinner 
      :visible="isLoading" 
      color="white" 
      size="sm" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isLoading = ref(true)
</script>
```

## Sizes

```vue
<template>
  <div class="flex items-center space-x-4">
    <RuneSpinner :visible="true" size="xs" color="slate" />
    <RuneSpinner :visible="true" size="sm" color="slate" />
    <RuneSpinner :visible="true" size="md" color="slate" />
    <RuneSpinner :visible="true" size="lg" color="slate" />
    <RuneSpinner :visible="true" size="xl" color="slate" />
  </div>
</template>
```

## Colors

```vue
<template>
  <div class="space-y-4">
    <!-- Slate (default) -->
    <div class="bg-white p-4 rounded">
      <RuneSpinner :visible="true" color="slate" size="md" />
    </div>
    
    <!-- White -->
    <div class="bg-gray-800 p-4 rounded">
      <RuneSpinner :visible="true" color="white" size="md" />
    </div>
  </div>
</template>
```

## Visibility Control

```vue
<template>
  <div class="space-y-4">
    <button 
      @click="toggleSpinner" 
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {{ isVisible ? 'Hide' : 'Show' }} Spinner
    </button>
    
    <RuneSpinner 
      :visible="isVisible" 
      color="slate" 
      size="md" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isVisible = ref(true)

const toggleSpinner = () => {
  isVisible.value = !isVisible.value
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | Whether the spinner is visible |
| `color` | `'slate' \| 'white'` | `'slate'` | Color of the spinner |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Required | Size of the spinner |

## Usage Examples

### Loading Button
```vue
<template>
  <button 
    @click="handleSubmit"
    :disabled="isLoading"
    class="relative px-6 py-3 bg-blue-500 text-white rounded disabled:opacity-50"
  >
    <span :class="{ 'opacity-0': isLoading }">
      Submit
    </span>
    <div 
      v-if="isLoading" 
      class="absolute inset-0 flex items-center justify-center"
    >
      <RuneSpinner :visible="true" color="white" size="sm" />
    </div>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
  } finally {
    isLoading.value = false
  }
}
</script>
```

### Loading Overlay
```vue
<template>
  <div class="relative">
    <!-- Content -->
    <div class="p-8 bg-gray-100 rounded">
      <h2 class="text-xl font-bold mb-4">Content Area</h2>
      <p>This content is being loaded...</p>
    </div>
    
    <!-- Loading overlay -->
    <div 
      v-if="isLoading"
      class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded"
    >
      <RuneSpinner :visible="true" color="slate" size="lg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isLoading = ref(true)
</script>
```

### Inline Loading
```vue
<template>
  <div class="flex items-center space-x-3">
    <RuneSpinner :visible="isLoading" color="slate" size="sm" />
    <span>{{ isLoading ? 'Loading data...' : 'Data loaded!' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isLoading = ref(true)
</script>
```

### Card Loading State
```vue
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div v-if="!isLoading">
      <h3 class="text-lg font-semibold mb-2">User Profile</h3>
      <p class="text-gray-600">User information content...</p>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center py-8">
      <RuneSpinner :visible="true" color="slate" size="md" />
      <p class="mt-4 text-gray-500">Loading profile...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RuneSpinner } from '@ist/commonui-components-africa'

const isLoading = ref(true)
</script>
```

## Best Practices

### When to Use
- During API calls or data fetching
- Form submissions
- File uploads
- Page transitions
- Any asynchronous operation

### Size Guidelines
- **xs**: Use in small buttons or tight spaces
- **sm**: Use in normal buttons or inline with text
- **md**: Use for general loading states
- **lg**: Use for prominent loading areas
- **xl**: Use for full-page loading overlays

### Color Guidelines
- **Slate**: Use on light backgrounds
- **White**: Use on dark backgrounds or colored surfaces

### Accessibility
- Ensure adequate contrast with backgrounds
- Consider adding aria-labels for screen readers
- Provide alternative text or status messages

## Animation Details

The spinner uses CSS animations with:
- **Rotation**: 360-degree continuous rotation
- **Duration**: Smooth rotation timing
- **Easing**: Consistent animation curve

The component automatically handles visibility transitions for smooth user experience. 