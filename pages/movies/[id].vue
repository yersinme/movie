<script setup lang="ts">
const route = useRoute()
const {id} = route.params

const {data: movies} = useAsyncData('movies', () => null) // берём уже загруженные
const movie = computed(() => movies.value?.find(m => m.id == id))
</script>

<template>
  <div v-if="movie" class="video-page">
    <h1>{{ movie.title }}</h1>

    <video
        class="video-player"
        controls
        poster="/images/test.png"
    >
      <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
      />
    </video>
  </div>
</template>

<style scoped>
.video-page {
  padding: 32px;
}

.video-player {
  width: 100%;
  max-width: 960px;
  border-radius: 16px;
}
</style>
