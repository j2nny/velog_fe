
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainPage.vue') },
      { path: ':userId/:postNo', component: () => import('pages/PostDetail.vue') }
    ]
  },

]

export default routes
