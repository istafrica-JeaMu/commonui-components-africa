# Icon

A flexible icon component that supports Heroicons, Material Symbols, and custom icons.

## Features

- **Multiple Icon Types**: Heroicons, Material Symbols, VNodes, and SVG paths
- **Size Options**: xs, sm, md, lg, xl
- **Color Customization**: Tailwind color classes
- **Variant Support**: Outline, solid, mini, micro
- **Inline Display**: Optional inline rendering

## Basic Usage

```vue
<template>
  <div class="flex items-center space-x-4">
    <!-- Basic icon -->
    <RuneIcon icon="check" />
    
    <!-- Colored icon -->
    <RuneIcon 
      icon="heart" 
      color="text-red-500" 
    />
    
    <!-- Custom size -->
    <RuneIcon 
      icon="star" 
      size="lg" 
      color="text-yellow-500"
    />
  </div>
</template>

<script setup>
import { RuneIcon } from '@ist/commonui-components-africa'
</script>
```

## Icon Types

### Heroicons (Default)
```vue
<template>
  <div class="flex space-x-2">
    <RuneIcon icon="check" />
    <RuneIcon icon="x-mark" />
    <RuneIcon icon="heart" />
    <RuneIcon icon="star" />
  </div>
</template>
```

### Material Symbols
```vue
<template>
  <div class="flex space-x-2">
    <RuneIcon icon="ms_home" />
    <RuneIcon icon="ms_search" />
    <RuneIcon icon="ms_settings" />
  </div>
</template>
```

### SVG Path
```vue
<RuneIcon path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
```

## Sizes

```vue
<template>
  <div class="flex items-center space-x-2">
    <RuneIcon icon="star" size="xs" />
    <RuneIcon icon="star" size="sm" />
    <RuneIcon icon="star" size="md" />
    <RuneIcon icon="star" size="lg" />
    <RuneIcon icon="star" size="xl" />
  </div>
</template>
```

## Colors

```vue
<template>
  <div class="flex space-x-2">
    <RuneIcon icon="heart" color="text-red-500" />
    <RuneIcon icon="heart" color="text-blue-500" />
    <RuneIcon icon="heart" color="text-green-500" />
    <RuneIcon icon="heart" color="text-purple-500" />
  </div>
</template>
```

## Variants

For Heroicons, you can specify variants:

```vue
<template>
  <div class="flex space-x-2">
    <RuneIcon icon="heart" variant="outline" />
    <RuneIcon icon="heart" variant="solid" />
    <RuneIcon icon="heart" variant="mini" />
    <RuneIcon icon="heart" variant="micro" />
  </div>
</template>
```

## Inline Display

```vue
<template>
  <p>
    This is text with an 
    <RuneIcon icon="heart" :inline="true" color="text-red-500" />
    inline icon.
  </p>
</template>
```

## Custom Classes

```vue
<RuneIcon 
  icon="star" 
  classes="stroke-2 drop-shadow-lg" 
  color="text-yellow-500"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconsProperty` | `undefined` | Name or VNode of the icon |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the icon |
| `color` | `string` | `''` | Color class (e.g., "text-red-500") |
| `variant` | `'outline' \| 'solid' \| 'mini' \| 'micro'` | `undefined` | Icon variant |
| `type` | `'outline' \| 'solid'` | `'outline'` | Icon type |
| `inline` | `boolean` | `false` | Whether icon should be inline |
| `path` | `string` | `undefined` | SVG path data |
| `classes` | `string` | `''` | Additional CSS classes |

## Available Icons

The component supports all Heroicons. Here are some common ones:

- `check`, `x-mark`, `plus`, `minus`
- `heart`, `star`, `bookmark`
- `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`
- `home`, `user`, `cog`, `bell`
- `envelope`, `phone`, `map-pin`
- `eye`, `eye-slash`, `lock`, `unlock`

## Usage Examples

### Status Icons
```vue
<template>
  <div class="space-y-2">
    <div class="flex items-center space-x-2">
      <RuneIcon icon="check" color="text-green-500" />
      <span>Success</span>
    </div>
    <div class="flex items-center space-x-2">
      <RuneIcon icon="x-mark" color="text-red-500" />
      <span>Error</span>
    </div>
    <div class="flex items-center space-x-2">
      <RuneIcon icon="exclamation-triangle" color="text-yellow-500" />
      <span>Warning</span>
    </div>
  </div>
</template>
```

### Navigation Icons
```vue
<template>
  <nav class="flex space-x-4">
    <a href="#" class="flex items-center space-x-1">
      <RuneIcon icon="home" size="sm" />
      <span>Home</span>
    </a>
    <a href="#" class="flex items-center space-x-1">
      <RuneIcon icon="user" size="sm" />
      <span>Profile</span>
    </a>
    <a href="#" class="flex items-center space-x-1">
      <RuneIcon icon="cog" size="sm" />
      <span>Settings</span>
    </a>
  </nav>
</template>
``` 