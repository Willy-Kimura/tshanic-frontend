<script>

export default {
  data() {
    return {
      isVisible: false
    };
  },
  props: {
    content: String,
    visible: Boolean,
  },
  mounted() {
    this.isVisible = this.visible;
  }
}
</script>

<template>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
      <label for="username" class="font-semibold w-24">Username</label>
      <InputText id="username" class="flex-auto" autocomplete="off"/>
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off"/>
    </div>
    <div class="flex justify-end gap-2">
      <vButton type="button" label="Cancel" severity="secondary" @click="visible = false"></vButton>
      <vButton type="button" label="Save" @click="visible = false"></vButton>
    </div>
</template>

<style scoped>

</style>
