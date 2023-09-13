
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('pages/MainPage.vue') },
      { path: ':userId',
        component: () => import('layouts/PostLayout.vue'),
        children: [{ path: ':postNo', component: () => import('pages/PostDetail.vue') }] }
    ]
  },
]

export default routes
