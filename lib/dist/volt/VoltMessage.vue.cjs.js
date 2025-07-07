"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=require("../node_modules/.pnpm/primevue@4.3.6_vue@3.5.17_typescript@5.6.3_/node_modules/primevue/message/index.cjs.js"),d=require("./utils.cjs.js"),s=e.defineComponent({__name:"VoltMessage",setup(p){const t=e.ref({root:`relative w-full rounded-lg border px-4 py-3 text-sm
         p-info:border-blue-200 p-info:bg-blue-50 p-info:text-blue-800
         p-success:border-green-200 p-success:bg-green-50 p-success:text-green-800
         p-warn:border-yellow-200 p-warn:bg-yellow-50 p-warn:text-yellow-800
         p-error:border-red-200 p-error:bg-red-50 p-error:text-red-800
         p-secondary:border-gray-200 p-secondary:bg-gray-50 p-secondary:text-gray-800
         dark:p-info:border-blue-800 dark:p-info:bg-blue-950 dark:p-info:text-blue-200
         dark:p-success:border-green-800 dark:p-success:bg-green-950 dark:p-success:text-green-200
         dark:p-warn:border-yellow-800 dark:p-warn:bg-yellow-950 dark:p-warn:text-yellow-200
         dark:p-error:border-red-800 dark:p-error:bg-red-950 dark:p-error:text-red-200
         dark:p-secondary:border-gray-800 dark:p-secondary:bg-gray-950 dark:p-secondary:text-gray-200`,icon:"flex-shrink-0 w-4 h-4",text:"flex-1",closeButton:`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-gray-100 
              inline-flex h-8 w-8 text-gray-500 hover:text-gray-900 focus:ring-gray-400
              dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`,closeIcon:"w-3 h-3"});return(r,l)=>(e.openBlock(),e.createBlock(e.unref(n.default),{unstyled:"",pt:t.value,"pt-options":{mergeProps:e.unref(d.ptViewMerge)}},e.createSlots({_:2},[e.renderList(r.$slots,(u,o)=>({name:o,fn:e.withCtx(a=>[e.renderSlot(r.$slots,o,e.normalizeProps(e.guardReactiveProps(a??{})))])}))]),1032,["pt","pt-options"]))}});exports.default=s;
