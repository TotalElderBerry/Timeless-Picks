const PageFilePaths = {
  HOME: import('pages/IndexPage.vue'),
  SELLER_CENTER: import('pages/SellerCenterPage.vue'),
  SELLER_CENTER_HOME: import('pages/SCMyProductsPage.vue'),
  SELLER_CENTER_CHAT: import('pages/SCChatPage.vue'),
  SELLER_CENTER_CHAT_W_DETAILS: import('pages/SCMobileChat.vue'),
  SELLER_CENTER_ADD_PRODUCT: import('pages/SCAddItemPage.vue'),
  SELLER_CENTER_ORDERS: import('pages/SCOrdersPage.vue'),
  CATEGORY_PRODUCTS: import('pages/ProductsCategoryPage.vue'),
  PRODUCTS_OF_CATEGORY: import('pages/ProductsPage.vue'),
  PRODUCT_DETAILS: import('pages/ProductDetailsPage.vue'),
  CHECKOUT: import('pages/CheckoutPage.vue'),
  CHECKOUT_MESSAGE: import('pages/SuccessfulCheckoutPage.vue'),
  PROFILE: import('pages/ProfilePage.vue'),
  PAYMENT_OPTIONS: import('pages/PaymentOptionsPage.vue'),
  DELIVERY_OPTIONS: import('pages/DeliveryOptionsPage.vue'),
};

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'home', component: () => PageFilePaths.HOME },
      { path: 'sellercenter', name: 'sc-login', component: () => PageFilePaths.SELLER_CENTER },
      { path: 'category/:type', name: 'category' , component: () => PageFilePaths.CATEGORY_PRODUCTS },
      { path: 'chat/:id', name: 'chat-customer',component: () => PageFilePaths.SELLER_CENTER_CHAT_W_DETAILS },
      { path: 'profile', name: 'profile',component: () => PageFilePaths.PROFILE },
      { path: 'payment-options', name: 'payment-options',component: () => PageFilePaths.PAYMENT_OPTIONS },
      { path: 'delivery-options', name: 'delivery-options',component: () => PageFilePaths.DELIVERY_OPTIONS },
    ]
  },
  {
    path: '/sellercenter/home/',
    component: () => import('layouts/SellerCenterLayout.vue'),
    children: [
      { path: 'my-products', name: 'my-products', component: () => PageFilePaths.SELLER_CENTER_HOME },
      { path: 'add-product', name: 'add-product',component: () => PageFilePaths.SELLER_CENTER_ADD_PRODUCT },
      { path: 'chats', name: 'chats',component: () => PageFilePaths.SELLER_CENTER_CHAT },
      { path: 'chat/:id', name: 'chat-mobile',component: () => PageFilePaths.SELLER_CENTER_CHAT_W_DETAILS },
      { path: 'orders', name: 'orders',component: () => PageFilePaths.SELLER_CENTER_ORDERS },
    ]
  },
  {
    path: '/products/',
    component: () => import('layouts/MainShoppingPageLayout.vue'),
    children: [
      { path: ':category', name: 'products-category', component: () => PageFilePaths.PRODUCTS_OF_CATEGORY },
      { path: 'item/:id', name: 'product', component: () => PageFilePaths.PRODUCT_DETAILS },
      { path: 'checkout/:id', name: 'checkout', component: () => PageFilePaths.CHECKOUT },
      { path: 'checkout/success', name: 'checkout-success', component: () => PageFilePaths.CHECKOUT_MESSAGE },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
export default routes
