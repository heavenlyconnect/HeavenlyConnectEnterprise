import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  define: {
    'process.env': {
      VITE_EMAILJS_SERVICE_ID: JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
      VITE_EMAILJS_TEMPLATE_ID: JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
      VITE_EMAILJS_PUBLIC_KEY: JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY),
    },
  },
})
