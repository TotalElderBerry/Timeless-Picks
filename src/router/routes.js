const PageFilePaths = {
  HOME: import('pages/IndexPage.vue'),
  SELLER_CENTER: import('pages/SellerCenterPage.vue'),
  SELLER_CENTER_HOME: import('pages/SCMyProductsPage.vue'),
  SELLER_CENTER_CHAT: import('pages/SCChatPage.vue'),
  SELLER_CENTER_ADD_PRODUCT: import('pages/SCAddItemPage.vue'),
  CATEGORY_PRODUCTS: import('pages/ProductsCategoryPage.vue'),
};

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => PageFilePaths.HOME },
      { path: 'sellercenter', component: () => PageFilePaths.SELLER_CENTER },
      { path: 'category/:type', name: 'category' , component: () => PageFilePaths.CATEGORY_PRODUCTS }
    ]
  },
  {
    path: '/sellercenter/home/',
    component: () => import('layouts/SellerCenterLayout.vue'),
    children: [
      { path: 'my-products', name: 'my-products', component: () => PageFilePaths.SELLER_CENTER_HOME },
      { path: 'add-product', name: 'add-product',component: () => PageFilePaths.SELLER_CENTER_ADD_PRODUCT },
      { path: 'chats', name: 'chats',component: () => PageFilePaths.SELLER_CENTER_CHAT },
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
