function n(r) {
  return !r || r.length === 0 ? !1 : r.some((t) => typeof t.children == "string" ? t.children.trim() !== "" : !0);
}
function e(r) {
  return r ? r.map((t) => typeof t.children == "string" ? t.children : "").join("").trim() : "";
}
function i(r) {
  return !n(r);
}
export {
  e as getSlotText,
  n as hasSlotContent,
  i as isSlotEmpty
};
