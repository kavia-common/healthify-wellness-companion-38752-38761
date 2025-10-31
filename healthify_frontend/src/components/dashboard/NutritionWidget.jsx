import Card from "../common/Card";
import BarChart from "../../charts/BarChart";
import { sampleSeries } from "../../utils/charts";

// PUBLIC_INTERFACE
export default function NutritionWidget() {
  /** Nutrition macros widget. */
  return (
    <Card title="Nutrition">
      <BarChart data={sampleSeries(5, 40)} />
    </Card>
  );
}
