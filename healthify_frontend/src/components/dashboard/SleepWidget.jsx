import Card from "../common/Card";
import RadialGauge from "../../charts/RadialGauge";

// PUBLIC_INTERFACE
export default function SleepWidget() {
  /** Sleep goal gauge. */
  return (
    <Card title="Sleep">
      <RadialGauge value={72} />
    </Card>
  );
}
