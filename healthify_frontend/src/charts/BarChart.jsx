import { BarChart as RBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { chartColors } from "../utils/charts";

// PUBLIC_INTERFACE
export default function BarChart({ data, height=180 }) {
  /** Theme-aware bar chart component. */
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RBarChart data={data}>
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={chartColors.text} />
          <YAxis stroke={chartColors.text} />
          <Tooltip />
          <Bar dataKey="value" fill={chartColors.secondary} radius={[8,8,0,0]} />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  );
}
