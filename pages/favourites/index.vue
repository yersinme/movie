<script setup lang="ts">
import { useFavouritesStore } from '@/stores/favourites'
const favs = useFavouritesStore()

const { data: movies } = await useAsyncData('movies', () => null)

const favouriteMovies = computed(() =>
  movies.value?.filter(m => favs.ids.includes(m.id))
)
</script>

<template>
  <div class="card-section">
    <h2>Favourites</h2>

    <div class="card-wrapper" v-if="favouriteMovies?.length">
      <UiCard
        v-for="m in favouriteMovies"
        :key="m.id"
        v-bind="m"
      />
    </div>

    <p v-else>Ещё нет избранных фильмов 🙃</p>
  </div>
</template>
