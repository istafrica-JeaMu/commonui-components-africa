/**
 * Deeply merge two objects
 */
export declare function merge(target: any, source: any, deep?: boolean): any;
/**
 * Generate a unique ID
 */
export declare function generateId(): string;
/**
 * Check if a value is empty
 */
export declare function isEmpty(value: any): boolean;
/**
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number, immediate?: boolean): (...args: Parameters<T>) => void;
