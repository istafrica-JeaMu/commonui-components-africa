import { PassThroughOptions } from 'primevue/passthrough';
/**
 * Merge PrimeVue passthrough options
 */
export declare function ptViewMerge(a: any, b: any): any;
/**
 * Create passthrough configuration for PrimeVue components
 */
export declare function createPassThrough(config: Record<string, any>): PassThroughOptions;
/**
 * Default theme configuration for components
 */
export declare const defaultTheme: {
    transition: string;
    focus: string;
    disabled: string;
    rounded: string;
    border: string;
    spacing: string;
    text: string;
};
