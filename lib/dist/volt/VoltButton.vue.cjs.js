"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("../node_modules/.pnpm/primevue@4.3.6_vue@3.5.17_typescript@5.6.3_/node_modules/primevue/button/index.cjs.js"),o=require("./utils.cjs.js"),i=e.defineComponent({__name:"VoltButton",setup(d){const a=e.ref({root:`inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-3 py-2 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-colors duration-200
        bg-primary enabled:hover:bg-primary-emphasis enabled:active:bg-primary-emphasis-alt text-primary-contrast
        border border-primary enabled:hover:border-primary-emphasis enabled:active:border-primary-emphasis-alt
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        p-vertical:flex-col p-fluid:w-full p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-[1.125rem] p-large:px-[0.875rem] p-large:py-[0.625rem]
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-primary-50 enabled:active:p-outlined:bg-primary-100
        p-outlined:border-primary-200 enabled:hover:p-outlined:border-primary-200 enabled:active:p-outlined:border-primary-200
        p-outlined:text-primary enabled:hover:p-outlined:text-primary enabled:active:p-outlined:text-primary
        dark:p-outlined:bg-transparent dark:enabled:hover:p-outlined:bg-primary/5 dark:enabled:active:p-outlined:bg-primary/15
        dark:p-outlined:border-primary-700 dark:enabled:hover:p-outlined:border-primary-700 dark:enabled:active:p-outlined:border-primary-700
        dark:p-outlined:text-primary dark:enabled:hover:p-outlined:text-primary dark:enabled:active:p-outlined:text-primary
        p-text:bg-transparent enabled:hover:p-text:bg-primary-50 enabled:active:p-text:bg-primary-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-primary enabled:hover:p-text:text-primary enabled:active:p-text:text-primary
        dark:p-text:bg-transparent dark:enabled:hover:p-text:bg-primary/5 dark:enabled:active:p-text:bg-primary/15
        dark:p-text:border-transparent dark:enabled:hover:p-text:border-transparent dark:enabled:active:p-text:border-transparent
        dark:p-text:text-primary dark:enabled:hover:p-text:text-primary dark:enabled:active:p-text:text-primary
    `,loadingIcon:"",icon:"p-right:order-1 p-bottom:order-2",label:`font-medium p-icon-only:invisible p-icon-only:w-0
        p-small:text-sm p-large:text-[1.125rem]`,pcBadge:{root:"min-w-4 h-4 leading-4 bg-primary-contrast rounded-full text-primary text-xs font-bold"}});return(r,l)=>(e.openBlock(),e.createBlock(e.unref(p.default),{unstyled:"",pt:a.value,"pt-options":{mergeProps:e.unref(o.ptViewMerge)}},e.createSlots({_:2},[e.renderList(r.$slots,(b,t)=>({name:t,fn:e.withCtx(n=>[e.renderSlot(r.$slots,t,e.normalizeProps(e.guardReactiveProps(n??{})))])}))]),1032,["pt","pt-options"]))}});exports.default=i;
