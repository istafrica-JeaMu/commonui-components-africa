type NavButtonProps = {
    /**
     * @description Variant of the button.
     */
    variant?: 'primary' | 'secondary';
    /**
     * @description Type of the button.
     */
    type?: 'back' | 'next';
    /**
     * @description Disables the button and sets aria-disabled to true.
     */
    disabled?: boolean;
    /**
     * @description Describes the content for screen readers.
     */
    wcagLabel: string;
};
declare const _default: import("vue").DefineComponent<NavButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<NavButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    type: "back" | "next";
    variant: "primary" | "secondary";
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
