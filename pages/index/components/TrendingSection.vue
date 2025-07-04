<script setup lang="ts">
import FilmCard from "~/components/FilmCard.vue";
import type {ITrending} from "~/pages/index/interfaces";

defineProps({
  trendingList: {
    type: Object as PropType<ITrending[]>,
    required: true
  }
})
</script>

<template>
  <div class="card-section">
    <h2 class="card-title">Trending</h2>
    <div class="card-wrapper">
      <film-card
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
