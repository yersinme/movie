<script setup lang="ts">
import FilmCard from "~/components/FilmCard.vue";
import Loader from '~/components/Loader.vue'
import type { ITrending } from "~/pages/index/interfaces";
import { computed } from 'vue'

const props = defineProps({
  trendingList: {
    type: Object as PropType<ITrending[]>,
    required: true
  }
})

// Проверяем, есть ли данные
const isLoading = computed(() => !props.trendingList?.length)
</script>

<template>
  <div class="card-section">
    <h2 class="card-title">Trending</h2>

    <div v-if="isLoading">
      <Loader />
    </div>

    <div v-else class="card-wrapper">
      <FilmCard
        v-for="m in trendingList"
        :key="m.imdb_id"
        :film="m"
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

.card-title {
  color: var(--white);
  font-weight: 600;
  font-size: 20px;
}
</style>
