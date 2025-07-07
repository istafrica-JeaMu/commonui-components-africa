<template>
  <InputText
    unstyled
    :pt="theme"
    :pt-options="{
      mergeProps: ptViewMerge,
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText, { type InputTextPassThroughOptions, type InputTextProps } from 'primevue/inputtext';
import { ptViewMerge } from './utils';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends /* @vue-ignore */ InputTextProps {}
defineProps<Props>();

const theme = ref<InputTextPassThroughOptions>({
  root: `w-full px-3 py-2 text-sm border border-border rounded-md
         bg-background text-foreground placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50
         invalid:border-destructive invalid:ring-destructive
         hover:border-border-hover transition-colors duration-200`,
});
</script> 