import { defineComponent as o, ref as t, createBlock as i, openBlock as n, unref as e } from "vue";
import s from "../node_modules/.pnpm/primevue@4.3.6_vue@3.5.17_typescript@5.6.3_/node_modules/primevue/textarea/index.es.js";
import { ptViewMerge as d } from "./utils.es.js";
const m = /* @__PURE__ */ o({
  __name: "VoltTextarea",
  setup(l) {
    const r = t({
      root: `w-full px-3 py-2 text-sm border border-border rounded-md
         bg-background text-foreground placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50
         invalid:border-destructive invalid:ring-destructive
         hover:border-border-hover transition-colors duration-200
         resize-none min-h-[80px]`
    });
    return (p, u) => (n(), i(e(s), {
      unstyled: "",
      pt: r.value,
      "pt-options": {
        mergeProps: e(d)
      }
    }, null, 8, ["pt", "pt-options"]));
  }
});
export {
  m as default
};
