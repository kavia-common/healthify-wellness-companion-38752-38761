import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import MindfulnessTools from "../components/mind/MindfulnessTools";
import BreathingCoach from "../components/mind/BreathingCoach";
import MeditationTimer from "../components/mind/MeditationTimer";
import MoodJournal from "../components/mind/MoodJournal";

export default function MindMoodPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        <MindfulnessTools />
        <BreathingCoach />
        <MeditationTimer />
        <MoodJournal />
      </main>
      <TabBar />
    </div>
  );
}
