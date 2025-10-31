const paths = {
  dashboard: "M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9z",
  calendar: "M4 6h16M8 2v4M16 2v4M4 10h16v10H4V10z",
  activity: "M3 12h4l3-9 4 18 3-9h4",
  mood: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-3-6c1 1 5 1 6 0M9 11h.01M15 11h.01",
  bot: "M9 7h6v4H9V7zm-3 6h12l2 4H4l2-4zm6-10a2 2 0 110 4 2 2 0 010-4z",
  settings: "M12 8a4 4 0 100 8 4 4 0 000-8zm8 4l-2 1 1 2-2 2-2-1-1 2H10l-1-2-2 1-2-2 1-2-2-1 2-3 2 1 1-2h4l1 2 2-1 2 3z",
  back: "M15 18l-6-6 6-6"
};

// PUBLIC_INTERFACE
export default function Icon({ name, size=20, color="currentColor" }) {
  /** SVG Icon component. */
  const d = paths[name] || paths.dashboard;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}
