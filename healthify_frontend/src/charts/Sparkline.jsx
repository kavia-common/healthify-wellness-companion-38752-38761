import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { chartColors } from "../utils/charts";

// PUBLIC_INTERFACE
export default function Sparkline({ data, height=60 }) {
  /** Minimal sparkline for compact KPI widgets. */
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
