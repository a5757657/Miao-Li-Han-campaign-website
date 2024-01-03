import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Miao-Li-Han-campaign-website",
  plugins: [react()],
})
