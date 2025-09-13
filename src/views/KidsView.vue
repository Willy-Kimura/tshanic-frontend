<template>
  <KeepAlive>
    <NavBar>
      <div id="body" class="bg-white flex flex-col">
        <div id="kids-sub" class="mt-14 mx-auto w-full items-center rounded-2xl h-55 content-center justify-center">
          <div id="products-section" class="block text-center items-center justify-center">
            <div id="title" class="flex flex-col pt-22 pb-4 transition-all duration-[1s] ease-in-out">
              <span class="justify-center font-normal text-[#B08B0F] text-[40px] font-[arumik-signature] mr-1">
                Kids Perfumes
              </span>
            </div>

            <div id="kids-products-list-mobile" v-if="$isMobile()"
              class="mx-auto w-[95%] h-[100vh] grid grid-cols-1 justify-center items-center rounded-2xl">
              <DynamicScroller id="dsc" :items="products" :min-item-size="300" key-field="id"
                class="h-[100vh] overflow-y-scroll overflow-x-hidden">
                <template v-slot="{ item, index, active }">
                  <DynamicScrollerItem :item="item" :active="active" :data-index="index"
                    :size-dependencies="[item.name, item.brand]">
                    <ProductItem :key="item.id" :product="item" />
                  </DynamicScrollerItem>
                </template>
              </DynamicScroller>
            </div>
          </div>

          <br> <br>
          <AppFooter />
        </div>
      </div>
    </NavBar>
  </KeepAlive>
</template>

<script>
import topbar from 'topbar'
import router from '@/router'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useShare } from '@vueuse/core'
import { defineAsyncComponent } from 'vue';
import { useProductsStore } from '@/stores/products'
import { load } from "@/helpers/GlobalFuncs.js";

const { share, isSupported } = useShare()

export default {
  data() {
    return {
      user: {},
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
  },
  mounted() {
    topbar.show();
    load();
    window.scrollTo(0, 0);

    let st = this.getStore();

    for (let j = 0; j < st.data.length; j++) {
      if (st.data[j].name.includes("Kids") && (st.data[j].category.includes("Colognes") || st.data[j].category.includes("Perfumes"))) {
        this.products.push(st.data[j])
      }
    }

    const el = document.getElementById('dsc');
    const title = document.getElementById('title');
    const section = document.getElementById('kids-products-list-mobile');

    el.addEventListener('scroll', (event) => {
      if (el.scrollTop >= 100) {
        title.style.display = 'flex';
        title.style.paddingTop = '0px';
        title.style.paddingBottom = '0px';
        section.style.marginTop = '20px';
      } else if (el.scrollTop < 100 && el.scrollTop <= 0) {
        title.style.display = 'flex';
        title.style.paddingTop = '74px';
        title.style.paddingBottom = '4px';
        section.style.marginTop = '6px';
      }
    });

    topbar.hide();
  }
};
</script>
