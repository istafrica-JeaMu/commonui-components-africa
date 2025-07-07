<script setup lang="ts">
import { computed } from 'vue';

interface TipBlockProps {
  /**
   * @description Optional information to display in the top right corner.
   */
  info?: string;

  /**
   * @description Title of the tip block. Will be displayed in the top left corner.
   */
  title?: string;

  /**
   * @description The type of tip block. Determines color and icon.
   */
  type: 'guidelines' | 'avoidances' | 'warning' | 'info';
}

const props = withDefaults(defineProps<TipBlockProps>(), {
  title: 'Title',
  info: undefined,
});

defineSlots<{
  /**
   * @description Can contain any markdown content. **Keep an empty row between the tags and the content**.
   */
  default?: void;
}>();

const iconColor = computed(() => {
  switch (props.type) {
    case 'guidelines':
      return 'text-green-400';
    case 'avoidances':
      return 'text-red-400';
    case 'warning':
      return 'text-amber-400';
    case 'info':
      return 'text-blue-400';
  }
});

const borderColor = computed(() => {
  switch (props.type) {
    case 'guidelines':
      return 'border-green-400';
    case 'avoidances':
      return 'border-red-400';
    case 'warning':
      return 'border-amber-400';
    case 'info':
      return 'border-blue-400';
  }
});
</script>

<template>
  <div :class="borderColor" class="border relative rounded-md shadow-md bg-white !mt-8">
    <div>
      <span
        class="font-semibold absolute top-[-20px] left-[-20px] gap-5 text-white w-fit pr-4 bg-slate-800 shadow-lg rounded-md p-2 flex-row items-center flex"
      >
        <div class="w-fit gap-2 flex flex-row items-start">
          <div :class="iconColor" class="w-5 h-5 flex items-center justify-center">
            <svg v-if="type === 'guidelines'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <svg v-else-if="type === 'avoidances' || type === 'warning'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <svg v-else-if="type === 'info'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="!text-base">{{ title }}</span>
        </div>

        <span
          v-if="info"
          class="flex opacity-80 items-baseline pt-1 text-xs whitespace-nowrap truncate"
        >
          {{ info }}
        </span>
      </span>
    </div>

    <div class="p-4 text-sm">
      <slot />
    </div>
  </div>
  <br />
</template> 