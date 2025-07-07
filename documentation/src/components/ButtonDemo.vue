<template>
  <div class="space-y-8">
    <!-- Basic Variants -->
    <div class="demo-section">
      <h3 class="text-lg font-semibold mb-4">Variants</h3>
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-tertiary">Tertiary</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-success">Success</button>
      </div>
    </div>

    <!-- Sizes -->
    <div class="demo-section">
      <h3 class="text-lg font-semibold mb-4">Sizes</h3>
      <div class="flex flex-wrap items-center gap-4">
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary btn-md">Medium</button>
        <button class="btn btn-primary btn-lg">Large</button>
      </div>
    </div>

    <!-- With Icons -->
    <div class="demo-section">
      <h3 class="text-lg font-semibold mb-4">With Icons</h3>
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary">
          <span class="icon">←</span>
          Left Icon
        </button>
        <button class="btn btn-primary">
          Right Icon
          <span class="icon">→</span>
        </button>
        <button class="btn btn-primary btn-icon">
          <span class="icon">+</span>
        </button>
      </div>
    </div>

    <!-- States -->
    <div class="demo-section">
      <h3 class="text-lg font-semibold mb-4">States</h3>
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary" disabled>
          <span class="spinner"></span>
          Loading
        </button>
        <button class="btn btn-primary" disabled>Disabled</button>
        <button class="btn btn-secondary btn-faded">Faded</button>
      </div>
    </div>

    <!-- Feature Showcase -->
    <div class="demo-section">
      <h3 class="text-lg font-semibold mb-4">Component Features</h3>
      <div class="space-y-3 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>5 color variants: Primary, Secondary, Tertiary, Danger, Success</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>3 size options: Small, Medium, Large</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Icon support: Left, Right, Center positions</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Loading and disabled states</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>WCAG compliant with required accessibility labels</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Faded effect for Secondary and Tertiary variants</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-section {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

.demo-section h3 {
  color: #374151;
  margin-top: 0;
}

/* Button Base Styles */
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200;
}

/* Size Variants */
.btn-sm {
  @apply px-3 py-1.5 text-xs;
}

.btn-md {
  @apply px-4 py-2 text-sm;
}

.btn-lg {
  @apply px-6 py-3 text-base;
}

/* Color Variants */
.btn-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500;
}

.btn-secondary {
  @apply bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500;
}

.btn-tertiary {
  @apply bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500;
}

.btn-danger {
  @apply bg-red-600 text-white hover:bg-red-700 focus:ring-red-500;
}

.btn-success {
  @apply bg-green-600 text-white hover:bg-green-700 focus:ring-green-500;
}

/* State Variants */
.btn-faded {
  @apply opacity-60;
}

.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.btn-icon {
  @apply w-10 h-10 p-0;
}

/* Icon and Spinner */
.icon {
  @apply inline-block w-4 h-4;
}

.spinner {
  @apply inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin;
}

.btn .spinner {
  @apply mr-2;
}

.btn-icon .spinner {
  @apply mr-0;
}
</style> 