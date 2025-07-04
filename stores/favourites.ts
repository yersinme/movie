import {defineStore} from 'pinia'

export const useFavouritesStore = defineStore('favourites', {
    state: () => ({
        ids: [] as (string | number)[]
    }),

    actions: {
        initFavorites() {
            const idxJson = localStorage.getItem('favourites');
            this.ids = idxJson ? JSON.parse(idxJson) : [];
            console.log('this.ids ',this.ids )
        },

        toggle(id: string | number) {
            this.ids.includes(id)
                ? (this.ids = this.ids.filter(x => x !== id))
                : this.ids.push(id)
            localStorage.setItem('favourites', JSON.stringify(this.ids))
        },

        isFavourite(id: string | number) {
            return this.ids.includes(id)
        }
    },

    persist: true
})
