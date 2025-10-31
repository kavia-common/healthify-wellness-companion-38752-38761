export const number = (n, digits = 0) => Number(n || 0).toFixed(digits);
export const percent = (n) => `${number(n * 100, 0)}%`;
export const clamp = (n, min=0, max=100) => Math.max(min, Math.min(max, n));
