import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import TabBar from "../components/common/TabBar";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import DailySummary from "../components/dashboard/DailySummary";
import ActivityWidget from "../components/dashboard/ActivityWidget";
import NutritionWidget from "../components/dashboard/NutritionWidget";
import SleepWidget from "../components/dashboard/SleepWidget";
import WaterWidget from "../components/dashboard/WaterWidget";
import MoodWidget from "../components/dashboard/MoodWidget";
import AIInsightPanel from "../components/dashboard/AIInsightPanel";
import { fetchDashboard } from "../api/services/dashboard";
import Loader from "../components/common/Loader";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  useEffect(() => { fetchDashboard().then(setData); }, []);
  return (
    <div>
      <Navbar />
      <main className="container" style={{ display: "grid", gap: 12 }}>
        {!data ? <Loader label="Loading dashboard..." /> : (
          <>
            <DashboardOverview data={data} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              <DailySummary mood={data.mood} />
              <ActivityWidget />
              <NutritionWidget />
              <SleepWidget />
              <WaterWidget />
              <MoodWidget />
            </div>
            <AIInsightPanel />
          </>
        )}
      </main>
      <TabBar />
    </div>
  );
}
