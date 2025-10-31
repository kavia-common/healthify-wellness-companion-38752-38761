import { LineChart as RLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { chartColors } from "../utils/charts";

// PUBLIC_INTERFACE
export default function LineChart({ data, height=180 }) {
  /** Theme-aware simple line chart for small dashboards. */
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RLineChart data={data}>
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={chartColors.text} />
          <YAxis stroke={chartColors.text} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={chartColors.primary} strokeWidth={2} dot={false} />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
}
