// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_binusfess: process.env.NUXT_PUBLIC_BINUSFESS_API_URL,
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-security',
    ],
    security: {},
    app: {
        head : {
            title: 'BINUS FESS',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                {
                    src: 'https://analytics.umami.is/script.js',
                    'data-website-id': '6b0b4402-d04a-431b-8356-1000ec9fc517',
                    async: true,
                    defer: true,
                },
            ]
        },
    }
})
