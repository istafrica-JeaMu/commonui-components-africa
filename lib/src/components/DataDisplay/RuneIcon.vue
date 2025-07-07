<script setup lang="ts">
import {
  computed,
  FunctionalComponent,
  HTMLAttributes,
  isVNode,
  VNode,
  VNodeProps,
  VNodeRef,
  ref,
} from 'vue';
import type { IconsProperty, Sizes } from '../types';

type IconProps = {
  /**
   * @description Color of the icon. e.g "text-amber-600".
   */
  color?: string;

  /**
   * @description Name or VNode of the icon.
   */
  icon?: IconsProperty;

  /**
   * @description Whether or not the icon should be inline.
   */
  inline?: boolean;

  /**
   * @description Svg path of the icon (__used as a fallback for when external resources are not allowed__).
   */
  path?: string;

  /**
   * @description Size of the icon, `xs` is 16px and increments by 4px up to 36px.
   * For Material Symbols, this also controls the optical size.
   */
  size?: Sizes;

  /**
   * @description Additional classes of the icon. e.g "stroke-1 stroke-white" etc..
   */
  classes?: string;

  /**
   * @description Type of the icon.
   * For Material Symbols: 'outline' = outlined, 'solid' = sharp
   */
  type?: 'outline' | 'solid';

  /**
   * @description Variant of the icon.
   * For Material Symbols: 'solid' = filled, 'outline' = unfilled
   */
  variant?: 'outline' | 'solid' | 'mini' | 'micro' | undefined;
};

const props = withDefaults(defineProps<IconProps>(), {
  classes: '',
  color: '',
  icon: undefined,
  path: undefined,
  inline: false,
  size: 'md' as Sizes,
  type: 'outline',
  variant: undefined,
});

// Because we can't text-interpolate to address this issue, we have to warn the developer about the mistake.
if (props.color && !props.color.includes('text-')) {
  console.error(`props.color in RuneIcon is ${props.color}. Did you mean text-${props.color}?`);
}

if (props.path && props.icon) throw new Error('Icons cannot have both icon and path');

const iconDynamic = ref<FunctionalComponent<HTMLAttributes & VNodeProps> | VNode>();
const iconElem = ref<VNodeRef | null>(null);

const iconSize = computed(() => {
  if (typeof props.icon === 'string' && props.icon.startsWith('ms_')) {
    // Material Symbols sizing
    const sizeMap = {
      xs: 20,
      sm: 24,
      md: 28,
      lg: 32,
      xl: 48,
    };
    return sizeMap[props.size] || 24;
  }
  // Default heroicon sizing
  return props.type === 'solid' || props.type === 'outline' ? 24 : props.type === 'mini' ? 20 : 16;
});

const iconClasses = computed(() => {
  const sizesFromSize = {
    xs: 'size-5', // 20px
    sm: 'size-6', // 24px
    md: 'size-7', // 28px
    lg: 'size-8', // 32px
    xl: 'size-12', // 48px
  };
  if (typeof props.icon === 'string' && props.icon.startsWith('ms_')) {
    // Material Symbols sizing classes
    return [props.inline ? 'inline-flex' : '', sizesFromSize[props.size], props.color];
  }
  // Default heroicon sizing
  const sizes = {
    outline: 'size-6',
    solid: 'size-6',
    mini: 'size-5',
    micro: 'size-4',
  };
  return [
    props.inline ? 'inline-flex' : '',
    sizes[props.variant!] || sizesFromSize[props.size],
    props.color,
    props.classes,
  ];
});

const icontype = computed(() => {
  if ((typeof props.icon === 'function' || isVNode(props.icon)) && props.icon !== undefined) {
    iconDynamic.value = props.icon;
    return 'component';
  } else if (typeof props.icon === 'string') {
    if (props.icon.startsWith('ms_')) {
      return 'material-symbols';
    }
    return 'heroicon';
  } else if (props.path) {
    return 'svg';
  } else {
    return undefined;
  }
});

// Simple SVG content for common icons (placeholder for full icon implementation)
const getSimpleSvgContent = (iconName: string) => {
  const simpleIcons: Record<string, string> = {
    'arrow-right': 'M8.25 4.5l7.5 7.5-7.5 7.5',
    'arrow-left': 'm15.75 19.5-7.5-7.5 7.5-7.5',
    'check': 'm4.5 12.75 6 6 9-13.5',
    'x-mark': 'M6 18L18 6M6 6l12 12',
    'plus': 'M12 4.5v15m7.5-7.5h-15',
    'minus': 'M5 12h14',
  };
  return simpleIcons[iconName] || 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';
};

const STYLE_MAP = {
  outline: 'outlined',
  solid: 'sharp',
} as const;
</script>

<template>
  <div v-bind="$attrs">
    <component
      :is="iconDynamic"
      v-if="icontype === 'component'"
      ref="iconElem"
      :class="iconClasses"
    />

    <svg
      v-else-if="icontype === 'svg'"
      :ref="iconElem"
      :class="iconClasses"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="variant ? `0 0 ${iconSize} ${iconSize}` : '0 0 24 24'"
      aria-hidden="true"
      data-slot="icon"
    >
      <path :d="path" :fill="variant ? color : 'currentColor'" />
    </svg>

    <span
      v-else-if="icontype === 'material-symbols'"
      :class="iconClasses"
      :style="{
        fontFamily: 'Material Symbols Outlined',
        fontSize: `${iconSize}px`,
        fontVariationSettings: `'FILL' ${props.variant === 'solid' ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${iconSize}`,
      }"
    >
      {{ typeof icon === 'string' ? icon.substring(3) : '' }}
    </span>

    <svg
      v-else-if="icontype === 'heroicon'"
      :class="iconClasses"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        :d="getSimpleSvgContent(typeof icon === 'string' ? icon : '')"
      />
    </svg>
  </div>
</template> 