import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import AICoach from "../components/coach/AICoach";

export default function CoachPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        <AICoach />
      </main>
      <TabBar />
    </div>
  );
}
