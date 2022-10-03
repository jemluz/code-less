import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
  id: 'menu', 
  state: () => {
    return { isVisible: false }
  },
  actions: {
    setVisibility(visible) {
      this.isVisible = visible;
    },
  },
})