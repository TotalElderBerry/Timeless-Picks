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
      :src="currentProduct.img[0]"
      style="max-width: 150px; max-height: 150px;"
    />
    <q-card-section>
      <div class="text-subtitle1" style="font-size: 14px">{{currentProduct.name}}</div>
      <div class="text-grey-8" style="font-size: 12px">${{currentProduct.price}}</div>
    </q-card-section>
  </q-card-section>
</q-card>


 <q-card flat bordered class="my-card bg-orange-1 q-mb-md">
      <q-card-section class="q-py-xs">
         <q-item class="q-pa-xs">
            <q-item-section class="text-primary text-weight-bold text-subtitle2">{{paymentOption.delivery}}</q-item-section>
            <q-item-section side>
                    <q-btn flat class="q-pa-xs" @click="routeToDeliveryOptions" icon="navigate_next" side />
            </q-item-section>
        </q-item>
      </q-card-section>
      <q-separator color="grey-4"/>

      <q-card-section class="q-pl-md">
        <div class="row justify-between">
            <div class="">{{paymentOption.delivery}}</div>
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
        <q-item>
            <q-item-section class="text-primary text-weight-bold text-subtitle2">{{paymentOption.option}}</q-item-section>
            <q-item-section side>
                    <q-btn flat class="q-pa-xs" @click="routeToPaymentOptions" icon="navigate_next" side />
            </q-item-section>
        </q-item>
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
            <div class="text-grey-9" style="font-size: 12px">${{currentProduct.price}}</div>
        </div>
        <div class="row justify-between">
            <div class="text-grey-9" style="font-size: 12px">Shipping free</div>
            <div class="text-grey-9" style="font-size: 12px">$10</div>
        </div>
        <div class="row justify-between">
            <div class="text-grey-9 text-weight-bold" style="font-size: 15px">Total Amount</div>
            <div class="text-weight-bold text-primary" style="font-size: 15px">${{parseInt(currentProduct.price) + 10}}</div>
        </div>
    </q-card-section>
</q-card>
</div>

<div class="absolute-bottom bg-white row inline row" style="width: 100%; bottom: 0;">
    <div class="col-7 text-right q-pr-sm">
        <div class="text-grey-8">Total Amount</div>
        <div class="text-weight-bold text-primary">${{parseInt(currentProduct.price) + 10}}</div>
    </div>
    <q-btn @click="routeToCheckoutSuccess" label="Place Order" class="col bg-primary text-white"/>
</div>

<q-dialog v-model="isModalOpen" v-if="!isLoading" >
    <div v-if="paymentOption.option === 'Paymaya' || paymentOption.option === 'Gcash'">
      <q-card class="row">
        <q-card-section class="">
          <div class="text-h6">You will be directed to a new tab</div>
        </q-card-section>

        <a :href="link" class="continue-link">
            Continue
        </a>
      </q-card>
    </div>
    <div v-if="paymentOption.option === 'Paypal'" class="bg-white q-pa-lg">
        <q-card-section class="">
          <div class="text-h6">Payment Thru Paypal</div>
        </q-card-section>
        <div id="paypal-button-container"></div>
    </div>
    </q-dialog>
</template>
<script setup>
import {useRoute,useRouter} from 'vue-router'
import {useProductStore} from 'src/stores/products.js'
import {useOrderStore} from 'src/stores/orders.js'
import {usePaymentOptionStore} from 'src/stores/paymentOption.js'
import {ref, onMounted} from 'vue'
import {Loading} from 'quasar'
import {loadScript} from '@paypal/paypal-js';

const paymentOption = usePaymentOptionStore()
const orders = useOrderStore()
const products = useProductStore()
const router = useRouter()
const route = useRoute()
const link = ref('')
const isModalOpen = ref(false)
const isLoading = ref(false)
const getProduct = () => {
    if(route.params.id > -1 && route.params.id <= products.products.length){
        return products.products[route.params.id - 1]
    }
}
const currentProduct = getProduct()

onMounted(async() => {
    
});


