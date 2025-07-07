/**
 * Stop event propagation and prevent default
 */
export function stopEvent(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}

/**
 * Check if click is outside element
 */
export function isClickOutside(event: Event, element: HTMLElement): boolean {
  return !element.contains(event.target as Node);
}

/**
 * Get keyboard key from event
 */
export function getKeyFromEvent(event: KeyboardEvent): string {
  return event.key || event.which || event.keyCode;
}

/**
 * Check if key is enter
 */
export function isEnterKey(event: KeyboardEvent): boolean {
  return event.key === 'Enter' || event.keyCode === 13;
}

/**
 * Check if key is escape
 */
export function isEscapeKey(event: KeyboardEvent): boolean {
  return event.key === 'Escape' || event.keyCode === 27;
}

/**
 * Check if key is arrow key
 */
export function isArrowKey(event: KeyboardEvent): boolean {
  const key = event.key;
  return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key);
}

/**
 * Add event listener with cleanup
 */
export function addEventListenerWithCleanup(
  element: HTMLElement | Window | Document,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): () => void {
  element.addEventListener(event, handler, options);
  return () => element.removeEventListener(event, handler, options);
} 