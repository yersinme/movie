export default defineEventHandler(async (event) => {
  const { API_URL, API_KEY, API_HOST } = useRuntimeConfig()

  const response = await $fetch(API_URL, {
    params: { page: 1 },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
      Type: 'get-trending-movies'
    }
  })

  return {
    movies: response.movie_results ?? []
  }
})
