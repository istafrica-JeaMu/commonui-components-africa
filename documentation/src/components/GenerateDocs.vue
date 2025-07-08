<script setup lang="ts">
import { type Component } from 'vue';

type GenerateDocsProps = {
  /**
   * @description The component to display documentation for.
   */
  component: Component;
};

const props = defineProps<GenerateDocsProps>();

const tableHeadStyle = 'whitespace-nowrap !bg-slate-800 !text-white text-sm font-semibold border-r px-4 py-3';

// RuneButton specific props information
const getComponentInfo = (component: Component) => {
  const componentName = component?.name || 'RuneButton';
  
  if (componentName === 'RuneButton') {
    return {
      name: 'RuneButton',
      props: [
        { 
          name: 'disabled', 
          type: 'boolean', 
          required: false, 
          default: 'false',
          description: 'Whether the button is disabled or not'
        },
        { 
          name: 'faded', 
          type: 'boolean', 
          required: false, 
          default: 'false',
          description: 'Changes hover background opacity for style. Only for secondary and tertiary'
        },
        { 
          name: 'icon', 
          type: 'ButtonIconType', 
          required: false, 
          default: 'undefined',
          description: 'Adds an icon based on the options provided as the value property or the component'
        },
        { 
          name: 'loading', 
          type: 'boolean', 
          required: false, 
          default: 'false',
          description: 'Puts the button in a state based on the placement configuration in the spinner. Should be placed there or inside the button'
        },
        { 
          name: 'loadingPlacement', 
          type: "'left' | 'right'", 
          required: false, 
          default: '"right"',
          description: 'Set placement of the loading spinner and optimally place contents to minimize layout shift'
        },
        { 
          name: 'size', 
          type: "'sm' | 'md' | 'lg'", 
          required: false, 
          default: '"md"',
          description: 'Sets the button\'s size'
        },
        { 
          name: 'text', 
          type: 'string', 
          required: false, 
          default: 'undefined',
          description: 'Sets the button text content'
        },
        { 
          name: 'variant', 
          type: "'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'", 
          required: false, 
          default: '"primary"',
          description: 'Sets the button\'s color variant'
        },
        { 
          name: 'wcagLabel', 
          type: 'string', 
          required: true, 
          default: 'Required',
          description: 'Accessibility label for screen readers'
        },
      ],
      events: [
        { name: 'click', description: 'Emitted when the button is clicked' },
      ],
      slots: []
    };
  }
  
  // Default fallback
  return {
    name: componentName,
    props: [],
    events: [],
    slots: []
  };
};

const componentInfo = getComponentInfo(props.component);
</script>

<template>
  <div class="api-documentation">
    <h3 id="props" class="text-xl font-semibold mb-4">Props</h3>
    
    <div v-if="componentInfo.props?.length" class="overflow-x-auto">
      <table class="min-w-full border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr>
            <th :class="tableHeadStyle">Name</th>
            <th :class="tableHeadStyle">Type</th>
            <th :class="tableHeadStyle">Default</th>
            <th :class="tableHeadStyle">Required</th>
            <th :class="tableHeadStyle + ' border-r-0'">Description</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="(prop, index) in componentInfo.props" :key="prop.name" 
              :class="['border-b border-gray-200', index % 2 === 0 ? 'bg-gray-50' : 'bg-white']">
            <td class="px-4 py-3 font-mono text-sm font-medium text-blue-600 border-r border-gray-200">
              {{ prop.name }}
            </td>
            <td class="px-4 py-3 font-mono text-sm text-gray-700 border-r border-gray-200">
              {{ prop.type }}
            </td>
            <td class="px-4 py-3 font-mono text-sm text-gray-600 border-r border-gray-200">
              {{ prop.default }}
            </td>
            <td class="px-4 py-3 text-sm text-center border-r border-gray-200">
              <span v-if="prop.required" class="text-red-600 font-medium">Yes</span>
              <span v-else class="text-gray-500">No</span>
            </td>
            <td class="px-4 py-3 text-sm text-gray-700">
              {{ prop.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="componentInfo.events?.length" class="mt-8">
      <h3 id="events" class="text-xl font-semibold mb-4">Events</h3>
      <table class="min-w-full border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr>
            <th :class="tableHeadStyle">Name</th>
            <th :class="tableHeadStyle + ' border-r-0'">Description</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="(event, index) in componentInfo.events" :key="event.name"
              :class="['border-b border-gray-200', index % 2 === 0 ? 'bg-gray-50' : 'bg-white']">
            <td class="px-4 py-3 font-mono text-sm font-medium text-blue-600 border-r border-gray-200">
              {{ event.name }}
            </td>
            <td class="px-4 py-3 text-sm text-gray-700">
              {{ event.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.api-documentation {
  margin-top: 1.5rem;
}

.api-documentation table {
  width: 100%;
  border-collapse: collapse;
}

.api-documentation th {
  text-align: left;
}

.api-documentation td {
  vertical-align: top;
}
</style> 