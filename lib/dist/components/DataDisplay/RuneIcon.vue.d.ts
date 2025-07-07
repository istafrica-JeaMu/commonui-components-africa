import type { IconsProperty, Sizes } from '../types';
type IconProps = {
    /**
     * @description Color of the icon. e.g "text-amber-600".
     */
    color?: string;
    /**
     * @description Name or VNode of the icon.
     */
    icon?: IconsProperty;
    /**
     * @description Whether or not the icon should be inline.
     */
    inline?: boolean;
    /**
     * @description Svg path of the icon (__used as a fallback for when external resources are not allowed__).
     */
    path?: string;
    /**
     * @description Size of the icon, `xs` is 16px and increments by 4px up to 36px.
     * For Material Symbols, this also controls the optical size.
     */
    size?: Sizes;
    /**
     * @description Additional classes of the icon. e.g "stroke-1 stroke-white" etc..
     */
    classes?: string;
    /**
     * @description Type of the icon.
     * For Material Symbols: 'outline' = outlined, 'solid' = sharp
     */
    type?: 'outline' | 'solid';
    /**
     * @description Variant of the icon.
     * For Material Symbols: 'solid' = filled, 'outline' = unfilled
     */
    variant?: 'outline' | 'solid' | 'mini' | 'micro' | undefined;
};
declare const _default: import("vue").DefineComponent<IconProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<IconProps> & Readonly<{}>, {
    color: string;
    icon: IconsProperty;
    inline: boolean;
    path: string;
    size: Sizes;
    classes: string;
    type: "outline" | "solid";
    variant: "outline" | "solid" | "mini" | "micro";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
