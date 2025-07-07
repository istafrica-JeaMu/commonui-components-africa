import { type ButtonProps } from 'primevue/button';
interface Props extends /* @vue-ignore */ ButtonProps {
}
declare var __VLS_7: string | number, __VLS_8: any;
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_7>]?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
