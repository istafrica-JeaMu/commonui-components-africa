import { defineComponent as r, ref as t, createBlock as i, openBlock as n, unref as e } from "vue";
import s from "../node_modules/.pnpm/primevue@4.3.6_vue@3.5.17_typescript@5.6.3_/node_modules/primevue/inputtext/index.es.js";
import { ptViewMerge as d } from "./utils.es.js";
const b = /* @__PURE__ */ r({
  __name: "VoltInputText",
  setup(l) {
    const o = t({
      root: `w-full px-3 py-2 text-sm border border-border rounded-md
         bg-background text-foreground placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50
         invalid:border-destructive invalid:ring-destructive
         hover:border-border-hover transition-colors duration-200`
    });
    return (u, p) => (n(), i(e(s), {
      unstyled: "",
      pt: o.value,
      "pt-options": {
        mergeProps: e(d)
      }
    }, null, 8, ["pt", "pt-options"]));
  }
});
export {
  b as default
};
