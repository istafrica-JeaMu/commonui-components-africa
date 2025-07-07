function o(e, t) {
  if (e && t) {
    if (typeof e == "string" && typeof t == "string")
      return `${e} ${t}`;
    if (typeof e == "object" && typeof t == "object")
      return { ...e, ...t };
  }
  return t || e;
}
function i(e) {
  return {
    ...e,
    mergeProps: o
  };
}
const r = {
  transition: "transition-all duration-200 ease-in-out",
  focus: "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
  disabled: "disabled:pointer-events-none disabled:opacity-60",
  rounded: "rounded-md",
  border: "border border-border",
  spacing: "px-3 py-2",
  text: "text-sm font-medium"
};
export {
  i as createPassThrough,
  r as defaultTheme,
  o as ptViewMerge
};
