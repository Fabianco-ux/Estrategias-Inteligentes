import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';
import { instagram } from '../data/mockData';
import { buildRecommendations } from '../utils/recommendations';
import { useMemo, useState } from 'react';

export default function InstagramPage() {
  const rec = useMemo(() => buildRecommendations(instagram), []);
  const [text, setText] = useState(rec);
  const s = instagram.summary.secondary || {};

  return (
    <div className="panel">
      <h2 className="page-title">Instagram</h2>
      <div className="muted">Alcance y engagement para optimizar contenido.</div>

      <div className="row">
        <ChartCard
          title={`${instagram.primaryLabel}`}
          subtitle={`Variación ${instagram.summary.changePct > 0 ? '+' : ''}${instagram.summary.changePct.toFixed(1)}%`}
          series={instagram.series}
          gradientId="igGrad"
          colorFrom="#f472b6"
          colorTo="#22d3ee"
        />
        <div className="reco-box">
          <div className="reco-title">Recomendaciones</div>
          <textarea className="reco-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <MetricCard title="Me gusta" value={(s as any).MeGusta?.toLocaleString?.() ?? (s as any).MeGusta} />
        <MetricCard title="Comentarios" value={(s as any).Comentarios?.toLocaleString?.() ?? (s as any).Comentarios} />
        <MetricCard title="Seguidores" value={(s as any).Seguidores?.toLocaleString?.() ?? (s as any).Seguidores} />
        <MetricCard title="Engagement %" value={(s as any)['Engagement %'] ?? 0} />
      </div>
    </div>
  );
}
