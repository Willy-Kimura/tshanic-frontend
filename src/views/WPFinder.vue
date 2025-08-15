<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%]">
        <img src="/assets/images/misc/wp-cancel.png" class="mt-7 w-33" alt="">
        <span class="text-3xl font-bold mb-3 mt-5">
          Sorry! Not WordPress.
        </span>
        <span class="text-[16px]/6">
          Looks like you're checking to see whether this site is build with WordPress - it's not.
          We built this site from the ground up with modern tech stacks and scalable infrastructure. Please <a
          href="https://wa.me/254783181403"
          class="font-semibold">feel free to reach out</a>
          in case you need your own uniquely crafted website or landing page.
        </span>
        <span class="mt-2 text-[#A36907] text-[40px] font-[arumik-signature]">Arumik</span>
        <div class="mx-auto flex flex-row justify-center mt-4 w-full gap-2">
          <vButton label="Go Back Home" icon="pi pi-arrow-left"
                   style="font-size: 15px; color: white;"
                   @click="navigate('home')"/>
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
