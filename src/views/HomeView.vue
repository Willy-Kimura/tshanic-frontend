<template>
  <NavBar>
    <div id="hero-section" class="w-full mt-30 sm:mt-18">
      <section id="hero-image" class="shadow-2xl xl:h-110 max-md:h-80 max-lg:h-110 max-xl:h-110 max-sm:h-90 bg-top
                        xl:bg-[url(/assets/images/identity/hero-banner-08.png)] bg-cover bg-no-repeat w-full
                        bg-gradient-to-tr from-amber-300 to-yellow-50">

        <div id="desktop-hero"
          class="max-sm:hidden text-[#202020] pt-10 mt-5 mr-[7%] float-right md:flex md:flex-col mx-auto md:w-[50rem] justify-between">
          <h2 class="text-4xl md:text-[45px] mr-[7%] font-bold tracking-tight max-sm:p-5 text-right">
            <span class="font-bold text-[42px]">Fragrance </span>
            <span class="font-normal text-[65px] font-[arumik-signature] ml-3 mr-0"> meets </span>
            <span class="font-bold text-[42px]">excellence.</span>
          </h2>
          <div class="ml-2 mt-4 mr-[7%] mb-7 text-xl text-right text-balance float-right justify-end">
            At Tshanic, we curate the finest selection of luxury
            perfumes and premium cosmetics to help you look and feel your
            absolute best. Whether you're searching for your signature scent,
            a flawless foundation, or the perfect lipstick for any occasion, our
            collection blends iconic brands with niche treasures from around the globe.
            And, <span class="font-medium">we deliver!</span>
          </div>
          <div class="float-right mr-[7%] flex gap-8 justify-end content-center">
            <div class="flex content-center items-center text-[16px] gap-2 text-[#D10274]">
            </div>
            <vButton label="VIEW SHOP" @click="goToShop()" style="border-radius: 1px; padding: 10px;
                  outline-offset: 2px; border-width: 0px; padding-left: 20px; padding-right: 20px;
                  color: black; background-color: white; outline: 1px solid white;" />
          </div>
        </div>

        <div id="mobile-hero" class="pt-3 float-right flex flex-col mx-auto justify-between md:hidden">
          <h2 class="text-3xl font-bold tracking-tight pt-6 pl-7 text-left">
            <span class="font-normal"></span> <span class="font-bold">Fragrance </span>
            <span class="font-normal text-[38px] font-[arumik-signature] ml-2 mr-1"> meets </span>
            <span class="font-bold">excellence.</span>
          </h2>
          <div class="mb-7 mt-3 w-full pl-7 text-[16.2px] text-left text-balance tracking-tight">
            Whether you're searching for your signature scent,
            a flawless foundation, or the perfect lipstick for any occasion, Tshanic's
            collection blends iconic brands with niche treasures from around the globe.
            And, <span class="font-medium"> we deliver!</span>
          </div>
          <div class="flex content-center w-full justify-between">
            <div class="pl-7">
              <vButton label="VIEW SHOP" @click="goToShop()" style="border-radius: 1px; padding: 10px;
                  outline-offset: 2px; border-width: 0px; padding-left: 20px; padding-right: 20px;
                  color: black; background-color: white; outline: 1px solid white;" />
            </div>
            <div class="flex content-center items-center text-[16px] gap-4 text-black pr-10">
              <a href="https://wa.me/254727866642">
                <i class="pi pi-whatsapp content-center" style="font-size: 19px;"></i>
              </a>
              <a href="https://www.instagram.com/tshanic_skin_scents">
                <i class="pi pi-instagram content-center" style="font-size: 19px;"></i>
              </a>
              <a href="https://vm.tiktok.com/ZMAJDUGkB/">
                <i class="pi pi-tiktok content-center" style="font-size: 19px;"></i>
              </a>
              <span class="font-medium flex text-xl"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="body" class="bg-white flex flex-col">
      <div id="brands" class="mt-12 mx-auto w-full items-center rounded-2xl">
        <div id="brands-list"
          class="mx-auto w-[90%] justify-center grid grid-cols-2 sm:flex sm:flex-wrap flex-initial sm:gap-6 gap-4 items-center rounded-2xl">

          <RouterLink id="pageLink" to="/women" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/women-perfumes.avif)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Women</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/men" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/men-perfumes.webp)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Men</b> Colognes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/unisex" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/unisex-perfumes.png)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Unisex</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/kids" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(../../public/assets/images/misc/kids-perfumes.webp)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Kids</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/brands" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(../../public/assets/images/misc/niche-perfumes.jpg)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Niche</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/cosmetics" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="cursor-pointer rounded-xl shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/diffusers.jpg)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                All <b>Cosmetics</b>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div id="best-sellers-section" class="flex flex-col">
        <div id="best-seller-women"
          class="mt-14 mx-auto w-full items-center rounded-2xl h-55 content-center justify-center">

          <div id="product-best-sellers" class="block text-center items-center justify-center">
            <div class="flex flex-col">
              <span class="justify-center font-normal text-[#B08B0F] text-[40px] font-[arumik-signature] mr-1">
                For Men
              </span>
              <span class="mb-7 text-center text-3xl md:text-[36px] tracking-tight">
                Best Seller Perfumes
              </span>
            </div>

            <div v-if="getStoreData().length === 0"
              class="mx-auto mb-10 mt-4 gap-3 flex flex-wrap items-center justify-center">
              <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
                animationDuration=".5s" aria-label="loading" />
            </div>

            <div id="men-products-list-mobile" v-if="$isMobile()"
              class="mx-auto w-[95%] grid grid-cols-1 justify-center items-center rounded-2xl">
              <div id="for-men-mobile" class="border-t-1 border-gray-100"></div>
              <ProductItem v-for="(product) in menBestSellers" :key="product.id" :product="product" />
            </div>

            <div id="men-products-list-desktop" v-if="!$isMobile()"
              class="mx-auto w-[95%] md:w-[88%] xl:w-[87%] 2xl:w-3/4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 justify-center items-center rounded-md">
              <ProductItem v-for="(product) in menBestSellers" :key="product.id" :product="product" />
            </div>

            <div class="flex flex-col mt-11 mb-10">
              <span class="justify-center font-normal text-[#B08B0F] text-[40px] font-[arumik-signature] mr-1">
                For Women
              </span>
              <span class="mb-4 text-center text-3xl md:text-[36px] tracking-tight">
                Best Seller Perfumes
              </span>
            </div>

            <div id="women-products-list-desktop" v-if="!$isMobile()"
              class="mx-auto w-[95%] md:w-[88%] xl:w-[87%] 2xl:w-3/4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 justify-center items-center rounded-md">
              <ProductItem v-for="(product) in womenBestSellers" :key="product.id" :product="product" />
            </div>

            <div v-if="getStoreData().length === 0"
              class="mx-auto mb-10 mt-4 gap-3 flex flex-wrap items-center justify-center">
              <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
                animationDuration=".5s" aria-label="loading" />
            </div>
            <div id="women-products-list-mobile" v-if="$isMobile()"
              class="mx-auto w-[95%] grid grid-cols-1 justify-center items-center rounded-2xl">
              <div id="for-women" class="border-t-1 border-gray-100"></div>
              <ProductItem v-for="(product) in womenBestSellers" :key="product.id" :product="product" />
            </div>
          </div>

          <br> <br>
          <AppFooter />
        </div>
      </div>
    </div>
  </NavBar>
