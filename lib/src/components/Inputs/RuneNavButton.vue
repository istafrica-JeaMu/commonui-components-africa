<!-- Component description -->
<!-- RuneNavButton: A navigation-specific button component for back/next actions -->
<!-- Rationale: Custom implementation for specific navigation scenarios, alternative to breadcrumbs -->

<!-- Props: -->
<!-- - variant: Visual variant (primary, secondary) -->
<!-- - type: Navigation type (back, next) -->
<!-- - disabled: Disabled state -->
<!-- - wcagLabel: Accessibility label (required) -->

<!-- Events: -->
<!-- - click: Emitted when button is clicked -->

<!-- Slots: -->
<!-- - None (self-contained with text and icons) -->

<!-- Usage: -->
<!-- <RuneNavButton variant="primary" type="back" wcag-label="Go back to previous page" /> -->

<script setup lang="ts">
import { computed } from 'vue';
import RuneIcon from '../DataDisplay/RuneIcon.vue';

type NavButtonProps = {
  /**
   * @description Variant of the button.
   */
  variant?: 'primary' | 'secondary';

  /**
   * @description Type of the button.
   */
  type?: 'back' | 'next';

  /**
   * @description Disables the button and sets aria-disabled to true.
   */
  disabled?: boolean;

  /**
   * @description Describes the content for screen readers.
   */
  wcagLabel: string;
};

const props = withDefaults(defineProps<NavButtonProps>(), {
  type: 'back',
  variant: 'primary',
  disabled: false,
});

const emit = defineEmits<{
  /**
   * @description Emitted when the navigation button is clicked
   */
  click: [event: MouseEvent];
}>();

if (props.wcagLabel === undefined) {
  throw new Error('The wcagLabel prop is required');
}

const styleClass = computed(() => {
  return `${props.variant === 'primary' ? 'group-hover:shadow-md' : 'group-hover:drop-shadow-md'}`;
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :aria-label="wcagLabel"
    :aria-disabled="disabled"
    :disabled="disabled"
    :class="disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer group'"
    class="flex h-6 flex-row items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary transition-all duration-200"
    @click="handleClick"
  >
    <span
      v-if="type === 'next'"
      :class="variant === 'primary' ? 'pr-2' : 'pr-0'"
      class="py-1 pl-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"
    >
      Next
    </span>
    
    <span
      :class="[
        'rounded-full',
        'p-1',
        'transition-all',
        'duration-200',
        variant === 'primary' ? 'bg-slate-800 group-hover:bg-slate-950 dark:bg-slate-700 dark:group-hover:bg-slate-600' : 'bg-none',
      ]"
    >
      <RuneIcon
        classes="stroke-2"
        :class="styleClass"
        :color="variant === 'primary' ? 'text-white' : 'text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100'"
        size="xs"
        :icon="type === 'back' ? 'arrow-left' : 'arrow-right'"
      />
    </span>

    <span
      v-if="type === 'back'"
      :class="variant === 'primary' ? 'pl-2' : 'pl-0'"
      class="py-1 pr-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"
    >
      Back
    </span>
  </button>
</template> 