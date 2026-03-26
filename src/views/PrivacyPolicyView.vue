<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <section class="mx-auto flex flex-col my-10 items-center text-center justify-center w-[90%] sm:w-1/2 px-2">
        <span class="text-[#A36907] text-3xl font-bold mb-3">
          Privacy Policy (Trust & Transparency)
        </span>

        <span class="text-left text-2xl font-bold mb-3 mt-1">
          Tshanic Skin & Scents
        </span>

        <span class="w-fit bg-amber-50 border border-amber-200 px-3 py-1 text-amber-900 flex
          flex-row items-center text-left mb-3 rounded-xl">
          Last Updated: &nbsp; <b>26<sup>th</sup>&nbsp; March, 2026</b>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          Introduction
        </span>

        <span class="w-full text-left text-[16px]/6 text-balance mb-3">
          This Privacy Policy explains how Tshanic Skin & Scents collects,
          uses, shares, and protects your personal information when you
          use tshanic.co.ke.
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          Information We Collect
        </span>

        <span class="w-full text-left text-[16px]/6 text-balance">
          <span class="text-left">
            We collect:
          </span>

          <ul class="list-disc mt-2">
            <li>Personal identifiers: Name, phone, email, delivery address.</li>
            <li>Order details: Products ordered, transaction reference.</li>
            <li>Payment info: Card or mobile money transaction metadata (handled securely by gateways).</li>
            <li>Device & browsing data for analytics.</li>
          </ul>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          How We Use Your Data
        </span>

        <span class="w-full text-left text-[16px]/6 text-balance">
          <span>
            We use your information to:
          </span>

          <ul class="list-disc mt-2">
            <li>Process orders and deliveries.</li>
            <li>Communicate order updates.</li>
            <li>Improve our services and customise your experience.</li>
            <li>Send newsletters or marketing (with opt-out option).</li>
          </ul>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          How We Share Your Data
        </span>

        <span class="w-full text-left text-[16px]/6 text-balance">
          <span>
            We do not sell your personal data. We may share data with:
          </span>

          <ul class="list-disc mt-2">
            <li>Delivery partners for order fulfilment.</li>
            <li>Secure payment processors for transaction completion.</li>
            <li>Legal authorities as required by law.</li>
          </ul>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          Cookies & Tracking
        </span>

        <span class="w-full flex flex-col gap-2 text-left text-[16px]/6 text-balance">
          <span class="text-balance">
            We use cookies to improve site performance and user experience.
          </span>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          Your Rights
        </span>

        <span class="w-full text-left text-[16px]/6 text-balance">
          <span>
            You can:
          </span>

          <ul class="list-disc mt-2">
            <li>Request access to your personal data.</li>
            <li>Correct or update information.</li>
            <li>Opt-out of marketing emails.</li>
          </ul>
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-5">
          Data Security
        </span>

        <span class="w-full text-left text-[16px]/6">
          We maintain reasonable safeguards to protect your information.
          However, no system is 100% guaranteed.
        </span>

        <span class="w-full text-left text-2xl font-bold mb-3 mt-4">
          Changes To This Policy
        </span>

        <span class="w-full text-[16px]/6 text-left mb-2">
          We may update this policy occasionally. The “Last Updated” date reflects the latest version.
        </span>

        <span class="w-full text-[16px]/6 text-left">
          Contact: <b>tshanicke@gmail.com</b>
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
