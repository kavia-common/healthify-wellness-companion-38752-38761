import Card from "../common/Card";
import Button from "../common/Button";

// PUBLIC_INTERFACE
export default function FitnessTracker({ onSave }) {
  /** Fitness tracker stub. */
  return (
    <Card title="Fitness Tracker" right={<Button onClick={() => onSave?.({ steps: 500 })}>Log Steps</Button>}>
      <div>Log your activity.</div>
    </Card>
  );
}
