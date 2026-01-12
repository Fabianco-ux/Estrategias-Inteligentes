import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Nota: base './' hace que los assets sean relativos, útil para GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react()],
});
