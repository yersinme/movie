export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts', '@nuxtjs/device', '@pinia/nuxt',
        'pinia-plugin-persistedstate'],
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
        API_URL: 'https://test-b0a77-default-rtdb.firebaseio.com',
        API_KEY: 'f56618484emsh6b2006978ed9a39p182560jsn573a0d2a352d',
        API_HOST: 'movies-tv-shows-database.p.rapidapi.com',
        public: {
            apiBase: '/api'
        }
    }
})