import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import path from "path"

export default defineConfig({
  server: {
    port: 4000
  },
  
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/server/vite.server.ts',
      injectClientScript: false,
    })
  ],

  publicDir: './assets/',
  
  resolve: {
    alias: [
      {
        find: "@core",
        replacement: path.resolve(__dirname, "src/core")
      }
    ]
  }
})
