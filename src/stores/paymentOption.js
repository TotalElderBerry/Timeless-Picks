import { defineStore } from 'pinia';

export const usePaymentOptionStore = defineStore('paymentOption', {
  state: () => ({
    counter: 0,
    option: 'Cash On Delivery',
    delivery: 'Standard Delivery',
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
