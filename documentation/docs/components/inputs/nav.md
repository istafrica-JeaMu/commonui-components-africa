<script setup lang="ts">
import { ref } from 'vue';
import RuneNavButton from '@lib/components/Inputs/RuneNavButton.vue';
import { useLiveCodeFor } from '@src/composables';

const click = ref(false);
const propsAsJson = ref('');
const { liveCode } = useLiveCodeFor('RuneNavButton', propsAsJson)

const navBtnProps = {
  variant: {
    displayedText: 'variant',
    type: 'union',
    value: 'primary',
    values: ['primary', 'secondary']
  },

  type: {
    type: 'union',
    value: 'back',
    values: ['back','next']
  },

  wcagLabel: {
    displayedText: 'aria-label',
    type: 'string',
    value: 'Go back',
  },
} as const;

function handleStandardClick() {
  click.value = true;
  setTimeout(() => {
    click.value = false;
  }, 500);
}
</script>

# Navigation Button

## Purpose

The Navigation Button is reserved for specific scenarios. It also has a secondary type without the dark background behind the arrow.

---

<TipBlock type="guidelines" title="Guidelines" info="Follow these tips for a successful implementation">

- Designed to appear in the page header, it can take the place of breadcrumbs when necessary, such as when a user wishes to modify their profile settings.

</TipBlock>

<TipBlock type="avoidances" title="Avoidances" info="Follow these tips for a successful implementation">

- Do not use the Navigation button for purposes that can be addressed by using a [`RuneButton`](button.html) or a [`RuneLink`](link.html).

</TipBlock>

## API

<GenerateDocs :component="RuneNavButton"/>

## Usage

<div>
  <InteractiveWrapper :props-options="navBtnProps" @propsChanged="propsAsJson = $event">
    <template #default="{ props }">
      <RuneNavButton v-bind="props" @click="handleStandardClick"/>
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
  <RuneNavButton variant="primary" type="back" wcag-label="Go back - primary variant" />
  <RuneNavButton variant="secondary" type="back" wcag-label="Go back - secondary variant" />
</div>

### Types

<div class="flex flex-wrap gap-4 mb-6">
  <RuneNavButton variant="primary" type="back" wcag-label="Go back to previous page" />
  <RuneNavButton variant="primary" type="next" wcag-label="Go to next page" />
</div>

### Disabled State

<div class="flex flex-wrap gap-4 mb-6">
  <RuneNavButton variant="primary" type="back" disabled wcag-label="Disabled back button" />
  <RuneNavButton variant="secondary" type="next" disabled wcag-label="Disabled next button" />
</div>

## Feedback

<FeedbackList component="RuneNavButton" /> 