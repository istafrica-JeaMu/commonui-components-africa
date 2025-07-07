<script setup lang="ts">
import { computed } from 'vue';

type TipBlockProps = {
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
};

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

function getIcon() {
  switch (props.type) {
    case 'guidelines':
      return '✓';
    case 'avoidances':
      return '⚠';
    case 'warning':
      return '⚠';
    case 'info':
      return 'ℹ';
  }
}
</script>

<template>
  <div :class="borderColor" class="border relative rounded-md shadow-md bg-white !mt-8">
    <div>
      <span
        class="font-semibold absolute top-[-20px] left-[-20px] gap-5 text-white w-fit pr-4 bg-slate-800 shadow-lg rounded-md p-2 flex-row items-center flex"
      >
        <div class="w-fit gap-2 flex flex-row items-start">
          <span :class="iconColor" class="text-lg">{{ getIcon() }}</span>
          <span class="!text-base">{{ title }}</span>
        </div>

        <span
          v-if="info"
          class="flex opacity-80 items-baseline pt-1 text-xs whitespace-nowrap truncate"
          >{{ info }}</span
        >
      </span>
    </div>

    <div class="p-4 text-sm">
      <slot />
    </div>
  </div>
  <br />
</template> 