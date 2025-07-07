<script setup lang="ts">
import { computed } from 'vue';

// Define color palette
const colors = [
  { name: 'Primary', value: '#667eea', variable: 'primary' },
  { name: 'Secondary', value: '#6c757d', variable: 'secondary' },
  { name: 'Success', value: '#28a745', variable: 'success' },
  { name: 'Warning', value: '#ffc107', variable: 'warning' },
  { name: 'Danger', value: '#dc3545', variable: 'danger' },
  { name: 'Light', value: '#f8f9fa', variable: 'light' },
  { name: 'Dark', value: '#212529', variable: 'dark' },
  { name: 'Border', value: '#e9ecef', variable: 'border' },
  { name: 'Text', value: '#495057', variable: 'text' },
  { name: 'Muted', value: '#6c757d', variable: 'muted' },
  { name: 'Accent', value: '#FCD34D', variable: 'accent' },
];

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    <div
      v-for="color in colors"
      :key="color.variable"
      class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
      @click="copyToClipboard(color.value)"
    >
      <div
        class="w-10 h-10 rounded-md border shadow-sm"
        :style="{ backgroundColor: color.value }"
      />
      <div class="flex-1">
        <div class="font-medium text-sm">{{ color.name }}</div>
        <div class="text-xs text-gray-500 font-mono">{{ color.value }}</div>
        <div class="text-xs text-gray-400">{{ color.variable }}</div>
      </div>
    </div>
  </div>
  <p class="text-xs text-gray-500 mt-4">
    Click on any color to copy its hex value to clipboard.
  </p>
</template> 