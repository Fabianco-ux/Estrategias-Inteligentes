# Métricas Inteligentes

Aplicación de métricas (Vite + React + TypeScript) lista para desplegar en GitHub Pages. Incluye:

- Sidebar con logo MI y secciones: Inicio, LinkedIn, Google Analytics, Instagram, Facebook, WhatsApp.
- Gráficos con gradientes y tooltip moderno (Recharts) + tarjetas de métricas.
- Datos ficticios esenciales por plataforma y recomendaciones generadas según las métricas.
- Modo embebido (`?embed=1`) para insertar en Google Sites (oculta la navegación y ajusta márgenes).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
# despliegue a gh-pages
npm run deploy
```

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `usuario/metricas-inteligentes`.
2. Asegúrate de que `vite.config.ts` usa `base: './'` (ya configurado) para assets relativos.
3. Ejecuta:

```bash
npm install
npm run build
npm run deploy
```

Esto publicará `dist/` en la rama `gh-pages`. En GitHub, activa Pages para la rama `gh-pages` (si no queda activa automáticamente) y obtén la URL pública.

## Modo Embed para Google Sites

Usa el parámetro `?embed=1` para ocultar la barra lateral y compactar el diseño.

Ejemplo de snippet (URL actual estimada: https://fabianco-ux.github.io/Estrategias-Inteligentes/):

```html
<iframe
  src="https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/"
  style="width: 100%; height: 720px; border: 0; border-radius: 12px; overflow: hidden;"
  allowfullscreen
></iframe>
```

- Para embeber una sección concreta, usa:
  - LinkedIn: `https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/linkedin`
  - Google Analytics: `https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/google-analytics`
  - Instagram: `https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/instagram`
  - Facebook: `https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/facebook`
  - WhatsApp: `https://fabianco-ux.github.io/Estrategias-Inteligentes/?embed=1#/whatsapp`

> Nota: El hash routing es manejado por React Router; en Sites el `iframe` respetará la URL completa.

## Tech Stack

- Vite 5, React 18, TypeScript 5
- Recharts para gráficos
- React Router para navegación

## Ajustes

- Si despliegas en un subpath distinto, `base: './'` permite que los assets funcionen correctamente sin conocer el nombre del repo de antemano.
- Los datos se encuentran en `src/data/mockData.ts` y la lógica de recomendaciones en `src/utils/recommendations.ts`.