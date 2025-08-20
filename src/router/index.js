import MenView from '@/views/MenView.vue'
import WomenView from '@/views/WomenView.vue'
import UnisexView from '@/views/UnisexView.vue'
import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CosmeticsView from '@/views/CosmeticsView.vue'
import BrandsView from "@/views/BrandsView.vue";
import BrandPageView from "@/views/BrandPageView.vue";
import DiffusersView from "@/views/DiffusersView.vue";
import NotFound from "@/views/NotFound.vue";
import WPFinder from "@/views/WPFinder.vue";
import HeartBucketView from "@/views/HeartBucketView.vue";
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
      meta: {
        title: 'Tshanic - Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'shop',
      path: '/shop',
      component: ShopView,
      meta: {
        title: 'Shop - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'cart',
      path: '/cart',
      component: CartView,
      meta: {
        title: 'Cart - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'shop',
      path: '/shop/:name',
      component: ProductView,
      props: true,
    },
    {
      name: 'brands',
      path: '/brands',
      component: BrandsView,
      meta: {
        title: 'Brands - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'brand-search',
      path: '/brands/:name',
      component: BrandPageView,
      props: true,
    },
    {
      name: 'men',
      path: '/men',
      component: MenView,
      meta: {
        title: 'For Men - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'women',
      path: '/women',
      component: WomenView,
      meta: {
        title: 'For Women - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'unisex',
      path: '/unisex',
      component: UnisexView,
      meta: {
        title: 'For All - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'cosmetics',
      path: '/cosmetics',
      component: CosmeticsView,
      meta: {
        title: 'Cosmetics - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'diffusers',
      path: '/diffusers',
      component: DiffusersView,
      meta: {
        title: 'Diffusers - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      name: 'heart-bucket',
      path: '/heart-bucket',
      component: HeartBucketView,
      meta: {
        title: 'Heart Bucket - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    {
      name: 'wp',
      path: '/wp-admin',
      alias: ['/wp-login'],
      component: WPFinder,
    },
  ],
})

router.beforeEach((to, from) => {
  document.title = to.meta.title || 'Tshanic Best perfumes and cosmetics online store'
})

export default router
