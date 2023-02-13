// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_binusfess: process.env.BINUSFESS_API_URL || 'http://localhost:3001',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        [
            'nuxt-cloudflare-analytics',
            {
              token: process.env.CLOUDFLARE_TOKEN,
            },
        ],
    ],
})
