<template>
  <NavBar>
    <div id="hero-section" class="w-full mt-30 sm:mt-26 bg-[#E0CD7E]">
      <section id="hero-image" class="shadow-2xl xl:h-110 max-md:h-80 max-lg:h-110 max-xl:h-110 max-sm:h-90 bg-top
                        xl:bg-[url(/assets/images/identity/hero-banner-08.png)] md:bg-[url(/assets/images/identity/hero-banner-08.png)] xl:bg-cover bg-no-repeat w-full
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
                  outline-offset: 2px; border-width: 0px; padding-left: 30px; padding-right: 30px;
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
            <div class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/women-perfumes.avif)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Women</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/men" class="navLink transition-all duration-200 ease-in-out">
            <div class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/men-perfumes.webp)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Men</b> Colognes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/unisex" class="navLink transition-all duration-200 ease-in-out">
            <div class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/unisex-perfumes.png)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Unisex</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/kids" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(../../public/assets/images/misc/kids-perfumes.webp)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                <b>Kids</b> Perfumes
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/brands" class="navLink transition-all duration-200 ease-in-out">
            <div
              class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(../../public/assets/images/misc/niche-perfumes.jpg)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                OUR <b>BRANDS</b>
              </div>
            </div>
          </RouterLink>

          <RouterLink id="pageLink" to="/cosmetics"
            class="navLink xl:visible max-sm:visible lg:hidden transition-all duration-200 ease-in-out">
            <div class="transition-all duration-200 hover:-translate-y-1 hover:scale-100 cursor-pointer rounded-xl
              shadow-2xl w-45 sm:w-50 h-50 bg-[url(/assets/images/misc/diffusers.jpg)] bg-cover bg-no-repeat">
              <div class="bg-[white] shadow-xl rounded-tl-xl rounded-tr-xl p-1 py-3 text-center uppercase">
                All <b>Cosmetics</b>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div id="best-sellers-section" class="flex flex-col">
        <div id="best-seller-women"
          class="block text-center mt-10 mx-auto w-full items-center rounded-2xl h-55 content-center justify-center">

          <div  class="hidden flex-col my-2">
            <span
              class="justify-center font-normal text-[#B08B0F] text-[40px] sm:text-[42px] font-[arumik-signature] mr-1">
              Cosmetics
            </span>
            <span class="mb-4 text-center text-3xl md:text-[36px] tracking-tight">
              New Arrivals!
            </span>
          </div>

          <div v-if="getStoreData().length === 0"
            class="mx-auto mb-10 mt-4 gap-3 hidden flex-wrap items-center justify-center">
            <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
              animationDuration=".5s" aria-label="loading" />
          </div>

          <div id="new-arrivals-list-mobile" v-if="$isMobile()"
            class="mx-auto w-[95%] hidden grid-cols-1 justify-center items-center rounded-2xl">
            <div id="new-arrivals" class="border-t-1 border-gray-100"></div>
            <!-- <ProductItem v-for="(product) in newArrivals" :key="product.id" :product="product" /> -->
          </div>

          <div id="new-arrivals-list-desktop" v-if="!$isMobile() && newArrivals.length > 0"
            class="mx-auto w-[95%] md:w-[88%]
            xl:w-[87%] 2xl:w-3/4 hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5 2xl:grid-cols-5 gap-5 justify-center items-center rounded-md">
            <!-- <ProductItem v-for="(product) in newArrivals" :key="product.id" :product="product" /> -->
          </div>

          <div class="flex flex-col my-5">
            <span
              class="justify-center font-normal text-[#B08B0F] text-[40px] sm:text-[42px] font-[arumik-signature] mr-1">
              For Women
            </span>
            <span class="mb-4 text-center text-3xl md:text-[36px] tracking-tight">
              Best Seller Perfumes
            </span>
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

          <div id="women-products-list-desktop" v-if="!$isMobile()"
            class="mx-auto w-[95%] md:w-[88%] xl:w-[87%] 2xl:w-3/4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 justify-center items-center rounded-md">
            <ProductItem v-for="(product) in womenBestSellers" :key="product.id" :product="product" />
          </div>

          <div id="product-best-sellers" class="hidden mt-10 block text-center items-center justify-center">
            <img src="/assets/images/identity/review-01.png" alt="Tshanic Customer Reviews" class="w-fit h-auto">
          </div>

          <div id="customer-reviews" class="mt-10 flex flex-col w-full text-center items-center justify-center px-4">
            <div class="flex flex-col">
              <span class="justify-center font-normal text-[#B08B0F] text-[40px] sm:text-[42px] font-[arumik-signature] mr-1">
                Customer Reviews
              </span>
              <span class="mb-7 text-center text-3xl md:text-[36px] tracking-tight">
                What Our Customers Say
              </span>
            </div>

            <div
              class="w-full max-w-lg md:max-w-4xl xl:max-w-6xl mx-auto relative overflow-hidden rounded-2xl border border-stone-200/80 bg-gradient-to-b from-stone-50 to-white shadow-lg"
              @mouseenter="pauseReviewAutoplay"
              @mouseleave="resumeReviewAutoplay"
            >
              <div
                class="flex transition-transform duration-700 ease-in-out"
                :style="reviewCarouselInnerStyle"
              >
                <article
                  v-for="review in customerReviews"
                  :key="review.id"
                  :style="reviewCardFlexBasisStyle"
                  class="shrink-0 flex flex-col items-center px-6 sm:px-10 py-10 gap-4 md:px-4 xl:px-5"
                >
                  <img
                    :src="review.image"
                    :alt="review.name"
                    width="96"
                    height="96"
                    class="w-20 h-20 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full object-cover ring-4 ring-[#E0CD7E]/60 shadow-md"
                    loading="lazy"
                  />
                  <div class="flex flex-col items-center gap-2">
                    <span class="text-lg md:text-[15px] xl:text-lg font-semibold text-stone-800">{{ review.name }}</span>
                    <div class="flex flex-row items-center justify-center">
                      <vRating v-model="review.rating" readonly />
                    </div>
                  </div>
                  <blockquote
                    class="text-stone-600 text-balance leading-relaxed text-[15px] sm:text-base md:text-sm xl:text-base max-w-md md:max-w-none"
                  >
                    “{{ review.comment }}”
                  </blockquote>
                </article>
              </div>
              <div class="flex justify-center gap-2 pb-6" role="tablist" aria-label="Customer review slides">
                <button
                  v-for="pageIdx in reviewPageIndices"
                  :key="'review-dot-' + pageIdx"
                  type="button"
                  class="h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08B0F] focus-visible:ring-offset-2"
                  :class="pageIdx === currentReviewIndex ? 'w-8 bg-[#B08B0F]' : 'w-2 bg-stone-300 hover:bg-stone-400'"
                  :aria-label="'Show review page ' + (pageIdx + 1)"
                  :aria-current="pageIdx === currentReviewIndex ? 'true' : undefined"
                  @click="goToReview(pageIdx)"
                />
              </div>
            </div>
          </div>

          <div id="product-best-sellers" class="mt-10 block text-center items-center justify-center">
            <div class="flex flex-col">
              <span
                class="justify-center font-normal text-[#B08B0F] text-[40px] sm:text-[42px] font-[arumik-signature] mr-1">
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
          </div>

          <br> <br>
          <AppFooter />
        </div>
      </div>
    </div>
  </NavBar>
