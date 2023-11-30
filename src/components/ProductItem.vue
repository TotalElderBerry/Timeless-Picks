<template>
  <q-card class="q-my-xs">
    <div class="row justify-center">
      <q-img
        :src="icon"
        alt="Product Image"
        :class="{ 'image': $q.screen.lt.sm, 'image-sm-up': $q.screen.gt.xs }"
      />
    </div>

    <div class="q-card-section q-px-sm">
      <div class="q-mb-xs text-weight-light" :class="{ 'text-body1': $q.screen.lt.sm, 'text-h6': $q.screen.gt.xs }">{{ product.name }}</div>
      <div class="row items-center justify-between">
        <div class="text-subtitle1 q-mb-xs text-green text-weight-bolder">${{ product.price }}</div>
        <q-chip dense class="text-caption q-mb-xs" v-if="!inProduct">{{ product.category }}</q-chip>
      </div>
      <div class="text-caption" v-if="!inProduct">Stock: {{ product.stock }}</div>
      <div class="text-caption q-mb-xs" v-if="!inProduct">Sales: {{ product.sales }}</div>
    </div>
  </q-card>
</template>

<script setup>
  import icon from 'assets/category-thumbs/women.png'
  import {computed} from 'vue'
  const props = defineProps(['inProducts'])
  const inProduct = computed(() => props.inProducts != undefined || props.inProducts == true?true:false)

  const product = {
    image: '../../../src/assets/cart-phone.png',
    name: 'Women',
    price: 100,
    stock: 50,
    category: 'Women',
    sales: 25
  };

</script>

<style scoped>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  max-width: 100%;
  width: 100px;
  height: 100px;
}

.image-sm-up{
  max-width: 100%;
  width: 130px;
  height: 130px;
}
</style>
