import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    counter: 0,
    products: [
      {
        id: 1,
        name: 'Floral Short Dress',
        img: ['https://lzd-img-global.slatic.net/g/p/3036b6eb9a8b06a2b4f33857c220860e.jpg_720x720q80.jpg','https://lzd-img-global.slatic.net/g/p/60197d0762a8863c9bef9d6648bd8e6f.jpg_720x720q80.jpg'],
        price: 39.99,
        category: 'Women',
        stock: 12,
        sales: 1000,
      },
      {
        id: 2,
        name: 'Elegant Short Dress',
        img: ['https://kesleyboutique.com/cdn/shop/products/c0163f7b8887492db817a9a146328f17-Max.jpg?v=1694963749&width=1200','https://lzd-img-global.slatic.net/g/p/409b4fc27ffe0723ae9386f55b76187d.jpg_720x720q80.jpg'],
        price: 49.99,
        category: 'Women',

        stock: 12,
        sales: 1000,
      },
      {
        id: 3,
        name: 'Boho Short Dress',
        img: ['https://lzd-img-global.slatic.net/g/p/4dc954343338689e62fcc4583ad16b7a.jpg_960x960q80.jpg_.webp'],
        price: 59.99,
        category: 'Women',

        stock: 12,
        sales: 1000,
      },
      {
        id: 4,
        name: 'Korean Short Dress',
        img: ['https://ordicle.com/cdn/shop/products/Sa3e8daa24aec43cdaa57e3064862751aB.jpg?v=1654890171'],
        price: 59.99,
        category: 'Women',

        stock: 12,
        sales: 1000,
      },
      // Add more short dresses as needed
    ],
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
