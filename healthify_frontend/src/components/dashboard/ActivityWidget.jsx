import Card from "../common/Card";
import Sparkline from "../../charts/Sparkline";
import { sampleSeries } from "../../utils/charts";

// PUBLIC_INTERFACE
export default function ActivityWidget() {
  /** Compact activity widget with sparkline. */
  return (
    <Card title="Activity">
      <Sparkline data={sampleSeries(14, 60)} />
    </Card>
  );
}
