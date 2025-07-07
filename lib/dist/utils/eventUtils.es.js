function o(r) {
  r.preventDefault(), r.stopPropagation();
}
function i(r, e) {
  return !e.contains(r.target);
}
function u(r) {
  return r.key || String(r.which || r.keyCode);
}
function c(r) {
  return r.key === "Enter" || r.keyCode === 13;
}
function s(r) {
  return r.key === "Escape" || r.keyCode === 27;
}
function y(r) {
  const e = r.key;
  return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e);
}
function a(r, e, t, n) {
  return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
}
export {
  a as addEventListenerWithCleanup,
  u as getKeyFromEvent,
  y as isArrowKey,
  i as isClickOutside,
  c as isEnterKey,
  s as isEscapeKey,
  o as stopEvent
};
