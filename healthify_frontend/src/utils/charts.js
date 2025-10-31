import theme from "../theme/oceanTheme";

export const chartColors = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  grid: theme.colors.grid,
  text: theme.colors.textMuted
};

export const sampleSeries = (len = 7, base = 50) =>
  Array.from({ length: len }).map((_, i) => ({ name: `D${i+1}`, value: Math.max(0, Math.round(base + (Math.sin(i) * 10) + (Math.random()*10-5))) }));
