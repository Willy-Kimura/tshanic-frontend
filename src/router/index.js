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
import {createRouter, createWebHistory} from 'vue-router'
import WPFinder from "@/views/WPFinder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        title: 'Tshanic - Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/shop',
      component: ShopView,
      meta: {
        title: 'Shop - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
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
      path: '/men',
      component: MenView,
      meta: {
        title: 'For Men - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/women',
      component: WomenView,
      meta: {
        title: 'For Women - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/unisex',
      component: UnisexView,
      meta: {
        title: 'For All - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/cosmetics',
      component: CosmeticsView,
      meta: {
        title: 'Cosmetics - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/diffusers',
      component: DiffusersView,
      meta: {
        title: 'Diffusers - Tshanic Best perfumes and cosmetics online store',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    {
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
