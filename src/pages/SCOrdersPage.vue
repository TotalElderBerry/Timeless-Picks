<template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
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
        
        <SCOrderItems class="col-12" v-if="tab === 'to_confirm'"/>
        <SCOrderItems class="col-12" v-if="tab === 'to_confirm'"/>
        <SCOrderItemWithHistory class="col-12" v-if="showItemWithHistory"/>
      </div>
    </div>
  </template>

<script setup>
import {ref, computed} from 'vue'
import SCOrderItems from 'src/components/SCOrderItems.vue';
import SCOrderItemWithHistory from 'src/components/SCOrderItemWithHistory.vue';
const tab = ref('to_confirm')

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