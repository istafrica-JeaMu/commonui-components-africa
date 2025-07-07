type SpinnerProps = {
    /**
     * @description The color of the spinner.
     */
    color: 'slate' | 'white';
    /**
     * @description The size of the spinner.
     */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * @description Whether the spinner is visible.
     */
    visible?: boolean;
};
declare const _default: import("vue").DefineComponent<SpinnerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SpinnerProps> & Readonly<{}>, {
    color: "slate" | "white";
    visible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
