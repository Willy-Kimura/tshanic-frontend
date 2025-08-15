import {defineStore} from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      data: [],
    }
  },
  actions: {
    add(product, quantity) {
      if (this.data.find((el) => el.name === product.name)) {
        const found = this.data.find((el) => el.name === product.name);
        found.quantity += quantity;
      } else {
        product.quantity = quantity;
        this.data.push(product)
      }
    },
    remove(product) {
      let itemIndex = this.data.indexOf(product);
      this.data.splice(itemIndex, 1);
    },
    reset() {
      this.data = []
    },
  },

  persist: true,
})
