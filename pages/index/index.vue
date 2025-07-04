<script setup lang="ts">
import MainSection from "~/pages/index/components/MainSection.vue";
import TrendingSection from "~/pages/index/components/TrendingSection.vue";
import type {ITrending} from "~/pages/index/interfaces";
import {useFavouritesStore} from "~/stores/favourites";
import ContinueSection from "~/pages/index/components/ContinueSection.vue";

const {data}: {
  data: ITrending[]
} = useFetch('https://test-b0a77-default-rtdb.firebaseio.com/films.json', {
  server: false,
  transform(data) {
    return Object.values(data)
  }
})
const {initFavorites} = useFavouritesStore()
onMounted(() => {
  initFavorites()
})

</script>

<template>
  <div>
    <main-section/>
    <trending-section :trendingList="data"/>
    <continue-section :films="data"/>
  </div>
</template>

<style scoped>

</style>