import Card from "../common/Card";

// PUBLIC_INTERFACE
export default function MoodWidget() {
  /** Mood check-in. */
  const faces = ["😟","😕","😐","🙂","😄"];
  const val = 4;
  return (
    <Card title="Mood">
      <div style={{ fontSize: 28 }}>{faces[val-1]}</div>
    </Card>
  );
}
