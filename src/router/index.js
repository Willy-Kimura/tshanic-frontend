import MenView from '@/views/MenView.vue'
import WomenView from '@/views/WomenView.vue'
import UnisexView from '@/views/UnisexView.vue'
import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CosmeticsView from '@/views/CosmeticsView.vue'
import BrandsView from '@/views/BrandsView.vue'
import BrandPageView from '@/views/BrandPageView.vue'
import DiffusersView from '@/views/DiffusersView.vue'
import NotFound from '@/views/NotFound.vue'
import AboutView from '@/views/AboutView.vue'
import WPFinder from '@/views/WPFinder.vue'
import HeartBucketView from '@/views/HeartBucketView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import KidsView from '@/views/KidsView.vue'
import DeliveryDetailsView from '@/views/DeliveryDetailsView.vue'
import TermsView from '@/views/TermsView.vue'
import ReturnPolicyView from '@/views/ReturnPolicyView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

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
      name: 'about',
      path: '/about',
      component: AboutView,
      meta: {
        title: 'Tshanic - About Tshanic Skin & Scents',
      },
    },
    {
      name: 'delivery-details',
      path: '/delivery-details',
      component: DeliveryDetailsView,
      meta: {
        title: 'Tshanic - Delivery Details',
      },
    },
    {
      name: 'terms-conditions',
      path: '/terms-conditions',
      component: TermsView,
      meta: {
        title: 'Tshanic - Terms & Conditions',
      },
    },
    {
      name: 'return-policy',
      path: '/return-policy',
      component: ReturnPolicyView,
      meta: {
        title: 'Tshanic - Return Policy',
      },
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactUsView,
      meta: {
        title: 'Tshanic - Contact Us',
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
      name: 'shop-product',
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
      name: 'kids',
      path: '/kids',
      component: KidsView,
      meta: {
        title: 'For Kids - Tshanic Best perfumes and cosmetics online store',
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
