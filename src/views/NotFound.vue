<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%]">
        <img src="/assets/images/identity/bg-nf.png" class="mt-7 w-70" alt="">
        <span class="text-3xl font-bold mb-3 mt-8">
          Sorry, page not found.
        </span>
        <span class="text-[16px]/6">
          Sorry. It seems the link you used is either invalid, or the resource has been moved.
        </span>
        <div class="mx-auto flex flex-row justify-center mt-6 w-full gap-2">
          <vButton label="Go Back Home" icon="pi pi-arrow-left"
                   style="font-size: 15px; color: white;"
                   @click="navigate('home')"/>
          <vButton label="Contact Support"
                   style="font-size: 15px; color: #F59E0B; background-color: white;"
                   @click="navigate('support')"/>
        </div>
      </section>
      <AppFooter/>
    </div>
  </NavBar>
</template>

<script>
import axios from 'axios'
import topbar from 'topbar'
import router from '@/router'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import {useShare} from '@vueuse/core'
import {useCartStore} from "@/stores/cart.js";
import {vueTopprogress} from 'vue-top-progress'
import {useProductsStore} from '@/stores/products'
import * as globals from '@/helpers/GlobalFuncs.js'
import {load} from "@/helpers/GlobalFuncs.js";

const {share, isSupported} = useShare()

export default {
  data() {
    return {
      brand: {},
      product: {},
      loading: false,
      quantity: 1,
      responsiveOptions: [
        {
          breakpoint: '1300px',
          numVisible: 3
        },
        {
          breakpoint: '575px',
          numVisible: 1
        }
      ]
    };
  },
  methods: {
    navigate(page) {
      if (page === 'home') {
        location.href = window.location.origin;
      } else {
        location.href = 'https://wa.me/254727866642';
      }
    },
  },
  async mounted() {
    load();
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped></style>
