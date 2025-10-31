import Card from "../common/Card";

// PUBLIC_INTERFACE
export default function DailySummary({ mood=4 }) {
  /** Simple daily summary including mood. */
  return (
    <Card title="Today's Summary">
      <div>Energy: Moderate • Focus: Good • Mood: {mood}/5</div>
    </Card>
  );
}
