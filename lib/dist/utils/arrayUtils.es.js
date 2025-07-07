function i(r) {
  return [...new Set(r)];
}
function f(r, u) {
  return r.reduce((n, t) => {
    const c = String(t[u]);
    return n[c] = n[c] || [], n[c].push(t), n;
  }, {});
}
function a(r, u, n = "asc") {
  return [...r].sort((t, c) => {
    const o = t[u], e = c[u];
    if (o === e) return 0;
    const s = o < e ? -1 : 1;
    return n === "asc" ? s : -s;
  });
}
function h(r, u) {
  const n = [];
  for (let t = 0; t < r.length; t += u)
    n.push(r.slice(t, t + u));
  return n;
}
export {
  h as chunk,
  f as groupBy,
  a as sortBy,
  i as uniqueArray
};
