import { defineComponent as $, computed as i, createBlock as a, openBlock as o, normalizeProps as R, guardReactiveProps as j, withCtx as I, createElementVNode as C, createElementBlock as f, createCommentVNode as s, toDisplayString as M } from "vue";
import "../DataDisplay/RuneIcon.vue.es2.js";
import "../Feedback/RuneSpinner.vue.es2.js";
import "../../volt/VoltButton.vue.es2.js";
import S from "../../volt/VoltButton.vue.es.js";
import v from "../Feedback/RuneSpinner.vue.es.js";
import m from "../DataDisplay/RuneIcon.vue.es.js";
const A = { class: "flex items-center justify-center w-full h-full" }, N = {
  key: 0,
  class: "flex items-center justify-center mr-2"
}, V = { class: "flex items-center justify-center" }, q = {
  key: 2,
  class: "font-semibold text-sm leading-tight"
}, D = {
  key: 1,
  class: "flex items-center justify-center ml-2"
}, Q = /* @__PURE__ */ $({
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
  setup(L) {
    var b, w, x, _;
    const e = L;
    if (e.wcagLabel === void 0)
      throw new Error("The wcagLabel prop is required");
    if ((b = e.icon) != null && b.center && e.text)
      throw new Error("A button can not have a center icon and text at the same time.");
    if (!((w = e.icon) != null && w.center) && !e.text)
      throw new Error("A button needs text or a center icon");
    if (!h() && e.text && e.loadingPlacement === "center")
      throw new Error('loadingPlacement is not allowed to have the value "center" if text is present.');
    if (((x = e.icon) != null && x.left || (_ = e.icon) != null && _.right) && !e.text)
      throw new Error("Left and Right icons may not be used if the button doesn't have text");
    if (e.faded === !0 && e.variant !== "secondary" && e.variant !== "tertiary")
      throw new Error("the faded prop is not allowed to be true on a " + e.variant + " button");
    const P = i(() => {
      const t = {
        disabled: e.disabled,
        "aria-label": e.wcagLabel,
        "aria-busy": e.loading,
        class: E(e.variant)
      };
      return e.size === "sm" ? t.size = "small" : e.size === "lg" && (t.size = "large"), e.variant === "danger" ? t.severity = "danger" : e.variant === "success" && (t.severity = "success"), e.variant === "tertiary" && (t.outlined = !0, t.text = !0), e.faded && (e.variant === "secondary" || e.variant === "tertiary") && (t.class += " !opacity-70 hover:!opacity-100"), h() && (t.rounded = !0, t.class += " !w-10 !h-10 !p-0"), t;
    });
    function h() {
      var t, r, n;
      return ((t = e.icon) == null ? void 0 : t.center) && !((r = e.icon) != null && r.left) && !((n = e.icon) != null && n.right) && !e.text;
    }
    const l = i(() => ({
      primary: "text-white",
      secondary: "text-white",
      tertiary: "text-action-primary dark:text-action-primary",
      danger: "text-white",
      success: "text-white"
    })[e.variant]), c = i(() => e.variant === "tertiary" ? "slate" : "white"), u = i(() => e.loading && e.loadingPlacement === "left"), p = i(() => e.loading && e.loadingPlacement === "center"), d = i(() => e.loading && e.loadingPlacement === "right"), y = i(() => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.left) && !u.value;
    }), B = i(
      () => {
        var t;
        return ((t = e.icon) == null ? void 0 : t.center) && !p.value && !e.text;
      }
    ), g = i(() => {
      var t;
      return ((t = e.icon) == null ? void 0 : t.right) && !d.value;
    });
    function E(t) {
      const r = "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
      return {
        primary: `${r} !bg-action-primary !text-white !border-action-primary 
              hover:!bg-action-primary/90 focus-visible:!outline-action-primary`,
        secondary: `${r} !bg-action-secondary !text-white !border-action-secondary 
                hover:!bg-action-secondary/90 focus-visible:!outline-action-secondary`,
        tertiary: `${r} !bg-transparent !text-action-primary !border-action-primary 
               hover:!bg-action-primary/10 focus-visible:!outline-action-primary`,
        danger: `${r} !bg-red-500 !text-white !border-red-500 
             hover:!bg-red-600 focus-visible:!outline-red-500`,
        success: `${r} !bg-green-500 !text-white !border-green-500 
              hover:!bg-green-600 focus-visible:!outline-green-500`
      }[t];
    }
    return (t, r) => (o(), a(S, R(j(P.value)), {
      default: I(() => {
        var n, k, z;
        return [
          C("div", A, [
            u.value || y.value ? (o(), f("div", N, [
              u.value ? (o(), a(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : y.value ? (o(), a(m, {
                key: 1,
                size: "xs",
                icon: (n = t.icon) == null ? void 0 : n.left,
                color: l.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : s("", !0)
            ])) : s("", !0),
            C("div", V, [
              p.value ? (o(), a(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : B.value ? (o(), a(m, {
                key: 1,
                size: "xs",
                icon: (k = t.icon) == null ? void 0 : k.center,
                color: l.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : t.text ? (o(), f("span", q, M(t.text), 1)) : s("", !0)
            ]),
            d.value || g.value ? (o(), f("div", D, [
              d.value ? (o(), a(v, {
                key: 0,
                visible: !0,
                color: c.value,
                size: "xs"
              }, null, 8, ["color"])) : g.value ? (o(), a(m, {
                key: 1,
                size: "xs",
                icon: (z = t.icon) == null ? void 0 : z.right,
                color: l.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : s("", !0)
            ])) : s("", !0)
          ])
        ];
      }),
      _: 1
    }, 16));
  }
});
export {
  Q as default
};
