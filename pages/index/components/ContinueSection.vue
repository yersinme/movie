<script setup lang="ts">
import {useContinue} from "~/stores/continueWatching";
import type {PropType} from "vue";
import type {ITrending} from "~/pages/index/interfaces";

defineProps({
  films: {
    type: Object as PropType<ITrending[]>,
    required: false,
    default: []
  }
})
const {ids, initContinue} = useContinue()

onMounted(() => {
  initContinue()
})
</script>

<template>
  <div class="card-section">
    <h2 class="card-title">Continue watching</h2>
    <div class="card-wrapper">
      <film-card
          v-for="m in films?.filter(f => ids.includes(f.imdb_id))"
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