<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import RuneButton from '@lib/components/Inputs/RuneButton.vue';

type PropOption = {
  displayedText?: string; // Replaces property name with a custom one.
  modelValue?: any; // the model for the property.
  render: boolean; // If false, excludes the property from the interactive props section.
  type: 'boolean' | 'string' | 'union' | 'unionarray' | 'number' | 'function'; // Property type.
  value: any; // Default value of the prop.
  values?: any[]; // Selection of possible values for the prop.
  width?: string; // Width of the input field.
  height?: string; // Height of the input field.
};

type PropOptionsRecord = Record<string, PropOption>;

type Props = {
  propsOptions: Record<string, PropOption>;
  width?: string;
  height?: string;
};

const body = ref<HTMLElement>();
const props = defineProps<Props>();
const model = defineModel<any>();
const emit = defineEmits<{
  (e: 'propsChanged', newProps: string): void;
  (e: 'on-reset'): void;
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

function handleReset() {
  // Reset dynamicProps to initial values
  Object.entries(initialProps.value).forEach(([key, option]) => {
    if ((option as PropOption).type !== 'function') {
      dynamicProps[key] = (option as PropOption).value;
      emit('on-reset');
    }
  });
}

watch(
  dynamicProps,
  (newProps, oldProps) => {
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

const openModal = ref(false);
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
      <!-- Boolean props row -->
      <div class="!m-0 flex w-full flex-wrap justify-center gap-y-4 space-x-4">
        <div
          v-for="[propName, boolProps] in booleanProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="boolProps.render || boolProps.render === undefined">
            <input
              v-model="dynamicProps[propName]"
              type="checkbox"
              :id="`prop-${propName}`"
              class="rounded border-gray-300"
            />
            <label :for="`prop-${propName}`" class="text-sm">
              {{ boolProps.displayedText || propName }}
            </label>
          </template>
        </div>

        <!-- Function props row -->
        <div
          v-for="[propName, funcProps] in functionProps"
          :key="`func-${propName}`"
          class="flex items-center space-x-2 text-slate-800 bg-slate-100 rounded-sm p-1"
        >
          <template v-if="funcProps.render || funcProps.render === undefined">
            <span class="text-xs">⚠️</span>
            <input
              type="checkbox"
              :id="`func-${propName}`"
              class="rounded border-gray-300"
              @change="dynamicProps[propName] = $event.target.checked ? funcProps.value : null"
            />
            <label :for="`func-${propName}`" class="text-sm">
              {{ funcProps.displayedText || propName }}
            </label>
          </template>
        </div>

        <!-- Number props row -->
        <div
          v-for="[propName, numProps] in numberProps"
          :key="`number-${propName}`"
          class="flex items-center space-x-2"
        >
          <template v-if="numProps.render || numProps.render === undefined">
            <label :for="`num-${propName}`" class="text-sm">
              {{ numProps.displayedText || propName }}
            </label>
            <input
              v-model.number="dynamicProps[propName]"
              type="number"
              :id="`num-${propName}`"
              class="rounded border-gray-300 px-2 py-1 text-sm w-20"
            />
          </template>
        </div>

        <!-- String props row -->
        <div
          v-for="[propName, strProps] in stringProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="strProps.render || strProps.render === undefined">
            <label :for="`str-${propName}`" class="text-sm">
              {{ strProps.displayedText || propName }}
            </label>
            <input
              v-model="dynamicProps[propName]"
              type="text"
              :id="`str-${propName}`"
              class="rounded border-gray-300 px-2 py-1 text-sm"
            />
          </template>
        </div>

        <!-- Union (dropdown) props row -->
        <div
          v-for="[propName, option] in unionProps"
          :key="propName"
          class="flex items-center space-x-2"
        >
          <template v-if="option.render || option.render === undefined">
            <label :for="`union-${propName}`" class="text-sm">
              {{ option.displayedText || propName }}
            </label>
            <select
              v-model="dynamicProps[propName]"
              :id="`union-${propName}`"
              class="rounded border-gray-300 px-2 py-1 text-sm"
            >
              <option v-for="val in option.values" :key="val" :value="val">
                {{ val || 'undefined' }}
              </option>
            </select>
          </template>
        </div>
      </div>
      <div class="flex flex-row w-full min-h-7 justify-between">
        <span class="self-start italic text-xs">Rendered Component</span>
        <RuneButton
          class="focus-visible:outline-orange-600"
          wcag-label="Reset props"
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