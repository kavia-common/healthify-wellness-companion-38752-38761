import { useSelector } from "react-redux";

// PUBLIC_INTERFACE
export default function RecommendationList() {
  /** Recommendations list. */
  const recs = useSelector(s => s.coach.recommendations);
  if (!recs.length) return <div>No recommendations yet.</div>;
  return (
    <ul>
      {recs.map((r, i) => <li key={i}>{r.text}</li>)}
    </ul>
  );
}
