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
      newArrivals: [],
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

            let w2 = this.data.find((item) => item.id === 99)
            let w3 = this.data.find((item) => item.id === 132)
            let w4 = this.data.find((item) => item.id === 135)
            let w5 = this.data.find((item) => item.id === 151)
            let w6 = this.data.find((item) => item.id === 154)
            let w7 = this.data.find((item) => item.id === 167)
            let w8 = this.data.find((item) => item.id === 175)
            let w9 = this.data.find((item) => item.id === 187)
            let w10 = this.data.find((item) => item.id === 202)
            let w11 = this.data.find((item) => item.id === 207)
            let w12 = this.data.find((item) => item.id === 297)
            let w13 = this.data.find((item) => item.id === 298)

            let m2 = this.data.find((item) => item.id === 199)
            let m3 = this.data.find((item) => item.id === 206)
            let m4 = this.data.find((item) => item.id === 211)
            let m5 = this.data.find((item) => item.id === 226)
            let m6 = this.data.find((item) => item.id === 227)
            let m7 = this.data.find((item) => item.id === 277)
            let m8 = this.data.find((item) => item.id === 291)
            let m9 = this.data.find((item) => item.id === 302)
            let m10 = this.data.find((item) => item.id === 311)
            let m11 = this.data.find((item) => item.id === 312)
            let m12 = this.data.find((item) => item.id === 391)
            let m13 = this.data.find((item) => item.id === 423)

            let n1 = this.data.find((item) => item.id === 1852)
            let n2 = this.data.find((item) => item.id === 1853)
            let n3 = this.data.find((item) => item.id === 1854)
            let n4 = this.data.find((item) => item.id === 1855)

            this.womenBestSellers.push(w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13)
            this.menBestSellers.push(m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13)
            this.newArrivals.push(n1, n2, n3, n4)
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
