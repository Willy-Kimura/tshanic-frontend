<template>
  <NavBar>
    <div id="hero-section" class="mt-37 text-[#0F172A] bg-white">
      <div class="no-tailwindcss">
      </div>
      <section id="hero-image"
        class="mx-auto py-7 px-7 sm:w-[70%] w-full flex justify-between shadow-lg rounded-md h-full">
        <div v-if="loading" class="w-full -mt-6 flex flex-col items-start">
          <vSkeleton width="80%" class="mb-2"></vSkeleton>
          <vSkeleton width="100%" height="370px" class="mb-3"></vSkeleton>
          <vSkeleton width="40%" class="mb-2"></vSkeleton>
          <vSkeleton width="90%" class="mb-4"></vSkeleton>
          <vSkeleton width="50%" class="mb-2"></vSkeleton>
          <vSkeleton width="20%" class="mb-2"></vSkeleton>
          <vSkeleton width="99%" height="50px" class="mb-3"></vSkeleton>
        </div>

        <div v-else class="w-full">
          <div class="text-xs mb-2 -mt-6 text-gray-400">
            &nbsp; {{ product.name }}
          </div>
          <div id="product-header-mobile" class="w-full flex flex-col gap-7 mb-4">
            <div class="card flex">
              <vGalleria :value="JSON.parse(product.images)" :responsiveOptions="responsiveOptions" :numVisible="3"
                containerStyle="max-width: 100%; max-height: 400px;" :showThumbnails="false" :showIndicators="false">
                <template #item="slotProps">
                  <div class="border-b-[0px] border-b-gray-200">
                    <div class="m-4">
                      <vButton icon="pi pi-heart" variant="text" size="large" raised rounded aria-label="Favorite" />
                    </div>
                    <img :src="getHDImageLink(slotProps.item)" style="width: 100%;" />
                  </div>
                </template>
                <template #thumbnail="slotProps">
                  <div>
                    <img :src="getImageLink(slotProps.item)" style="width: 40%;" />
                  </div>
                </template>
              </vGalleria>
            </div>
            <div class="flex-1/2 flex flex-col gap-1 text-[17px]">
              <div class="flex flex-row gap-2">
                <vTag unstyled="true" :value=product.brand
                  class="bg-[#EFDA95] w-fit text-md text-black text-[13px] p-1 px-2 rounded-sm" />
              </div>
              <span class="text-[19px] font-medium">
                {{ getProductNameOnly(product.name) }}
                <span class="text-gray-500">{{ getProductWeight(product.name) }}</span>
                <!-- <vTag :value=getProductWeight(product.name) style="font-size: 18px;" class="w-fit"
                  severity="secondary" /> -->
              </span>
              <div class="text-[23px] text-[#0F172A] font-semibold tracking-tight">
                <span class="pr-4">Ksh {{ parseFloat(product.sale_price).toLocaleString() }}</span>

                <div class="flex flex-row gap-2 mb-3">
                  <vRating v-model=product.rating readonly=true></vRating>
                  <span class="text-sm font-medium text-gray-700">({{ 5 }})</span>
                </div>
              </div>
              <span class="text-[14px] text-[#29323E] tracking-normal">
                {{ product.short_desc }}
              </span>
              <vDivider type="dashed"></vDivider>
              <div class="flex flex-col w-full items-start text-[16px]">
                <div class="flex flex-row gap-3 mb-1">
                  <span class="text-gray-700">Availability:</span>
                  <vTag severity="success"
                    style="margin-left: 5px; margin-top: -2px; border-radius: 3px; font-size: 14px; font-weight: 500;">
                    {{
                      product.status
                    }}
                  </vTag>
                </div>
                <div class="flex flex-row gap-3 mb-1.5">
                  <span class="font-normal w-[90px] text-gray-700">Weight:</span>
                  <span class="font-normal tracking-tight">
                    {{ getProductWeight(product.name) }}
                  </span>
                </div>
                <div class="flex flex-row gap-3 mb-1.5">
                  <span class="font-normal w-[90px] text-gray-700">Brand:</span>
                  <span class="font-normal cursor-pointer">{{ product.brand }}</span>
                </div>
                <div class="flex flex-row gap-3 mb-1.5">
                  <span class="font-normal w-[90px] text-gray-700">Category:</span>
                  <span class="font-medium text-[#B38E16] cursor-pointer">{{
                    product.category
                    }}</span>
                </div>
                <div class="flex flex-row gap-3 mb-1.5 items-center">
                  <span class="font-normal w-[90px] text-gray-700">Type:</span>
                  <span class="font-normal tracking-tight">{{ getPerfumeType(product.name) }}</span>
                </div>
                <div class="flex flex-row gap-3 mb-1.5 items-center">
                  <span class="font-normal w-[90px] text-gray-700">SKU:</span>
                  <span class="font-normal tracking-tight">{{ product.sku }}</span>
                  <vButton icon="pi pi-copy" size="small" variant="outlined" aria-label="Favorite"
                    v-tooltip.bottom="'Copy SKU'" rounded />
                </div>
                <div v-if="product.tags !== ''" class="flex flex-wrap gap-3 mb-1 items-center">
                  <div class="flex flex-col gap-2">
                    <span class="font-normal w-[90px] text-gray-700">Tags:</span>
                    <div class="flex flex-wrap gap-2">
                      <vChip v-for="tag in product.tags.split(', ')" :key=tag style="font-size: 13px;">
                        {{ tag }}
                      </vChip>
                    </div>
                  </div>
                </div>
                <vDivider type="dashed"></vDivider>
                <div class="flex flex-col mb-1 mt-1.5 items-start w-full gap-2">
                  <div class="w-full">
                    <vInputNumber v-model="quantity" inputClass="text-center w-[80%]" inputId="horizontal-buttons"
                      showButtons defaultValue=1 allowEmpty=false buttonLayout="horizontal" min="1" max="100"
                      style="--p-inputnumber-button-border-radius: 2px;" fluid>
                      <template #incrementbuttonicon>
                        <span class="pi pi-plus" />
                      </template>
                      <template #decrementbuttonicon>
                        <span class="pi pi-minus" />
                      </template>
                    </vInputNumber>
                  </div>
                  <vButton id="add-to-cart-btn"
                    class="w-full p-1.5 py-[8px] rounded-[2px] text-[14px] hover:shadow-lg transition-all duration-300 ease-in-out"
                    icon="pi pi-cart-plus" label="&nbsp;Add to cart" @click="addToCart"
                    style="background-color: #0F172A; border-color: #0F172A; color: white; padding: 8px;" />
                  <vButton id="buy-on-whatsapp-btn"
                    class="w-full py-[8px] hover:shadow-lg transition-all duration-300 ease-in-out" label="Checkout"
                    iconPos="left" icon="pi pi-whatsapp"
                    style="background-color: #08802C; border-color: #08802C; border-radius: 2px; color: white; padding: 8px;" />
                </div>
                <div class="flex flex-row mt-3 mb-4 gap-3 justify-center items-center w-full">
                  <vButton icon="pi pi-share-alt" size="large" severity="secondary" variant="outlined" rounded
                    aria-label="Share product" @click="shareThis(product.name)" />
                  <vButton icon="pi pi-heart" size="large" severity="warn" variant="outlined" rounded
                    aria-label="Share product" @click="shareThis(product.name)" />
                </div>
              </div>
            </div>
          </div>

          <div id="product-content" class="">
            <div class="card">
              <vTabs value="0">
                <vTabList>
                  <vTab value="0">DESCRIPTION</vTab>
                  <vTab value="1">BRAND</vTab>
                </vTabList>
                <vTabPanels>
                  <vTabPanel value="0">
                    <div id="product-desc" class="text-lg">
                      {{ parseHtml(product.long_desc) }}
                    </div>
                  </vTabPanel>
                  <vTabPanel value="1">
                    <div class="flex flex-col gap-2">
                      <div class="w-full flex flex-col items-center justify-center">
                        <img :src="getBrandImageLink(brand.logo)" class="w-50 h-50" alt="" />
                      </div>
                      <span class="text-2xl font-bold">
                        {{ brand.name }}
                      </span>
                      <div class="flex flex-row gap-3 mb-1.5 text-[16px]">
                        <span class="font-normal text-gray-700">Country: </span>
                        <span class="font-bold cursor-pointer">{{ brand.country }}</span>
                      </div>
                      <span class="font-normal w-full text-gray-700">
                        {{ brand.description }}
                      </span>
                    </div>
                  </vTabPanel>
                </vTabPanels>
              </vTabs>
            </div>
          </div>
        </div>
      </section>
      <AppFooter v-if="!loading" />
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
    addToCart() {
      const cart = useCartStore();
      cart.add(this.product, this.quantity);

      globals.message('✓ Product added to cart.');
    },
    shareThis(product) {
      if (isSupported) {
        share({
          title: `Checkout ${product}`,
          text: `Hi, checkout ${product}.\n${location.href}`,
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
    getImageLink(imageFile) {
      let img = window.location.origin + '/assets/images/products/' + imageFile;
      return img;
    },
    getHDImageLink(imageFile) {
      let img = window.location.origin + '/assets/images/products/hd/' + imageFile.replace('-300x300', '');
      return img;
    },
    getBrandImageLink(imageFile) {
      let img = window.location.origin + '/assets/images/brands/' + imageFile;
      return img;
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
    async getProduct() {
      topbar.show();
      this.loading = true;

      let dirtyName = this.$route.params.name;
      let productName = dirtyName.replace(/-/g, " ");

      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/product`, {
          Accept: `application/json`,
          params: {
            name: productName
          }
        })
        .then((response) => {
          if (response.status == 200) {
            this.product = JSON.parse(JSON.stringify(response.data)).data;
            this.getBrand(this.product.brand);

            // [Test] console.log(this.product);
          } else {
            console.error(`Product '${productName}' not found; see error log.\n${response.data}`)
          }
        })
        .catch(function (error) {
          console.log(error)
          this.loading = false;
        })

      this.loading = false;
      topbar.hide();

      window.scrollTo({
        top: 0,
        left: 0,
      });

      return this.product;
    },
    async getBrand(name) {
      this.loading = true;
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/brand/${name}`, {
          Accept: `application/json`
        })
        .then((response) => {
          if (response.status == 200) {
            this.brand = JSON.parse(JSON.stringify(response.data)).data;
            // [Test] console.log(this.product);
          } else {
            console.error(`Brand '${name}' not found; see error log.\n${response.data}`)
          }
        })
        .catch(function (error) {
          console.log(error)
          this.loading = false;
        })

      this.loading = false;
      return this.brand;
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    load();
  },
  async created() {
    await this.getProduct();
    document.title = this.product.name + ' - Tshanic Best perfumes and cosmetics online store';
  }
}
</script>

<style scoped></style>