</template>

<script>
import axios from 'axios'
import topbar from 'topbar'
import router from '@/router'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import vDrawer from "primevue/drawer"
import { useShare } from '@vueuse/core'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'
import CartComponent from '@/components/CartComponent.vue'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'

const { share, isSupported } = useShare()

export default {
  components: { vDrawer, CartComponent },
  data() {
    return {
      user: {},
      siteURL: 'https://tshanic.co.ke',
      items: null,
      products: [],
      cartQuantity: 1,
      selectedProduct: {},
      womenBestSellers: [],
      menBestSellers: [],
      productCartDrawerVisible: false,
      loading: true
    };
  },
  props: {
    id: String,
    name: String,
    product: {}
  },
  computed: {
    productRating() {
      let min = Math.ceil(5);
      let max = Math.floor(5);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    cartPrice() {
      return 'Ksh ' + parseFloat(this.selectedProduct.sale_price * this.cartQuantity).toLocaleString();
    }
  },
  methods: {
    onShowCartDrawer() {
      this.cartQuantity = 1;
    },
    navigate(product) {
      topbar.show();
      this.selectedProduct = product;

      router.push({
        path: '/shop/' + product.name.replace(/\s/g, "-")
      }).then(() => {
        topbar.hide();
      });
      ;
    },
    showProductCartDrawer(productItem) {
      this.selectedProduct = productItem;
      this.productCartDrawerVisible = true;
    },
    goToShop() {
      router.push('/shop');
    },
    getImageLink(imageFile) {
      return window.location.href + '/assets/images/products/' + imageFile;
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
    getStoreData() {
      return useProductsStore().data;
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
  },
  created() {
    this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  },
  mounted() {
    topbar.show();
    const productStore = useProductsStore();

    if (productStore.data.length <= 0) {
      productStore.get();
    } else {
      this.products = productStore.data;
    }

    this.menBestSellers = productStore.menBestSellers;
    this.womenBestSellers = productStore.womenBestSellers;

    topbar.hide();
  }
};
</script>
