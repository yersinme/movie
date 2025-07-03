export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts', '@nuxtjs/device'],
    googleFonts: {
        families: {
            Poppins: [400, 500, 700],
            'Open+Sans': true,
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    css: ['@/assets/styles/main.scss'],
    runtimeConfig: {
        API_URL: 'https://movies-tv-shows-database.p.rapidapi.com',
        API_KEY: 'e63934d7aamsheec2dffb4bbada1p1b81e6jsn4a88d3693a94',
        API_HOST: 'movies-tv-shows-database.p.rapidapi.com',
        public: {
            apiBase: '/api'
        }
    }
})