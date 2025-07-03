<script setup lang="ts">
import { HEADER_LINKS } from '~/pages/index/constants'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const isSearching = ref(false)
const searchQuery = ref('')
const searchResults = ref([])
const searchBox = ref<HTMLElement | null>(null)

const fetchSearchResults = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  const { data } = await useFetch('/api/movies/search', {
    query: { title: searchQuery.value }
  })
  searchResults.value = data.value?.movies || []
}

const debouncedFetch = useDebounceFn(fetchSearchResults, 400)
watch(searchQuery, debouncedFetch)

const closeSearch = () => {
  isSearching.value = false
  searchQuery.value = ''
  searchResults.value = []
}

const handleClickOutside = (e: MouseEvent) => {
  if (isSearching.value && searchBox.value && !searchBox.value.contains(e.target as Node)) {
    closeSearch()
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onUnmounted(() => window.removeEventListener('click', handleClickOutside))
</script>

<template>
  <section>
    <header class="header">
      <div class="links">
        <nuxt-link
          v-for="link in HEADER_LINKS"
          :key="link.route"
          class="link"
          :to="link.route"
        >
          {{ link.title }}
        </nuxt-link>
      </div>

      <div class="buttons" ref="searchBox">
       <!-- Лупа -->
<img
  v-if="!isSearching"
  src="~/public/icons/search.svg"
  alt="search"
  @click.stop="isSearching = true"
/>

<!-- Инпут -->
<input
  v-else
  v-model="searchQuery"
  placeholder="Поиск фильма..."
  class="search-input"
  @click.stop
/>

        <img src="~/public/icons/bell.svg" alt="bell" />
        <img src="~/public/images/avatar.jpg" alt="avatar" />
        <div v-if="searchResults.length" class="search-results">
          <div v-for="movie in searchResults" :key="movie.imdb_id" class="search-item">
            {{ movie.title }} ({{ movie.year }})
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <h1 class="content-title">Insider</h1>
      <p class="content-text">2022 | Comedy horror | 1 Season</p>
      <div>
        <UiButton title="Watch now" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  background-image: url('/images/main-banner.jpg');
  background-size: cover;
  height: 455px;
  padding: 32px 40px 53px;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: 24px;
}

.link {
  color: var(--white);
}

.buttons {
  position: relative;
  display: flex;
  gap: 24px;
  img {
    cursor: pointer;
  }
}

.search-input {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 5px 14px;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  width: 180px;
  transition: 0.3s;
  &:focus {
    background-color: #fff;
    transform: scale(1.05);
  }
}

.search-results {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  padding: 12px;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
}

.search-item {
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.content-title {
  color: var(--white);
  font-size: 48px;
  font-weight: 600;
}

.content-text {
  color: var(--white);
  font-size: 14px;
}
</style>
