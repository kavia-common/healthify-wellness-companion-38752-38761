import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import WorkoutPlanner from "../components/planner/WorkoutPlanner";
import MealPlanner from "../components/planner/MealPlanner";
import PlannerCalendar from "../components/planner/PlannerCalendar";
import HabitBuilder from "../components/planner/HabitBuilder";
import { useDispatch } from "react-redux";
import { addWorkout } from "../state/slices/plannerSlice";

export default function PlannerPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        <PlannerCalendar />
        <WorkoutPlanner onAdd={(w) => dispatch(addWorkout(w))} />
        <MealPlanner />
        <HabitBuilder />
      </main>
      <TabBar />
    </div>
  );
}
