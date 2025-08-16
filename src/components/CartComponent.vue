<template>

  <div id="product-header-mobile" class="w-full flex flex-row gap-4">
    <div class="w-1/4 card">
      <vGalleria :value="parseImages()" :numVisible="3" containerStyle="max-width: 100px; max-height: 400px;"
        :showThumbnails="false" :showIndicators="false">
        <template #item="slotProps">
          <div class="border-b-[0px] border-b-gray-200">
            <div class="m-4">
            </div>
            <img :src="getHDImageLink(slotProps.item)" style="width: 100%;" alt="product-image" />
          </div>
        </template>
        <template #thumbnail="slotProps">
          <div>
            <img :src="getImageLink(slotProps.item)" style="width: 40%;" alt="sub-image" />
          </div>
        </template>
      </vGalleria>
    </div>
    <div class="w-3/4 text-[17px]">
      <div hidden class="flex flex-row gap-2 mb-1.5">
        <vTag unstyled :value=product.brand
          class="bg-[#EFDA95] w-fit text-md text-black text-[12px] p-1 px-2 rounded-sm" />
      </div>
      <span class="text-[17px] font-medium">
        {{ getProductNameOnly(product.name) }}
        <span class="text-gray-500">
          {{ getProductWeight(product.name) }}
        </span>
      </span>
      <div class="text-[21px] text-[#0F172A] font-semibold tracking-tight">
        <label class="pr-4" :title="ds">
          {{ price }}
        </label>
        <div class="flex flex-row gap-2">
          <vRating v-model=product.rating readonly />
          <span class="text-sm font-medium text-gray-700">({{ 5 }})</span>
        </div>
      </div>
    </div>
  </div>

  <vDivider type="dashed"></vDivider>
  <div class="flex flex-row mb-1 mt-1.5 items-start w-full gap-2">
    <div class="w-full">
      <vInputNumber v-model="qty" inputClass="text-center w-[80%]" inputId="horizontal-buttons" defaultValue=1
        allowEmpty=false buttonLayout="horizontal" min=1 max=100 style="--p-inputnumber-button-border-radius: 2px;"
        showButtons fluid>
        <template #incrementicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementicon>
          <span class="pi pi-minus" />
        </template>
      </vInputNumber>
    </div>
    <vButton id="add-to-cart-btn"
      class="w-full p-1.5 py-[8px] rounded-[2px] text-[14px] hover:shadow-lg transition-all duration-300 ease-in-out"
      icon="pi pi-cart-plus" label="&nbsp;Add to cart" @click="addToCart"
      style="background-color: #0F172A; border-color: #0F172A; color: white; padding: 7px;" />
  </div>

  <vDivider type="dashed"></vDivider>
  <div class="flex flex-col w-full items-start text-[16px]">
    <div class="flex flex-row gap-3 mb-1">
      <span class="text-gray-700">Availability:</span>
      <vTag severity="success"
        style="margin-left: 5px; margin-top: -2px; border-radius: 3px; font-size: 14px; font-weight: 500;">
        {{ product.status }}
      </vTag>
    </div>
    <div class="flex flex-row gap-3 mb-1.5">
      <span class="font-normal w-[90px] text-gray-700">Weight:</span>
      <span class="font-semibold tracking-tight">
        {{ getProductWeight(product.name) }}
      </span>
    </div>
    <div class="flex flex-row gap-3 mb-1.5">
      <span class="font-normal w-[90px] text-gray-700">Brand:</span>
      <span class="font-normal cursor-pointer">{{ product.brand }}</span>
    </div>
    <div class="flex flex-row gap-3 mb-1.5">
      <span class="font-normal w-[90px] text-gray-700">Category:</span>
      <span class="font-medium text-[#B38E16] cursor-pointer">{{ product.category }}</span>
    </div>
    <div class="flex flex-row gap-3 mb-1.5 items-center">
      <span class="font-normal w-[90px] text-gray-700">Type:</span>
      <span class="font-normal tracking-tight">{{ getPerfumeType(product.name) }}</span>
    </div>
    <div class="flex flex-row gap-3 mb-1.5 items-center">
      <span class="font-normal w-[90px] text-gray-700">SKU:</span>
      <span class="font-normal tracking-tight">{{ product.sku }}</span>
      <vButton icon="pi pi-copy" size="small" variant="outlined" aria-label="Favorite" v-tooltip.bottom="'Copy SKU'"
        rounded />
    </div>
  </div>

</template>

<script>

import router from '@/router'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useShare } from '@vueuse/core'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'

const { share, isSupported } = useShare()

export default {
  data() {
    return {
      qty: 1,
      price: this.product.price
    };
  },
  props: {
    product: {},
    visible: Boolean,
    quantity: Number
  },
  computed: {
    price() {
      return "Ksh " + (parseFloat(this.product.sale_price) * this.qty).toLocaleString();
    }
  },
  methods: {
    addToCart() {
      const cart = useCartStore();
      cart.add(this.product, this.qty);

      this.toasty('✓ Product added to cart.');
    },
    parseImages() {
      if (this.product !== null)
        return JSON.parse(this.product.images);
      else
        return [];
    },
    onShowCartDrawer() {
      this.qty = 1;
    },
    navigate(product) {
      this.product = product;

      router.push({
        path: '/shop/' + product.name.replace(/\s/g, "-")
      });
    },
    getImageLink(imageFile) {
      let img = window.location.href + '/assets/images/products/' + imageFile;
      return img;
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
      return window.location.origin + '/assets/images/products/' + imageFile;
    },
    getBrandImageLink(imageFile) {
      let img = window.location.origin + '/assets/images/brands/' + imageFile;
      return img;
    },
    toasty(message) {
      Toastify({
        text: message,
        position: 'center',
        style: {
          color: 'black',
          background: "#F0C633",
        },
      }).showToast();
    },
  },
  created() {

  },
  mounted() {
    // this.product = this.selection;
  }
};

</script>
