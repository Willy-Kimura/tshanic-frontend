<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <img src="/assets/images/misc/niche-perfumes.jpg" class="absolute top-0 -mt-11 left-0 w-full h-100 -z-40" alt="">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2 px-2">
        <span class="text-[#A36907] text-4xl font-bold mt-5 mb-2">
          Get In Touch
        </span>

        <div class="flex flex-col gap-2.5 text-[16px]/6 text-balance mb-5">
          <span class="mb-4">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us…
          </span>

          <div class="flex sm:flex-row flex-col gap-4 items-center">
            <div class="flex flex-col gap-3 p-5 items-center rounded-xl shadow-xl border border-gray-100">
              <i class="pi pi-phone rounded-full text-white bg-black p-5" style="font-size: 1.8rem"></i>
              <span class="text-2xl font-bold">
                Talk To Sales
              </span>
              <span class="text-md text-center">
                Interested in our products? Just pick up the phone and call us.
              </span>
              <vButton type="button" icon="pi pi-phone" label="0727866642" class="rounded-full!" severity="warn"
                @click="navigate('tel:0727866642')">
              </vButton>
            </div>

            <div class="flex flex-col gap-3 p-5 items-center rounded-xl shadow-xl border border-gray-100">
              <i class="pi pi-whatsapp rounded-full text-white bg-black p-5" style="font-size: 1.8rem"></i>
              <span class="text-2xl font-bold">
                WhatsApp Chat
              </span>
              <span class="text-md text-center">
                Also feel free to reach us via our always-on WhatsApp line.
              </span>
              <vButton type="button" label="0727866642" icon="pi pi-whatsapp" class="rounded-full!" severity="success"
                @click="navigate('0727866642')">
              </vButton>
            </div>
          </div>
        </div>

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
      } else if (page.includes('tel:')) {
        location.href = 'tel:0727866642';
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
