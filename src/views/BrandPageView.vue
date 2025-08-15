<template>
  <NavBar>
    <div v-if="loading"
         class="mx-auto mt-37 gap-3 flex flex-wrap items-center justify-center">
      <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
                        animationDuration=".5s" aria-label="loading"/>
    </div>
    <div v-else id="body" class="bg-white flex flex-col">
      <div id="brands-section" class="flex flex-col">
        <div id="brands-sub"
             class="mt-14 mx-auto w-full items-center rounded-2xl h-55 content-center justify-center">
          <div id="products-section"
               class="flex flex-col text-center items-center justify-center">
            <div id="title"
                 class="flex flex-col pt-20 transition-all duration-[1s] ease-in-out">
              <img :src="getBrandImageLink(brand.logo)" width="100" :alt="brand.name">
            </div>

            <div id="brands-list-mobile" v-if="$isMobile()"
                 class="mx-auto w-[95%] h-[100vh] grid grid-cols-1 justify-center items-center rounded-2xl">
              <!--                <div id="for-men" class="border-t-1 border-gray-100 mb-4"></div>-->
              <DynamicScroller id="dsc" :items="products" :min-item-size="300"
                               key-field="id" @scroll="onScrollView"
                               class="h-[100vh] overflow-y-scroll overflow-x-hidden">
                <template v-slot="{ item, index, active }">
                  <DynamicScrollerItem :item="item"
                                       :active="active" :data-index="index"
                                       :size-dependencies="[item.name, item.brand]">
                    <ProductItem :key="item.id" :product="item"/>
                  </DynamicScrollerItem>
                </template>
              </DynamicScroller>
            </div>
          </div>

          <br> <br>
          <AppFooter/>
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
import {useShare} from '@vueuse/core'
import {useProductsStore} from '@/stores/products'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import {FilterMatchMode, FilterOperator} from '@primevue/core/api';
import {load} from "@/helpers/GlobalFuncs.js";

const {share, isSupported} = useShare()

export default {
  data() {
    return {
      user: {},
      brand: {},
      products: [],
      cartQuantity: 1,
      productCartDrawerVisible: false,
      selectedProduct: {},
      loading: false
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
      return window.location.href.replace('men', '') + 'public/assets/images/products/' + imageFile;
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
      return window.location.origin + '/assets/images/products/hd/' + imageFile.replace('-300x300', '');
    },
    getBrandImageLink(imageFile) {
      return window.location.origin + '/assets/images/brands/' + imageFile;
    },
    getStore() {
      return useProductsStore();
    },
    handleScroll() {
      var el = document.getElementById('men-products-list-mobile');
      this.getStore().posy = el.scrollTop;
    },
    checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    },
    getPageName() {
      let dirtyName = this.$route.params.name;
      return dirtyName.replace(/-/g, " ");
    },
    async getBrand(name) {
      this.loading = true;
      const url = import.meta.env.VITE_API_URL

      await axios
        .get(`${url}/brand/${name}`, {
          Accept: `application/json`
        })
        .then((response) => {
          if (response.status === 200) {
            this.brand = JSON.parse(JSON.stringify(response.data)).data;
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
    onScrollView(event) {
      const el = document.getElementById('dsc');
      const title = document.getElementById('title');
      const section = document.getElementById('men-products-list-mobile');

      if (el.scrollTop >= 100) {
        title.style.display = 'flex';
        title.style.paddingTop = '0px';
        title.style.marginTop = '-30px';
        title.style.paddingBottom = '0px';
        section.style.marginTop = '20px';
      } else if (el.scrollTop < 100 && el.scrollTop <= 0) {
        title.style.display = 'flex';
        title.style.marginTop = '-5px';
        title.style.paddingTop = '74px';
        title.style.paddingBottom = '4px';
        section.style.marginTop = '6px';
      }
    }
  },
  mounted() {
    topbar.show();
    
    load();

    window.scrollTo(0, 0);

    let st = this.getStore();
    let brandName = this.$route.params.name.replace(/-/g, " ");
    this.brand = this.getBrand(brandName);

    for (let j = 0; j < st.data.length; j++) {
      if (st.data[j].brand === brandName) {
        this.products.push(st.data[j]);
      }
    }

    this.loaded = true;

    topbar.hide();
  }
};
</script>
