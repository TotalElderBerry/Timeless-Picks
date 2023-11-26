<template>
  <q-card class="product-item q-pa-xs q-my-sm">
    <q-img
      :src="product.image"
      alt="Product Image"
      :class="{ 'image': $q.screen.lt.sm, 'image-sm-up': $q.screen.gt.xs }"
    />

    <div class="q-card-section">
      <div class=" q-mb-xs text-weight-bold" :class="{ 'text-body1': $q.screen.lt.sm, 'text-h5': $q.screen.gt.xs }">{{ product.name }}</div>
      <div class="row items-center justify-between">
        <div class="text-subtitle1 q-mb-xs">${{ product.price }}</div>
        <q-chip dense class="text-caption q-mb-xs">{{ product.category }}</q-chip>
      </div>
      <div class="text-caption">Stock: {{ product.stock }}</div>
      <div class="text-caption q-mb-xs">Sales: {{ product.sales }}</div>
    </div>
  </q-card>
</template>

<script setup>
const product = {
  image: '~assets/cart-phone.png',
  name: 'Women',
  price: 100,
  stock: 50,
  category: 'Women',
  sales: 25
};

const viewDetails = () => {
  console.log(`View details for product: ${product.name}`);
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
  width: 130px;
  height: 130px;
}

.image-sm-up{
  max-width: 100%;
  width: 150px;
  height: 150px;
}
</style>
