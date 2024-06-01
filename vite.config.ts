import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/mark-elias/ReactAPI_Exercise.github.io",
  plugins: [react()],
})
