import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

type SeriesPoint = { label: string; value: number };

type Props = {
  title: string;
  subtitle?: string;
  series: SeriesPoint[];
  gradientId: string;
  colorFrom: string;
  colorTo: string;
};

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const val = payload[0].value as number;
    return (
      <div style={{
        background: '#0b1220',
        border: '1px solid #374151',
        padding: 10,
        borderRadius: 10,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{ fontSize: 12, color: '#9ca3af' }}>{label}</div>
        <div style={{ fontWeight: 800, fontSize: 16 }}>{val.toLocaleString()}</div>
      </div>
    );
  }
  return null;
}

export default function ChartCard({ title, subtitle, series, gradientId, colorFrom, colorTo }: Props) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div className="chart-title">{title}</div>
        {subtitle && <div className="chart-sub">{subtitle}</div>}
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <AreaChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorFrom} stopOpacity={0.9} />
                <stop offset="70%" stopColor={colorTo} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1f2937" vertical={false} />
            <XAxis dataKey="label" stroke="#9ca3af" tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke={colorFrom} fill={`url(#${gradientId})`} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
