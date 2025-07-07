function u(t, e = "YYYY-MM-DD") {
  const n = t.getFullYear(), s = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0"), o = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0"), c = String(t.getSeconds()).padStart(2, "0");
  return e.replace("YYYY", n.toString()).replace("MM", s).replace("DD", r).replace("HH", o).replace("mm", a).replace("ss", c);
}
function i(t) {
  const e = /* @__PURE__ */ new Date();
  return t.toDateString() === e.toDateString();
}
function g(t) {
  const e = /* @__PURE__ */ new Date();
  return e.setDate(e.getDate() - 1), t.toDateString() === e.toDateString();
}
function D(t) {
  const n = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), s = Math.floor(n / 1e3), r = Math.floor(s / 60), o = Math.floor(r / 60), a = Math.floor(o / 24);
  return a > 0 ? `${a} day${a > 1 ? "s" : ""} ago` : o > 0 ? `${o} hour${o > 1 ? "s" : ""} ago` : r > 0 ? `${r} minute${r > 1 ? "s" : ""} ago` : "Just now";
}
function f(t, e) {
  const n = new Date(t);
  return n.setDate(n.getDate() + e), n;
}
function l(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function S(t) {
  const e = new Date(t);
  return e.setHours(23, 59, 59, 999), e;
}
export {
  f as addDays,
  S as endOfDay,
  u as formatDate,
  D as getRelativeTime,
  i as isToday,
  g as isYesterday,
  l as startOfDay
};
