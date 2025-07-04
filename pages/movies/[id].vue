<script setup lang="ts">
import {useRoute} from 'vue-router'
import {useContinue} from "~/stores/continueWatching";

const route = useRoute()
const {toggle} = useContinue()
const {id} = route.params

const {data: movie} = await useAsyncData(`movie-${id}`, () =>
    $fetch(`/api/movies/${id}`)
)

onMounted(() => {
  toggle(id)
})
</script>

<template>
  <div v-if="movie" class="video-page">

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.video-player {
  width: 100%;
  max-width: 960px;
  height: 400px;
  border-radius: 16px;
}

</style>
