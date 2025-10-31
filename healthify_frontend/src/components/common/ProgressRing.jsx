import theme from "../../theme/oceanTheme";

// PUBLIC_INTERFACE
export default function ProgressRing({ value=0, size=72, stroke=8 }) {
  /** Circular progress ring. */
  const radius = (size - stroke) / 2;
  const c = 2 * Math.PI * radius;
  const o = c - (value / 100) * c;
  return (
    <svg width={size} height={size} role="img" aria-label={`Progress ${value}%`}>
      <circle cx={size/2} cy={size/2} r={radius} stroke={theme.colors.border} strokeWidth={stroke} fill="none"/>
      <circle cx={size/2} cy={size/2} r={radius} stroke={theme.colors.primary} strokeWidth={stroke} fill="none" strokeDasharray={`${c} ${c}`} strokeDashoffset={o} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="12" fill={theme.colors.text}>{value}%</text>
    </svg>
  );
}
