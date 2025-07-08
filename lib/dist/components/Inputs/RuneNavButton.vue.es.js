import { defineComponent as u, computed as c, createElementBlock as r, openBlock as o, normalizeClass as a, createCommentVNode as l, createElementVNode as b, createVNode as m } from "vue";
import "../DataDisplay/RuneIcon.vue.es2.js";
import f from "../DataDisplay/RuneIcon.vue.es.js";
const v = ["aria-label", "aria-disabled", "disabled"], w = /* @__PURE__ */ u({
  __name: "RuneNavButton",
  props: {
    variant: { default: "primary" },
    type: { default: "back" },
    disabled: { type: Boolean, default: !1 },
    wcagLabel: {}
  },
  emits: ["click"],
  setup(s, { emit: i }) {
    const t = s, n = i;
    if (t.wcagLabel === void 0)
      throw new Error("The wcagLabel prop is required");
    const d = c(() => `${t.variant === "primary" ? "group-hover:shadow-md" : "group-hover:drop-shadow-md"}`), p = (e) => {
      t.disabled || n("click", e);
    };
    return (e, g) => (o(), r("button", {
      "aria-label": e.wcagLabel,
      "aria-disabled": e.disabled,
      disabled: e.disabled,
      class: a([e.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer group", "flex h-6 flex-row items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary transition-all duration-200"]),
      onClick: p
    }, [
      e.type === "next" ? (o(), r("span", {
        key: 0,
        class: a([e.variant === "primary" ? "pr-2" : "pr-0", "py-1 pl-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"])
      }, " Next ", 2)) : l("", !0),
      b("span", {
        class: a([
          "rounded-full",
          "p-1",
          "transition-all",
          "duration-200",
          e.variant === "primary" ? "bg-slate-800 group-hover:bg-slate-950 dark:bg-slate-700 dark:group-hover:bg-slate-600" : "bg-none"
        ])
      }, [
        m(f, {
          classes: "stroke-2",
          class: a(d.value),
          color: e.variant === "primary" ? "text-white" : "text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100",
          size: "xs",
          icon: e.type === "back" ? "arrow-left" : "arrow-right"
        }, null, 8, ["class", "color", "icon"])
      ], 2),
      e.type === "back" ? (o(), r("span", {
        key: 1,
        class: a([e.variant === "primary" ? "pl-2" : "pl-0", "py-1 pr-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"])
      }, " Back ", 2)) : l("", !0)
    ], 10, v));
  }
});
export {
  w as default
};
