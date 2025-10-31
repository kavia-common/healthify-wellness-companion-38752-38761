export const get = (k, fallback=null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
export const set = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
};
export const remove = (k) => { try { localStorage.removeItem(k); } catch {} };
