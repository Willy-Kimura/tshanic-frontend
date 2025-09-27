<template>
  <NavBar>
    <div id="body" class="mt-37 text-[#0F172A] bg-white transition-all duration-200 ease-in-out">
      <section class="mx-auto pb-5 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between rounded-md h-full">
        <div class="flex flex-row justify-between">
          <section v-if="favs().length === 0"
            class="mx-auto flex flex-col mb-10 mt-2 items-center text-center justify-center w-[90%]">
            <span class="text-3xl font-normal mb-5">
              Heart&nbsp;<i class="pi pi-heart-fill" style="font-size: 21px"></i> any products. We'll keep them here.
            </span>
            <span class="text-[16px]/6">
              Found anything you'd wish to buy or checkout later? Just tap the heart <i class="pi pi-heart"
                style="font-size: 14px; color: #CAB15F;"></i> icon found next
              to the cart icon and it will be added right here. Enjoy!
            </span>
            <!--            <img src="/assets/images/identity/bg-nf.svg" class="mt-7 w-70" alt="shopping cart">-->
            <div class="mx-auto flex flex-row justify-center mt-8 w-full gap-2">
              <vButton label="Go Back" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
                @click="goBack()" />
            </div>
          </section>
        </div>
      </section>

      <section v-if="favs().length > 0" id="hb-section" class="flex flex-col">
        <div id="hb-sub" class="mx-auto w-full items-center rounded-2xl content-center justify-center">
          <div id="products-section" class="block text-center items-center justify-center">
            <div id="title" class="flex flex-col -mt-7 pb-2 transition-all duration-[1s] ease-in-out">
              <span class="justify-center font-normal text-[#B08B0F] text-[40px] font-[arumik-signature]">
                Heart Bucket
              </span>
            </div>

            <div id="hb-products-list-mobile" v-if="$isMobile()"
              class="mx-auto w-[95%] grid grid-cols-1 justify-center items-center rounded-2xl">
              <div id="favlist" class="border-t-1 border-gray-100"></div>
              <ProductItem v-for="(product) in favs()" :key="product.id" :product="product" @item-updated="foo()" />
            </div>
          </div>

          <div ref="prods" v-if="!$isMobile()" class="mx-auto w-[95%] md:w-[88%] xl:w-[87%] 2xl:w-3/4 grid
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 justify-center
                items-center rounded-md">
            <ProductItem v-for="(product) in loadingProducts" :key="product.id" :product="product" />
          </div>

          <br> <br>
          <AppFooter />
        </div>
      </section>
    </div>
    <AppFooter />
  </NavBar>
</template>

<style scoped>
.p-message-text,
.p-message-content,
.p-message {
  font-weight: normal;
  font-size: 9px;
}
</style>

<script>
import axios from 'axios'
import topbar from 'topbar'
import router from '@/router'
import '@/helpers/GlobalFuncs.js'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { timestamp, useShare } from '@vueuse/core'
import { vueTopprogress } from 'vue-top-progress'
import { useProductsStore } from '@/stores/products'
import vInputNumber from "primevue/inputnumber"
import vDialog from "primevue/dialog";
import vButton from "primevue/button";
import { load } from "@/helpers/GlobalFuncs.js";

const { share, isSupported } = useShare()

export default {
  components: { vButton },
  data() {
    return {
      loadingProducts: [],
      cartQuantity: 1,
      productCartDrawerVisible: false,
      selectedProduct: {},
      loading: true
    };
  },
  computed: {
    productRating() {
      let min = Math.ceil(5);
      let max = Math.floor(5);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  methods: {
    favs() {
      return this.getStore().favorites;
    },
    onShowCartDrawer() {
      this.cartQuantity = 1;
    },
    navigate(product) {
      router.push({
        path: '/shop/' + product.name.replace(/\s/g, "-")
      });
    },
    showProductCartDrawer(product) {
      this.selectedProduct = product;
      this.productCartDrawerVisible = true;
    },
    goBack() {
      router.back();
    },
    getImageLink(imageFile) {
      return window.location.href.replace('men', '') + '/assets/images/products/' + imageFile;
    },
    getRandomRating() {
      let min = Math.ceil(4.5);
      let max = Math.floor(5);
      this.productRating = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.productRating;
    },
    getRandomRatingCount() {
      let min = Math.ceil(4);
      let max = Math.floor(247);
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandomPurchaseCount() {
      let min = Math.ceil(3);
      let max = Math.floor(31);
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getProductWeight(name) {
      let splits = name.split(" ");
      return splits[splits.length - 1];
    },
    getProductNameOnly(name) {
      let splits = name.split(" ");
      splits.pop();
      return splits.join(" ");
    },
    shareThis(product) {
      if (isSupported) {
        share({
          title: `Checkout ${product}`,
          text: `Hi, checkout ${product}.\n\n`,
          url: location.href,
        })
      } else {
        console.log('The share feature is not supported in your browser.');
      }
    },
    parseHtml(html) {
      const parser = new DOMParser();
      const el = parser.parseFromString(html, 'text/html');

      return el.body.innerText;
    },
    getPerfumeType(name) {
      if (name.includes('EDP')) {
        return 'Eau De Perfum';
      } else if (name.includes('EDT')) {
        return 'Eau De Toilette';
      } else if (name.includes('EDC')) {
        return 'Eau De Cologne';
      } else {
        if (name.includes('Parfum') || name.includes('Perfume')) {
          return 'Luxury Perfume';
        } else if (name.includes('Cologne')) {
          return 'Luxury Cologne';
        } else if (name.includes('Spray')) {
          return 'Luxury Perfume';
        } else {
          return 'Cosmetic';
        }
      }
    },
    getHDImageLink(imageFile) {
      return window.location.origin + '/assets/images/products/hd/' + imageFile.replace('-300x300', '');
    },
    getBrandImageLink(imageFile) {
      return window.location.origin + '/assets/images/brands/' + imageFile;
    },
    getStore() {
      return useProductsStore();
    },
    handleScroll() {
      let el = document.getElementById('men-products-list-mobile');
      this.getStore().posy = el.scrollTop;
    },
    checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    },
  },
  mounted() {
    topbar.show();

    window.addEventListener("scroll", this.handleScroll)
    this.loadingProducts = this.favs().slice(0, 15);

    this.loading = false;

    window.scrollTo(0, 0);
    topbar.hide();
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style scoped>
#invoice {
  mask: repeating-conic-gradient(from 135deg at 50% 5px, #0000 0, #000 1deg 89deg, #0000 90deg 180deg) 50% -5px/10px
}
</style>
