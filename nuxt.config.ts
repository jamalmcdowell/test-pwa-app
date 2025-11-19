// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Test',
      short_name: 'Test',
      theme_color: '#e3dee7',
      icons: [
        {
          src: '/dev.png',
          sizes: '256x256',
          type: 'image/png',
        },
      ],
    },
  },
  vite: {
    server: {
      allowedHosts: true,
      host: true,
      port: 5173,
    },
  },
})
