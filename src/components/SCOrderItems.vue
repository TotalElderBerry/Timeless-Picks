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
            <q-select v-if="props.order.status === 'rejected'" disable v-model="model" :options="options" label="Action" />
            <q-select v-else v-model="model" :options="options" label="Action" />
        </q-card-section>
  
      </q-card>

      <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red" text-color="white" />
          <span class="q-ml-sm">This action cannot be undone.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Continue" @click="isconfirmed = true" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  
    </div>
  </template>

<script setup>
    import { ref, watch } from "vue";
    import {useOrderStore} from 'src/stores/orders.js'
    import {Notify} from 'quasar'
    const orders = useOrderStore()
    const options = ref(['CONFIRM', 'REJECT'])
    const props = defineProps(['order'])
    const model = ref('Action')
    const confirm = ref(false)
    const isconfirmed = ref(false)
    const isRejected = ref(false)

    watch([() => model.value, () => isconfirmed.value], () => {
        if(model.value !== 'Action' && !isRejected.value ){
            confirm.value = true
            if(isconfirmed.value){
                Notify.create({message: 'Action successful', color:'green'})
                if(model.value === 'REJECT'){
                    orders.products[props.order.id - 1].status = 'rejected'
                    isRejected.value = true
                }
                if(model.value === 'CONFIRM'){
                    isRejected.value = false
                    orders.products[props.order.id - 1].status = 'to be delivered'
                }
            }
        }
    })

    if(props.order.status === 'rejected'){
        isRejected.value = true
        model.value = 'REJECT'
    }else{
        isRejected.value = false
        model.value = "Action"
    }

    watch(() => props.order.id, () => {
        console.log(props.order.status)
        if(props.order.status === 'rejected'){
            isRejected.value = true
            model.value = 'REJECT'
        }else{
            isRejected.value = false
            model.value = "Action"
        }
    })

    
</script>