<template>
  <vScrollTop />
  <header class="Header" ref="headerRef">
    <div id="content" class="z-1000 w-full text-[#202020]">
      <div id="notification-bar"
        class="w-full hidden bg-gradient-to-t from-yellow-400 to-amber-500 h-10 text-[#202020] text-[15px] content-center text-center">
        <b>100% Free deliveries</b> within CBD!
      </div>

      <div id="main-bar" class="w-full flex h-20 bg-[#F8FAFC] text-lg border-solid border-b-[1px] border-b-[#EBEBEB]">
        <div class="mx-auto sm:w-[70%] w-[90%] flex justify-between items-center">
          <div id="logo-header" class="max-w-[12rem] justify-start">
            <router-link to="/">
              <img src="/assets/images/identity/logo-light-creole.png" alt="tshanic-logo" class="w-70 -ml-7 -mt-3">
            </router-link>
          </div>
          <div class="content-center text-[14.5px] xl:flex hidden">
            <i class="pi pi-map-marker content-center" style="font-size: 13px"></i>&nbsp;
            Jamia Mall, 1st Floor F60, Kimathi St., Nairobi &nbsp;&nbsp; | &nbsp; &nbsp; <a href="tel:0727866642"
              class="text-[#D10274]">
              <i class="pi pi-whatsapp content-center" style="font-size: 12px"></i>&nbsp; Call Us:
              <b>0727-866-642</b></a>
          </div>
          <div class="content-center text-[16px] text-[#B08B0F] max-xl:flex max-sm:hidden hidden -ml-14 items-center">
            <i class="pi pi-whatsapp content-center" style="font-size: 12px"></i>&nbsp; &nbsp;
            <a href="tel:0727866642">0727-866-642</a>
          </div>
          <div class="flex flex-row float-right items-center justify-end mx-1">
            <span class="text-[14px] mr-2 sm:flex hidden"></span>
            <vOverlayBadge :value="cart().data.length" size="small" severity="danger" class="mr-6"
              @click="navigate('/cart')">
              <i class="pi pi-shopping-cart" style="font-size: 20px"></i>
            </vOverlayBadge>
            <div v-if="favs().length > 0">
              <vOverlayBadge :value="favs().length" size="small" @click="navigate('/heart-bucket')">
                <i class="pi pi-heart" style="font-size: 18px"></i>
              </vOverlayBadge>
            </div>
            <div v-else>
              <vOverlayBadge @click="navigate('/heart-bucket')">
                <i class="pi pi-heart" style="font-size: 18px"></i>
              </vOverlayBadge>
            </div>
          </div>
        </div>
      </div>

      <div id="menubar"
        class="sm:hidden flex w-full py-4 pl-4 sm:justify-end h-12 bg-[#F8FAFC] text-lg border-solid border-b-[1px] border-b-[#EBEBEB]">
        <div class="mx-auto lg:w-[70%] w-full flex justify-between items-center">
          <div
            class="gap-4 mx-2 flex w-full max-md:hidden max-sm:flex max-lg:hidden max-xl:hidden max-2xl:hidden min-xl:hidden">
            <!-- max-lg:hidden max-sm:flex max-md:w-full lg:hidden -->
            <div id="mobile-menu" class="sm:hidden flex flex-row float-right justify-end"
              @click="menuDrawerVisible = !menuDrawerVisible">
              <i class="pi pi-bars content-center cursor-pointer -mt-0.5" style="font-size: 16px"></i>
            </div>
            <div
              class="flex max-sm:flex max-xl:flex max-md:hidden sm:justify-start items-center justify-between w-full pl-2">
              <div class="flex w-[88%]">
                <AutoComplete v-model="searchTerm" :suggestions="filteredData" @complete="search"
                  @option-select="view(searchTerm)" optionLabel="name" scroll-height="220px"
                  :virtualScrollerOptions="{ itemSize: 32 }" overlayClass="w-[96%] mx-2" fluid
                  inputStyle="width: 100%; background-color: #F8FAFC; border-color: #F8FAFC; font-size: 16.5px; border-left: 1px solid #EDEDED;"
                  style="width: 112%;" placeholder="Search collections...">
                  <template #option="slotProps">
                    <div class="flex flex-col w-full border-b-[1px] border-b-slate-100 pb-2">
                      <div class="flex flex-row items-center gap-2 text-[16px] w-full">
                        <div>
                          <i class="pi pi-arrow-up-right text-slate-400" style="font-size: 10px;"></i>
                        </div>
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </div>
                  </template>
                  <template #header>

                  </template>
                  <template #footer>
                    <div class="px-4 py-2 text-lg text-[#6C4604]">
                      Found <span class="font-semibold">{{ filteredData.length }}</span> products
                    </div>
                  </template>
                </AutoComplete>
              </div>
              <div class="w-[12%] flex items-center justify-center">
                <span class="pi pi-search-plus cursor-pointer" style="font-size: 16px; padding-left: 1px;"></span>
              </div>
            </div>
          </div>

          <nav id="menu"
            class="hidden flex-row lg:gap-8 gap-6 w-full text-[15px] items-center float-right lg:justify-end justify-center">
            <RouterLink id="navLink" v-for="(item) in menuItems" :to="item.route" :key="item.label"
              class="navLink transition-all duration-200 ease-in-out">
              {{ item.label }}
            </RouterLink>
            <div id="search-icon" class="flex">
              <span class="pi pi-search-plus cursor-pointer"></span>
            </div>
          </nav>

          <vDrawer v-model:visible="menuDrawerVisible" style="width: 60%;" :showCloseIcon=false>
            <template #header>
              <div id="logo-header" class="max-w-[12rem] justify-start">
                <router-link to="/">
                  <img src="/assets/images/identity/logo-light-creole.png" alt="tshanic-logo" class="-ml-7 -mt-7">
                </router-link>
              </div>
            </template>
            <div id="sidemenu" class="flex flex-col gap-[14.3px] justify-end ml-3">
              <RouterLink id="navLink" v-for="(item) in menuItems" :to="item.route" :key="item.label"
                class="navLink transition-all duration-200 ease-in-out text-[15px]">
                {{ item.label }}
              </RouterLink>
            </div>
            <div class="w-full flex justify-center mt-30 lg:mt-30">
              <vButton icon="pi pi-times" severity="secondary" variant="outlined" size="small" rounded
                @click="menuDrawerVisible = false" aria-label="Close" />
            </div>
            <template #footer>
              <div class="flex flex-col w-full bg-slate-200 h-37 p-4">
                <span
                  class="text-center mb-4 -mt-0.5 -ml-2 font-semibold font-[arumik-signature] text-[#B08B0F] text-[23px] tracking-widest">
                  Contact Us
                </span>
                <div class="flex flex-col gap-0.5">
                  <div class="text-slate-900 mb-1 text-[15px]">
                    <i class="pi pi-phone content-center" style="font-size: 13px"></i>&nbsp;
                    <a href="tel:0727866642">
                      Call Us: <b>0727-866-642</b>
                    </a>
                  </div>
                  <div class="text-slate-900">
                    <i class="pi pi-map-marker content-center" style="font-size: 14px"></i>&nbsp;
                    Jamia Mall, 1st Flr. F60
                  </div>
                </div>
              </div>
            </template>
          </vDrawer>
        </div>
      </div>
    </div>
  </header>

  <slot>
    <!-- Where other pages are inserted -->
  </slot>
