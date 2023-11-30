<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
            
            <q-card-section class="col-4 flex flex-center">
                <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
            </q-card-section>

            <q-card-section class="q-pt-xs">
                <div class="text-h6 q-mt-sm q-mb-xs">Women's Dress</div>
                <div class="text-caption text-grey">
                    Ordered by - Brian Keith Lisondra ( @brianzl1 )
                </div>
            </q-card-section>

            <q-card-section class="gt-xs inline">
                <q-card-actions>
                    <q-select v-model="model" :options="options" label="Action" />
                  <!-- <q-btn flat color="primary">
                    Action
                  </q-btn> -->
                </q-card-actions>
            </q-card-section>
  
        </q-card-section>
  
        <q-separator />

        <q-card-section class="lt-sm inline">
            <q-select v-model="model" :options="options" label="Action" />
        </q-card-section>
  
      </q-card>
  
    </div>
  </template>

<script setup>
    import { ref } from "vue";
    const options = ref(['CONFIRM', 'REJECT'])
    const model = ref('CONFIRM')
</script>