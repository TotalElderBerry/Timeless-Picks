<template>
    <div class="">

         <q-card class="my-card q-my-md" flat>
            <q-item>
                <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
                </q-item-section>

                <q-item-section>
                <q-item-label>Brian Keith Lisondra</q-item-label>
                <q-item-label caption>Member</q-item-label>
                </q-item-section>
            </q-item>
        </q-card>
    <div class="row">
      <q-list  class="q-mb-md col-xs-12 col-md-4" >
        <q-item clickable v-ripple class="bg-white">
            <q-item-section avatar>
            <q-icon color="primary" name="account_circle" />
            </q-item-section>

            <q-item-section>Account Settings</q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" side />
            </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-white">
            <q-item-section avatar>
            <q-icon color="primary" name="help_outline" />
            </q-item-section>

            <q-item-section>Help Center</q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" side />
            </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-white">
            <q-item-section avatar>
            <q-icon color="primary" name="description" />
            </q-item-section>

            <q-item-section>Terms and Conditions</q-item-section>
            <q-item-section side>
                <q-icon name="navigate_next" side />
            </q-item-section>
        </q-item>
      </q-list>
    
    <q-card class="q-pa-sm q-mx-sm q-mr-sm col-xs-12 col-md">
      <q-item-section class="q-pb-sm">
                <q-item-label class="text-weight-bold text-h6">My Purchases</q-item-label>
    </q-item-section>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card flat>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="to_confirm" label="To Confirm" />
            <q-tab name="to_receive" label="To Be Delivered" />
            <q-tab name="completed" label="Completed" />
            <q-tab name="cancelled" label="Cancelled" />
            <q-tab name="rejected" label="Rejected" />
          </q-tabs>
          
        </q-card>
      </div>
      <div class="row justify-center q-mt-sm">
        
        <!-- <SCOrderItems v-for="pr in products" :order="pr" class="col-12" v-if="tab === 'to_confirm' || tab === 'rejected'"/> -->
        <SCOrderItemWithHistory v-for="pr in products" :order="pr" class="col-12" />
      </div>
    </q-card>
    </div>

    </div>
  </template>

<script setup>
import {ref, computed,watch} from 'vue'
import SCOrderItems from 'src/components/SCOrderItems.vue';
import SCOrderItemWithHistory from 'src/components/SCOrderItemWithHistory.vue';
import {useOrderStore} from 'src/stores/orders.js'
const orders = useOrderStore()
const tab = ref('to_confirm')
const products = ref(orders.products.filter(p => p.status === 'pending'))

watch(() => tab.value, () => {
  switch (tab.value) {
    case 'to_confirm':
      products.value = orders.products.filter(p => p.status === 'pending')
      break;
    case 'to_receive':
      products.value = orders.products.filter(p => p.status === 'to be delivered')
      break;
    case 'completed':
      products.value = orders.products.filter(p => p.status === 'completed')
      break;
    case 'rejected':
      products.value = orders.products.filter(p => p.status === 'rejected')
      break;
    default:
      break;
  }
})

watch(orders.products, () => {
  products.value = orders.products.filter(p => p.status === 'pending')
})

const showItemWithHistory = computed(() => {
  switch (tab.value) {
    case 'to_receive':
      return true;
    case 'completed':
      return true;
    default:
      break;
  }
})

</script>