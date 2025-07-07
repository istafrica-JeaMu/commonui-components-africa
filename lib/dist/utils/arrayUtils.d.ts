/**
 * Remove duplicates from an array
 */
export declare function uniqueArray<T>(array: T[]): T[];
/**
 * Group array items by a key
 */
export declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
/**
 * Sort array by a key
 */
export declare function sortBy<T>(array: T[], key: keyof T, direction?: 'asc' | 'desc'): T[];
/**
 * Chunk array into smaller arrays
 */
export declare function chunk<T>(array: T[], size: number): T[][];
