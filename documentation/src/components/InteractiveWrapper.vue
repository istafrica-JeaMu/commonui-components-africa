<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import RuneButton from '@lib/components/Inputs/RuneButton.vue';

type PropOption = {
  displayedText?: string; // Replaces property name with a custom one.
  modelValue?: any; // the model for the property.
  render?: boolean; // If false, excludes the property from the interactive props section.
  type: 'boolean' | 'string' | 'union' | 'unionarray' | 'number' | 'function'; // Property type.
  value: any; // Default value of the prop.
  values?: any[]; // Selection of possible values for the prop.
  width?: string; // Width of the input field.
  height?: string; // Height of the input field.
};

type PropOptionsRecord = Record<string, PropOption>;

interface Props {
  propsOptions: PropOptionsRecord;
  width?: string;
  height?: string;
}

const body = ref<HTMLElement>();
const props = defineProps<Props>();
const model = defineModel<any>();
const emit = defineEmits<{
  propsChanged: [newProps: string];
  'on-reset': [];
}>();
const { propsOptions } = toRefs(reactive(props));
const propsOptionsRecord: PropOptionsRecord = propsOptions.value;

// Store initial state of props
const initialProps = ref(JSON.parse(JSON.stringify(propsOptionsRecord)));

// Reactive state for dynamic props
const dynamicProps = reactive(
  Object.fromEntries(
    Object.entries(propsOptionsRecord)
      .filter(([_, option]) => option.type !== 'function')
      .map(([key, option]) => [key, option.value]),
  ),
);

// Computed properties for different types of props
const booleanProps = computed(() =>
  Object.entries(propsOptionsRecord).filter(([_, option]) => option.type === 'boolean'),
);

const functionProps = computed(() =>
  Object.entries(propsOptionsRecord).filter(([_, option]) => option.type === 'function'),
);

const numberProps = computed(() =>
  Object.entries(propsOptionsRecord).filter(([_, option]) => option.type === 'number'),
);

const stringProps = computed(() =>
  Object.entries(propsOptionsRecord).filter(([_, option]) => option.type === 'string'),
);

const unionProps = computed(() =>
  Object.entries(propsOptionsRecord).filter(
    ([_, option]) => option.type == 'union' || option.type == 'unionarray',
  ),
);

const openModal = ref(false);

function handleReset() {
  // Reset dynamicProps to initial values
  Object.entries(initialProps.value).forEach(([key, option]) => {
    if ((option as PropOption).type !== 'function') {
      dynamicProps[key] = (option as PropOption).value;
    }
  });
  emit('on-reset');
}

watch(
  dynamicProps,
  (newProps: any, oldProps: any) => {
    // Compare newProps to oldProps and only emit if there are changes
    if (JSON.stringify(newProps) === JSON.stringify(oldProps)) return;
    emit('propsChanged', JSON.stringify(newProps));
  },
  { immediate: true },
);

onMounted(() => {
  if (document) body.value = document.body;
  const element = document.getElementById('renderSlot');
  const overflowContainer = document.getElementById('renderBox');
  if (overflowContainer) {
    if (!openModal.value && element && element.clientHeight > 240) {
      overflowContainer.style.maxHeight = element.clientHeight + 40 + 'px';
    }
    overflowContainer.scrollLeft =
      (overflowContainer.scrollWidth - overflowContainer.clientWidth) / 2;
    overflowContainer.scrollTop =
      (overflowContainer.scrollHeight - overflowContainer.clientHeight) / 2;
  }
});
</script>

