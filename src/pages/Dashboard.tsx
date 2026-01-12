import MetricCard from '../components/MetricCard';
import ChartCard from '../components/ChartCard';
import { platforms } from '../data/mockData';

export default function Dashboard() {
  const items = [
    { key: 'linkedIn', label: 'LinkedIn' },
    { key: 'googleAnalytics', label: 'Google Analytics' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'whatsapp', label: 'WhatsApp' },
  ] as const;

  const mi = platforms;

  return (
    <div className="panel">
      <h1 className="page-title">Bienvenido a Métricas Inteligentes</h1>
      <div className="muted">Aquí podrás generar estrategias basadas en datos que te ayudarán a mejorar el rendimiento de tu empresa.</div>

      <div className="grid-cards">
        <MetricCard title={`LinkedIn · ${mi.linkedIn.primaryLabel}`} value={mi.linkedIn.summary.primary.toLocaleString()} trend={mi.linkedIn.summary.changePct} />
        <MetricCard title={`GA · ${mi.googleAnalytics.primaryLabel}`} value={mi.googleAnalytics.summary.primary.toLocaleString()} trend={mi.googleAnalytics.summary.changePct} />
        <MetricCard title={`Instagram · ${mi.instagram.primaryLabel}`} value={mi.instagram.summary.primary.toLocaleString()} trend={mi.instagram.summary.changePct} />
        <MetricCard title={`Facebook · ${mi.facebook.primaryLabel}`} value={mi.facebook.summary.primary.toLocaleString()} trend={mi.facebook.summary.changePct} />
        <MetricCard title={`WhatsApp · ${mi.whatsapp.primaryLabel}`} value={mi.whatsapp.summary.primary.toLocaleString()} trend={mi.whatsapp.summary.changePct} />
      </div>

      <ChartCard
        title="Tendencia General (muestras)"
        subtitle="Serie comparativa de impresiones/sesiones/alcance"
        series={mi.linkedIn.series.map((p, i) => ({ label: p.label, value: (p.value + mi.googleAnalytics.series[i].value + mi.instagram.series[i].value) / 3 }))}
        gradientId="dashGrad"
        colorFrom="#22d3ee"
        colorTo="#6366f1"
      />
    </div>
  );
}
