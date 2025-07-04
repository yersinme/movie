export default defineEventHandler(async () => {
    const {API_URL} = useRuntimeConfig()

    const response = await $fetch(API_URL + '/docs.json', {})
    // setResponseHeader(event, 'Cache-Control', 'public, max-age=6000')

    return response ? Object.values(response) : []
})