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
    type: 'boolean',
    value: false,
  },
  faded: {
    type: 'boolean',
    value: false,
  },
  icon: {
    type: 'function',
    value: {
      right: 'arrow-long-right'
    },
  },
  loading: {
    type: 'boolean',
    value: false,
  },
  loadingPlacement: {
    displayedText: 'Loading placement',
    type: 'union',
    value: 'right',
    values: ['left', 'center', 'right'],
  },
  size: {
    type: 'union',
    value: 'md',
    values: ['sm', 'md', 'lg'],
  },
  text: {
    type: 'string',
    value: 'Button text',
  },
  variant: {
    type: 'union',
    value: 'primary',
    values: ['primary', 'secondary', 'tertiary', 'danger', 'success'],
  },
  wcagLabel: {
    displayedText: 'aria-label',
    type: 'string',
    value: 'Standard Button',
  },
} as const;

</script>

# Button

## Purpose

`RuneButton` is a versatile button component that serves as the primary interactive element for triggering actions in user interfaces. It supports multiple variants, sizes, states, and icon configurations to accommodate different design requirements and user interaction patterns.

---

<TipBlock type="guidelines" title="Guidelines" info="Follow these tips for a successful implementation">

- Buttons should be utilised to communicate actionable steps for users and facilitate interaction with the page.
- Each page should feature a solitary primary button, with any additional calls to action represented as secondary buttons of lesser emphasis.
- Always provide meaningful `wcag-label` attributes for accessibility compliance.
- Use loading states to provide feedback during asynchronous operations.

</TipBlock>

<TipBlock type="avoidances" title="Avoidances" info="Follow these tips for a successful implementation">

- Do not use buttons as navigational elements. Instead, utilise links when the desired action is to redirect the user to a new page.
- Avoid using too many primary buttons in a single interface - maintain visual hierarchy.
- Don't omit the `wcag-label` prop as it's essential for screen reader accessibility.

</TipBlock>

## API

<GenerateDocs :component="RuneButton"/>

### Events

<div class="overflow-x-auto mb-8">
  <table class="min-w-full border border-gray-300 rounded-lg shadow-sm">
    <thead>
      <tr class="bg-slate-800 text-white">
        <th class="text-left px-4 py-3 font-semibold border-r border-gray-600">Name</th>
        <th class="text-left px-4 py-3 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="border-b border-gray-200">
        <td class="px-4 py-3 font-mono text-sm font-medium text-blue-600 border-r border-gray-200">
          click
        </td>
        <td class="px-4 py-3 text-sm text-gray-700">
          Emitted when the button is clicked
        </td>
      </tr>
    </tbody>
  </table>
</div>

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

The button component supports 5 different color variants, each designed to communicate specific types of actions with appropriate visual hierarchy and semantic meaning.

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
  <RuneButton variant="primary" text="Primary" wcag-label="Primary button example" />
  <RuneButton variant="secondary" text="Secondary" wcag-label="Secondary button example" />
  <RuneButton variant="tertiary" text="Tertiary" wcag-label="Tertiary button example" />
  <RuneButton variant="danger" text="Danger" wcag-label="Danger button example" />
  <RuneButton variant="success" text="Success" wcag-label="Success button example" />
</div>

**Usage Guidelines:**
- **Primary**: Main call-to-action buttons (Submit, Save, Continue)
- **Secondary**: Supporting actions with medium emphasis (Cancel, Back)
- **Tertiary**: Low emphasis actions (Edit, View Details)
- **Danger**: Destructive actions (Delete, Remove, Cancel subscription)
- **Success**: Positive confirmations (Confirm, Accept, Approve)

### Size Options

Three size options are available to fit different UI contexts and hierarchy needs.

<div class="flex flex-wrap items-center gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
  <RuneButton size="sm" text="Small Button" wcag-label="Small button example" />
  <RuneButton size="md" text="Medium Button" wcag-label="Medium button example" />
  <RuneButton size="lg" text="Large Button" wcag-label="Large button example" />
</div>

### With Icons

Icons can be positioned on the left, right, or center of the button. Center icons create icon-only buttons.

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
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

#### More Icon Examples

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
  <RuneButton 
    variant="secondary"
    text="Download" 
    :icon="{ left: 'download' }" 
    wcag-label="Download button"
  />
  <RuneButton 
    variant="tertiary"
    text="Settings" 
    :icon="{ right: 'settings' }" 
    wcag-label="Settings button"
  />
  <RuneButton 
    variant="danger"
    :icon="{ center: 'trash' }" 
    wcag-label="Delete button"
  />
  <RuneButton 
    variant="success"
    :icon="{ center: 'check' }" 
    wcag-label="Confirm button"
  />
</div>

### Loading States

Loading states can be positioned on the left, right, or center of the button to provide user feedback during async operations.

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
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

::: info Loading Placement Rules
- **Center placement** is only available for icon-only buttons (no text)
- **Left/Right placement** works with both text and icon buttons
- Loading spinners temporarily replace icons in the same position
:::

