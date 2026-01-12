export type SeriesPoint = { label: string; value: number };

export type Summary = {
  primary: number;
  changePct: number;
  secondary?: Record<string, number>;
};

export type PlatformData = {
  name: string;
  primaryLabel: string;
  series: SeriesPoint[];
  summary: Summary;
};

function makeSeries(base: number, variance: number, labels: string[]): SeriesPoint[] {
  let v = base;
  return labels.map((l) => {
    const delta = (Math.random() - 0.45) * variance;
    v = Math.max(0, Math.round(v + delta));
    return { label: l, value: v };
  });
}

const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'];

export const linkedIn: PlatformData = {
  name: 'LinkedIn',
  primaryLabel: 'Impresiones',
  series: makeSeries(3200, 600, labels),
  summary: {
    primary: 3890,
    changePct: 8.4,
    secondary: {
      Clicks: 540,
      Seguidores: 12150,
      'Engagement %': 3.1,
    },
  },
};

export const googleAnalytics: PlatformData = {
  name: 'Google Analytics',
  primaryLabel: 'Sesiones',
  series: makeSeries(5200, 800, labels),
  summary: {
    primary: 6120,
    changePct: 4.2,
    secondary: {
      Usuarios: 4980,
      'Tasa Rebote %': 38.5,
      'Duración (s)': 92,
      Conversiones: 164,
    },
  },
};

export const instagram: PlatformData = {
  name: 'Instagram',
  primaryLabel: 'Alcance',
  series: makeSeries(7800, 1200, labels),
  summary: {
    primary: 9310,
    changePct: 6.7,
    secondary: {
      MeGusta: 1240,
      Comentarios: 220,
      Seguidores: 20130,
      'Engagement %': 5.4,
    },
  },
};

export const facebook: PlatformData = {
  name: 'Facebook',
  primaryLabel: 'Alcance',
  series: makeSeries(6400, 1000, labels),
  summary: {
    primary: 7020,
    changePct: -2.1,
    secondary: {
      Clicks: 860,
      Compartidos: 180,
      Seguidores: 15120,
      'Engagement %': 2.7,
    },
  },
};

export const whatsapp: PlatformData = {
  name: 'WhatsApp',
  primaryLabel: 'Chats Activos',
  series: makeSeries(280, 70, labels),
  summary: {
    primary: 315,
    changePct: 9.3,
    secondary: {
      Enviados: 12480,
      Recibidos: 13210,
      'Resp. (min)': 6.2,
      Satisfacción: 4.6,
    },
  },
};

export const platforms = { linkedIn, googleAnalytics, instagram, facebook, whatsapp };
