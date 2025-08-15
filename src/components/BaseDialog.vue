<script lang="ts">
import {defineComponent} from 'vue'
import vButton from "primevue/button";
import vDialog from "primevue/dialog";

export default defineComponent({
  name: "BaseDialog",
  components: {vDialog, vButton}
})
</script>

<template>
  <vDialog :visible="cartDialogVisible" header="WhatsApp Message" modal
           dismissableMask style="width: 94%; border-radius: 3px;" position="top"
           escape=true>
    <template #closeicon>
      <i class="pi pi-times" style="color: #787A7E;" @click="cartDialogVisible = false"></i>
    </template>
    <div class="flex flex-col gap-2">
      <div class="text-[16px] pb-2">
        Hello Tshanic, I'd like to place my order (<b>#{{ generateOrderId(5) }}</b>) for the
        following:
      </div>
      <div class="flex flex-col gap-2 pb-3 text-[16px]">
        <div v-for="order in cart().data" :key="order.id">
          &nbsp; {{ cart().data.indexOf(order) + 1 }}. <span
          class="font-semibold">{{ order.name }}</span> - Qty:
          {{ order.quantity }}, SKU: {{ order.sku }}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-[16px]">
          Deliver to:
        </div>
        <InputText id="delivery-address" class="flex-auto" style="font-size: 16px;"
                   autofocus/>
      </div>
    </div>
    <span
      class="text-surface-500 dark:text-surface-400 block mb-8">
          </span>
    <div class="flex justify-end gap-2">
      <vButton type="button" label="Cancel" severity="secondary"
               @click="cartDialogVisible = false"></vButton>
      <vButton type="button" label="Send Message" severity="success"
               icon="pi pi-whatsapp" @click="cartDialogVisible = false"></vButton>
    </div>
  </vDialog>
</template>

<style scoped>

</style>
