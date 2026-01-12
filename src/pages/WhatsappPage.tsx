import ChartCard from '../components/ChartCard';
import MetricCard from '../components/MetricCard';
import { whatsapp } from '../data/mockData';
import { buildRecommendations } from '../utils/recommendations';
import { useMemo, useState } from 'react';

export default function WhatsappPage() {
  const rec = useMemo(() => buildRecommendations(whatsapp), []);
  const [text, setText] = useState(rec);
  const s = whatsapp.summary.secondary || {};

  return (
    <div className="panel">
      <h2 className="page-title">WhatsApp</h2>
      <div className="muted">Chats activos, tiempos de respuesta y satisfacción.</div>

      <div className="row">
        <ChartCard
          title={`${whatsapp.primaryLabel}`}
          subtitle={`Variación ${whatsapp.summary.changePct > 0 ? '+' : ''}${whatsapp.summary.changePct.toFixed(1)}%`}
          series={whatsapp.series}
          gradientId="waGrad"
          colorFrom="#34d399"
          colorTo="#22d3ee"
        />
        <div className="reco-box">
          <div className="reco-title">Recomendaciones</div>
          <textarea className="reco-textarea" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <MetricCard title="Enviados" value={(s as any).Enviados?.toLocaleString?.() ?? (s as any).Enviados} />
        <MetricCard title="Recibidos" value={(s as any).Recibidos?.toLocaleString?.() ?? (s as any).Recibidos} />
        <MetricCard title="Resp. (min)" value={(s as any)['Resp. (min)'] ?? 0} />
        <MetricCard title="Satisfacción" value={(s as any).Satisfacción ?? 0} />
      </div>
    </div>
  );
}