</template>

<script>
import topbar from 'topbar'
import router from '@/router'
import "toastify-js/src/toastify.css"
import { useShare } from '@vueuse/core'
import { useProductsStore } from '@/stores/products'

const { share, isSupported } = useShare()

export default {
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
      newArrivals: [],
      productCartDrawerVisible: false,
      loading: true,
      currentReviewIndex: 0,
      /** 1 = mobile (one card); 2 = md–lg; 3 = xl+ */
      visibleReviewCount: 1,
      reviewsAutoplayTimer: null,
      reviewsResizeHandler: null,
      customerReviews: [
        {
          id: 1,
          name: 'Wanjiku M.',
          rating: 5,
          comment:
            'My signature scent arrived carefully packed and smells absolutely authentic. Delivery to Nairobi was faster than I expected.',
          image:
            'https://ui-avatars.com/api/?name=Wanjiku+M&size=128&background=B08B0F&color=fff&rounded=true&bold=true',
        },
        {
          id: 2,
          name: 'James O.',
          rating: 5,
          comment:
            'Great range of men’s colognes and the team helped me pick something that lasts all day. Will definitely order again.',
          image:
            'https://ui-avatars.com/api/?name=James+O&size=128&background=E0CD7E&color=202020&rounded=true&bold=true',
        },
        {
          id: 3,
          name: 'Grace N.',
          rating: 4,
          comment:
            'Loved the lipstick shade match from the photos. Beautiful packaging and genuine products—worth every shilling.',
          image:
            'https://ui-avatars.com/api/?name=Grace+N&size=128&background=D10274&color=fff&rounded=true&bold=true',
        },
        {
          id: 4,
          name: 'Peter K.',
          rating: 5,
          comment:
            'Ordered a niche perfume I could not find elsewhere. Communication on WhatsApp was smooth and the bottle was perfect.',
          image:
            'https://ui-avatars.com/api/?name=Peter+K&size=128&background=202020&color=E0CD7E&rounded=true&bold=true',
        },
        {
          id: 5,
          name: 'Aisha H.',
          rating: 5,
          comment:
            'Tshanic has become my go-to for gifts. The unisex options are a hit with friends, and delivery outside the city was reliable.',
          image:
            'https://ui-avatars.com/api/?name=Aisha+H&size=128&background=B08B0F&color=fff&rounded=true&bold=true',
        },
        {
          id: 6,
          name: 'David M.',
          rating: 5,
          comment:
            'First time buying a designer fragrance online here and I was nervous—turns out the batch code checked out and the scent is spot on. Impressed.',
          image:
            'https://ui-avatars.com/api/?name=David+M&size=128&background=0F172A&color=E0CD7E&rounded=true&bold=true',
        },
        {
          id: 7,
          name: 'Njeri W.',
          rating: 4,
          comment:
            'The skincare bundle I ordered was well sealed and arrived in good condition. Customer care answered all my questions before I paid.',
          image:
            'https://ui-avatars.com/api/?name=Njeri+W&size=128&background=91c6a3&color=202020&rounded=true&bold=true',
        },
        {
          id: 8,
          name: 'Brian T.',
          rating: 5,
          comment:
            'Fast turnaround from order to doorstep. My wife loved the perfume I picked with their recommendation—already planning our next purchase.',
          image:
            'https://ui-avatars.com/api/?name=Brian+T&size=128&background=D10274&color=fff&rounded=true&bold=true',
        },
      ],
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
    },
    maxReviewIndex() {
      const n = this.customerReviews.length;
      const v = this.visibleReviewCount;
      return Math.max(0, n - v);
    },
    reviewPageIndices() {
      return Array.from({ length: this.maxReviewIndex + 1 }, (_, i) => i);
    },
    reviewCarouselInnerStyle() {
      const n = this.customerReviews.length;
      const v = Math.max(1, this.visibleReviewCount);
      const pct = n > 0 ? (this.currentReviewIndex * 100) / n : 0;
      return {
        width: n > 0 ? `calc(${n} * 100% / ${v})` : '100%',
        transform: `translateX(-${pct}%)`,
      };
    },
    reviewCardFlexBasisStyle() {
      const n = this.customerReviews.length;
      return n > 0 ? { flex: `0 0 calc(100% / ${n})` } : { flex: '0 0 100%' };
    },
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
    updateVisibleReviewCount() {
      if (typeof window === 'undefined') {
        return;
      }
      const w = window.innerWidth;
      let next = 1;
      if (w >= 1280) {
        next = 3;
      } else if (w >= 768) {
        next = 2;
      }
      this.visibleReviewCount = next;
      const max = Math.max(0, this.customerReviews.length - next);
      if (this.currentReviewIndex > max) {
        this.currentReviewIndex = max;
      }
    },
    startReviewAutoplay() {
      if (this.reviewsAutoplayTimer) {
        clearInterval(this.reviewsAutoplayTimer);
      }
      this.reviewsAutoplayTimer = setInterval(() => {
        const n = this.customerReviews.length;
        if (n === 0) {
          return;
        }
        const max = this.maxReviewIndex;
        this.currentReviewIndex = this.currentReviewIndex >= max ? 0 : this.currentReviewIndex + 1;
      }, 5000);
    },
    pauseReviewAutoplay() {
      if (this.reviewsAutoplayTimer) {
        clearInterval(this.reviewsAutoplayTimer);
        this.reviewsAutoplayTimer = null;
      }
    },
    resumeReviewAutoplay() {
      this.startReviewAutoplay();
    },
    goToReview(pageIdx) {
      const max = this.maxReviewIndex;
      this.currentReviewIndex = Math.min(Math.max(0, pageIdx), max);
      this.pauseReviewAutoplay();
      this.startReviewAutoplay();
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
    this.newArrivals = productStore.newArrivals;

    topbar.hide();

    this.reviewsResizeHandler = () => this.updateVisibleReviewCount();
    this.updateVisibleReviewCount();
    window.addEventListener('resize', this.reviewsResizeHandler);
    this.startReviewAutoplay();
  },
  beforeUnmount() {
    if (this.reviewsResizeHandler) {
      window.removeEventListener('resize', this.reviewsResizeHandler);
    }
    this.pauseReviewAutoplay();
  },
};
</script>
