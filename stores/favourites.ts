import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    ids: [] as (string | number)[]
  }),

  actions: {
    toggle(id: string | number) {
      this.ids.includes(id)
        ? (this.ids = this.ids.filter(x => x !== id))
        : this.ids.push(id)
    },

    isFavourite(id: string | number) {
      return this.ids.includes(id)
    }
  },

  persist: true
})
