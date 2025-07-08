<script setup lang="ts">
import { ref } from 'vue';
import { useLiveCodeFor } from '@src/composables';
import TipBlock from '@src/components/TipBlock.vue';
import InteractiveWrapper from '@src/components/InteractiveWrapper.vue';
import GenerateDocs from '@src/components/GenerateDocs.vue';
import FeedbackList from '@src/components/FeedbackList.vue';
// RuneButton is globally registered in VitePress theme, no need to import
// import RuneButton from '../../../../lib/src/components/Inputs/RuneButton.vue';

const propsAsJson = ref('');
const { liveCode } = useLiveCodeFor('RuneButton', propsAsJson)

const btnProps = {
  disabled: {
    displayedText: 'Disabled',
    type: 'boolean',
    value: false,
    render: true,
  },
  faded: {
    displayedText: 'Faded (Secondary & Tertiary only)',
    type: 'boolean',
    value: false,
    render: true,
  },
  icon: {
    displayedText: 'Add Right Icon',
    type: 'function',
    value: {
      right: 'arrow-right'
    },
    render: true,
  },
  loading: {
    displayedText: 'Loading State',
    type: 'boolean',
    value: false,
    render: true,
  },
  loadingPlacement: {
    displayedText: 'Loading Placement',
    type: 'union',
    value: 'right',
    values: ['left', 'right'],
    render: true,
  },
  size: {
    displayedText: 'Size',
    type: 'union',
    value: 'md',
    values: ['sm', 'md', 'lg'],
    render: true,
  },
  text: {
    displayedText: 'Button Text',
    type: 'string',
    value: 'Button text',
    render: true,
  },
  variant: {
    displayedText: 'Variant',
    type: 'union',
    value: 'primary',
    values: ['primary', 'secondary', 'tertiary', 'danger', 'success'],
    render: true,
  },
  wcagLabel: {
    displayedText: 'ARIA Label (Required)',
    type: 'string',
    value: 'Standard Button',
    render: true,
  },
} as const;

</script>

# Button

## Purpose

`RuneButton` is a simple button that can be used in any situation. It is the most common input component. Buttons serve as clickable elements designed to initiate actions, effectively communicating calls to action to users and enabling interaction with pages in various ways. The labels on buttons articulate the actions they will trigger upon user interaction.

---

<TipBlock type="guidelines" title="Guidelines" info="Follow these tips for a successful implementation">

- Buttons should be utilised to communicate actionable steps for users and facilitate interaction with the page.
- Each page should feature a solitary primary button, with any additional calls to action represented as secondary buttons of lesser emphasis.

</TipBlock>

<TipBlock type="avoidances" title="Avoidances" info="Follow these tips for a successful implementation">

- Do not use buttons as navigational elements. Instead, utilise links when the desired action is to redirect the user to a new page.

</TipBlock>

## API

<GenerateDocs :component="RuneButton"/>

## Usage

<div>
  <InteractiveWrapper :props-options="btnProps" @propsChanged="propsAsJson = $event">
    <template #default="{ props }">
      <RuneButton v-bind="props"/>
    </template>
  </InteractiveWrapper>
</div>

::: details Live code

```vue-vue
{{ liveCode }}
```

:::

## Examples

### Variants

<div class="flex flex-wrap gap-4 mb-6">
  <RuneButton variant="primary" text="Primary" wcag-label="Primary button example" />
  <RuneButton variant="secondary" text="Secondary" wcag-label="Secondary button example" />
  <RuneButton variant="tertiary" text="Tertiary" wcag-label="Tertiary button example" />
  <RuneButton variant="danger" text="Danger" wcag-label="Danger button example" />
  <RuneButton variant="success" text="Success" wcag-label="Success button example" />
</div>

### Size Options

<div class="flex flex-wrap items-center gap-4 mb-6">
  <RuneButton size="sm" text="Small Button" wcag-label="Small button example" />
  <RuneButton size="md" text="Medium Button" wcag-label="Medium button example" />
  <RuneButton size="lg" text="Large Button" wcag-label="Large button example" />
</div>

### With Icons

<div class="flex flex-wrap gap-4 mb-6">
  <RuneButton 
    text="Left Icon" 
    :icon="{ left: 'arrow-left' }" 
    wcag-label="Button with left icon"
  />
  <RuneButton 
    text="Right Icon" 
    :icon="{ right: 'arrow-right' }" 
    wcag-label="Button with right icon"
  />
  <RuneButton 
    :icon="{ center: 'plus' }" 
    wcag-label="Icon only button"
  />
</div>

### Loading States

<div class="flex flex-wrap gap-4 mb-6">
  <RuneButton 
    text="Loading Right" 
    :loading="true"
    loading-placement="right"
    wcag-label="Button with loading state on right"
  />
  <RuneButton 
    text="Loading Left" 
    :loading="true"
    loading-placement="left"
    wcag-label="Button with loading state on left"
  />
  <RuneButton 
    :icon="{ center: 'refresh' }" 
    :loading="true"
    loading-placement="center"
    wcag-label="Icon button with loading state"
  />
</div>

### Disabled Buttons

<div class="flex flex-wrap gap-4 mb-6">
  <RuneButton 
    text="Disabled Button" 
    :disabled="true"
    wcag-label="Disabled button example"
  />
  <RuneButton 
    variant="secondary"
    text="Disabled Secondary" 
    :disabled="true"
    wcag-label="Disabled secondary button"
  />
  <RuneButton 
    :icon="{ center: 'plus' }" 
    :disabled="true"
    wcag-label="Disabled icon button"
  />
</div>

### Faded Style (Secondary & Tertiary only)

<div class="flex flex-wrap gap-4 mb-6">
  <RuneButton 
    variant="secondary"
    text="Faded Secondary" 
    :faded="true"
    wcag-label="Faded secondary button"
  />
  <RuneButton 
    variant="tertiary"
    text="Faded Tertiary" 
    :faded="true"
    wcag-label="Faded tertiary button"
  />
</div>

## Feedback

<FeedbackList component="RuneButton" /> 