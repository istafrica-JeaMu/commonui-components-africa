import { defineComponent as R, computed as a, createBlock as r, openBlock as o, normalizeProps as I, guardReactiveProps as S, withCtx as $, createElementVNode as L, createElementBlock as f, createCommentVNode as i, toDisplayString as A } from "vue";
import "../DataDisplay/RuneIcon.vue.es2.js";
import "../Feedback/RuneSpinner.vue.es2.js";
import "../../volt/VoltButton.vue.es2.js";
import M from "../../volt/VoltButton.vue.es.js";
import v from "../Feedback/RuneSpinner.vue.es.js";
import m from "../DataDisplay/RuneIcon.vue.es.js";
const N = { class: "flex items-center justify-center w-full" }, V = {
  key: 0,
  class: "mr-2"
}, j = {
  key: 2,
  class: "font-semibold"
}, q = {
  key: 1,
  class: "ml-2"
}, K = /* @__PURE__ */ R({
  __name: "RuneButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    faded: { type: Boolean, default: !1 },
    icon: { default: void 0 },
    loading: { type: Boolean, default: !1 },
    loadingPlacement: { default: "right" },
    size: { default: "md" },
    text: { default: void 0 },
    variant: { default: "primary" },
    wcagLabel: {}
  },
  setup(P) {
    var w, b, x, k;
    const e = P;
    if (e.wcagLabel === void 0)
      throw new Error("The wcagLabel prop is required");
    if ((w = e.icon) != null && w.center && e.text)
      throw new Error("A button can not have a center icon and text at the same time.");
    if (!((b = e.icon) != null && b.center) && !e.text)
      throw new Error("A button needs text or a center icon");
    if (!g() && e.text && e.loadingPlacement === "center")
      throw new Error('loadingPlacement is not allowed to have the value "center" if text is present.');
    if (((x = e.icon) != null && x.left || (k = e.icon) != null && k.right) && !e.text)
      throw new Error("Left and Right icons may not be used if the button doesn't have text");
    if (e.faded === !0 && e.variant !== "secondary" && e.variant !== "tertiary")
      throw new Error("the faded prop is not allowed to be true on a " + e.variant + " button");
    const C = a(() => {
      const t = {
        disabled: e.disabled,
        "aria-label": e.wcagLabel,
        "aria-busy": e.loading,
        class: E(e.variant)
      };
      return e.size === "sm" ? t.size = "small" : e.size === "lg" && (t.size = "large"), e.variant === "danger" ? t.severity = "danger" : e.variant === "success" && (t.severity = "success"), e.variant === "tertiary" && (t.outlined = !0), e.variant === "tertiary" && (t.text = !0), e.faded && (t.plain = !0), g() && (t.rounded = !0), t;
    });
    function g() {
      var t, l, n;
      return ((t = e.icon) == null ? void 0 : t.center) && !((l = e.icon) != null && l.left) && !((n = e.icon) != null && n.right) && !e.text;
    }
    const s = a(() => e.variant === "secondary" || e.variant === "tertiary" ? "text-slate-800 dark:text-slate-200" : "text-white dark:text-slate-800"), c = a(() => e.variant === "secondary" || e.variant === "tertiary" ? "slate" : "white"), u = a(() => e.loading && e.loadingPlacement === "left"), p = a(() => e.loading && e.loadingPlacement === "center"), d = a(() => e.loading && e.loadingPlacement === "right"), h = a(() => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.left) && !u.value;
    }), B = a(
      () => {
        var t;
        return ((t = e.icon) == null ? void 0 : t.center) && !p.value && !e.text;
      }
    ), y = a(() => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.right) && !d.value;
    });
    function E(t) {
      return {
        primary: "!bg-action-primary",
        secondary: "!bg-action-secondary",
        tertiary: "bg-transparent",
        danger: "!bg-surface-danger !text-danger-small",
        success: "!bg-green-600"
      }[t];
    }
    return (t, l) => (o(), r(M, I(S(C.value)), {
      default: $(() => {
        var n, _, z;
        return [
          L("div", N, [
            u.value || h.value ? (o(), f("div", V, [
              u.value ? (o(), r(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : h.value ? (o(), r(m, {
                key: 1,
                size: "xs",
                icon: (n = t.icon) == null ? void 0 : n.left,
                color: s.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : i("", !0)
            ])) : i("", !0),
            L("div", null, [
              p.value ? (o(), r(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : B.value ? (o(), r(m, {
                key: 1,
                size: "xs",
                icon: (_ = t.icon) == null ? void 0 : _.center,
                color: s.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : t.text ? (o(), f("span", j, A(t.text), 1)) : i("", !0)
            ]),
            d.value || y.value ? (o(), f("div", q, [
              d.value ? (o(), r(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : y.value ? (o(), r(m, {
                key: 1,
                size: "xs",
                icon: (z = t.icon) == null ? void 0 : z.right,
                color: s.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : i("", !0)
            ])) : i("", !0)
          ])
        ];
      }),
      _: 1
    }, 16));
  }
});
export {
  K as default
};
