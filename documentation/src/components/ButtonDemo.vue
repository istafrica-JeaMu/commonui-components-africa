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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.btn:focus {
  ring: 2px solid;
  ring-offset: 2px;
}

/* Size Variants */
.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

/* Color Variants */
.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-primary:focus {
  ring-color: #3b82f6;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #111827;
}

.btn-secondary:hover {
  background-color: #d1d5db;
}

.btn-secondary:focus {
  ring-color: #6b7280;
}

.btn-tertiary {
  background-color: transparent;
  color: #374151;
  border-color: #d1d5db;
}

.btn-tertiary:hover {
  background-color: #f9fafb;
}

.btn-tertiary:focus {
  ring-color: #6b7280;
}

.btn-danger {
  background-color: #dc2626;
  color: white;
}

.btn-danger:hover {
  background-color: #b91c1c;
}

.btn-danger:focus {
  ring-color: #ef4444;
}

.btn-success {
  background-color: #059669;
  color: white;
}

.btn-success:hover {
  background-color: #047857;
}

.btn-success:focus {
  ring-color: #10b981;
}

/* State Variants */
.btn-faded {
  opacity: 0.6;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}

/* Icon and Spinner */
.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn .spinner {
  margin-right: 0.5rem;
}

.btn-icon .spinner {
  margin-right: 0;
}
</style> 