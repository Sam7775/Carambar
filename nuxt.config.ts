import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'node-server',
    serverHandlers: [
      {
        route: '/api/jokes',
        handler: '~/server/api/jokes.js'
      },
      {
        route: '/api/jokes/:id',
        handler: '~/server/api/jokes.js'
      },
      {
        route: '/api/jokes/random',
        handler: '~/server/api/random.js'
      }
    ]
  },
  server: {
    port: 3000
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false
  }
});
