<template>
    <div class="q-py-xs row items-center q-gutter-md " style="width: 100vw;">
        <q-card class="my-card" flat bordered style="width: 100%">
            <q-card-section horizontal>
            
            <q-card-section class="col-xs-4 col-sm-2 col-md-3 ">
                <q-img
                class="rounded-borders"
                :src="props.order.img[0]"
                style="max-width: 150px; max-height: 150px;"
                />
            </q-card-section>

            <q-card-section class="q-pt-xs col">
                <div class="text-h6 q-mt-sm q-mb-xs">{{props.order.name}}</div>
                <div class="text-caption text-grey">
                    Ordered by - Brian Keith Lisondra ( @brianzl1 )
                </div>
            </q-card-section>

            <q-card-section class="gt-xs inline">
                <q-card-actions>
                    <q-select v-if="isRejected" disable v-model="model" :options="options" label="Action" />
                    <q-select v-else v-model="model" :options="options" label="Action" />
                </q-card-actions>
            </q-card-section>
  
        </q-card-section>
  
        <q-separator />

        <q-card-section class="lt-sm inline">
            <q-select v-if="isRejected" disable v-model="model" :options="options" label="Action" />
            <q-select v-else v-model="model" :options="options" label="Action" />
        </q-card-section>
  
      </q-card>
  
    </div>
  </template>

<script setup>
    import { ref, watch } from "vue";
    const options = ref(['CONFIRM', 'REJECT'])
    const props = defineProps(['order'])
    const model = ref('Action')
    const isRejected = ref(false)
    watch(() => props.order, () => {
        if(props.order.status === 'rejected'){
            isRejected.value = true
            model.value = 'REJECTED'
        }else{
            isRejected.value = false
            model.value = "Action"
        }
    })
</script>