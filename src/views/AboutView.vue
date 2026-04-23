<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2">
        <span class="text-[#A36907] text-3xl font-bold mb-3">
          About Tshanic
        </span>

        <span class="text-[16px]/6">
          <b>Tshanic Skin & Scents</b> is your premier Kenyan destination for authentic,
          high-quality perfumes and premium cosmetics. We are a legitimate retailer of
          authentic fragrances and cosmetics. We do not sell counterfeit, replica, or
          imitation goods. We curate a luxurious collection of scents and beauty products
          designed to elevate your personal style, offering confidence and sophistication
          for every occasion. Discover signature scents and beauty essentials tailored to
          your needs.
        </span>

        <span class="text-2xl font-bold mb-3 mt-5">
          Our Story & Commitment
        </span>

        <span class="text-[16px]/6">
          At Tshanic, we believe that beauty is not just a look, but an experience.
          Based in Kenya, Tshanic was founded with the mission to bridge the gap between
          discerning customers and world-class beauty brands. Whether you are looking for
          an enticing signature scent or premium cosmetics that nourish your skin, we bring
          the best of the beauty world directly to your doorstep.
        </span>

        <span class="text-2xl font-bold mb-3 mt-5">
          Why Choose Tshanic?
        </span>

        <span class="text-[16px]/6">
          100% Authentic Products: We guarantee authenticity in every perfume and cosmetic item.
          Curated Selection: Discover popular brands and exclusive finds to match your personal style.
          Customer-Centric Service: Experience effortless browsing, secure ordering, and reliable service
          tailored to you. Enhance your beauty routine and discover the art of scent with Tshanic.
        </span>
        <span class="mt-2 text-[#A36907] text-[40px] font-[arumik-signature]">
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
