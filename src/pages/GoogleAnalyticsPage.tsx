import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';
import { googleAnalytics } from '../data/mockData';
import { buildRecommendations } from '../utils/recommendations';
import { useMemo, useState } from 'react';

export default function GoogleAnalyticsPage() {
  const rec = useMemo(() => buildRecommendations(googleAnalytics), []);
  const [text, setText] = useState(rec);
  const s = googleAnalytics.summary.secondary || {};

  return (
    <div className="panel">
      <h2 className="page-title">Google Analytics</h2>
      <div className="muted">Visión de sesiones, usuarios y conversión.</div>

      <div className="row">
        <ChartCard
          title={`${googleAnalytics.primaryLabel}`}
          subtitle={`Variación ${googleAnalytics.summary.changePct > 0 ? '+' : ''}${googleAnalytics.summary.changePct.toFixed(1)}%`}
          series={googleAnalytics.series}
          gradientId="gaGrad"
          colorFrom="#a78bfa"
          colorTo="#22d3ee"
        />
        <div className="reco-box">
          <div className="reco-title">Recomendaciones</div>
          <textarea className="reco-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <MetricCard title="Usuarios" value={(s as any).Usuarios?.toLocaleString?.() ?? s.Usuarios} />
        <MetricCard title="Tasa Rebote %" value={(s as any)['Tasa Rebote %'] ?? 0} />
        <MetricCard title="Duración (s)" value={(s as any)['Duración (s)'] ?? 0} />
        <MetricCard title="Conversiones" value={(s as any).Conversiones?.toLocaleString?.() ?? (s as any).Conversiones} />
      </div>
    </div>
  );
}
