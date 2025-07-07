import { ButtonIconType } from '../types';
type ButtonProps = {
    /**
     * @description Disables the button and sets attribute _aria-disabled_ to true.
     */
    disabled?: boolean;
    /**
     * @description Changes hover background oapcity to 40%. Only for Secondary and Tertiary.
     */
    faded?: boolean;
    /**
     * @description Adds an icon based on the values passed to the subproperties.
     * @example  {left: 'arrow-right-long'}
     */
    icon?: ButtonIconType;
    /**
     * @description Sets aria-busy to true. Adds a spinner based on the placement subproperty. Replaces the icon on the chosen placement if it clashes.
     */
    loading?: boolean;
    /**
     * @description The placement of the loading spinner. Will temporarily replace whatever inhabits the chosen placement.
     */
    loadingPlacement?: 'left' | 'center' | 'right';
    /**
     * @description Size of the button.
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * @description The button text content.
     */
    text?: string;
    /**
     * @description Sets the button's color.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
    /**
     * @description Describes the content for screen readers.
     */
    wcagLabel: string;
};
declare const _default: import("vue").DefineComponent<ButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
    icon: ButtonIconType;
    size: "sm" | "md" | "lg";
    variant: "primary" | "secondary" | "tertiary" | "danger" | "success";
    text: string;
    loading: boolean;
    disabled: boolean;
    faded: boolean;
    loadingPlacement: "left" | "center" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
