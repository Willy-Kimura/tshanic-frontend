<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2 px-2">
        <span class="text-[#A36907] text-3xl font-bold mb-3">
          Return Policy
        </span>

        <span class="flex flex-col gap-2.5 text-left text-[16px]/6 text-balance mb-3">
          <span>
            We go to great lengths to ensure our customers get the exact product they
            order in respect to quality and quantity. We appreciate however that there
            may be situations that may lead our customers to return the product. To
            arrange for the return of your order you can call us on <b>0727866642</b>.
          </span>

          <span>
            If you are not happy with the product you can return the product to us within 15 days
            from the date of purchase. The item must be returned in an unused, unsealed,
            unopened state and the package should not be damaged at all. The return should
            also be accompanied by evidence of purchase. We will process your refund for
            return within 7 days.
          </span>

          <span>
            Shipping charges are non-refundable unless we shipped
            the wrong item. We commit to ensure that the process of return and refund is
            as smooth as possible.
          </span>
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
