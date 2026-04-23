<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2 px-2">
        <span class="text-[#A36907] text-3xl font-bold mb-3">
          Why Shop With Us?
        </span>

        <span class="text-left text-[16px]/6 text-balance mb-3">
          Tshanic strictly sells authentic, genuine products only. We do not stock, sell, or
          promote counterfeit, replica, fake, or imitation goods of any kind. All products are
          sourced from reputable suppliers and authorized distributors. For more info on our
          business, please visit our <b>About</b> page.
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
import "toastify-js/src/toastify.css"
import { load } from "@/helpers/GlobalFuncs.js";

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