const routeToCheckoutSuccess = async () => {
    const newOrder = {
        status: 'pending',
    ...products.products[route.params.id - 1],
    };
    newOrder.id = orders.products.length + 1
    if(paymentOption.option === 'Paymaya'){
        Loading.show({message: 'Please Wait'})
        setTimeout(async() => {
            try {
                const data = await handleConfirm();
                orders.products.push(newOrder)
                Loading.hide()
                console.log(data)
            } catch (error) {
                
            }
        }, 300);
    }else if(paymentOption.option === 'Gcash'){
        Loading.show({message: 'Please Wait'})
        setTimeout(async() => {
            try {
                await checkoutGcash()
                Loading.hide()
                orders.products.push(newOrder)
            } catch (error) {
                
            }
        }, 300);
        // router.push('success')
    }else if(paymentOption.option === 'Paypal'){
        isModalOpen.value = true
        try {
        const paypal = await loadScript({
            'client-id': 'test'
        });

        await paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            // e.g reference.price
                            value: currentProduct.price+10,
                        },
                    }],
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(orderData) {
                    // Successful capture!
                    // e.g. Inertia.post(route('order.update', reference.orderId)
                    orders.products.push(newOrder)
                    router.push('success')
                });
            },
            style: {
                // Adapt to your needs
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal',
            },
            // The following is optional and you can
            // limit the buttons to those you want to
            // provide
            fundingSource: paypal.FUNDING.PAYPAL,
        }).render('#paypal-button-container');
    } catch (error) {
        // Add proper error handling
        console.error(error);
    }
    }else{
        orders.products.push(newOrder)
        router.push('success')
    }
}

const routeToPaymentOptions = () => {
    router.push({name: 'payment-options'})
}

const routeToDeliveryOptions = () => {
    router.push({name: 'delivery-options'})
}

const checkoutGcash = async () => {
    isLoading.value = true
    const url = 'https://api.paymongo.com/v1/checkout_sessions';
    const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Basic c2tfdGVzdF8yUU5OOWpYUnBtaTRodUIzVUR2a2lmNUs6c2tfdGVzdF8yUU5OOWpYUnBtaTRodUIzVUR2a2lmNUs='
    },
    body: JSON.stringify({
        data: {
        attributes: {
            send_email_receipt: true,
            show_description: false,
            show_line_items: true,
            line_items: [{currency: 'PHP', amount: Math.floor((currentProduct.price+10) * 100), name: currentProduct.name, quantity: 1}],
            payment_method_types: ['gcash'],
            success_url: 'https://timeless-picks.vercel.app/products/checkout/success'
        }
        }
    })
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => {
        console.log(json.data.attributes.checkout_url)
        link.value = json.data.attributes.checkout_url
        isLoading.value = false
        isModalOpen.value = true    
    })
    .catch(err => console.error('error:' + err));
}

const handleConfirm = async () => {
    isLoading.value = true
    const url = 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts';
            const headers = {
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': 'Basic cGstWjBPU3pMdkljT0kyVUl2RGhkVEdWVmZSU1NlaUdTdG5jZXF3VUU3bjBBaDpway1aME9Tekx2SWNPSTJVSXZEaGRUR1ZWZlJTU2VpR1N0bmNlcXdVRTduMEFo'
            };

            const data = {
            totalAmount: { value: currentProduct.price+10, currency: 'PHP' },
            redirectUrl: {
                success: `https://timeless-picks.vercel.app/products/checkout/success`,
                failure: `https://timeless-picks.vercel.app/products/checkout/success`,
            },
            requestReferenceNumber: 'as'
            };

            const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
            };

            fetch(url, options)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                // router.push(data.redirectUrl)
                link.value = data.redirectUrl
                isLoading.value = false
                isModalOpen.value = true
                return data
            })
            .catch(error => {
                console.log(process.env.VERCEL_URL)
                console.error('There was a problem with the fetch operation:', error);
            });
}
</script>

<style>
.continue-link {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px 20px;
    background-color: #4CAF50; /* Green background color */
    color: white; /* White text color */
    text-decoration: none; /* Remove default underline */
    font-size: 16px; /* Set the font size */
    border-radius: 5px; /* Add some border-radius for rounded corners */
  }

  .continue-link:hover {
    background-color: #45a049; /* Darker green color on hover */
  }
</style>