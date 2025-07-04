import {defineStore} from 'pinia'

export const useContinue = defineStore('recently', {
    state: () => ({
        ids: [] as (string | number)[]
    }),

    actions: {
        initContinue() {
            const idxJson = localStorage.getItem('recently');
            this.ids = idxJson ? JSON.parse(idxJson) : [];
        },

        toggle(id: string | number) {
            this.ids = [id, ...this.ids.filter(f => f !== id)].slice(0, 3);
            localStorage.setItem('recently', JSON.stringify(this.ids))
        },
    },

    persist: true
})
