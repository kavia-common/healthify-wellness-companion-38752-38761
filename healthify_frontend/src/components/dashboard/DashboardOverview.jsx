import Card from "../common/Card";
import StatPill from "../common/StatPill";
import LineChart from "../../charts/LineChart";
import { sampleSeries } from "../../utils/charts";

// PUBLIC_INTERFACE
export default function DashboardOverview({ data }) {
  /** Top overview section with key stats and chart. */
  return (
    <Card title="Overview">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 12 }}>
        <StatPill label="Steps" value={data.steps} />
        <StatPill label="Calories" value={data.calories} />
        <StatPill label="Sleep (h)" value={data.sleepHours} />
        <StatPill label="Water" value={`${data.water} cups`} />
      </div>
      <div style={{ marginTop: 12 }}>
        <LineChart data={data.weeklyActivity?.length ? data.weeklyActivity : sampleSeries()} />
      </div>
    </Card>
  );
}
