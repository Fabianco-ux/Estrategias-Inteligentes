import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';
import { facebook } from '../data/mockData';
import { buildRecommendations } from '../utils/recommendations';
import { useMemo, useState } from 'react';

export default function FacebookPage() {
  const rec = useMemo(() => buildRecommendations(facebook), []);
  const [text, setText] = useState(rec);
  const s = facebook.summary.secondary || {};

  return (
    <div className="panel">
      <h2 className="page-title">Facebook</h2>
      <div className="muted">Alcance, clics y engagement.</div>

      <div className="row">
        <ChartCard
          title={`${facebook.primaryLabel}`}
          subtitle={`Variación ${facebook.summary.changePct > 0 ? '+' : ''}${facebook.summary.changePct.toFixed(1)}%`}
          series={facebook.series}
          gradientId="fbGrad"
          colorFrom="#60a5fa"
          colorTo="#22d3ee"
        />
        <div className="reco-box">
          <div className="reco-title">Recomendaciones</div>
          <textarea className="reco-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <MetricCard title="Clicks" value={(s as any).Clicks?.toLocaleString?.() ?? (s as any).Clicks} />
        <MetricCard title="Compartidos" value={(s as any).Compartidos?.toLocaleString?.() ?? (s as any).Compartidos} />
        <MetricCard title="Seguidores" value={(s as any).Seguidores?.toLocaleString?.() ?? (s as any).Seguidores} />
        <MetricCard title="Engagement %" value={(s as any)['Engagement %'] ?? 0} />
      </div>
    </div>
  );
}
