type Props = {
  title: string;
  value: string | number;
  trend?: number; // porcentaje de variación
};

export default function MetricCard({ title, value, trend }: Props) {
  const hasTrend = typeof trend === 'number';
  const trendText = hasTrend ? `${(trend as number) > 0 ? '+' : ''}${(trend as number).toFixed(1)}%` : undefined;
  return (
    <div className="card" role="region" aria-label={title}>
      <h4>{title}</h4>
      <div className="value">{value}</div>
      {hasTrend && (
        <div className={`trend ${(trend as number) < 0 ? 'down' : ''}`}>{trendText}</div>
      )}
    </div>
  );
}
