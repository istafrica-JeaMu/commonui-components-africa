import { VNode } from 'vue';

/**
 * Check if slot has content
 */
export function hasSlotContent(slot: VNode[] | undefined): boolean {
  if (!slot) return false;
  if (slot.length === 0) return false;
  
  // Check if slot contains only whitespace
  return slot.some(vnode => {
    if (typeof vnode.children === 'string') {
      return vnode.children.trim() !== '';
    }
    return true;
  });
}

/**
 * Get slot content as string
 */
export function getSlotText(slot: VNode[] | undefined): string {
  if (!slot) return '';
  
  return slot
    .map(vnode => {
      if (typeof vnode.children === 'string') {
        return vnode.children;
      }
      return '';
    })
    .join('')
    .trim();
}

/**
 * Check if slot is empty or contains only whitespace
 */
export function isSlotEmpty(slot: VNode[] | undefined): boolean {
  return !hasSlotContent(slot);
} 