import { FunctionalComponent, HTMLAttributes, VNode, VNodeProps } from 'vue';

type MaterialSymbolIcon = `ms_${string}`;
/**
 * Type for Icons.
 *
 * The `IconsProperty` type is a versatile type used to define icons in various components. It supports multiple formats:
 * - `IconName`: A predefined string representing the name of an icon.
 * - `FunctionalComponent<HTMLAttributes & VNodeProps>`: A Vue functional component that can be used as an icon.
 * - `VNode`: A Vue virtual node representing an icon.
 * - `SVGPathElement`: An SVG path element used directly as an icon.
 */
export type IconsProperty =
  | (string & IconName)
  | MaterialSymbolIcon
  | FunctionalComponent<HTMLAttributes & VNodeProps>
  | VNode
  | SVGPathElement;

/**
 * @description A general type for functions with accompanying text.
 */
export type AnchorAction = {
  text: string;
  action: () => void;
};

/**
 * @description Type used by BaseAccordion.
 */
export type AccordionItems = Array<{
  id: number;
  title: string;
  content: string;
  isOpen?: boolean;
}>;

/**
 * @description The breadcrumb item object used by the breadcrumb component.
 */
export type BreadcrumbItems = Array<{
  label: string;
  href: string;
}>;

export type ButtonIconType = {
  left?: IconsProperty;
  center?: IconsProperty;
  right?: IconsProperty;
};

/**
 * @description The object structure intended for BaseDropdownList items.
 */
export type DropdownListItem = { id: number | string; value: string; disabled?: boolean };

/**
 * @description Array of DropdownListItems
 */
export type DropdownListItems = DropdownListItem[];

/**
 * @description List of all available icons.
 */
