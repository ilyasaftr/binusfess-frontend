// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_binusfess: process.env.NUXT_PUBLIC_BINUSFESS_API_URL,
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
