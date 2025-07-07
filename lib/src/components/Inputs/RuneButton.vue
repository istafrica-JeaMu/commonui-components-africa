<script setup lang="ts">
import { computed } from 'vue';
import RuneIcon from '../DataDisplay/RuneIcon.vue';
import RuneSpinner from '../Feedback/RuneSpinner.vue';
import { ButtonIconType } from '../types';
import VoltButton from '../../volt/VoltButton.vue';

type ButtonProps = {
  /**
   * @description Disables the button and sets attribute _aria-disabled_ to true.
   */
  disabled?: boolean;

  /**
   * @description Changes hover background oapcity to 40%. Only for Secondary and Tertiary.
   */
  faded?: boolean;

  /**
   * @description Adds an icon based on the values passed to the subproperties.
   * @example  {left: 'arrow-right-long'}
   */
  icon?: ButtonIconType;

  /**
   * @description Sets aria-busy to true. Adds a spinner based on the placement subproperty. Replaces the icon on the chosen placement if it clashes.
   */
  loading?: boolean;

  /**
   * @description The placement of the loading spinner. Will temporarily replace whatever inhabits the chosen placement.
   */
  loadingPlacement?: 'left' | 'center' | 'right';

  /**
   * @description Size of the button.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * @description The button text content.
   */
  text?: string;

  /**
   * @description Sets the button's color.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';

  /**
   * @description Describes the content for screen readers.
   */
  wcagLabel: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  faded: false,
  icon: undefined,
  loading: false,
  loadingPlacement: 'right',
  variant: 'primary',
  size: 'md',
  text: undefined,
});

if (props.wcagLabel === undefined) {
  throw new Error('The wcagLabel prop is required');
}

if (props.icon?.center && props.text) {
  throw new Error('A button can not have a center icon and text at the same time.');
}

if (!props.icon?.center && !props.text) {
  throw new Error('A button needs text or a center icon');
}

if (!isIconOnly() && props.text && props.loadingPlacement === 'center') {
  throw new Error('loadingPlacement is not allowed to have the value "center" if text is present.');
}

if ((props.icon?.left || props.icon?.right) && !props.text) {
  throw new Error("Left and Right icons may not be used if the button doesn't have text");
}

if (props.faded === true) {
  if (props.variant !== 'secondary' && props.variant !== 'tertiary') {
    throw new Error('the faded prop is not allowed to be true on a ' + props.variant + ' button');
  }
}

// Map RuneButton props to PrimeVue Button props
const buttonProps = computed(() => {
  const mappedProps: Record<string, any> = {
    disabled: props.disabled,
    'aria-label': props.wcagLabel,
    'aria-busy': props.loading,
    class: getButtonClasses(props.variant),
  };

  // Size mapping
  if (props.size === 'sm') mappedProps.size = 'small';
  else if (props.size === 'lg') mappedProps.size = 'large';

  // Variant/severity mapping
  if (props.variant === 'danger') mappedProps.severity = 'danger';
  else if (props.variant === 'success') mappedProps.severity = 'success';

  // Styling
  if (props.variant === 'tertiary') mappedProps.outlined = true;
  if (props.variant === 'tertiary') mappedProps.text = true;
  if (props.faded) mappedProps.plain = true;
  if (isIconOnly()) mappedProps.rounded = true;

  return mappedProps;
});

function isIconOnly() {
  return props.icon?.center && !props.icon?.left && !props.icon?.right && !props.text;
}

// This will be used when we need to display the loading state
const textColorClass = computed(() => {
  return props.variant === 'secondary' || props.variant === 'tertiary'
    ? 'text-slate-800 dark:text-slate-200'
    : 'text-white dark:text-slate-800';
});

const spinnerColor = computed(() => {
  return props.variant === 'secondary' || props.variant === 'tertiary' ? 'slate' : 'white';
});

// Need to determine which loading template to show
const showLeftLoaderSlot = computed(() => props.loading && props.loadingPlacement === 'left');
const showCenterLoaderSlot = computed(() => props.loading && props.loadingPlacement === 'center');
const showRightLoaderSlot = computed(() => props.loading && props.loadingPlacement === 'right');

// Determine when to show each icon
const showLeftIcon = computed(() => props.icon?.left && !showLeftLoaderSlot.value);
const showCenterIcon = computed(
  () => props.icon?.center && !showCenterLoaderSlot.value && !props.text,
);
const showRightIcon = computed(() => props.icon?.right && !showRightLoaderSlot.value);

/**
 * Returns complete set of Tailwind classes for a button variant
 * @param variant Button variant
 * @returns String of Tailwind classes
 */
function getButtonClasses(
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success',
): string {
  const classMap = {
    primary: '!bg-action-primary',
    secondary: '!bg-action-secondary',
    tertiary: 'bg-transparent',
    danger: '!bg-surface-danger !text-danger-small',
    success: '!bg-green-600',
  };

  return classMap[variant];
}
</script>

<template>
  <VoltButton v-bind="buttonProps">
    <!-- Use the default slot to create our fully custom button content -->
    <template #default>
      <div class="flex items-center justify-center w-full">
        <!-- Left side -->
        <div v-if="showLeftLoaderSlot || showLeftIcon" class="mr-2">
          <RuneSpinner v-if="showLeftLoaderSlot" :visible="true" :color="spinnerColor" size="xs" />
          <RuneIcon
            v-else-if="showLeftIcon"
            size="xs"
            :icon="icon?.left"
            :color="textColorClass"
            classes="stroke-2"
          />
        </div>

        <!-- Center/main content -->
        <div>
          <RuneSpinner
            v-if="showCenterLoaderSlot"
            :visible="true"
            :color="spinnerColor"
            size="xs"
          />
          <RuneIcon
            v-else-if="showCenterIcon"
            size="xs"
            :icon="icon?.center"
            :color="textColorClass"
            classes="stroke-2"
          />
          <span v-else-if="text" class="font-semibold">{{ text }}</span>
        </div>

        <!-- Right side -->
        <div v-if="showRightLoaderSlot || showRightIcon" class="ml-2">
          <RuneSpinner v-if="showRightLoaderSlot" :visible="true" :color="spinnerColor" size="xs" />
          <RuneIcon
            v-else-if="showRightIcon"
            size="xs"
            :icon="icon?.right"
            :color="textColorClass"
            classes="stroke-2"
          />
        </div>
      </div>
    </template>
  </VoltButton>
</template> 