export const ICONS = [
  'academic-cap',
  'adjustments-horizontal',
  'adjustments-vertical',
  'archive-box',
  'archive-box-arrow-down',
  'archive-box-x-mark',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-on-square',
  'arrow-down-on-square-stack',
  'arrow-down-right',
  'arrow-down-tray',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-end-on-rectangle',
  'arrow-left-start-on-rectangle',
  'arrow-long-down',
  'arrow-long-left',
  'arrow-long-right',
  'arrow-long-up',
  'arrow-path',
  'arrow-path-rounded-square',
  'arrow-right',
  'arrow-right-circle',
  'arrow-right-end-on-rectangle',
  'arrow-right-start-on-rectangle',
  'arrow-top-right-on-square',
  'arrow-trending-down',
  'arrow-trending-up',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-on-square',
  'arrow-up-on-square-stack',
  'arrow-up-right',
  'arrow-up-tray',
  'arrow-uturn-down',
  'arrow-uturn-left',
  'arrow-uturn-right',
  'arrow-uturn-up',
  'arrows-pointing-in',
  'arrows-pointing-out',
  'arrows-right-left',
  'arrows-up-down',
  'at-symbol',
  'backspace',
  'backward',
  'banknotes',
  'bars-2',
  'bars-3',
  'bars-3-bottom-left',
  'bars-3-bottom-right',
  'bars-3-center-left',
  'bars-4',
  'bars-arrow-down',
  'bars-arrow-up',
  'battery-0',
  'battery-50',
  'battery-100',
  'beaker',
  'bell',
  'bell-alert',
  'bell-slash',
  'bell-snooze',
  'bolt',
  'bolt-slash',
  'book-open',
  'bookmark',
  'bookmark-slash',
  'bookmark-square',
  'briefcase',
  'bug-ant',
  'building-library',
  'building-office',
  'building-office-2',
  'building-storefront',
  'cake',
  'calculator',
  'calendar',
  'calendar-days',
  'camera',
  'chart-bar',
  'chart-bar-square',
  'chart-pie',
  'chat-bubble-bottom-center',
  'chat-bubble-bottom-center-text',
  'chat-bubble-left',
  'chat-bubble-left-ellipsis',
  'chat-bubble-left-right',
  'chat-bubble-oval-left',
  'chat-bubble-oval-left-ellipsis',
  'check',
  'check-badge',
  'check-circle',
  'chevron-double-down',
  'chevron-double-left',
  'chevron-double-right',
  'chevron-double-up',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-up-down',
  'circle-stack',
  'clipboard',
  'clipboard-document',
  'clipboard-document-check',
  'clipboard-document-list',
  'clock',
  'cloud',
  'cloud-arrow-down',
  'cloud-arrow-up',
  'code-bracket',
  'code-bracket-square',
  'cog',
  'cog-6-tooth',
  'cog-8-tooth',
  'command-line',
  'computer-desktop',
  'cpu-chip',
  'credit-card',
  'cube',
  'cube-transparent',
  'currency-dollar',
  'cursor-arrow-rays',
  'cursor-arrow-ripple',
  'device-phone-mobile',
  'device-tablet',
  'document',
  'document-arrow-down',
  'document-arrow-up',
  'document-check',
  'document-duplicate',
  'document-magnifying-glass',
  'document-minus',
  'document-plus',
  'document-text',
  'ellipsis-horizontal',
  'ellipsis-horizontal-circle',
  'ellipsis-vertical',
  'envelope',
  'envelope-open',
  'exclamation-circle',
  'exclamation-triangle',
  'eye',
  'eye-dropper',
  'eye-slash',
  'face-frown',
  'face-smile',
  'film',
  'finger-print',
  'fire',
  'flag',
  'folder',
  'folder-arrow-down',
  'folder-minus',
  'folder-open',
  'folder-plus',
  'forward',
  'funnel',
  'gift',
  'gift-top',
  'globe-alt',
  'globe-americas',
  'globe-asia-australia',
  'globe-europe-africa',
  'hand-raised',
  'hand-thumb-down',
  'hand-thumb-up',
  'hashtag',
  'heart',
  'home',
  'home-modern',
  'identification',
  'inbox',
  'inbox-arrow-down',
  'inbox-stack',
  'information-circle',
  'key',
  'language',
  'light-bulb',
  'link',
  'list-bullet',
  'lock-closed',
  'lock-open',
  'magnifying-glass',
  'magnifying-glass-circle',
  'magnifying-glass-minus',
  'magnifying-glass-plus',
  'map',
  'map-pin',
  'megaphone',
  'microphone',
  'minus',
  'minus-circle',
  'minus-small',
  'moon',
  'musical-note',
  'newspaper',
  'no-symbol',
  'paint-brush',
  'paper-airplane',
  'paper-clip',
  'pause',
  'pause-circle',
  'pencil',
  'pencil-square',
  'phone',
  'photo',
  'play',
  'play-circle',
  'play-pause',
  'plus',
  'plus-circle',
  'plus-small',
  'power',
  'presentation-chart-bar',
  'presentation-chart-line',
  'printer',
  'puzzle-piece',
  'qr-code',
  'question-mark-circle',
  'queue-list',
  'radio',
  'rectangle-group',
  'rectangle-stack',
  'rocket-launch',
  'rss',
  'scale',
  'scissors',
  'server',
  'server-stack',
  'share',
  'shield-check',
  'shield-exclamation',
  'shopping-bag',
  'shopping-cart',
  'signal',
  'signal-slash',
  'sparkles',
  'speaker-wave',
  'speaker-x-mark',
  'square-2-stack',
  'square-3-stack-3d',
  'squares-2x2',
  'squares-plus',
  'star',
  'stop',
  'stop-circle',
  'sun',
  'swatch',
  'table-cells',
  'tag',
  'trash',
  'trophy',
  'truck',
  'tv',
  'user',
  'user-circle',
  'user-group',
  'user-minus',
  'user-plus',
  'users',
  'variable',
  'video-camera',
  'video-camera-slash',
  'view-columns',
  'view-finder-circle',
  'wifi',
  'window',
  'wrench',
  'wrench-screwdriver',
  'x-circle',
  'x-mark',
] as const;

export type IconName = (typeof ICONS)[number];

export type LinkIconType = {
  left?: IconsProperty;
  right?: IconsProperty;
  top?: IconsProperty;
};

export type ListGroup = { groupName: string; items: ListItem[] };

export type ListItem = {
  id: string;
  title: {
    text: string;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop';
  };
  subTitle?: {
    text: string;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop';
  };
  avatar?: {
    color?: string;
    icon: IconName;
    name?: string;
    src?: string;
    type?: 'round' | 'round-outline';
    useIcon?: boolean;
  };
  group?: string;
  role?: string;
  tags?: {
    id: number;
    text: string;
  }[];
};

export type ListItems = ListItem[];

export type Positions =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Tabs = Tab[];

export type Tab = {
  id: number;
  label: string;
  notifications: number;
  wcagLabel: string;
};

export type TextSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'; 