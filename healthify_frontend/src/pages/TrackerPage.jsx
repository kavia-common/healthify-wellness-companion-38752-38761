import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import FitnessTracker from "../components/tracker/FitnessTracker";
import NutritionTracker from "../components/tracker/NutritionTracker";
import SleepTracker from "../components/tracker/SleepTracker";
import WaterTracker from "../components/tracker/WaterTracker";
import MoodTracker from "../components/tracker/MoodTracker";
import { saveMetric } from "../api/services/tracker";

export default function TrackerPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        <FitnessTracker onSave={saveMetric} />
        <NutritionTracker />
        <SleepTracker />
        <WaterTracker />
        <MoodTracker />
      </main>
      <TabBar />
    </div>
  );
}
