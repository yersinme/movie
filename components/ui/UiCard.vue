<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavouritesStore } from '@/stores/favourites'

interface Props {
  id: string | number
  title: string
  year: string | number
  genres: string
  backgroundImage: string
}

const props = defineProps<Props>()
const favs  = useFavouritesStore()
const isFavourite = computed(() => favs.isFavourite(props.id))

const router = useRouter()
const openMovie = () => router.push(`/movies/${props.id}`)
const toggleFav = (e: MouseEvent) => {
  e.stopPropagation()
  favs.toggle(props.id)
}
</script>

<template>
  <div
    class="movie-card"
    :class="{ 'has-background': backgroundImage }"
    @click="openMovie"
  >
    <button
      class="favorite-btn"
      :class="{ active: isFavourite }"
      @click="toggleFav"
    >
      <img v-if="!isFavourite" src="/icons/favourite-heart.svg"  alt="" />
      <img v-else             src="/icons/favourites-heart-add.svg" alt="" />
    </button>

    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-info">{{ year }} • {{ genres }}</p>
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

  &.has-background {
    background-image: v-bind('"url(" + backgroundImage + ")"');
  }

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
    background: var(--gray);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      background: rgba(255, 82, 82, 0.9);
    }

    img {
      width: 20px;
      height: 20px;
      filter: brightness(0) invert(1);
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