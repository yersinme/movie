export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { API_URL } = useRuntimeConfig()

  const response = await $fetch(API_URL + '/films.json')

  const movies = response ? Object.values(response) : []

  if (query.title) {
    const search = query.title.toLowerCase()
    const filtered = movies.filter((movie: any) =>
      movie.title?.toLowerCase().includes(search)
    )
    return { movies: filtered }
  }

  return { movies }
})
