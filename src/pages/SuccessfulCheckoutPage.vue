<template>
  <div class="q-pa-md q-gutter-md text-center flex flex-center" style="height:100vh">
    <div>
      <h2 class="text-h4 text-success q-mb-md">Checkout Successful!</h2>
      <p class="text-body1 q-mb-md">
        Thank you for your purchase. Your order has been successfully processed.
      </p>
      <q-btn @click="returnToHome" label="Return to Home" class="col-3 bg-primary text-white"/>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const returnToHome = () => {
  router.push('/'); // Adjust 'home' to the name of your home route
};
</script>
