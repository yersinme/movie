<script setup lang="ts">
import {useFavouritesStore} from '@/stores/favourites'
import type {ITrending} from "~/pages/index/interfaces";

const {initFavorites, ids} = useFavouritesStore()
const tredingList = ref([]);
onMounted(() => {
  initFavorites()
  $fetch('https://test-b0a77-default-rtdb.firebaseio.com/films.json')
      .then(res => {
        return Object.values(res)
      })
      .then((data: ITrending[]) => {
        tredingList.value = data.filter(f => ids.includes(f.imdb_id));
      })
})
</script>

<template>
  <div class="card-section">
   <div class="card-header"> <AppHeader/></div>

    <h2 class="card-title">Favourites</h2>

    <div class="card-wrapper" v-if="tredingList?.length">
      <film-card
          v-for="m in tredingList"
          :key="m.id"
          :film="m"
      />
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
</style>