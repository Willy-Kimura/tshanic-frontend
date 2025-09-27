<template>
  <NavBar>
    <div id="body" class="mt-35 text-[#0F172A] bg-white">
      <div id="title" class="flex flex-col mx-auto items-center transition-all duration-[1s] ease-in-out">
        <span class="justify-center font-normal text-[#B08B0F] text-[40px] sm:text-[42px] font-[arumik-signature] mr-1">
          Our Brands
        </span>
        <span class="text-[13px]/6 text-slate-500 -mt-1 mb-2">
          Best-in-class brands from around the world.
        </span>
      </div>

      <div v-if="loading" class="mx-auto mb-10 mt-4 gap-3 flex flex-wrap items-center justify-center">
        <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent" animationDuration=".5s"
          aria-label="loading" />
      </div>
      <div v-else class="mx-auto mb-10 md:mx-30 gap-3 flex flex-wrap items-center justify-center">
        <div v-for="brand in brands" :key="brand.id" class="w-40 h-40 md:w-50 md:h-50 rounded-xl shadow-xl">
          <RouterLink :to="getBrandLink(brand)">
            <img :src="getBrandImageLink(brand.logo)" alt=brand.name>
          </RouterLink>
        </div>
      </div>
      <AppFooter />
    </div>
  </NavBar>
</template>

<script>
import axios from 'axios'
import topbar from 'topbar'
import router from '@/router'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useShare } from '@vueuse/core'
import { useCartStore } from "@/stores/cart.js";
import { vueTopprogress } from 'vue-top-progress'
import { useProductsStore } from '@/stores/products'
import * as globals from '@/helpers/GlobalFuncs.js'
import { load } from "@/helpers/GlobalFuncs.js";

const { share, isSupported } = useShare()

export default {
  data() {
    return {
      brands: [],
      loading: false,
    };
  },
  methods: {
    showLoader() {
      topbar.show();
    },
    navigate(brand) {
      router.push({
        path: '/brands/' + brand.replace(/\s/g, "-")
      });
    },
    getBrandLink(brand) {
      return '/brands/' + brand.name.replace(/\s/g, "-");
    },
    getBrandImageLink(imageFile) {
      return window.location.origin + '/assets/images/brands/' + imageFile;
    },
    async getBrands() {
      this.loading = true;
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/brands`, {
          Accept: `application/json`
        })
        .then((response) => {
          if (response.status === 200) {
            this.brands = JSON.parse(JSON.stringify(response.data)).data;
          } else {
            console.error(`Brands not found; see error log.\n${response.data}`)
          }
        })
        .catch(function (error) {
          console.log(error)
          this.loading = false;
        })

      this.loading = false;
      return this.brands;
    },
  },
  async mounted() {
    load();
    window.scrollTo(0, 0);
    await this.getBrands();
    window.scrollTo(0, 0);
  },
  created() {
  }
}
</script>

<style scoped></style>