</template>

<script>
import topbar from 'topbar'
import router from '@/router';
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'

export default {
  data() {
    return {
      menuDrawerVisible: false,
      searchData: [],
      filteredData: [],
      searchTerm: {},
      searchResults: [],
      activePage: 'HOME',
      menuItems: [
        {
          label: 'HOME',
          route: '/'
        },
        {
          label: 'SHOP',
          route: '/shop'
        },
        {
          label: 'BRANDS',
          route: '/brands'
        },
        {
          label: "FOR WOMEN",
          route: '/women'
        },
        {
          label: "FOR MEN",
          route: '/men'
        },
        {
          label: "FOR KIDS",
          route: '/kids'
        },
        {
          label: 'UNISEX',
          route: '/unisex'
        },
        {
          label: 'COSMETICS',
          route: '/cosmetics'
        }
      ]
    };
  },
  methods: {
    cart() {
      return useCartStore();
    },
    getSubtotals(formatted = true) {
      let totals = 0;
      let products = this.cart().data;

      for (let i = 0; i < products.length; i++) {
        totals += products[i].sale_price * products[i].quantity;
      }

      if (formatted) {
        return "Ksh " + (parseFloat(totals).toLocaleString());
      } else {
        return totals;
      }
    },
    isPerfume(category) {
      try {
        console.log(category);
        return !!category.includes('Perfume');
      } catch (ex) {
        return true;
      }
    },
    getStoreData() {
      return useProductsStore().data;
    },
    async getProducts() {
      return this.getStoreData().map(product => {
        return {
          name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.sale_price
        }
      });
    },
    searchTest(event) {
      if (!event.query.trim().length) {
        this.filteredData = [...this.searchData];
      } else {
        this.filteredData = this.searchData.filter((item) => {
          return item.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    },
    searchSelected() {
      this.view(this.searchTerm);
    },
    async search(event) {
      if (!event.query.trim().length) {
        this.filteredData = [...this.searchData];
      } else {
        this.filteredData = this.searchData.filter((item) => {
          return item.name.toLowerCase().includes(event.query.toLowerCase());
        });
      }
    },
    navigate(page) {
      topbar.show();
      router.push(page).then(() => {
        topbar.hide();
      });
    },
    visit(product) {
      router.push({
        path: '/shop/' + product.replace(/\s/g, "-")
      });
    },
    view(product) {
      let src = this.searchTerm;
      if (product !== null) {
        const name = product.name.replace(/\s/g, "-");
        router.push({
          path: `/shop/${name}`,
        }).then(result => {
          location.reload();
        });
      }
    },
    cart() {
      return useCartStore();
    },
    favs() {
      return useProductsStore().favorites;
    },
    hoverLink(event) {
      let navItem = event.target;
      navItem.style.color = '#B08B0F';
    },
    leaveLink(event) {
      let navItem = event.target;
      let name = navItem.textContent;

      if (this.activePage === name) {
        navItem.style.color = '#B08B0F';
      } else {
        navItem.style.color = '#202020';
      }
    },
    onClickNavItem(event) {
      let navItem = event.target;
      this.activePage = navItem.textContent;
    }
  },
  mounted() {
    this.searchData = this.getStoreData().map(product => {
      return {
        name: product.name,
        brand: product.brand,
        price: product.sale_price
      }
    });

    // let find = await this.getProducts().then((pr) => {
    //   console.log(pr);
    // });
  },
  created() {
  }
};

</script>

<style scoped>
.Header {
  position: fixed;
  /* or sticky */
  top: 0;
  width: 100%;
  z-index: 999;
  /* Other styles... */
}

nav a.router-link-exact-active {
  color: #B08B0F;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 15px;
  text-decoration-thickness: 1px;
}

#sidemenu a.router-link-exact-active {
  margin: 0px -12px;
  padding: 4px 10px;
  font-weight: 600;
  color: #B08B0F;
  border-top-left-radius: 4px;
  border-top-right-radius: 2px;
  background-color: #F7F4E9;
  border-bottom-left-radius: 4px;
  text-decoration-thickness: 1px;
  border-bottom-right-radius: 2px;
  border-left: 2px solid #CAB15F;
}
</style>
