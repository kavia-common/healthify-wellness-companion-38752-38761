import Card from "../common/Card";
import Button from "../common/Button";

// PUBLIC_INTERFACE
export default function WorkoutPlanner({ onAdd }) {
  /** Workout planner stub. */
  return (
    <Card title="Workout Planner" right={<Button onClick={() => onAdd?.({ title: "Jog 20m" })}>Add</Button>}>
      <div>No workouts scheduled. Add your first!</div>
    </Card>
  );
}
