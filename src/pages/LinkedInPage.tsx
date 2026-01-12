import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';
import { linkedIn } from '../data/mockData';
import { buildRecommendations } from '../utils/recommendations';
import { useMemo, useState } from 'react';

export default function LinkedInPage() {
  const rec = useMemo(() => buildRecommendations(linkedIn), []);
  const [text, setText] = useState(rec);
  const s = linkedIn.summary.secondary || {};

  return (
    <div className="panel">
      <h2 className="page-title">LinkedIn</h2>
      <div className="muted">Métricas clave y recomendaciones basadas en rendimiento reciente.</div>

      <div className="row">
        <ChartCard
          title={`${linkedIn.primaryLabel}`}
          subtitle={`Variación ${linkedIn.summary.changePct > 0 ? '+' : ''}${linkedIn.summary.changePct.toFixed(1)}%`}
          series={linkedIn.series}
          gradientId="liGrad"
          colorFrom="#22d3ee"
          colorTo="#3b82f6"
        />
        <div className="reco-box">
          <div className="reco-title">Recomendaciones</div>
          <textarea className="reco-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <MetricCard title="Clicks" value={(s as any).Clicks?.toLocaleString?.() ?? s.Clicks} />
        <MetricCard title="Seguidores" value={(s as any).Seguidores?.toLocaleString?.() ?? s.Seguidores} />
        <MetricCard title="Engagement %" value={(s as any)['Engagement %'] ?? 0} />
        <MetricCard title="Impresiones" value={linkedIn.summary.primary.toLocaleString()} trend={linkedIn.summary.changePct} />
      </div>
    </div>
  );
}
