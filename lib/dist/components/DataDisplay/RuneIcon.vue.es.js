import { defineComponent as h, ref as d, computed as c, isVNode as y, createElementBlock as l, openBlock as n, normalizeProps as z, guardReactiveProps as g, createBlock as w, createCommentVNode as k, resolveDynamicComponent as S, normalizeClass as r, createElementVNode as m, normalizeStyle as M, toDisplayString as x } from "vue";
const C = ["viewBox"], L = ["d", "fill"], _ = ["d"], b = /* @__PURE__ */ h({
  __name: "RuneIcon",
  props: {
    color: { default: "" },
    icon: { type: [String, Function, Object], default: void 0 },
    inline: { type: Boolean, default: !1 },
    path: { default: void 0 },
    size: { default: "md" },
    classes: { default: "" },
    type: { default: "outline" },
    variant: { default: void 0 }
  },
  setup(f) {
    const e = f;
    if (e.color && !e.color.includes("text-") && console.error(`props.color in RuneIcon is ${e.color}. Did you mean text-${e.color}?`), e.path && e.icon) throw new Error("Icons cannot have both icon and path");
    const u = d(), p = d(null), i = c(() => typeof e.icon == "string" && e.icon.startsWith("ms_") ? {
      xs: 20,
      sm: 24,
      md: 28,
      lg: 32,
      xl: 48
    }[e.size] || 24 : e.type === "solid" || e.type === "outline" ? 24 : e.type === "mini" ? 20 : 16), t = c(() => {
      const o = {
        xs: "size-5",
        // 20px
        sm: "size-6",
        // 24px
        md: "size-7",
        // 28px
        lg: "size-8",
        // 32px
        xl: "size-12"
        // 48px
      };
      if (typeof e.icon == "string" && e.icon.startsWith("ms_"))
        return [e.inline ? "inline-flex" : "", o[e.size], e.color];
      const a = {
        outline: "size-6",
        solid: "size-6",
        mini: "size-5",
        micro: "size-4"
      };
      return [
        e.inline ? "inline-flex" : "",
        a[e.variant] || o[e.size],
        e.color,
        e.classes
      ];
    }), s = c(() => (typeof e.icon == "function" || y(e.icon)) && e.icon !== void 0 ? (u.value = e.icon, "component") : typeof e.icon == "string" ? e.icon.startsWith("ms_") ? "material-symbols" : "heroicon" : e.path ? "svg" : void 0), v = (o) => ({
      "arrow-right": "M8.25 4.5l7.5 7.5-7.5 7.5",
      "arrow-left": "m15.75 19.5-7.5-7.5 7.5-7.5",
      check: "m4.5 12.75 6 6 9-13.5",
      "x-mark": "M6 18L18 6M6 6l12 12",
      plus: "M12 4.5v15m7.5-7.5h-15",
      minus: "M5 12h14"
    })[o] || "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", $ = {
      outline: "outlined",
      solid: "sharp"
    };
    return (o, a) => (n(), l("div", z(g(o.$attrs)), [
      s.value === "component" ? (n(), w(S(u.value), {
        key: 0,
        ref_key: "iconElem",
        ref: p,
        class: r(t.value)
      }, null, 8, ["class"])) : s.value === "svg" ? (n(), l("svg", {
        key: 1,
        ref: p.value,
        class: r(t.value),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: o.variant ? `0 0 ${i.value} ${i.value}` : "0 0 24 24",
        "aria-hidden": "true",
        "data-slot": "icon"
      }, [
        m("path", {
          d: o.path,
          fill: o.variant ? o.color : "currentColor"
        }, null, 8, L)
      ], 10, C)) : s.value === "material-symbols" ? (n(), l("span", {
        key: 2,
        class: r(t.value),
        style: M({
          fontFamily: "Material Symbols Outlined",
          fontSize: `${i.value}px`,
          fontVariationSettings: `'FILL' ${e.variant === "solid" ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${i.value}`
        })
      }, x(typeof o.icon == "string" ? o.icon.substring(3) : ""), 7)) : s.value === "heroicon" ? (n(), l("svg", {
        key: 3,
        class: r(t.value),
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
      }, [
        m("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: v(typeof o.icon == "string" ? o.icon : "")
        }, null, 8, _)
      ], 2)) : k("", !0)
    ], 16));
  }
});
export {
  b as default
};
