<template>
    <div class="flex flex-center q-mt-xl">   
    <div style="width: 900px">
    <q-card-section>
        <q-list>
            <q-item clickable v-for="option in options">
                <q-item-section>
                <q-img
                    :src="option.img"
                    />
                </q-item-section>
                <q-item-section>{{option.name}}</q-item-section>
                    <q-item-section side>
                        <q-radio v-model="payment" :val="option.name" />
                    </q-item-section>
            </q-item>
            
        </q-list>
    </q-card-section>
        <div class="text-right q-pa-md">
            <q-btn class="col-12" color="primary" @click="handleConfirm">
                Confirm
            </q-btn>
        </div>
    </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {usePaymentOptionStore} from 'src/stores/paymentOption.js'
    import {useRouter} from 'vue-router'
    import fastrack from 'src/assets/fastrack.png'
    const paymentOption = usePaymentOptionStore()
    const options = ref([
        {name: 'Standard Delivery', img: 'https://www.standard-delivery.com/docs/assets/img/standard-logo.jpg'},
        {name: 'FasTrack Courier Services', img: fastrack},
    ])
    const payment = ref('Standard Delivery')
    const router = useRouter()
    const handleConfirm = async () => {
        paymentOption.delivery = payment.value
        router.go(-1)
    }
</script>