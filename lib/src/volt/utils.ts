import { PassThroughOptions } from 'primevue/passthrough';

/**
 * Merge PrimeVue passthrough options
 */
export function ptViewMerge(a: any, b: any): any {
  if (a && b) {
    if (typeof a === 'string' && typeof b === 'string') {
      return `${a} ${b}`;
    }
    if (typeof a === 'object' && typeof b === 'object') {
      return { ...a, ...b };
    }
  }
  return b || a;
}

/**
 * Create passthrough configuration for PrimeVue components
 */
export function createPassThrough(config: Record<string, any>): PassThroughOptions {
  return {
    ...config,
    mergeProps: ptViewMerge,
  };
}

/**
 * Default theme configuration for components
 */
export const defaultTheme = {
  transition: 'transition-all duration-200 ease-in-out',
  focus: 'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2',
  disabled: 'disabled:pointer-events-none disabled:opacity-60',
  rounded: 'rounded-md',
  border: 'border border-border',
  spacing: 'px-3 py-2',
  text: 'text-sm font-medium',
}; 