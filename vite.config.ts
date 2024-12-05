import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LINKS-REVENDAS/', // Adicione a base correta aqui
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
