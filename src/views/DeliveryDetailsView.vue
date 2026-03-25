<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2">
        <span class="text-[#A36907] text-3xl font-bold mb-3">
          Deliveries
        </span>

        <span class="text-[16px]/6 text-balance">
          Tshanic offers <b>same-day deliveries</b> for orders placed before
          2:00 PM local time. Orders received after 2:00 PM will be processed
          for delivery on the next business day. Ensure all orders are finalized
          before the cutoff to guarantee same-day service.
        </span>

        <span class="text-2xl font-bold mb-3 mt-5">
          Tshanic Delivery Details
        </span>

        <span class="text-[16px]/6 px-3">
          <ul class="text-left list-disc">
            <li>Same-Day Delivery Cutoff: <b>2:00 PM</b></li>
            <li>Orders Before 2:00 PM: <b>Same day</b></li>
            <li>Orders After 2:00 PM: <b>Next day</b></li>
          </ul>
        </span>

        <span class="mt-4 text-[#A36907] text-[32px] font-[arumik-signature]">
          Tshanic Skin & Scents.
        </span>
        <div class="mx-auto flex flex-row justify-center mt-4 w-full gap-2">
          <vButton label="Back Home" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
            @click="navigate('home')" />
        </div>
      </section>
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
