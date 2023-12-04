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
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ99XfjsDgXo29tdSVXXizNr8KRNq33LRWg6g3WczrAm3WzH3BQIUyXAriklI0pMHAmU&usqp=CAU','https://lzd-img-global.slatic.net/g/p/409b4fc27ffe0723ae9386f55b76187d.jpg_720x720q80.jpg'],
        price: 49.99,
        category: 'Women',

        stock: 12,
        sales: 1000,
      },
      {
        id: 3,
        name: 'Boho Short Dress',
        img: ['https://lzd-img-global.slatic.net/g/p/4dc954343338689e62fcc4583ad16b7a.jpg_960x960q80.jpg_.webp','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFgZc7PObXurGa59c6hd0eh_SMhje7ESQed53vMRXTQMmMFLuZAYPU495jG2C7VjSy_M&usqp=CAU'],
        price: 59.99,
        category: 'Women',

        stock: 12,
        sales: 1000,
      },
      {
        id: 4,
        name: 'Korean Short Dress',
        img: ['https://ordicle.com/cdn/shop/products/Sa3e8daa24aec43cdaa57e3064862751aB.jpg?v=1654890171','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFgZc7PObXurGa59c6hd0eh_SMhje7ESQed53vMRXTQMmMFLuZAYPU495jG2C7VjSy_M&usqp=CAU'],
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
