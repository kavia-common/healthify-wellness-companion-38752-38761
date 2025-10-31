import Card from "../common/Card";
import { useSelector } from "react-redux";

// PUBLIC_INTERFACE
export default function AIInsightPanel() {
  /** AI insight panel showing latest recommendation. */
  const recs = useSelector(s => s.coach.recommendations);
  const latest = recs[recs.length - 1]?.text || "Stay hydrated and keep moving!";
  return (
    <Card title="AI Insights">
      <p style={{ margin: 0 }}>{latest}</p>
    </Card>
  );
}
