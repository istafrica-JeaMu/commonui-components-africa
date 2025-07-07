---
aside: false
---

<script setup lang="ts">
import { ref, computed, onUnmounted, watch, watchEffect, Transition } from 'vue';
import RuneIcon from '@lib/components/DataDisplay/RuneIcon.vue'
import RuneStatusLabel from '@lib/components/Labels/RuneStatusLabel.vue'
import RuneSearchField from '@lib/components/Inputs/RuneSearchField.vue'
import RuneButton from '@lib/components/Inputs/RuneButton.vue'
import { ICONS, type IconName } from '@lib/components/types';

const icons: ReadonlyArray<IconName> = ICONS.map((icon, index) => ({
  id: index + 1,
  value: icon,
}));

const search = ref('');
const selected = ref<number>(0);
const type = ref<'solid' | 'outline' | 'mini' | 'micro'>('solid');
const lastClickedIcon = ref<number | null>(null);
const fadeTimeouts = ref<Record<number, ReturnType<typeof setTimeout>>>({}); 

const isHovering = ref(false);
const hoveredIcon = ref(null);

const types = [{
  name: 'solid',
  dimensions: '24'
},
{
  name: 'outline',
  dimensions: '24'
},
{
  name: 'mini',
  dimensions: '20'
},
{
  name: 'micro',
  dimensions: '16'
}]

const filteredIcons = computed(() => {
  if (search.value) {
    return icons.map(icon => ({
      ...icon,
      matches: icon.value.toLowerCase().includes(search.value.toLowerCase())
    })).sort((a, b) => {
      if (a.matches && !b.matches) return -1;
      if (!a.matches && b.matches) return 1;
      return 0;
    });
  } else {
    return icons.map(icon => ({ ...icon, matches: true }));
  }
});

function handleButtonClick(number: number) {
  selected.value = number;
  type.value = types[number].name as 'solid' | 'outline' | 'mini' | 'micro';
}

function isSelected(number: number) {
  return selected.value === number ? 'secondary' : 'tertiary';
}

function handleIconHover(icon) {
  isHovering.value = true;
  hoveredIcon.value = icon.value;
}

function handleIconLeave() {
  isHovering.value = false;
   hoveredIcon.value = null;
}

function copyIconToClipboard(icon) {
  const iconComponentString = `<RuneIcon variant="${type.value}" color="text-slate-800" icon="${icon.value}" />`;
  
  // Copy the icon component string to the clipboard
  navigator.clipboard.writeText(iconComponentString).then(() => {
    lastClickedIcon.value = icon.id;

    if (fadeTimeouts.value[icon.id]) {
      clearTimeout(fadeTimeouts.value[icon.id]);
    }

    fadeTimeouts.value[icon.id] = setTimeout(() => {
      if (lastClickedIcon.value === icon.id) {
        lastClickedIcon.value = null;
      }
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}


watch(selected, (newValue) => {
  type.value = types[newValue].name as 'solid' | 'outline' | 'mini' | 'micro';
});

watch(type, (newValue) => {
  // Clear all existing timeouts when type changes
  Object.keys(fadeTimeouts.value).forEach((key) => {
    clearTimeout(fadeTimeouts.value[+key]);
  });

  // Reset the fadeTimeouts object
  fadeTimeouts.value = {};

  // Nullify the lastClickedIcon
  lastClickedIcon.value = null;

  // Update the icon type
  type.value = newValue;
});

</script>

# Icon Gallery

Welcome to the Icon Gallery. This page offers an overview of all icons used in CommonUI, allowing you to copy any icon as a component to the clipboard with a single click.

<div class="flex flex-row flex-wrap gap-2 items-end justify-between mb-2">
  <RuneSearchField
    class="w-1/3"
    v-model="search"
    label="Filter icons"
    :suggestions="[]"
    :previous="[]"
    :show-dropdown="false"
    :debounce="'fast'"
    wcag-label="Icon filter"
  />

  <div class="w-1/2 h-fit items-center flex flex-row gap-4 justify-between">
    <div class="flex flex-row gap-2">
      <RuneButton
        v-for="(t, index) in types"
        :key="t.name"
        :text="t.name"
        :wcag-label="t.name"
        :variant="isSelected(index)"
        @click="handleButtonClick(index)"
        @keydown.enter="handleButtonClick(index)"
      />
    </div>
    <span class="text-sm text-slate-800">{{types[selected].dimensions}}px</span>
  </div>
</div>
<hr>
<div style="{scrollbar-track-color: red}" class="w-full overflow-hidden rounded-md h-[700px] overflow-y-auto">
  <div class="m-auto flex flex-row flex-wrap p-4 justify-start">
    <div 
      v-for="icon in filteredIcons" 
      :key="icon.id" 
      :class="[{'order-first': icon.matches, 'order-last': !icon.matches }]"
      class="p-2 w-1/4 min-w-[157px] h-fit flex-grow flex-wrap flex flex-col" >
      <transition name="fade">
        <div 
          ref="icon-block" 
          tabindex="0" 
          :class="[
            {'opacity-20': !icon.matches}
          ]"
          class="border transition-all cursor-pointer outline-hidden duration-100 focus-visible:border-none hover:opacity-100 focus-visible:outline-orange-600 outline-offset-0 overflow-hidden border-slate-300 h-32 hover:bg-slate-50 rounded-md flex relative items-center justify-center" 
          @click="copyIconToClipboard(icon)" 
          @keydown.enter="copyIconToClipboard(icon)" 
          @mouseover="handleIconHover(icon)" 
          @mouseleave="handleIconLeave"
        >
          <RuneIcon 
            class="scale-125" 
            :class="[icon.value === undefined ? 'bg-red-400' : '']" 
            :variant="type" 
            color="text-slate-800" 
            :icon="icon.value" 
          />
          <div 
            class="absolute top-0 left-0 m-2 bg-slate-300 p-2 rounded-md flex items-center transition duration-100 justify-center" 
            :class="[isHovering && hoveredIcon === icon.value ? 'opacity-50' : 'opacity-0']">
            <RuneIcon type="outline" color="text-slate-800" icon="clipboard"/>
          </div>
          <div 
          :class="lastClickedIcon && lastClickedIcon === icon.id ? 'opacity-100' : 'opacity-0'"
            class="absolute transition w-full bg-slate-800 bottom-[-1px] p-2 flex duration-200 justify-center shadow-md items-center">
            <span class="text-xs font-semibold text-white">Copied to clipboard!</span>
          </div>
        </div>
      </transition>
      <span :class="{'opacity-20': !icon.matches}" class="m-auto my-1 text-2xs text-center">
        {{ icon.value }}
      </span>
    </div>
  </div>
</div> 