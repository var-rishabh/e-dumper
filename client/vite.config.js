import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      "process.env": JSON.stringify(process.env),
    },
  }
})
