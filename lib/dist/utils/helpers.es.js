function l(t, n, i = !1) {
  if (!n) return t;
  if (!t) return n;
  if (i) {
    const r = { ...t };
    for (const e in n)
      n.hasOwnProperty(e) && (typeof n[e] == "object" && n[e] !== null && !Array.isArray(n[e]) ? r[e] = l(r[e], n[e], i) : r[e] = n[e]);
    return r;
  }
  return { ...t, ...n };
}
function y() {
  return Math.random().toString(36).substr(2, 9);
}
function s(t) {
  return !!(t == null || typeof t == "string" && t.trim() === "" || Array.isArray(t) && t.length === 0 || typeof t == "object" && Object.keys(t).length === 0);
}
function c(t, n, i = !1) {
  let r = null;
  return function(...f) {
    const o = () => {
      r = null, i || t(...f);
    }, u = i && !r;
    r && clearTimeout(r), r = setTimeout(o, n), u && t(...f);
  };
}
export {
  c as debounce,
  y as generateId,
  s as isEmpty,
  l as merge
};
