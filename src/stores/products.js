import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      data: [],
      brands: [],
      allMen: [],
      allWomen: [],
      allKids: [],
      allUnisex: [],
      favorites: [],
      allCosmetics: [],
      menBestSellers: [],
      womenBestSellers: [],
    }
  },
  actions: {
    async get() {
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/products`, {
          Accept: `application/json`,
        })
        .then((response) => {
          if (response.status === 200) {
            this.data = JSON.parse(JSON.stringify(response.data)).data

            for (let i = 90; i > 0; i--) {
              let prd = this.data[i]

              if (prd.category === "Women's Perfumes") {
                this.womenBestSellers.push(prd)
              } else if (prd.category === "Men's Colognes") {
                this.menBestSellers.push(prd)
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })

      return this.data
    },
    async getAll() {
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/products`, {
          Accept: `application/json`,
        })
        .then((response) => {
          if (response.status === 200) {
            this.data = JSON.parse(JSON.stringify(response.data)).data

            for (let i = 0; i < this.data.length; i++) {
              let prd = this.data[i]

              if (prd.category === "Women's Perfumes") {
                this.allWomen.push(prd)
              } else if (prd.category === "Men's Colognes") {
                this.allMen.push(prd)
              } else if (prd.category === 'Unisex Perfumes') {
                this.allUnisex.push(prd)
              }

              if (prd.name.includes('Kids')) {
                this.allKids.push(prd)
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })

      return this.data
    },
    async getBrands() {
      this.loading = true
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/brands`, {
          Accept: `application/json`,
        })
        .then((response) => {
          if (response.status === 200) {
            this.brands = JSON.parse(JSON.stringify(response.data)).data
          } else {
            console.error(`Brands not found; see error log.\n${response.data}`)
          }
        })
        .catch(function (error) {
          console.log(error)
        })

      return this.brands
    },
    reset() {
      this.data = []
      this.get()
    },
  },

  persist: true,
})
