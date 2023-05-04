import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/UserPages/LoginPage.vue'),
  },
  {
    path: '/login',
    component: () => import('../pages/UserPages/LoginPage.vue'),
  },
  {
    path: '/register',
    component: () => import('../pages/UserPages/RegisterPage.vue'),
  },
  {
    path: '/home',
    component: () => import('../pages/HomePage/HomePage.vue'),
    children: [
      {
        path: 'inbox',
        component: () =>
          import('../pages/HomePage/c-pages/InboxPage.vue'),
      },
      {
        path: 'star',
        component: () =>
          import('../pages/HomePage/c-pages/StarPage.vue'),
      },
      {
        path: 'send',
        component: () =>
          import('../pages/HomePage/c-pages/SendPage.vue'),
      },
      {
        path: 'drafts',
        component: () =>
          import('../pages/HomePage/c-pages/DraftsPage.vue'),
      },
      {
        path: 'likes',
        component: () =>
          import('../pages/HomePage/c-pages/LikesPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
