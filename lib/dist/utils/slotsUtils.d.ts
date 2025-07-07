import { VNode } from 'vue';
/**
 * Check if slot has content
 */
export declare function hasSlotContent(slot: VNode[] | undefined): boolean;
/**
 * Get slot content as string
 */
export declare function getSlotText(slot: VNode[] | undefined): string;
/**
 * Check if slot is empty or contains only whitespace
 */
export declare function isSlotEmpty(slot: VNode[] | undefined): boolean;
