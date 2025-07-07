# Quick Start

Get up and running with Common UI Components Africa in minutes.

## Basic Example

Here's a simple example to get you started:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton, BaseInput, BaseCard, BaseAlert } from '@ist/commonui-components-africa'

const name = ref('')
const email = ref('')
const showSuccess = ref(false)

const handleSubmit = () => {
  if (name.value && email.value) {
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Contact Form</h1>
    
    <BaseAlert 
      v-if="showSuccess"
      variant="success"
      title="Success!"
      message="Your form has been submitted successfully."
      class="mb-4"
    />
    
    <BaseCard class="p-6">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <BaseInput
          v-model="name"
          label="Full Name"
          placeholder="Enter your full name"
          wcag-label="Full name input field"
          required
        />
        
        <BaseInput
          v-model="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          wcag-label="Email address input field"
          required
        />
        
        <BaseButton
          type="submit"
          variant="primary"
          size="large"
          wcag-label="Submit contact form"
          :disabled="!name || !email"
          class="w-full"
        >
          Submit Form
        </BaseButton>
      </form>
    </BaseCard>
  </div>
</template>
```

## Component Variants

Most components support different variants for various use cases:

### Buttons

```vue
<template>
  <div class="space-x-2">
    <!-- Different variants -->
    <BaseButton variant="primary" wcag-label="Primary action">Primary</BaseButton>
    <BaseButton variant="secondary" wcag-label="Secondary action">Secondary</BaseButton>
    <BaseButton variant="success" wcag-label="Success action">Success</BaseButton>
    <BaseButton variant="warning" wcag-label="Warning action">Warning</BaseButton>
    <BaseButton variant="danger" wcag-label="Danger action">Danger</BaseButton>
    
    <!-- Different sizes -->
    <BaseButton size="small" wcag-label="Small button">Small</BaseButton>
    <BaseButton size="normal" wcag-label="Normal button">Normal</BaseButton>
    <BaseButton size="large" wcag-label="Large button">Large</BaseButton>
    
    <!-- With icons -->
    <BaseButton 
      variant="primary" 
      :icon="{ left: 'plus' }"
      wcag-label="Add new item"
    >
      Add Item
    </BaseButton>
    
    <!-- Loading state -->
    <BaseButton 
      variant="primary" 
      :loading="true"
      wcag-label="Loading button"
    >
      Loading...
    </BaseButton>
  </div>
</template>
```

### Input Fields

```vue
<template>
  <div class="space-y-4">
    <!-- Basic input -->
    <BaseInput
      v-model="basicValue"
      label="Basic Input"
      placeholder="Enter text"
      wcag-label="Basic text input"
    />
    
    <!-- Input with validation states -->
    <BaseInput
      v-model="validValue"
      label="Valid Input"
      state="valid"
      assistive-text="This looks good!"
      wcag-label="Valid text input"
    />
    
    <BaseInput
      v-model="invalidValue"
      label="Invalid Input"
      state="invalid"
      assistive-text="Please check your input"
      wcag-label="Invalid text input"
    />
    
    <!-- Disabled input -->
    <BaseInput
      v-model="disabledValue"
      label="Disabled Input"
      disabled
      wcag-label="Disabled text input"
    />
    
    <!-- Textarea -->
    <BaseInput
      v-model="textareaValue"
      type="textarea"
      label="Message"
      placeholder="Enter your message"
      wcag-label="Message textarea"
    />
  </div>
</template>
```

## Form Handling

Here's how to handle forms with validation:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseInput, BaseButton, BaseCheckbox, BaseSelect } from '@ist/commonui-components-africa'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  agreeToTerms: false
})

const countries = [
  { id: 'za', value: 'South Africa' },
  { id: 'ng', value: 'Nigeria' },
  { id: 'ke', value: 'Kenya' },
  { id: 'gh', value: 'Ghana' }
]

const isFormValid = computed(() => {
  return form.value.firstName && 
         form.value.lastName && 
         form.value.email && 
         form.value.country && 
         form.value.agreeToTerms
})

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('Form submitted:', form.value)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BaseInput
        v-model="form.firstName"
        label="First Name"
        placeholder="Enter first name"
        wcag-label="First name input"
        required
      />
      
      <BaseInput
        v-model="form.lastName"
        label="Last Name"
        placeholder="Enter last name"
        wcag-label="Last name input"
        required
      />
    </div>
    
    <BaseInput
      v-model="form.email"
      type="email"
      label="Email Address"
      placeholder="Enter email address"
      wcag-label="Email address input"
      required
    />
    
    <BaseSelect
      v-model="form.country"
      label="Country"
      placeholder="Select your country"
      :options="countries"
      wcag-label="Country selection"
      required
    />
    
    <BaseCheckbox
      v-model="form.agreeToTerms"
      label="I agree to the terms and conditions"
      wcag-label="Terms and conditions agreement"
      required
    />
    
    <BaseButton
      type="submit"
      variant="primary"
      size="large"
      :disabled="!isFormValid"
      wcag-label="Submit registration form"
      class="w-full"
    >
      Register
    </BaseButton>
  </form>
</template>
```

## Common Patterns

### Loading States

```vue
<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)
const data = ref(null)

const fetchData = async () => {
  isLoading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    data.value = { message: 'Data loaded successfully!' }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <BaseButton 
      @click="fetchData"
      :loading="isLoading"
      :disabled="isLoading"
      wcag-label="Load data"
    >
      Load Data
    </BaseButton>
    
    <BaseSkeleton v-if="isLoading" class="mt-4" />
    
    <BaseAlert 
      v-else-if="data"
      variant="success"
      :message="data.message"
    />
  </div>
</template>
```

### Responsive Design

All components are designed to be mobile-first and responsive:

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <BaseCard 
      v-for="item in items" 
      :key="item.id"
      class="p-4"
    >
      <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
      <p class="text-gray-600 mb-4">{{ item.description }}</p>
      <BaseButton 
        variant="primary" 
        size="small"
        :wcag-label="`View details for ${item.title}`"
      >
        View Details
      </BaseButton>
    </BaseCard>
  </div>
</template>
```

## Next Steps

- Explore individual [component documentation](../components/)
- Learn about [theming and customization](../theme/)
- Check out [advanced patterns](../contribute/development.md) 