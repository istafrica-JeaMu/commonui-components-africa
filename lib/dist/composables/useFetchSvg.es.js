import { ref as t } from "vue";
function i(a) {
  const n = t(""), e = t(null), s = t(null), o = t(!1);
  return {
    data: n,
    error: e,
    response: s,
    isLoading: o,
    fetch: async () => {
      if (!a) {
        e.value = new Error("URL is required");
        return;
      }
      o.value = !0, e.value = null;
      try {
        const r = await window.fetch(a);
        if (s.value = r, !r.ok)
          throw new Error(`HTTP error! status: ${r.status}`);
        const u = await r.text();
        n.value = u;
      } catch (r) {
        e.value = r instanceof Error ? r : new Error("Unknown error occurred"), n.value = "";
      } finally {
        o.value = !1;
      }
    }
  };
}
export {
  i as useFetchSvg
};
