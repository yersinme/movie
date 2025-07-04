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
        API_URL: 'https://movies-tv-shows-database.p.rapidapi.com',
        API_KEY: '60bca2679bmsh641e8ae1be8d82dp180c95jsn25972c77facc',
        API_HOST: 'movies-tv-shows-database.p.rapidapi.com',
        public: {
            apiBase: '/api'
        }
    }
})