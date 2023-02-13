// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_binusfess: process.env.NUXT_BINUSFESS_API_URL || 'http://localhost:3001',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        [
            'nuxt-cloudflare-analytics',
            {
              token: process.env.NUXT_CLOUDFLARE_TOKEN,
            },
        ],
    ],
})
