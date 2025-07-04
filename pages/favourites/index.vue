<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFavouritesStore } from '@/stores/favourites'
import type { ITrending } from '~/pages/index/interfaces'
import AppHeader from '~/components/AppHeader.vue'
import FilmCard from '~/components/FilmCard.vue'
import Loader from '~/components/Loader.vue'

const { initFavorites, ids } = useFavouritesStore()

const trendingList = ref<ITrending[]>([])
const isLoading = ref(true)

onMounted(async () => {
  initFavorites()
  try {
    const res = await $fetch('https://test-b0a77-default-rtdb.firebaseio.com/films.json')
    const all = Object.values(res || {}) as ITrending[]
    trendingList.value = all.filter(f => ids.includes(f.imdb_id))
  } catch (e) {
    console.error('Ошибка загрузки фильмов:', e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="card-section">
    <div class="card-header">
      <AppHeader />
    </div>

    <h2 class="card-title">Favourites</h2>

    <Loader v-if="isLoading" />

    <div class="card-wrapper" v-else-if="trendingList.length">
      <FilmCard
        v-for="m in trendingList"
        :key="m.imdb_id"
        :film="m"
      />
    </div>

    <div v-else class="empty-text">
      Нет избранных фильмов.
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-section {
  padding: 40px;
}

.card-header {
  padding-bottom: 65px;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 16px;

  > * {
    flex: 1 1 calc(30% - 18px);
    max-width: calc(30% - 18px);
  }
}

.card-title {
  color: var(--white);
}

.empty-text {
  color: #aaa;
  padding: 16px;
}
</style>
