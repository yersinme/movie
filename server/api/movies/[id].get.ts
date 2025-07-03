export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const { API_URL, API_KEY, API_HOST } = useRuntimeConfig()

  const raw = await $fetch(API_URL, {
    params: { movieid: id },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
      Type: 'get-movie-details'
    }
  })

  return {
    imdb_id: raw.imdb_id,
    title: raw.title,
    year: raw.year,
    genres: raw.genres
  }
})
