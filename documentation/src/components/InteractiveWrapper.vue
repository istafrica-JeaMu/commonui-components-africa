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
  <div class="mt-5 flex text-sm flex-col items-center space-y-5 border border-gray-300 p-5 rounded-md bg-gray-50">
    <div class="flex flex-row w-full min-h-7 justify-between">
      <span class="self-start italic text-xs font-medium text-gray-600">Interactive Props</span>
      <button
        class="self-end px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded border text-gray-700"
        @click="openModal = !openModal"
      >
        {{ openModal ? 'Exit Fullscreen' : 'Fullscreen' }}
      </button>
    </div>

    <!-- Props Controls -->
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
              class="rounded border-gray-300"
            />
            <span class="text-sm">{{ boolProps.displayedText || propName }}</span>
          </label>
        </template>
      </div>

      <!-- String props -->
      <div
        v-for="[propName, strProps] in stringProps"
        :key="propName"
        class="flex flex-col space-y-1"
      >
        <template v-if="strProps.render !== false">
          <label class="text-xs font-medium text-gray-600">
            {{ strProps.displayedText || propName }}
          </label>
          <input
            v-model="dynamicProps[propName]"
            type="text"
            class="px-2 py-1 border border-gray-300 rounded text-sm w-32"
          />
        </template>
      </div>

      <!-- Union/Select props -->
      <div
        v-for="[propName, option] in unionProps"
        :key="propName"
        class="flex flex-col space-y-1"
      >
        <template v-if="option.render !== false">
          <label class="text-xs font-medium text-gray-600">
            {{ option.displayedText || propName }}
          </label>
          <select
            v-model="dynamicProps[propName]"
            class="px-2 py-1 border border-gray-300 rounded text-sm w-32"
          >
            <option v-for="value in option.values" :key="value" :value="value">
              {{ value }}
            </option>
          </select>
        </template>
      </div>

      <!-- Function props (special handling for icon) -->
      <div
        v-for="[propName, funcProps] in functionProps"
        :key="`func-${propName}`"
        class="flex items-center space-x-2 text-slate-800 bg-slate-100 rounded-sm p-2"
      >
        <template v-if="funcProps.render !== false">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              class="rounded border-gray-300"
              @change="dynamicProps[propName] = $event.target.checked ? funcProps.value : undefined"
            />
            <span class="text-sm">{{ funcProps.displayedText || propName }}</span>
          </label>
        </template>
      </div>
    </div>

    <div class="flex flex-row w-full min-h-7 justify-between">
      <span class="self-start italic text-xs font-medium text-gray-600">Rendered Component</span>
      <button
        class="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded border text-gray-700"
        @click="handleReset"
      >
        Reset
      </button>
    </div>

    <!-- Component Preview -->
    <div class="flex flex-col items-center align-middle place-items-center border border-gray-300 p-8 bg-white rounded-md w-full min-h-[200px]">
      <div class="w-full flex items-center justify-center self-center">
        <slot :props="dynamicProps" />
      </div>
    </div>
  </div>

  <!-- Fullscreen Modal -->
  <Teleport to="body" v-if="openModal">
    <div class="fixed inset-0 bg-white z-50 p-8 overflow-auto">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">Interactive Component Demo</h2>
          <button
            class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
            @click="openModal = false"
          >
            Exit Fullscreen
          </button>
        </div>
        
        <!-- Same controls as above but in fullscreen -->
        <div class="space-y-8">
          <div class="border border-gray-300 p-6 rounded-md bg-gray-50">
            <h3 class="text-lg font-semibold mb-4">Component Properties</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      class="rounded border-gray-300"
                    />
                    <span>{{ boolProps.displayedText || propName }}</span>
                  </label>
                </template>
              </div>

              <!-- String props -->
              <div
                v-for="[propName, strProps] in stringProps"
                :key="propName"
                class="flex flex-col space-y-1"
              >
                <template v-if="strProps.render !== false">
                  <label class="font-medium text-gray-700">
                    {{ strProps.displayedText || propName }}
                  </label>
                  <input
                    v-model="dynamicProps[propName]"
                    type="text"
                    class="px-3 py-2 border border-gray-300 rounded"
                  />
                </template>
              </div>

              <!-- Union props -->
              <div
                v-for="[propName, option] in unionProps"
                :key="propName"
                class="flex flex-col space-y-1"
              >
                <template v-if="option.render !== false">
                  <label class="font-medium text-gray-700">
                    {{ option.displayedText || propName }}
                  </label>
                  <select
                    v-model="dynamicProps[propName]"
                    class="px-3 py-2 border border-gray-300 rounded"
                  >
                    <option v-for="value in option.values" :key="value" :value="value">
                      {{ value }}
                    </option>
                  </select>
                </template>
              </div>

              <!-- Function props -->
              <div
                v-for="[propName, funcProps] in functionProps"
                :key="`func-${propName}`"
                class="flex items-center space-x-2 bg-slate-100 rounded p-3"
              >
                <template v-if="funcProps.render !== false">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      class="rounded border-gray-300"
                      @change="dynamicProps[propName] = $event.target.checked ? funcProps.value : undefined"
                    />
                    <span>{{ funcProps.displayedText || propName }}</span>
                  </label>
                </template>
              </div>
            </div>
          </div>

          <div class="border border-gray-300 p-8 rounded-md bg-white">
            <h3 class="text-lg font-semibold mb-4">Component Preview</h3>
            <div class="flex items-center justify-center min-h-[300px]">
              <slot :props="dynamicProps" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template> 