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
            <q-tab name="to_receive" label="To Receive" />
            <q-tab name="completed" label="Completed" />
            <q-tab name="cancelled" label="Cancelled" />
          </q-tabs>
          
        </q-card>
      </div>

      <SCOrderItems />
      <SCOrderItems />
    </div>
  </template>

<script setup>
import {ref} from 'vue'
import SCOrderItems from 'src/components/SCOrderItems.vue';
const tab = ref('to_confirm')

</script>