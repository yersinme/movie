<script setup lang="ts">
import {computed, defineProps} from 'vue'
import {useRouter} from 'vue-router'
import {useFavouritesStore} from '@/stores/favourites'
import type {ITrending} from "~/pages/index/interfaces";

const props = defineProps({
  film: {
    type: Object as PropType<ITrending>,
    required: true
  }
})

const favs = useFavouritesStore()
const isFavourite = computed(() => favs.isFavourite(props.film.imdb_id))

const router = useRouter()
const openMovie = () => router.push(`/movies/${props.film.imdb_id}`)
const toggleFav = (e: MouseEvent) => {
  e.stopPropagation()
  favs.toggle(props.film.imdb_id)
}
</script>

<template>
  <div
      class="movie-card"
      @click="openMovie"
  >
    <button
        class="favorite-btn"
        :class="{ active: isFavourite }"
        @click="toggleFav"
    >
      <img v-if="!isFavourite" src="/icons/favourite-heart.svg" alt=""/>
      <img v-else src="/icons/favourites-heart-add.svg" alt=""/>
    </button>

    <div class="card-content">
      <div class="card-title">{{ film.title }}</div>
      <p class="card-info">{{ film.year }} • {{ 'Romanticio lubov' }}</p>
    </div>
  </div>
</template>


<style scoped lang="scss">
.movie-card {
  position: relative;
  width: 100%;
  height: 301px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-image: url("/images/test.png");

  &:hover {
    transform: translateY(-2px);
  }

  .favorite-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    border: none;
    background: var(--white);
    border-radius: 8.3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    z-index: 11;
    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 20px;
      height: 20px;
    }
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 86px;
    background: var(--gray-gradient);
    backdrop-filter: blur(10px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .card-title {
      color: var(--black);
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 4px 0;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .card-year {
      color: var(--black);
      font-size: 14px;
      font-weight: 400;
    }
  }
}

.card-info {
  color: var(--black);
  font-size: 14px;
  font-weight: 400;
}
</style>