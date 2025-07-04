<script setup lang="ts">
import {ref, watch, onMounted, onUnmounted} from 'vue'
import {useDebounceFn} from '@vueuse/core'
import {useRouter} from 'vue-router'
import {navigateTo} from "#app";


const isSearching = ref(false)
const searchQuery = ref('')
const searchResults = ref([])
const box = ref<HTMLElement | null>(null)
const router = useRouter()

const fetchResults = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  const {data} = await useFetch('/api/movies/search', {
    query: {title: searchQuery.value}
  })
  searchResults.value = data.value?.movies || []
}
watch(searchQuery, useDebounceFn(fetchResults, 400))

const close = () => {
  isSearching.value = false
  searchQuery.value = ''
  searchResults.value = []
}
const onClickOutside = (e: MouseEvent) => {
  if (isSearching.value && box.value && !box.value.contains(e.target as Node)) close()
}
onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
const openMovie = (id: string) => navigateTo(`/movies/${id}`)
</script>

<template>
  <div ref="box" class="search-box">
    <img
        v-if="!isSearching"
        src="~/public/icons/search.svg"
        alt="search"
        @click.stop="isSearching = true"
        class="icon"
    />
    <input
        v-else
        v-model="searchQuery"
        placeholder="Поиск фильма..."
        class="search-input"
        @click.stop
    />
    <div v-if="isSearching && searchResults.length" class="search-results">
      <div @click="openMovie(m.imdb_id)"
           v-for="m in searchResults" :key="m.imdb_id" class="search-item">
        {{ m.title }} ({{ m.year }})
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-box {
  position: relative;
}

.icon {
  cursor: pointer;
}

.search-input {
  border: none;
  border-radius: 15px;
  padding: 5px 14px;
  width: 180px;
  background: #ccc;
  height: 24px;
}

.search-results {
  position: absolute;
  top: 40px;
  left: 0;
  width: 220px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  padding: 8px 0;
  color: #fff;
  max-height: 260px;
  overflow-y: auto;
  z-index: 10;
}

.search-item {
  padding: 6px 16px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
}
</style>
