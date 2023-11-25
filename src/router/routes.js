const PageFilePaths = {
  HOME: import('../pages/IndexPage.vue'),
  SELLER_CENTER: import('../pages/SellerCenterPage.vue'),
  SELLER_CENTER_HOME: import('../pages/SCMyProductsPage.vue'),
};

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: PageFilePaths.HOME },
      { path: 'sellercenter', component: PageFilePaths.SELLER_CENTER }
    ]
  },
  {
    path: '/sellercenter/home/',
    component: () => import('layouts/SellerCenterLayout.vue'),
    children: [
      { path: 'my-products', component: PageFilePaths.SELLER_CENTER_HOME },
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
