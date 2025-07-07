/**
 * Stop event propagation and prevent default
 */
export declare function stopEvent(event: Event): void;
/**
 * Check if click is outside element
 */
export declare function isClickOutside(event: Event, element: HTMLElement): boolean;
/**
 * Get keyboard key from event
 */
export declare function getKeyFromEvent(event: KeyboardEvent): string;
/**
 * Check if key is enter
 */
export declare function isEnterKey(event: KeyboardEvent): boolean;
/**
 * Check if key is escape
 */
export declare function isEscapeKey(event: KeyboardEvent): boolean;
/**
 * Check if key is arrow key
 */
export declare function isArrowKey(event: KeyboardEvent): boolean;
/**
 * Add event listener with cleanup
 */
export declare function addEventListenerWithCleanup(element: HTMLElement | Window | Document, event: string, handler: EventListener, options?: AddEventListenerOptions): () => void;
