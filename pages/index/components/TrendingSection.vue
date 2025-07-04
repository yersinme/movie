<script setup lang="ts">
const { data: movies } = await useAsyncData('movies', async () => {
  const trending = await $fetch('/api/movies/trending')
  const list = trending.movies

  return await Promise.all(
    list.map(async (m: any) => {
      const details = await $fetch(`/api/movies/${m.imdb_id}`)
      return {
        id: m.imdb_id,
        title: m.title,
        year: m.year,
        genres: (details.genres ?? []).slice(0, 2).join(', '),
        backgroundImage: '/images/test.png'
      }
    })
  )
})


import { useFavouritesStore } from '@/stores/favourites'
const favs = useFavouritesStore()
</script>

<template>
  <div class="card-section">
    <h2>Trending</h2>

    <div class="card-wrapper">
      <UiCard
        v-for="m in movies"
        :key="m.id"
        v-bind="m"
        :is-favorite="favs.isFavourite(m.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-section {
  padding: 32px;

}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 16px;

  > * {
    flex: 1 1 calc(25% - 18px);
    max-width: calc(25% - 18px);
  }
}
</style>
