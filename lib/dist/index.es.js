import W from "primevue/config";
import { defineComponent as v, ref as g, computed as u, isVNode as U, createElementBlock as f, openBlock as l, normalizeProps as S, guardReactiveProps as $, createBlock as p, createCommentVNode as h, resolveDynamicComponent as Z, normalizeClass as b, createElementVNode as w, normalizeStyle as G, toDisplayString as A, withDirectives as J, vShow as Q, unref as y, createSlots as O, renderList as N, withCtx as D, renderSlot as H, createVNode as X } from "vue";
import ee from "primevue/button";
import re from "primevue/inputtext";
import te from "primevue/textarea";
import oe from "primevue/message";
const ne = ["viewBox"], ae = ["d", "fill"], ie = ["d"], C = /* @__PURE__ */ v({
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
  setup(r) {
    const e = r;
    if (e.color && !e.color.includes("text-") && console.error(`props.color in RuneIcon is ${e.color}. Did you mean text-${e.color}?`), e.path && e.icon) throw new Error("Icons cannot have both icon and path");
    const t = g(), o = g(null), a = u(() => typeof e.icon == "string" && e.icon.startsWith("ms_") ? {
      xs: 20,
      sm: 24,
      md: 28,
      lg: 32,
      xl: 48
    }[e.size] || 24 : e.type === "solid" || e.type === "outline" ? 24 : e.type === "mini" ? 20 : 16), i = u(() => {
      const c = {
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
        return [e.inline ? "inline-flex" : "", c[e.size], e.color];
      const x = {
        outline: "size-6",
        solid: "size-6",
        mini: "size-5",
        micro: "size-4"
      };
      return [
        e.inline ? "inline-flex" : "",
        x[e.variant] || c[e.size],
        e.color,
        e.classes
      ];
    }), n = u(() => (typeof e.icon == "function" || U(e.icon)) && e.icon !== void 0 ? (t.value = e.icon, "component") : typeof e.icon == "string" ? e.icon.startsWith("ms_") ? "material-symbols" : "heroicon" : e.path ? "svg" : void 0), d = (c) => ({
      "arrow-right": "M8.25 4.5l7.5 7.5-7.5 7.5",
      "arrow-left": "m15.75 19.5-7.5-7.5 7.5-7.5",
      check: "m4.5 12.75 6 6 9-13.5",
      "x-mark": "M6 18L18 6M6 6l12 12",
      plus: "M12 4.5v15m7.5-7.5h-15",
      minus: "M5 12h14"
    })[c] || "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
    return (c, x) => (l(), f("div", S($(c.$attrs)), [
      n.value === "component" ? (l(), p(Z(t.value), {
        key: 0,
        ref_key: "iconElem",
        ref: o,
        class: b(i.value)
      }, null, 8, ["class"])) : n.value === "svg" ? (l(), f("svg", {
        key: 1,
        ref: o.value,
        class: b(i.value),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: c.variant ? `0 0 ${a.value} ${a.value}` : "0 0 24 24",
        "aria-hidden": "true",
        "data-slot": "icon"
      }, [
        w("path", {
          d: c.path,
          fill: c.variant ? c.color : "currentColor"
        }, null, 8, ae)
      ], 10, ne)) : n.value === "material-symbols" ? (l(), f("span", {
        key: 2,
        class: b(i.value),
        style: G({
          fontFamily: "Material Symbols Outlined",
          fontSize: `${a.value}px`,
          fontVariationSettings: `'FILL' ${e.variant === "solid" ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${a.value}`
        })
      }, A(typeof c.icon == "string" ? c.icon.substring(3) : ""), 7)) : n.value === "heroicon" ? (l(), f("svg", {
        key: 3,
        class: b(i.value),
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
      }, [
        w("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: d(typeof c.icon == "string" ? c.icon : "")
        }, null, 8, ie)
      ], 2)) : h("", !0)
    ], 16));
  }
}), se = ["fill"], le = ["fill"], _ = /* @__PURE__ */ v({
  __name: "RuneSpinner",
  props: {
    color: { default: "slate" },
    size: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(r) {
    const e = r, t = u(() => ({
      xs: "size-4",
      sm: "size-5",
      md: "size-6",
      lg: "size-8",
      xl: "size-12"
    })[e.size]), o = u(() => ({
      slate: "#1E293B",
      white: "white"
    })[e.color]);
    return (a, i) => J((l(), f("svg", {
      class: b(["animate-spin", t.value]),
      viewBox: "0 0 25 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      w("path", {
        opacity: "0.2",
        d: "M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM4.17087 12C4.17087 16.6001 7.89995 20.3291 12.5 20.3291C17.1001 20.3291 20.8291 16.6001 20.8291 12C20.8291 7.39995 17.1001 3.67087 12.5 3.67087C7.89995 3.67087 4.17087 7.39995 4.17087 12Z",
        fill: o.value
      }, null, 8, se),
      w("path", {
        d: "M12.5 22.1646C12.5 23.1782 11.6735 24.0144 10.6717 23.8599C9.25924 23.6422 7.89203 23.1731 6.63654 22.47C4.84514 21.4667 3.34111 20.0206 2.26832 18.27C1.19553 16.5193 0.589859 14.5227 0.509251 12.4711C0.428644 10.4195 0.875791 8.38152 1.80792 6.55211C2.74005 4.7227 4.12599 3.16306 5.83316 2.02236C7.54033 0.881669 9.51163 0.198083 11.5585 0.0369917C13.6054 -0.1241 15.6593 0.242693 17.5239 1.10228C18.8307 1.70472 20.0138 2.53508 21.0202 3.54979C21.734 4.26952 21.5434 5.42959 20.7233 6.02542C19.9032 6.62125 18.766 6.41974 18.0053 5.74973C17.4022 5.21846 16.7229 4.77516 15.9871 4.43596C14.6929 3.83932 13.2672 3.58473 11.8465 3.69654C10.4258 3.80835 9.05752 4.28283 7.87258 5.07458C6.68765 5.86633 5.72568 6.94887 5.07869 8.21865C4.4317 9.48843 4.12134 10.903 4.17729 12.327C4.23324 13.751 4.65363 15.1369 5.39825 16.352C6.14286 17.5671 7.1868 18.5708 8.43021 19.2671C9.13711 19.663 9.89504 19.952 10.6794 20.1277C11.6685 20.3493 12.5 21.1509 12.5 22.1646Z",
        fill: o.value
      }, null, 8, le)
    ], 2)), [
      [Q, a.visible]
    ]);
  }
});
function z(r, e) {
  if (r && e) {
    if (typeof r == "string" && typeof e == "string")
      return `${r} ${e}`;
    if (typeof r == "object" && typeof e == "object")
      return { ...r, ...e };
  }
  return e || r;
}
function ze(r) {
  return {
    ...r,
    mergeProps: z
  };
}
const Se = {
  transition: "transition-all duration-200 ease-in-out",
  focus: "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
  disabled: "disabled:pointer-events-none disabled:opacity-60",
  rounded: "rounded-md",
  border: "border border-border",
  spacing: "px-3 py-2",
  text: "text-sm font-medium"
}, ce = /* @__PURE__ */ v({
  __name: "VoltButton",
  setup(r) {
    const e = g({
      root: `inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-4 py-2.5 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-all duration-200
        bg-primary enabled:hover:bg-primary-emphasis enabled:active:bg-primary-emphasis-alt text-primary-contrast
        border border-primary enabled:hover:border-primary-emphasis enabled:active:border-primary-emphasis-alt
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        font-medium text-sm min-h-[40px] shadow-sm
        p-vertical:flex-col p-fluid:w-full p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0 p-icon-only:min-h-[40px]
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-xs p-small:px-3 p-small:py-2 p-small:min-h-[32px]
        p-large:text-base p-large:px-6 p-large:py-3 p-large:min-h-[48px]
        p-raised:shadow-md p-rounded:rounded-[2rem]
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
    `,
      loadingIcon: "",
      icon: "p-right:order-1 p-bottom:order-2",
      label: `font-semibold p-icon-only:invisible p-icon-only:w-0
        p-small:text-xs p-large:text-base`,
      pcBadge: {
        root: "min-w-4 h-4 leading-4 bg-primary-contrast rounded-full text-primary text-xs font-bold"
      }
    });
    return (t, o) => (l(), p(y(ee), {
      unstyled: "",
      pt: e.value,
      "pt-options": {
        mergeProps: y(z)
      }
    }, O({ _: 2 }, [
      N(t.$slots, (a, i) => ({
        name: i,
        fn: D((n) => [
          H(t.$slots, i, S($(n ?? {})))
        ])
      }))
    ]), 1032, ["pt", "pt-options"]));
  }
}), ue = { class: "flex items-center justify-center w-full h-full" }, de = {
  key: 0,
  class: "flex items-center justify-center mr-2"
}, pe = { class: "flex items-center justify-center" }, fe = {
  key: 2,
  class: "font-semibold text-sm leading-tight"
}, be = {
  key: 1,
  class: "flex items-center justify-center ml-2"
}, R = /* @__PURE__ */ v({
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
  setup(r) {
    var E, L, T, I;
    const e = r;
    if (e.wcagLabel === void 0)
      throw new Error("The wcagLabel prop is required");
    if ((E = e.icon) != null && E.center && e.text)
      throw new Error("A button can not have a center icon and text at the same time.");
    if (!((L = e.icon) != null && L.center) && !e.text)
      throw new Error("A button needs text or a center icon");
    if (!o() && e.text && e.loadingPlacement === "center")
      throw new Error('loadingPlacement is not allowed to have the value "center" if text is present.');
    if (((T = e.icon) != null && T.left || (I = e.icon) != null && I.right) && !e.text)
      throw new Error("Left and Right icons may not be used if the button doesn't have text");
    if (e.faded === !0 && e.variant !== "secondary" && e.variant !== "tertiary")
      throw new Error("the faded prop is not allowed to be true on a " + e.variant + " button");
    const t = u(() => {
      const s = {
        disabled: e.disabled,
        "aria-label": e.wcagLabel,
        "aria-busy": e.loading,
        class: K(e.variant)
      };
      return e.size === "sm" ? s.size = "small" : e.size === "lg" && (s.size = "large"), e.variant === "danger" ? s.severity = "danger" : e.variant === "success" && (s.severity = "success"), e.variant === "tertiary" && (s.outlined = !0, s.text = !0), e.faded && (e.variant === "secondary" || e.variant === "tertiary") && (s.class += " !opacity-70 hover:!opacity-100"), o() && (s.rounded = !0, s.class += " !w-10 !h-10 !p-0"), s;
    });
    function o() {
      var s, m, k;
      return ((s = e.icon) == null ? void 0 : s.center) && !((m = e.icon) != null && m.left) && !((k = e.icon) != null && k.right) && !e.text;
    }
    const a = u(() => ({
      primary: "text-white",
      secondary: "text-white",
      tertiary: "text-action-primary dark:text-action-primary",
      danger: "text-white",
      success: "text-white"
    })[e.variant]), i = u(() => e.variant === "tertiary" ? "slate" : "white"), n = u(() => e.loading && e.loadingPlacement === "left"), d = u(() => e.loading && e.loadingPlacement === "center"), c = u(() => e.loading && e.loadingPlacement === "right"), x = u(() => {
      var s;
      return ((s = e.icon) == null ? void 0 : s.left) && !n.value;
    }), F = u(
      () => {
        var s;
        return ((s = e.icon) == null ? void 0 : s.center) && !d.value && !e.text;
      }
    ), M = u(() => {
      var s;
      return ((s = e.icon) == null ? void 0 : s.right) && !c.value;
    });
    function K(s) {
      const m = "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
      return {
        primary: `${m} !bg-action-primary !text-white !border-action-primary 
              hover:!bg-action-primary/90 focus-visible:!outline-action-primary`,
        secondary: `${m} !bg-action-secondary !text-white !border-action-secondary 
                hover:!bg-action-secondary/90 focus-visible:!outline-action-secondary`,
        tertiary: `${m} !bg-transparent !text-action-primary !border-action-primary 
               hover:!bg-action-primary/10 focus-visible:!outline-action-primary`,
        danger: `${m} !bg-red-500 !text-white !border-red-500 
             hover:!bg-red-600 focus-visible:!outline-red-500`,
        success: `${m} !bg-green-500 !text-white !border-green-500 
              hover:!bg-green-600 focus-visible:!outline-green-500`
      }[s];
    }
    return (s, m) => (l(), p(ce, S($(t.value)), {
      default: D(() => {
        var k, q, P;
        return [
          w("div", ue, [
            n.value || x.value ? (l(), f("div", de, [
              n.value ? (l(), p(_, {
                key: 0,
                visible: !0,
                color: i.value,
                size: "xs"
              }, null, 8, ["color"])) : x.value ? (l(), p(C, {
                key: 1,
                size: "xs",
                icon: (k = s.icon) == null ? void 0 : k.left,
                color: a.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : h("", !0)
            ])) : h("", !0),
            w("div", pe, [
              d.value ? (l(), p(_, {
                key: 0,
                visible: !0,
                color: i.value,
                size: "xs"
              }, null, 8, ["color"])) : F.value ? (l(), p(C, {
                key: 1,
                size: "xs",
                icon: (q = s.icon) == null ? void 0 : q.center,
                color: a.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : s.text ? (l(), f("span", fe, A(s.text), 1)) : h("", !0)
            ]),
            c.value || M.value ? (l(), f("div", be, [
              c.value ? (l(), p(_, {
                key: 0,
                visible: !0,
                color: i.value,
                size: "xs"
              }, null, 8, ["color"])) : M.value ? (l(), p(C, {
                key: 1,
                size: "xs",
                icon: (P = s.icon) == null ? void 0 : P.right,
                color: a.value,
                classes: "stroke-2"
              }, null, 8, ["icon", "color"])) : h("", !0)
            ])) : h("", !0)
          ])
        ];
      }),
      _: 1
    }, 16));
  }
}), ge = ["aria-label", "aria-disabled", "disabled"], j = /* @__PURE__ */ v({
  __name: "RuneNavButton",
  props: {
    variant: { default: "primary" },
    type: { default: "back" },
    disabled: { type: Boolean, default: !1 },
    wcagLabel: {}
  },
  emits: ["click"],
  setup(r, { emit: e }) {
    const t = r, o = e;
    if (t.wcagLabel === void 0)
      throw new Error("The wcagLabel prop is required");
    const a = u(() => `${t.variant === "primary" ? "group-hover:shadow-md" : "group-hover:drop-shadow-md"}`), i = (n) => {
      t.disabled || o("click", n);
    };
    return (n, d) => (l(), f("button", {
      "aria-label": n.wcagLabel,
      "aria-disabled": n.disabled,
      disabled: n.disabled,
      class: b([n.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer group", "flex h-6 flex-row items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary transition-all duration-200"]),
      onClick: i
    }, [
      n.type === "next" ? (l(), f("span", {
        key: 0,
        class: b([n.variant === "primary" ? "pr-2" : "pr-0", "py-1 pl-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"])
      }, " Next ", 2)) : h("", !0),
      w("span", {
        class: b([
          "rounded-full",
          "p-1",
          "transition-all",
          "duration-200",
          n.variant === "primary" ? "bg-slate-800 group-hover:bg-slate-950 dark:bg-slate-700 dark:group-hover:bg-slate-600" : "bg-none"
        ])
      }, [
        X(C, {
          classes: "stroke-2",
          class: b(a.value),
          color: n.variant === "primary" ? "text-white" : "text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100",
          size: "xs",
          icon: n.type === "back" ? "arrow-left" : "arrow-right"
        }, null, 8, ["class", "color", "icon"])
      ], 2),
      n.type === "back" ? (l(), f("span", {
        key: 1,
        class: b([n.variant === "primary" ? "pl-2" : "pl-0", "py-1 pr-0.5 text-xs font-bold text-slate-800 group-hover:text-slate-950 dark:text-slate-200 dark:group-hover:text-slate-100"])
      }, " Back ", 2)) : h("", !0)
    ], 10, ge));
  }
}), me = [
  "academic-cap",
  "adjustments-horizontal",
  "adjustments-vertical",
  "archive-box",
  "archive-box-arrow-down",
  "archive-box-x-mark",
  "arrow-down",
  "arrow-down-circle",
  "arrow-down-left",
  "arrow-down-on-square",
  "arrow-down-on-square-stack",
  "arrow-down-right",
  "arrow-down-tray",
  "arrow-left",
  "arrow-left-circle",
  "arrow-left-end-on-rectangle",
  "arrow-left-start-on-rectangle",
  "arrow-long-down",
  "arrow-long-left",
  "arrow-long-right",
  "arrow-long-up",
  "arrow-path",
  "arrow-path-rounded-square",
  "arrow-right",
  "arrow-right-circle",
  "arrow-right-end-on-rectangle",
  "arrow-right-start-on-rectangle",
  "arrow-top-right-on-square",
  "arrow-trending-down",
  "arrow-trending-up",
  "arrow-up",
  "arrow-up-circle",
  "arrow-up-left",
  "arrow-up-on-square",
  "arrow-up-on-square-stack",
  "arrow-up-right",
  "arrow-up-tray",
  "arrow-uturn-down",
  "arrow-uturn-left",
  "arrow-uturn-right",
  "arrow-uturn-up",
  "arrows-pointing-in",
  "arrows-pointing-out",
  "arrows-right-left",
  "arrows-up-down",
  "at-symbol",
  "backspace",
  "backward",
  "banknotes",
  "bars-2",
  "bars-3",
  "bars-3-bottom-left",
  "bars-3-bottom-right",
  "bars-3-center-left",
  "bars-4",
  "bars-arrow-down",
  "bars-arrow-up",
  "battery-0",
  "battery-50",
  "battery-100",
  "beaker",
  "bell",
  "bell-alert",
  "bell-slash",
  "bell-snooze",
  "bolt",
  "bolt-slash",
  "book-open",
  "bookmark",
  "bookmark-slash",
  "bookmark-square",
  "briefcase",
  "bug-ant",
  "building-library",
  "building-office",
  "building-office-2",
  "building-storefront",
  "cake",
  "calculator",
  "calendar",
  "calendar-days",
  "camera",
  "chart-bar",
  "chart-bar-square",
  "chart-pie",
  "chat-bubble-bottom-center",
  "chat-bubble-bottom-center-text",
  "chat-bubble-left",
  "chat-bubble-left-ellipsis",
  "chat-bubble-left-right",
  "chat-bubble-oval-left",
  "chat-bubble-oval-left-ellipsis",
  "check",
  "check-badge",
  "check-circle",
  "chevron-double-down",
  "chevron-double-left",
  "chevron-double-right",
  "chevron-double-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "chevron-up-down",
  "circle-stack",
  "clipboard",
  "clipboard-document",
  "clipboard-document-check",
  "clipboard-document-list",
  "clock",
  "cloud",
  "cloud-arrow-down",
  "cloud-arrow-up",
  "code-bracket",
  "code-bracket-square",
  "cog",
  "cog-6-tooth",
  "cog-8-tooth",
  "command-line",
  "computer-desktop",
  "cpu-chip",
  "credit-card",
  "cube",
  "cube-transparent",
  "currency-dollar",
  "cursor-arrow-rays",
  "cursor-arrow-ripple",
  "device-phone-mobile",
  "device-tablet",
  "document",
  "document-arrow-down",
  "document-arrow-up",
  "document-check",
  "document-duplicate",
  "document-magnifying-glass",
  "document-minus",
  "document-plus",
  "document-text",
  "ellipsis-horizontal",
  "ellipsis-horizontal-circle",
  "ellipsis-vertical",
  "envelope",
  "envelope-open",
  "exclamation-circle",
  "exclamation-triangle",
  "eye",
  "eye-dropper",
  "eye-slash",
  "face-frown",
  "face-smile",
  "film",
  "finger-print",
  "fire",
  "flag",
  "folder",
  "folder-arrow-down",
  "folder-minus",
  "folder-open",
  "folder-plus",
  "forward",
  "funnel",
  "gift",
  "gift-top",
  "globe-alt",
  "globe-americas",
  "globe-asia-australia",
  "globe-europe-africa",
  "hand-raised",
  "hand-thumb-down",
  "hand-thumb-up",
  "hashtag",
  "heart",
  "home",
  "home-modern",
  "identification",
  "inbox",
  "inbox-arrow-down",
  "inbox-stack",
  "information-circle",
  "key",
  "language",
  "light-bulb",
  "link",
  "list-bullet",
  "lock-closed",
  "lock-open",
  "magnifying-glass",
  "magnifying-glass-circle",
  "magnifying-glass-minus",
  "magnifying-glass-plus",
  "map",
  "map-pin",
  "megaphone",
  "microphone",
  "minus",
  "minus-circle",
  "minus-small",
  "moon",
  "musical-note",
  "newspaper",
  "no-symbol",
  "paint-brush",
  "paper-airplane",
  "paper-clip",
  "pause",
  "pause-circle",
  "pencil",
  "pencil-square",
  "phone",
  "photo",
  "play",
  "play-circle",
  "play-pause",
  "plus",
  "plus-circle",
  "plus-small",
  "power",
  "presentation-chart-bar",
  "presentation-chart-line",
  "printer",
  "puzzle-piece",
  "qr-code",
  "question-mark-circle",
  "queue-list",
  "radio",
  "rectangle-group",
  "rectangle-stack",
  "rocket-launch",
  "rss",
  "scale",
  "scissors",
  "server",
  "server-stack",
  "share",
  "shield-check",
  "shield-exclamation",
  "shopping-bag",
  "shopping-cart",
  "signal",
  "signal-slash",
  "sparkles",
  "speaker-wave",
  "speaker-x-mark",
  "square-2-stack",
  "square-3-stack-3d",
  "squares-2x2",
  "squares-plus",
  "star",
  "stop",
  "stop-circle",
  "sun",
  "swatch",
  "table-cells",
  "tag",
  "trash",
  "trophy",
  "truck",
  "tv",
  "user",
  "user-circle",
  "user-group",
  "user-minus",
  "user-plus",
  "users",
  "variable",
  "video-camera",
  "video-camera-slash",
  "view-columns",
  "view-finder-circle",
  "wifi",
  "window",
  "wrench",
  "wrench-screwdriver",
  "x-circle",
  "x-mark"
], V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, CuiButton: R, CuiIcon: C, CuiNavButton: j, CuiSpinner: _, ICONS: me, RuneButton: R, RuneIcon: C, RuneNavButton: j, RuneSpinner: _ }, Symbol.toStringTag, { value: "Module" }));
let B = {
  locale: "en-UK",
  BaseSchedule: {
    snapToClosestInterval: 15,
    // Default value added
    displayWeekNumbers: !0,
    hourHeight: 92,
    startHour: 0,
    endHour: 24,
    maxHeight: void 0,
    getFreeDropTimes: () => [],
    type: "day"
  }
};
const he = (r) => {
  B = { ...B, ...r };
};
function Y(r, e, t = !1) {
  if (!e) return r;
  if (!r) return e;
  if (t) {
    const o = { ...r };
    for (const a in e)
      e.hasOwnProperty(a) && (typeof e[a] == "object" && e[a] !== null && !Array.isArray(e[a]) ? o[a] = Y(o[a], e[a], t) : o[a] = e[a]);
    return o;
  }
  return { ...r, ...e };
}
function $e() {
  return Math.random().toString(36).substr(2, 9);
}
function Be(r) {
  return !!(r == null || typeof r == "string" && r.trim() === "" || Array.isArray(r) && r.length === 0 || typeof r == "object" && Object.keys(r).length === 0);
}
function De(r, e, t = !1) {
  let o = null;
  return function(...i) {
    const n = () => {
      o = null, t || r(...i);
    }, d = t && !o;
    o && clearTimeout(o), o = setTimeout(n, e), d && r(...i);
  };
}
function Me(r) {
  const e = g(""), t = g(null), o = g(null), a = g(!1);
  return {
    data: e,
    error: t,
    response: o,
    isLoading: a,
    fetch: async () => {
      if (!r) {
        t.value = new Error("URL is required");
        return;
      }
      a.value = !0, t.value = null;
      try {
        const n = await window.fetch(r);
        if (o.value = n, !n.ok)
          throw new Error(`HTTP error! status: ${n.status}`);
        const d = await n.text();
        e.value = d;
      } catch (n) {
        t.value = n instanceof Error ? n : new Error("Unknown error occurred"), e.value = "";
      } finally {
        a.value = !1;
      }
    }
  };
}
function Ee(r, e = "YYYY-MM-DD") {
  const t = r.getFullYear(), o = String(r.getMonth() + 1).padStart(2, "0"), a = String(r.getDate()).padStart(2, "0"), i = String(r.getHours()).padStart(2, "0"), n = String(r.getMinutes()).padStart(2, "0"), d = String(r.getSeconds()).padStart(2, "0");
  return e.replace("YYYY", t.toString()).replace("MM", o).replace("DD", a).replace("HH", i).replace("mm", n).replace("ss", d);
}
function Le(r) {
  const e = /* @__PURE__ */ new Date();
  return r.toDateString() === e.toDateString();
}
function Te(r) {
  const e = /* @__PURE__ */ new Date();
  return e.setDate(e.getDate() - 1), r.toDateString() === e.toDateString();
}
function Ie(r) {
  const t = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), o = Math.floor(t / 1e3), a = Math.floor(o / 60), i = Math.floor(a / 60), n = Math.floor(i / 24);
  return n > 0 ? `${n} day${n > 1 ? "s" : ""} ago` : i > 0 ? `${i} hour${i > 1 ? "s" : ""} ago` : a > 0 ? `${a} minute${a > 1 ? "s" : ""} ago` : "Just now";
}
function qe(r, e) {
  const t = new Date(r);
  return t.setDate(t.getDate() + e), t;
}
function Pe(r) {
  const e = new Date(r);
  return e.setHours(0, 0, 0, 0), e;
}
function Re(r) {
  const e = new Date(r);
  return e.setHours(23, 59, 59, 999), e;
}
function ye(r) {
  return !r || r.length === 0 ? !1 : r.some((e) => typeof e.children == "string" ? e.children.trim() !== "" : !0);
}
function je(r) {
  return r ? r.map((e) => typeof e.children == "string" ? e.children : "").join("").trim() : "";
}
function Ve(r) {
  return !ye(r);
}
function Ae(r) {
  return [...new Set(r)];
}
function Oe(r, e) {
  return r.reduce((t, o) => {
    const a = String(o[e]);
    return t[a] = t[a] || [], t[a].push(o), t;
  }, {});
}
function Ne(r, e, t = "asc") {
  return [...r].sort((o, a) => {
    const i = o[e], n = a[e];
    if (i === n) return 0;
    const d = i < n ? -1 : 1;
    return t === "asc" ? d : -d;
  });
}
function He(r, e) {
  const t = [];
  for (let o = 0; o < r.length; o += e)
    t.push(r.slice(o, o + e));
  return t;
}
function Ye(r) {
  r.preventDefault(), r.stopPropagation();
}
function Fe(r, e) {
  return !e.contains(r.target);
}
function Ke(r) {
  return r.key || String(r.which || r.keyCode);
}
function We(r) {
  return r.key === "Enter" || r.keyCode === 13;
}
function Ue(r) {
  return r.key === "Escape" || r.keyCode === 27;
}
function Ze(r) {
  const e = r.key;
  return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e);
}
function Ge(r, e, t, o) {
  return r.addEventListener(e, t, o), () => r.removeEventListener(e, t, o);
}
const Je = /* @__PURE__ */ v({
  __name: "VoltInputText",
  setup(r) {
    const e = g({
      root: `w-full px-3 py-2 text-sm border border-border rounded-md
         bg-background text-foreground placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50
         invalid:border-destructive invalid:ring-destructive
         hover:border-border-hover transition-colors duration-200`
    });
    return (t, o) => (l(), p(y(re), {
      unstyled: "",
      pt: e.value,
      "pt-options": {
        mergeProps: y(z)
      }
    }, null, 8, ["pt", "pt-options"]));
  }
}), Qe = /* @__PURE__ */ v({
  __name: "VoltTextarea",
  setup(r) {
    const e = g({
      root: `w-full px-3 py-2 text-sm border border-border rounded-md
         bg-background text-foreground placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50
         invalid:border-destructive invalid:ring-destructive
         hover:border-border-hover transition-colors duration-200
         resize-none min-h-[80px]`
    });
    return (t, o) => (l(), p(y(te), {
      unstyled: "",
      pt: e.value,
      "pt-options": {
        mergeProps: y(z)
      }
    }, null, 8, ["pt", "pt-options"]));
  }
}), Xe = /* @__PURE__ */ v({
  __name: "VoltMessage",
  setup(r) {
    const e = g({
      root: `relative w-full rounded-lg border px-4 py-3 text-sm
         p-info:border-blue-200 p-info:bg-blue-50 p-info:text-blue-800
         p-success:border-green-200 p-success:bg-green-50 p-success:text-green-800
         p-warn:border-yellow-200 p-warn:bg-yellow-50 p-warn:text-yellow-800
         p-error:border-red-200 p-error:bg-red-50 p-error:text-red-800
         p-secondary:border-gray-200 p-secondary:bg-gray-50 p-secondary:text-gray-800
         dark:p-info:border-blue-800 dark:p-info:bg-blue-950 dark:p-info:text-blue-200
         dark:p-success:border-green-800 dark:p-success:bg-green-950 dark:p-success:text-green-200
         dark:p-warn:border-yellow-800 dark:p-warn:bg-yellow-950 dark:p-warn:text-yellow-200
         dark:p-error:border-red-800 dark:p-error:bg-red-950 dark:p-error:text-red-200
         dark:p-secondary:border-gray-800 dark:p-secondary:bg-gray-950 dark:p-secondary:text-gray-200`,
      icon: "flex-shrink-0 w-4 h-4",
      text: "flex-1",
      closeButton: `ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-gray-100 
              inline-flex h-8 w-8 text-gray-500 hover:text-gray-900 focus:ring-gray-400
              dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`,
      closeIcon: "w-3 h-3"
    });
    return (t, o) => (l(), p(y(oe), {
      unstyled: "",
      pt: e.value,
      "pt-options": {
        mergeProps: y(z)
      }
    }, O({ _: 2 }, [
      N(t.$slots, (a, i) => ({
        name: i,
        fn: D((n) => [
          H(t.$slots, i, S($(n ?? {})))
        ])
      }))
    ]), 1032, ["pt", "pt-options"]));
  }
}), er = {
  install(r, e = {}) {
    r.use(W, {
      unstyled: !0
    }), he(Y(B, e, !0));
    for (const t in V)
      r.component(t, V[t]);
  }
};
export {
  R as CuiButton,
  C as CuiIcon,
  j as CuiNavButton,
  _ as CuiSpinner,
  me as ICONS,
  R as RuneButton,
  C as RuneIcon,
  j as RuneNavButton,
  _ as RuneSpinner,
  ce as VoltButton,
  Je as VoltInputText,
  Xe as VoltMessage,
  Qe as VoltTextarea,
  qe as addDays,
  Ge as addEventListenerWithCleanup,
  He as chunk,
  ze as createPassThrough,
  De as debounce,
  er as default,
  Se as defaultTheme,
  Re as endOfDay,
  Ee as formatDate,
  $e as generateId,
  Ke as getKeyFromEvent,
  Ie as getRelativeTime,
  je as getSlotText,
  Oe as groupBy,
  ye as hasSlotContent,
  Ze as isArrowKey,
  Fe as isClickOutside,
  Be as isEmpty,
  We as isEnterKey,
  Ue as isEscapeKey,
  Ve as isSlotEmpty,
  Le as isToday,
  Te as isYesterday,
  Y as merge,
  z as ptViewMerge,
  he as setOptions,
  Ne as sortBy,
  Pe as startOfDay,
  Ye as stopEvent,
  Ae as uniqueArray,
  Me as useFetchSvg
};
