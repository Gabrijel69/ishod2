const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    parent: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    children: [{ path: 'test', component: () => import('pages/TestPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
