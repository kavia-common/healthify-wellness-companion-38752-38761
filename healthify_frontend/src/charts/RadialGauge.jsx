import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { chartColors } from "../utils/charts";

// PUBLIC_INTERFACE
export default function RadialGauge({ value=0, height=160 }) {
  /** Simple radial gauge from 0..100 value. */
  const data = [{ name: "v", value, fill: chartColors.primary }];
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={14} data={data} startAngle={180} endAngle={-180}>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background clockWise dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
