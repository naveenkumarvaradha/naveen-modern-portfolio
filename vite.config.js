import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,       // 👈 change from 5173 to 80
    host: true,
    open: true,
  },
});
