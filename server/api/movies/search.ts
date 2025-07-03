export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { API_URL, API_KEY, API_HOST } = useRuntimeConfig()

  const response = await $fetch(API_URL, {
    params: { title: query.title },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
      Type: 'get-movies-by-title'
    }
  })

  return { movies: response.movie_results ?? [] }
})
