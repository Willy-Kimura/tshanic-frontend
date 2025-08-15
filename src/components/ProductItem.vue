<script>

import router from "@/router";
import { useProductsStore } from "@/stores/products";

export default {
  data() {
    return {
      user: {},
      cartQuantity: 1,
      productCartDrawerVisible: false,
      selectedProduct: {},
      loading: true
    };
  },
  props: {
    id: String,
    name: String,
    product: {},
  },
  computed: {
    productRating() {
      let min = Math.ceil(5);
      let max = Math.floor(5);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  methods: {
    onShowCartDrawer() {
      this.cartQuantity = 1;
    },
    navigate(product) {
      this.selectedProduct = product;

      router.push({
        path: '/shop/' + product.name.replace(/\s/g, "-")
      });
    },
    showProductCartDrawer(product) {
      this.selectedProduct = product;
      this.productCartDrawerVisible = true;
    },
    goToShop() {
      router.push('/shop');
    },
    getImageLink(imageFile) {
      return window.origin + '/assets/images/products/' + imageFile;
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
    getHDImageLink(imageFile) {
      return window.origin + '/public/assets/images/products/hd/' + imageFile.replace('-300x300', '');
    },
    getBrandImageLink(imageFile) {
      return window.origin + '/public/assets/images/brands/' + imageFile;
    },
    getStore() {
      return useProductsStore();
    },
  },
}

</script>

<template>
  <div
    class="justify-center product flex flex-row border-gray-100 border-[1px] border-t-0 -mb-1 rounded-none cursor-pointer transition-all duration-200 ease-in-out">
    <div class="w-[50%] -ml-1" @click="navigate(product)">
      <img :src="getImageLink(`${JSON.parse(product.images)[0]}`)" class="pl-2 w-50 pt-2" alt="">
    </div>
    <div class="w-[50%]">
      <div class="bg-[green-400] mt-4 pb-4 text-left px-4">
        <vTag unstyled="true" :value=product.brand class="bg-[#EFDA95] text-sm text-black p-1 px-2 rounded-[3px]" />
        <div class="font-medium text-md pb-1 tracking-normal mt-2 leading-6 flex flex-wrap space-y-1"
          @click="navigate(product)">
          <span class="text-[15.5px]">
            {{ getProductNameOnly(product.name) }}
          </span>
          <vTag :value=getProductWeight(product.name) severity="secondary" class="" />
        </div>
        <div class="flex flex-col gap-1 mb-2" @click="navigate(product)">
          <span class="text-amber-800">{{ product.category }}</span>
          <div class="flex flex-row gap-2">
            <vRating v-model=productRating readonly=true></vRating>
            <span class="text-sm text-gray-700">({{
              getRandomRatingCount()
              }})</span>
          </div>
          <span class="text-sm text-gray-400">{{
            getRandomPurchaseCount()
            }} purchased recently.</span>
        </div>
        <div class="text-[18px] flex flex-col gap-1" @click="navigate(product)">
          Ksh {{ parseFloat(product.sale_price).toLocaleString() }}
          <div class="flex flex-row items-center gap-1">
            <i class="pi pi-truck" style="font-size: 14px;"></i>
            <span class="text-sm italic text-gray-700">Delivery countrywide</span>
          </div>
        </div>
        <div class="mt-4 mb-1 flex flex-row items-center justify-between">
          <vButton icon="pi pi-cart-plus" severity="contrast" variant="text" raised rounded aria-label="Favorite"
            @click="showProductCartDrawer(product)" />
          <vButton icon="pi pi-heart" variant="text" raised rounded aria-label="Favorite" />
          <vButton icon="pi pi-whatsapp" severity="success" variant="text" raised rounded aria-label="Favorite" />
        </div>
      </div>
    </div>
  </div>

  <vDrawer v-model:visible="productCartDrawerVisible" style="height: 55%;" position="bottom" @show="onShowCartDrawer"
    showCloseIcon dismissable blockScroll>
    <template #header>
      <div class="justify-start flex flex-col">
        <span class="text-[17px] font-bold">
          Add To Cart
        </span>
      </div>
    </template>
    <CartComponent :product="selectedProduct" :quantity="cartQuantity" />
  </vDrawer>
</template>

<style scoped></style>
