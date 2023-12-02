<template>
<div>
<q-card flat class="row q-py-md q-mb-sm items-start">
      <q-icon name="o_location_on" color="green-7" size="xs" class="q-px-md" />
      <div >
        <div class="text-subtitle2">Delivery Address</div>
        <div class="text-grey-8" style="font-size: 12px">Brian Keith Lisondra | 09124210878</div>
        <div class="text-grey-8" style="font-size: 12px">Krusty Krabs Talamban</div>
        <div class="text-grey-8" style="font-size: 12px">Talamban Cebu City, Visayas 6000</div>
      </div>
</q-card>

<q-card class="q-mb-sm" flat>
    <div class="row items-center">
    <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" style="width: 30px; height: 30px;">
    </q-avatar>

    <div class="q-ml-sm">
        <div class="text-subtitle2">
            Ayala 
        </div>
    </div>
    </div>
</q-card>

<q-card class="my-card q-mb-md" flat>
  <q-card-section horizontal>
    <q-img
      class="col-2 q-ml-sm q-mt-sm q-mb-sm"
      src="https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/458115/item/phgoods_12_458115.jpg?width=494"
      style="max-width: 150px; max-height: 100%;"
    />
    <q-card-section>
      <div class="text-subtitle1" style="font-size: 14px">Nice dress from California</div>
      <div class="text-grey-8" style="font-size: 12px">$1000</div>
    </q-card-section>
  </q-card-section>
</q-card>


 <q-card flat bordered class="my-card bg-orange-1 q-mb-md">
      <q-card-section class="q-px-md q-py-sm">
        <div class="text-secondary">Shipping Option</div>
      </q-card-section>
      <q-separator color="grey-4"/>

      <q-card-section class="q-pl-md">
        <div class="row justify-between">
            <div class="">Standard Local</div>
            <div class="text-weight-bold">$10</div>
        </div>
        <div class="text-grey" style="font-size: 12px">Receive by Dec 25</div>
      </q-card-section>
    </q-card>

<q-card flat class="q-mb-md">
    <q-card-section class="row justify-between">
        <div class="row items-center q-gutter-xs">
            <q-icon name="card_membership" color="orange" size="xs" />
            <div>Payment Option</div>
        </div>
        <div class="text-primary text-weight-bold text-subtitle2">Cash On Delivery</div>
    </q-card-section>
</q-card>

<q-card class="my-card q-mb-md" flat>
    <q-card-section horizontal class="row items-center q-gutter-sm q-ml-xs">
        <q-icon name="o_receipt" color="primary" size="xs" />
        <div>Payment Details</div>
    </q-card-section>
    <q-card-section class="q-gutter-sm">
        <div class="row justify-between">
            <div class="text-grey-9" style="font-size: 12px">Merchandise Subtotal</div>
            <div class="text-grey-9" style="font-size: 12px">$1000</div>
        </div>
        <div class="row justify-between">
            <div class="text-grey-9" style="font-size: 12px">Shipping free</div>
            <div class="text-grey-9" style="font-size: 12px">$10</div>
        </div>
        <div class="row justify-between">
            <div class="text-grey-9 text-weight-bold" style="font-size: 15px">Total Amount</div>
            <div class="text-weight-bold text-primary" style="font-size: 15px">$1000</div>
        </div>
    </q-card-section>
</q-card>
</div>

<div class="absolute-bottom bg-white row inline row" style="width: 100%; bottom: 0;">
    <div class="col-7 text-right q-pr-sm">
        <div class="text-grey-8">Total Amount</div>
        <div class="text-weight-bold text-primary">$133910</div>
    </div>
    <q-btn @click="routeToCheckoutSuccess" label="Place Order" class="col bg-primary text-white"/>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

const routeToCheckoutSuccess = () => {
    router.push('success')
}
</script>