#### Loading with Different Variants

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
  <RuneButton 
    variant="primary"
    text="Saving..." 
    :loading="true"
    wcag-label="Primary loading button"
  />
  <RuneButton 
    variant="secondary"
    text="Processing..." 
    :loading="true"
    wcag-label="Secondary loading button"
  />
  <RuneButton 
    variant="success"
    text="Uploading..." 
    :loading="true"
    loading-placement="left"
    wcag-label="Success loading button"
  />
</div>

### Disabled Buttons

Disabled buttons are non-interactive and communicate that an action is unavailable.

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
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
    variant="danger"
    text="Disabled Danger" 
    :disabled="true"
    wcag-label="Disabled danger button"
  />
  <RuneButton 
    :icon="{ center: 'plus' }" 
    :disabled="true"
    wcag-label="Disabled icon button"
  />
</div>

### Faded Style (Secondary & Tertiary only)

The faded style reduces hover background opacity to 40% and is only available for Secondary and Tertiary variants.

<div class="flex flex-wrap gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
  <RuneButton 
    variant="secondary"
    text="Normal Secondary" 
    wcag-label="Normal secondary button"
  />
  <RuneButton 
    variant="secondary"
    text="Faded Secondary" 
    :faded="true"
    wcag-label="Faded secondary button"
  />
  <RuneButton 
    variant="tertiary"
    text="Normal Tertiary" 
    wcag-label="Normal tertiary button"
  />
  <RuneButton 
    variant="tertiary"
    text="Faded Tertiary" 
    :faded="true"
    wcag-label="Faded tertiary button"
  />
</div>

### Complex Combinations

Real-world examples showing combinations of different props for common UI patterns and use cases.

<div class="space-y-6">
  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <h4 class="font-medium mb-3 text-gray-700">Call-to-Action Buttons</h4>
    <div class="flex flex-wrap gap-4">
      <RuneButton 
        variant="primary"
        size="lg"
        text="Get Started" 
        :icon="{ right: 'arrow-right' }" 
        wcag-label="Get started call to action button"
      />
      <RuneButton 
        variant="secondary"
        size="lg"
        text="Learn More" 
        :icon="{ right: 'external-link' }" 
        wcag-label="Learn more information button"
      />
    </div>
  </div>

  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <h4 class="font-medium mb-3 text-gray-700">Form Actions</h4>
    <div class="flex flex-wrap gap-4">
      <RuneButton 
        variant="primary"
        text="Save Changes" 
        :icon="{ left: 'check' }" 
        wcag-label="Save changes button"
      />
      <RuneButton 
        variant="secondary"
        text="Cancel" 
        :faded="true"
        wcag-label="Cancel action button"
      />
      <RuneButton 
        variant="tertiary"
        text="Reset Form" 
        :icon="{ left: 'refresh' }" 
        wcag-label="Reset form button"
      />
    </div>
  </div>

  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <h4 class="font-medium mb-3 text-gray-700">Destructive Actions</h4>
    <div class="flex flex-wrap gap-4">
      <RuneButton 
        variant="danger"
        text="Delete Account" 
        :icon="{ left: 'trash' }" 
        wcag-label="Delete account button"
      />
      <RuneButton 
        variant="danger"
        size="sm"
        text="Remove" 
        :icon="{ left: 'x' }" 
        wcag-label="Remove item button"
      />
    </div>
  </div>

  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <h4 class="font-medium mb-3 text-gray-700">Icon-Only Actions</h4>
    <div class="flex flex-wrap gap-4">
      <RuneButton 
        variant="secondary"
        :icon="{ center: 'settings' }" 
        wcag-label="Settings button"
      />
      <RuneButton 
        variant="tertiary"
        :icon="{ center: 'edit' }" 
        wcag-label="Edit button"
      />
      <RuneButton 
        variant="danger"
        size="sm"
        :icon="{ center: 'trash' }" 
        wcag-label="Delete button"
      />
    </div>
  </div>
</div>

## Accessibility

The `RuneButton` component follows WCAG 2.1 guidelines to ensure accessibility for all users.

### Key Accessibility Features

- **ARIA Labels**: The `wcag-label` prop is required and provides accessible names for screen readers
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Loading States**: Screen readers announce loading states appropriately
- **Disabled States**: Properly communicated to assistive technologies
- **Color Contrast**: All variants meet WCAG AA contrast requirements

### Best Practices

```vue
<!-- ✅ Good: Clear, descriptive label -->
<RuneButton text="Save" wcag-label="Save user profile changes" />

<!-- ❌ Bad: Missing or vague label -->
<RuneButton text="Save" wcag-label="Save" />

<!-- ✅ Good: Loading state with context -->
<RuneButton text="Saving..." :loading="true" wcag-label="Saving user profile, please wait" />

<!-- ✅ Good: Icon-only button with descriptive label -->
<RuneButton :icon="{ center: 'edit' }" wcag-label="Edit user profile" />
```

## Performance Considerations

- **Tree Shaking**: Component is optimized for modern bundlers
- **Icon Loading**: Icons are loaded on-demand to reduce initial bundle size
- **Minimal DOM**: Clean, semantic HTML structure
- **CSS Optimization**: Tailwind CSS utilities for efficient styling

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Android Chrome 90+
- **Accessibility**: Compatible with JAWS, NVDA, VoiceOver, TalkBack

## Feedback

<FeedbackList component="RuneButton" /> 