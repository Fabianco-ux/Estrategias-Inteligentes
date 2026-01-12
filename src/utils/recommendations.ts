import { PlatformData } from '@data/mockData';

export function buildRecommendations(p: PlatformData): string {
  const name = p.name;
  const primary = p.summary.primary;
  const change = p.summary.changePct;
  const sec = p.summary.secondary || {};

  const lines: string[] = [];
  if (name === 'LinkedIn') {
    const engagement = Number(sec['Engagement %'] ?? 0);
    lines.push(
      `• Publica 2-3 veces por semana en horarios laborales (8-10am).`,
      `• Refuerza los formatos con mayor CTR en las últimas semanas.`,
      engagement < 3
        ? `• Mejora el engagement con encuestas y carruseles educativos.`
        : `• Mantén el ritmo: prueba artículos largos con resumen visual.`
    );
  } else if (name === 'Google Analytics') {
    const bounce = Number(sec['Tasa Rebote %'] ?? 0);
    const conv = Number(sec['Conversiones'] ?? 0);
    lines.push(
      bounce > 45
        ? `• Optimiza above-the-fold y velocidad (CLS/LCP) para reducir rebote.`
        : `• Profundiza en UX de páginas con mayor intención para más tiempo de sesión.`,
      conv < 150
        ? `• Test A/B de CTA y formularios para elevar conversiones.`
        : `• Escala campañas top-performers con segmentación lookalike.`
    );
  } else if (name === 'Instagram') {
    const eng = Number(sec['Engagement %'] ?? 0);
    lines.push(
      eng < 4.5
        ? `• Incrementa Reels y usa ganchos en los 3 primeros segundos.`
        : `• Mantén Reels + Stories con stickers interactivos (encuestas/quiz).`,
      `• Publica 5-7 historias/semana y carruseles con tips prácticos.`
    );
  } else if (name === 'Facebook') {
    lines.push(
      change < 0
        ? `• Reactiva alcance con lives cortos y contenido localizable.`
        : `• Amplifica los posts ganadores con presupuesto bajo (1-3$/día).`,
      `• Usa grupos para discusiones y deriva tráfico a la web.`
    );
  } else if (name === 'WhatsApp') {
    const resp = Number(sec['Resp. (min)'] ?? 0);
    lines.push(
      resp > 8
        ? `• Implementa respuestas rápidas y etiquetas para bajar el tiempo de respuesta.`
        : `• Mantén SLAs actuales y automatiza FAQs con catálogos.`,
      `• Segmenta difusiones (novedades, soporte, promociones) según interés.`
    );
  }

  // Cierre genérico con referencia a tendencia
  lines.push(
    change >= 0
      ? `• La tendencia (+${change.toFixed(1)}%) indica oportunidad para escalar.`
      : `• La tendencia (${change.toFixed(1)}%) requiere optimización prioritaria.`
  );

  return lines.join('\n');
}
