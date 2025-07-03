<script setup lang="ts">

const { data: movies } = await useFetch('/api/movies/trending', {
  transform: res =>
    res.movies.map((m: any) => ({
      id: m.imdb_id,
      title: m.title,
      year: m.year,
      backgroundImage: '/images/test.png'
    }))
})

const handleToggleFavorite = (id: string | number) => {}
</script>

<template>
  <div>
    <UiCard
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title"
      :year="movie.year"
      :background-image="movie.backgroundImage"
      :is-favorite="false"
      @toggle-favorite="handleToggleFavorite"
    />
  </div>
</template>

<style scoped></style>
