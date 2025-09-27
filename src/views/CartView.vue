<template>
  <NavBar>
    <div id="body" class="mt-37 text-[#0F172A] bg-white transition-all duration-200 ease-in-out">
      <div id="mobile" class="lg:hidden">
        <section v-if="!orderSubmitted"
          class="mx-auto pt-1 pb-5 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between shadow-xs rounded-md h-full">
          <div class="flex flex-row justify-between">
            <section v-if="cart().data.length === 0"
              class="mx-auto flex flex-col mb-10 mt-2 items-center text-center justify-center w-[90%]">
              <img src="/assets/images/identity/bg-nf.svg" class="mt-7 w-70" alt="shopping cart">
              <span class="text-3xl font-bold mb-3 mt-8">
                Your cart is empty.
              </span>
              <span class="text-[16px]/6">
                All your orders will directly appear here. We sure look forward to receiving them!
              </span>
              <div class="mx-auto flex flex-row justify-center mt-6 w-full gap-2">
                <vButton label="Back To Shop" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
                  @click="navigate('shop')" />
              </div>
            </section>
            <div v-else class="text-[25px] font-bold">
              Your cart <span class="text-slate-500">({{ cart().data.length }})</span>
            </div>
            <vButton v-if="cart().data.length > 0" icon="pi pi-trash" severity="danger" rounded aria-label="Clear Cart"
              @click="clearCart" />
          </div>
          <ConfirmPopup></ConfirmPopup>
          <div id="cart" v-if="cart().data.length > 0" class="border-[0px] rounded-lg border-gray-200">
            <div id="for-men-mobile" class="border-t-1 border-gray-200"></div>
            <div v-for="(product) in cart().data" :key="product.id"
              class="w-full product flex flex-row border-gray-200 border-[1px] border-t-0 py-3 -mb-1 rounded-none cursor-pointer transition-all duration-200 ease-in-out">
              <div class="w-[22%] mx-2" @click="navigate(product)">
                <img :src="getImageLink(`${JSON.parse(product.images)[0]}`)" class="w-96" alt="">
              </div>
              <div class="w-full flex flex-row gap-3">
                <div class="w-[80%] bg-[green-400] bottom-3 text-left">
                  <div class="w-full font-medium pb-1 tracking-normal leading-6 space-y-1" @click="navigate(product)">
                    <span class="text-[14px]">{{ getProductNameOnly(product.name) }}</span>&nbsp;
                    <span>({{ getProductWeight(product.name) }})</span>
                  </div>
                  <div class="text-[16.5px] font-semibold flex flex-col gap-1" @click="navigate(product)">
                    {{ price(product) }}
                  </div>
                  <div class="mt-2">
                    <vButton type="button" label="Remove" icon="pi pi-trash"
                      style="font-size: 13px; color: white; background-color: #282C34; width: 90px; height: 30px; border-color: #282C34;"
                      @click="deleteCartItem(product, $event)" />
                  </div>
                </div>
                <div class="w-[20%] pr-3 justify-end">
                  <vInputNumber v-model="product.quantity" inputClass="text-center w-full" inputId="vertical-buttons"
                    allowEmpty=false min=1 max=100 buttonLayout="vertical"
                    style="--p-inputnumber-button-border-radius: 2px; max-width: 38px;" showButtons fluid>
                    <template #incrementicon>
                      <span class="pi pi-plus" />
                    </template>
                    <template #decrementicon>
                      <span class="pi pi-minus" />
                    </template>
                  </vInputNumber>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="orderSubmitted"
          class="mx-auto pt-1 pb-5 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between shadow-xs rounded-md h-full">
          <div class="flex flex-row justify-between">
            <section class="mx-auto flex flex-col mb-10 mt-8 items-center text-center justify-center w-[90%]">
              <i class="pi pi-check-circle" style="font-size: 55px; color: #0F172A;"></i>
              <span class="text-3xl font-bold mb-3 mt-5">
                Checkout Successful!
              </span>
              <span class="text-[16px]/6 text-balance">
                Thank you for your order! From here, you will be directed to our WhatsApp checkout for order submission.
              </span>
              <div class="mx-auto flex flex-row justify-center mt-6 w-full gap-2">
                <vButton label="Back To Shopping" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
                  @click="navigate('shop')" />
              </div>
            </section>
          </div>
        </section>

        <section v-if="cart().data.length > 0 && !orderSubmitted"
          class="mx-auto pt-4 pb-7 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between rounded-md h-full">
          <div class="text-[20px] font-bold flex flex-row justify-between">
            <div class="pl-1 justify-start">Order Summary</div>
            <div class="flex justify-end">
              <vButton hidden label="Invoice" icon="pi pi-receipt" severity="secondary" aria-label="Generate Invoice" />
            </div>
          </div>
          <div v-if="!orderSubmitted" id="invoice" class="flex flex-col bg-[#F2F2F5] p-5 px-4">
            <div class="summaries flex flex-row -mb-1 transition-all duration-200 ease-in-out text-[17px] mb-1">
              <div id="summaries-labels" class="w-1/2 text-[#9E9C9F] flex flex-col gap-2">
                <span>Subtotal:</span>
                <span>Discount:</span>
                <span>Shipping cost:</span>
              </div>
              <div id="summaries-labels" class="w-1/2 text-slate-500 text-right flex flex-col gap-2">
                <span>{{ getSubtotals() }}</span>
                <span>{{ getDiscount() }}</span>
                <span>{{ getShippingCost() }}</span>
              </div>
            </div>
            <vDivider type="dotted" style="--p-divider-border-color: #CDCDCD;" />
            <div class="summaries flex flex-row -mb-1 transition-all duration-200 ease-in-out text-[17px]">
              <div id="summaries-labels" class="w-1/2 font-semibold flex flex-col gap-2 mb-2">
                <span>TOTAL:</span>
              </div>
              <div id="summaries-labels" class="w-1/2 text-2xl font-bold text-right flex flex-col gap-2">
                <span>{{ getSubtotals() }}</span>
              </div>
            </div>
          </div>

          <div v-if="!orderSubmitted" class="mx-auto w-full flex flex-col gap-3 justify-between rounded-md h-full"
            id="footer">
            <InputText hidden id="delivery-address" placeholder="Provide your phone number" class="flex-auto"
              style="font-size: 16px;" autofocus fluid />

            <vButton id="checkoutBtn" severity="success" aria-label="Checkout" style="font-size: 16px; width: 100%;"
              @click="processOrderAndSend()" class="flex flex-row gap-2" :disabled="!orderCompleted">
              <i class="pi pi-whatsapp"></i> {{ orderCompleted ? "Checkout" : 'Processing order...' }}
            </vButton>

            <vDialog :visible="cartDialogVisible" style="width: 94%; border-radius: 3px;" position="center" escape=true
              @click="cartDialogVisible = false" modal>
              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-center text-[16.5px] pb-3">
                  Preparing order message...
                </div>
                <div class="flex flex-col gap-2 pb-3 text-[16px]">
                  <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
                    animationDuration=".5s" aria-label="loading" />
                </div>
              </div>
            </vDialog>

            <div
              class="flex flex-col py-3 px-5 rounded-sm border-[1px] text-[#16A34A] border-[#BBF7D0] bg-[#F1FDF5] items-center text-balance/3">
              <div>
                <b>We currently process all our orders via WhatsApp</b>. On clicking checkout,
                you will be directed to WhatsApp together with your order details for
                order submission. Once processed, we will contact you for confirmation
                and delivery. Happy shopping!
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="desktop" class="max-lg:hidden flex flex-row mx-auto w-3/4">
        <section v-if="!orderSubmitted"
          class="mx-auto pt-1 pb-5 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between shadow-xs rounded-md h-full">
          <div class="flex flex-row justify-between">
            <section v-if="cart().data.length === 0"
              class="mx-auto flex flex-col mb-10 mt-2 items-center text-center justify-center w-[90%]">
              <img src="/assets/images/identity/bg-nf.svg" class="mt-7 w-70" alt="shopping cart">
              <span class="text-3xl font-bold mb-3 mt-8">
                Your cart is empty.
              </span>
              <span class="text-[16px]/6">
                All your orders will directly appear here. We sure look forward to receiving them!
              </span>
              <div class="mx-auto flex flex-row justify-center mt-6 w-full gap-2">
                <vButton label="Back To Shop" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
                  @click="navigate('shop')" />
              </div>
            </section>
            <div v-else class="text-3xl font-bold">
              Your cart <span class="text-slate-500">({{ cart().data.length }})</span>
            </div>
            <vButton v-if="cart().data.length > 0" icon="pi pi-trash" severity="danger" rounded aria-label="Clear Cart"
              @click="clearCart" />
          </div>
          <ConfirmPopup></ConfirmPopup>

          <div id="cart" v-if="cart().data.length > 0" class="border-[0px] rounded-lg border-gray-200">
            <div class="border-t-1 border-gray-200"></div>
            <div v-for="(product) in cart().data" :key="product.id" class="w-full product flex flex-row border-gray-200
              border-[1px] border-t-0 py-3 -mb-1 rounded-none cursor-pointer transition-all duration-200 ease-in-out">
              <div class="w-[22%] mx-2" @click="navigate(product)">
                <img :src="getImageLink(`${JSON.parse(product.images)[0]}`)" class="w-96" alt="">
              </div>
              <div class="w-full flex flex-row gap-3">
                <div class="justify-start w-[80%] bg-[green-400] bottom-3 text-left">
                  <div class="w-full font-medium pb-1 tracking-normal leading-6 space-y-1" @click="navigate(product)">
                    <span class="text-[14px]">{{ getProductNameOnly(product.name) }}</span>&nbsp;
                    <span>({{ getProductWeight(product.name) }})</span>
                  </div>
                  <div class="text-[16.5px] font-semibold flex flex-col gap-1" @click="navigate(product)">
                    {{ price(product) }}
                  </div>
                  <div class="mt-2">
                    <vButton type="button" label="Remove" icon="pi pi-trash"
                      style="font-size: 13px; color: white; background-color: #282C34; width: 90px; height: 30px; border-color: #282C34;"
                      @click="deleteCartItem(product, $event)" />
                  </div>
                </div>
                <div class="flex w-[20%] pr-3 justify-end">
                  <vInputNumber v-model="product.quantity" inputClass="text-center w-full" inputId="vertical-buttons"
                    allowEmpty=false min=1 max=100 buttonLayout="vertical"
                    style="--p-inputnumber-button-border-radius: 2px; max-width: 38px; max-height: 20px;" showButtons
                    fluid>
                    <template #incrementicon>
                      <span class="pi pi-plus" />
                    </template>
                    <template #decrementicon>
                      <span class="pi pi-minus" />
                    </template>
                  </vInputNumber>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-if="orderSubmitted"
          class="mx-auto pt-1 pb-5 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between shadow-xs rounded-md h-full">
          <div class="flex flex-row justify-between">
            <section class="mx-auto flex flex-col mb-10 mt-8 items-center text-center justify-center w-[90%]">
              <i class="pi pi-check-circle" style="font-size: 55px; color: #0F172A;"></i>
              <span class="text-3xl font-bold mb-3 mt-5">
                Checkout Successful!
              </span>
              <span class="text-[16px]/6 text-balance">
                Thank you for your order! From here, you will be directed to our WhatsApp checkout for order submission.
              </span>
              <div class="mx-auto flex flex-row justify-center mt-6 w-full gap-2">
                <vButton label="Back To Shopping" icon="pi pi-arrow-left" style="font-size: 15px; color: white;"
                  @click="navigate('shop')" />
              </div>
            </section>
          </div>
        </section>

        <section v-if="cart().data.length > 0 && !orderSubmitted"
          class="mx-auto pt-4 pb-7 px-4 sm:w-[70%] w-full flex flex-col gap-3 justify-between rounded-md h-full">
          <div class="text-3xl font-bold flex flex-row justify-between">
            <div class="pl-1 justify-start">Order Summary</div>
            <div class="flex justify-end">
              <vButton hidden label="Invoice" icon="pi pi-receipt" severity="secondary" aria-label="Generate Invoice" />
            </div>
          </div>
          <div v-if="!orderSubmitted" id="invoice" class="flex flex-col bg-[#F2F2F5] p-5 px-4">
            <div class="summaries flex flex-row transition-all duration-200 ease-in-out text-[17px] mb-1">
              <div id="summaries-labels" class="w-1/2 text-[#9E9C9F] flex flex-col gap-2">
                <span>Subtotal:</span>
                <span>Discount:</span>
                <span>Shipping cost:</span>
              </div>
              <div id="summaries-labels" class="w-1/2 text-slate-500 text-right flex flex-col gap-2">
                <span class="font-bold">{{ getSubtotals() }}</span>
                <span>{{ getDiscount() }}</span>
                <span>{{ getShippingCost() }}</span>
              </div>
            </div>
            <vDivider type="dotted" style="--p-divider-border-color: #CDCDCD;" />
            <div class="summaries flex flex-row -mb-1 transition-all duration-200 ease-in-out text-[17px]">
              <div id="summaries-labels" class="w-1/2 font-semibold flex flex-col gap-2 mb-2">
                <span>TOTAL:</span>
              </div>
              <div id="summaries-labels" class="w-1/2 text-2xl font-bold text-right flex flex-col gap-2">
                <span>{{ getSubtotals() }}</span>
              </div>
            </div>
          </div>

          <div v-if="!orderSubmitted" class="mx-auto w-full flex flex-col gap-3 justify-between rounded-md h-full"
            id="footer">
            <InputText hidden id="delivery-address" placeholder="Provide your phone number" class="flex-auto"
              style="font-size: 16px;" autofocus fluid />
            <vButton id="checkoutBtn" severity="success" icon="pi pi-whatsapp" aria-label="Checkout"
              style="font-size: 16px; width: 100%; " @click="processOrderAndSend()" :disabled="!orderCompleted">
              {{ orderCompleted ? "Checkout" : 'Processing order...' }}
            </vButton>

            <vDialog :visible="cartDialogVisible" style="width: 94%; border-radius: 3px;" position="center" escape=true
              @click="cartDialogVisible = false" modal>
              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-center text-[16.5px] pb-3">
                  Preparing order message...
                </div>
                <div class="flex flex-col gap-2 pb-3 text-[16px]">
                  <vProgressSpinner style="width: 40px; height: 40px" strokeWidth="3" fill="transparent"
                    animationDuration=".5s" aria-label="loading" />
                </div>
              </div>
            </vDialog>

            <div
              class="flex flex-col py-3 px-5 rounded-sm border-[1px] text-[#16A34A] border-[#BBF7D0] bg-[#F1FDF5] items-center text-balance/3">
              <div>
                <b>We currently process all our orders via WhatsApp</b>. On clicking checkout,
                you will be directed to WhatsApp together with your order details for
                order submission. Once processed, we will contact you for confirmation
                and delivery. Happy shopping!
              </div>
            </div>
          </div>
        </section>
      </div>
      <AppFooter v-if="!loading" />
    </div>
  </NavBar>