<template>
  <Teleport to="body" :disabled="!openModal">
    <div
      class="mt-5 flex text-sm flex-col items-center space-y-5 border border-gray-300 p-5"
      :class="openModal ? 'fixed top-0 left-0 bottom-0 right-0 bg-white z-50' : ''"
    >
      <div class="flex flex-row w-full min-h-7 justify-between">
        <span class="self-start italic text-xs">Interactive Props</span>
        <RuneButton
          class="self-end"
          size="sm"
          wcag-label="Toggle modal"
          text="Toggle full screen"
          variant="secondary"
          @click="openModal = !openModal"
        />
      </div>
      
      <!-- Props Controls in single horizontal row -->
      <div class="!m-0 flex w-full flex-wrap justify-center gap-y-4 space-x-4">
        <!-- Boolean props -->
        <div
          v-for="[propName, boolProps] in booleanProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="boolProps.render !== false">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                v-model="dynamicProps[propName]"
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                :checked="dynamicProps[propName]"
              />
              <span class="text-sm text-gray-700">{{ boolProps.displayedText || propName }}</span>
            </label>
          </template>
        </div>

        <!-- Function props with tooltip-like styling -->
        <div
          v-for="[propName, funcProps] in functionProps"
          :key="`func-${propName}`"
          class="flex items-center space-x-2 text-slate-800 bg-slate-100 rounded-sm p-1"
        >
          <template v-if="funcProps.render !== false">
            <div class="text-xs bg-blue-100 text-blue-800 px-1 rounded" title="This prop is unaffected by the Reset button.">
              ℹ️
            </div>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                @change="dynamicProps[propName] = ($event.target as HTMLInputElement).checked ? funcProps.value : undefined"
              />
              <span class="text-sm text-gray-700">{{ funcProps.displayedText || propName }}</span>
            </label>
          </template>
        </div>

        <!-- String props -->
        <div
          v-for="[propName, strProps] in stringProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="strProps.render !== false">
            <div class="flex flex-col">
              <label class="text-xs font-medium text-gray-600 mb-1">
                {{ strProps.displayedText || propName }}
              </label>
              <input
                v-model="dynamicProps[propName]"
                type="text"
                class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style="width: 120px;"
              />
            </div>
          </template>
        </div>

        <!-- Number props -->
        <div
          v-for="[propName, numProps] in numberProps"
          :key="`number-${propName}`"
          class="flex items-center space-x-2"
        >
          <template v-if="numProps.render !== false">
            <div class="flex flex-col">
              <label class="text-xs font-medium text-gray-600 mb-1">
                {{ numProps.displayedText || propName }}
              </label>
              <input
                v-model.number="dynamicProps[propName]"
                type="number"
                class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style="width: 80px;"
              />
            </div>
          </template>
        </div>

        <!-- Union/Select props -->
        <div
          v-for="[propName, option] in unionProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="option.render !== false">
            <div class="flex flex-col">
              <label class="text-xs font-medium text-gray-600 mb-1">
                {{ option.displayedText || propName }}
              </label>
              <select
                v-model="dynamicProps[propName]"
                class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style="width: 120px;"
              >
                <option v-for="value in option.values" :key="value" :value="value">
                  {{ value }}
                </option>
              </select>
            </div>
          </template>
        </div>
      </div>
      
      <div class="flex flex-row w-full min-h-7 justify-between">
        <span class="self-start italic text-xs">Rendered Component</span>
        <RuneButton
          class="focus-visible:outline-orange-600"
          wcag-label="Reset Button"
          text="Reset"
          size="sm"
          faded
          variant="secondary"
          @click="handleReset"
        />
      </div>

      <div
        id="renderBox"
        class="will-change-transform flex flex-col items-center align-middle place-items-center border border-gray-300 p-5 overflow-auto w-full"
      >
        <div
          id="renderItem"
          class="w-full flex m-auto items-center justify-center self-center"
          :style="{ minWidth: props.width, minHeight: props.height }"
        >
          <div id="renderSlot" class="w-full flex items-center justify-center self-center">
            <slot :props="dynamicProps" :model-value="model" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Enhanced styling for better visual hierarchy */
.flex.items-center.space-x-2 {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
}

input[type="text"], 
input[type="number"], 
select {
  font-size: 0.875rem;
  line-height: 1.25rem;
  min-height: 32px;
}

label {
  font-weight: 500;
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

/* Ensure consistent spacing */
.space-x-4 > * + * {
  margin-left: 1rem;
}

/* Function props special styling */
.bg-slate-100 {
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
}

/* Better focus states */
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  border-color: #3b82f6;
}

/* Checkbox styling */
input[type="checkbox"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* Info icon styling */
.bg-blue-100 {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.75rem;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

/* Button text styling */
.text-sm.text-gray-700 {
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}

/* Rendered component section */
#renderBox {
  min-height: 120px;
  background-color: #fafafa;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}

/* Props container */
.gap-y-4.space-x-4 {
  gap: 1rem;
  align-items: flex-start;
}

/* Consistent input container spacing */
.flex.flex-col {
  min-width: fit-content;
}

/* Header styling */
.italic.text-xs {
  font-style: italic;
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}
</style> 