<script setup lang="ts">
import { type Component } from 'vue';

type GenerateDocsProps = {
  /**
   * @description The component to display documentation for.
   */
  component: Component;
};

const props = defineProps<GenerateDocsProps>();

const tableHeadStyle = 'whitespace-nowrap !bg-slate-800 !text-white text-sm font-semibold border-r';

// For now, we'll create a simplified version that shows basic component info
// In a full implementation, this would extract props, events, and slots from the component
const getComponentInfo = (component: Component) => {
  return {
    name: component.name || 'Unknown Component',
    props: [
      { name: 'variant', type: 'string', required: false, default: 'primary' },
      { name: 'size', type: 'string', required: false, default: 'md' },
      { name: 'disabled', type: 'boolean', required: false, default: false },
      { name: 'wcagLabel', type: 'string', required: true, default: 'Required' },
    ],
    events: [
      { name: 'click', description: 'Triggered when component is clicked' },
    ],
    slots: [
      { name: 'default', description: 'Default slot content' },
    ]
  };
};

const componentInfo = getComponentInfo(props.component);
</script>

<template>
  <div>
    <div v-if="componentInfo.props?.length">
      <h3 id="props" tabindex="-1">
        Props 
        <a class="header-anchor" href="#props" aria-label="Permalink to props" />
      </h3>
      <table class="rounded-t-md w-fit shadow-md">
        <thead>
          <tr>
            <th :class="tableHeadStyle">Name</th>
            <th :class="tableHeadStyle">Type</th>
            <th :class="tableHeadStyle">Required</th>
            <th :class="tableHeadStyle">Default</th>
            <th :class="tableHeadStyle">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop in componentInfo.props" :key="prop.name" class="border-b">
            <td class="px-4 py-2 font-mono text-sm">{{ prop.name }}</td>
            <td class="px-4 py-2 font-mono text-sm">{{ prop.type }}</td>
            <td class="px-4 py-2 text-sm">{{ prop.required ? 'Yes' : 'No' }}</td>
            <td class="px-4 py-2 font-mono text-sm">{{ prop.default }}</td>
            <td class="px-4 py-2 text-sm">Component property</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="componentInfo.events?.length" class="mt-6">
      <h3 id="events" tabindex="-1">
        Events 
        <a class="header-anchor" href="#events" aria-label="Permalink to events" />
      </h3>
      <table class="rounded-t-md w-fit shadow-md">
        <thead>
          <tr>
            <th :class="tableHeadStyle">Name</th>
            <th :class="tableHeadStyle">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in componentInfo.events" :key="event.name" class="border-b">
            <td class="px-4 py-2 font-mono text-sm">{{ event.name }}</td>
            <td class="px-4 py-2 text-sm">{{ event.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="componentInfo.slots?.length" class="mt-6">
      <h3 id="slots" tabindex="-1">
        Slots 
        <a class="header-anchor" href="#slots" aria-label="Permalink to slots" />
      </h3>
      <table class="rounded-t-md w-fit shadow-md">
        <thead>
          <tr>
            <th :class="tableHeadStyle">Name</th>
            <th :class="tableHeadStyle">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot in componentInfo.slots" :key="slot.name" class="border-b">
            <td class="px-4 py-2 font-mono text-sm">{{ slot.name }}</td>
            <td class="px-4 py-2 text-sm">{{ slot.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 