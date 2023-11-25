<template>
<q-page>
  <div class="row reverse items-center" style="height: 100vh">
   <div class="col-sm-12 col-md q-ma-md">
    <div class="text-weight-bold text-center" :class="{'text-h2 q-mb-lg': $q.screen.gt.sm, 'text-h6': $q.screen.lt.md}">
      Be a Sustainable Seller
    </div>
    <div class="text-subtitle1 text-center">
      Give Your Treasures a New Chapter: Sell with Ease, Trade with Thrift.
    </div>
    <div class="row justify-center">
    <div class="row gt-md inline items-center text-center">
      <div class="text-center">
        <div class="my-font text-primary" style="font-size: 35px">TIMELESS PICKS</div>
        <div class="my-font text-overline text-primary">Online Shop</div>
      </div>
      <q-img src="src/assets/cart-phone.png" style="width:300px"/>
    </div>
    </div>
   </div>

    <div class="bg-white q-ma-lg col-sm-11 col-md-5" :class="{'q-pa-xl': $q.screen.gt.xs, 'q-pa-md': $q.screen.lt.sm}">
      <div class="text-h5 text-weight-bold">Log In </div>
        <q-form class="q-ma-sm q-gutter-sm">
          <q-input square outlined label="Email / Username" dense />
          <q-input square outlined label="Password" dense />

          <div class="row">
            <q-btn class="col q-my-sm" color="primary" dense @click="navigateToMyProducts">Login</q-btn>
          </div>

          <div class="row justify-between">
            <div class="text-subtitle2 text-blue">
              Forgot Password
            </div>
            <div class="text-subtitle2 text-blue">
              Login with Phone Number
            </div>
          </div>
        </q-form>

        <p ><span class="line">OR</span></p>

        <div class="row justify-between">
        <q-btn outline color="blue" icon="facebook">Facebook</q-btn>
        <q-btn outline color="red">
          <img src="src/assets/google-icon.png" style="width: 20px; height: 20px; margin-right: 5px"/>
        Google</q-btn>
        </div>
        <div class="text-center q-my-lg">New to Timeless Picks? <span class="text-weight-bold text-primary">Sign Up</span></div>
    </div>
  </div>
</q-page>
</template>

<script setup>
  import {useRouter} from 'vue-router'

  const router = useRouter()

  const navigateToMyProducts = () => {
    router.push({name: 'my-products'})
  }

</script>

<style scoped>
.my-font {
  font-family: 'Fraunces';
}
p {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 30px 0; 
} 

p .line { 
    background:#fff; 
    padding:0 10px; 
}
</style>