</template>

<style scoped>
.p-message-text,
.p-message-content,
.p-message {
  font-weight: normal;
  font-size: 9px;
}
</style>

<script>
import axios from 'axios'
import topbar from 'topbar'
import router from '@/router'
import '@/helpers/GlobalFuncs.js'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { timestamp, useShare } from '@vueuse/core'
import { useCartStore } from '@/stores/cart'
import { vueTopprogress } from 'vue-top-progress'
import { useProductsStore } from '@/stores/products'
import vInputNumber from "primevue/inputnumber"
import vDialog from "primevue/dialog";
import vButton from "primevue/button";
import { load } from "@/helpers/GlobalFuncs.js";

const { share, isSupported } = useShare()

export default {
  components: { vButton, vDialog, vInputNumber },
  data() {
    return {
      product: {},
      orderCreated: {},
      loading: false,
      orderCompleted: true,
      orderSubmitted: true,
      cartDialogVisible: false,
    };
  },
  computed: {},
  methods: {
    test() {
      alert(this.generateOrderId(3));
    },
    generateOrderId(length) {
      let result = '';
      let dt = new Date();
      const characters = '0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result + dt.getMinutes() + dt.getSeconds();
    },
    processOrderAndSend() {
      topbar.show();
      this.orderCompleted = false;

      setTimeout(() => {

        const url = import.meta.env.VITE_API_URL;
        let cartItems = this.cart().data;
        let cartInfo = '';
        const orderNo = this.generateOrderId(3);

        let orderInfo = {
          'order_no': orderNo,
          'subtotal': this.getSubtotals(false),
          'total': this.getSubtotals(false)
        };

        const res = axios
          .post(`${url}/orders`, orderInfo, {
            Accept: `application/json`
          })
          .then((response) => {
            if (response.status === 200) {
              this.orderCreated = response.data.data;
            } else {
              console.error(`Order '${orderNo}' not created; see error log.\n${response.data}`)
            }
          })
          .catch(function (error) {
            console.error(error)
          })

        for (let i = 0; i < cartItems.length; i++) {
          let item = cartItems[i];
          cartInfo += `${i + 1}. *${item.name}* - Qty: ${item.quantity}, SKU: ${item.sku} \n`;

          let productItem = {
            'order_id': orderNo,
            'product_id': item.id,
            'quantity': item.quantity,
            'cost': parseFloat(item.sale_price)
          };

          axios
            .post(`${url}/orders/products`, productItem, {
              Accept: `application/json`
            })
            .then((response) => {
              if (response.status !== 200) {
                console.error(`Product '${item.name}' not added to order; see error log.\n${response.data}`)
              }
            })
            .catch(function (error) {
              console.error(error)
            })
        }

        this.orderCompleted = true;
        this.orderSubmitted = true;

        window.scrollTo({ top: 0, behavior: 'smooth' });
        topbar.hide();

        let checkoutBtn = document.getElementById('checkoutBtn');

        confetti();
        confetti({
          particleCount: 150,
          origin: {
            x: checkoutBtn.scrollX,
            y: checkoutBtn.scrollY
          }
        });

        let content = "Hello Tshanic, I'd like to place my order (*" + orderNo + "*) for the following:\n\n" + cartInfo + "\nThank you.";
        location.href = "https://api.whatsapp.com/send?phone=254727866642&text=" + encodeURIComponent(content);

        this.cart().$reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    },
    navigate(product) {
      if (product === 'home') {
        location.href = window.location.origin;
      } else if (product === 'shop') {
        router.push({
          path: '/shop/'
        });
      } else {
        router.push({
          path: '/shop/' + product.name.replace(/\s/g, "-")
        });
      }
    },
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
    getDiscount() {
      return 'Ksh ' + 0;
    },
    getShippingCost() {
      return 'Ksh ' + 0;
    },
    price(product) {
      return "Ksh " + (parseFloat(product.sale_price) * product.quantity).toLocaleString();
    },
    clearCart() {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Please confirm clearing your cart?',
        icon: 'pi pi-info-circle',
        rejectProps: {
          label: 'No, cancel',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Yes, clear',
          severity: 'danger'
        },
        accept: () => {
          this.cart().reset();
        },
        reject: () => {

        }
      });
    },
    deleteCartItem(product, event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Confirm removing this item?',
        icon: 'pi pi-info-circle',
        rejectProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Remove',
          severity: 'danger'
        },
        accept: () => {
          this.cart().remove(product);
        },
        reject: () => {

        }
      });
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
    this.orderSubmitted = false;
    window.scrollTo(0, 0);
    load();
  },
  async created() {
  }
}
</script>

<style scoped>
#invoice {
  mask: repeating-conic-gradient(from 135deg at 50% 5px, #0000 0, #000 1deg 89deg, #0000 90deg 180deg) 50% -5px/10px
}
</style>
