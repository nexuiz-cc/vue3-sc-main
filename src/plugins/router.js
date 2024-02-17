/* eslint-disable no-use-before-define */
import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../stores/store';
import Login from '../pages/Login.vue';

const routes = [
  { path: '/login', component: Login },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
    beforeEnter: () => {
      if (store.isLogin) {
        return true;
      }
      router.push('./login');
      return false;
    },
  },
  { path: '/menu', component: () => import('../pages/Menu.vue') },
  { path: '/fg_username', component: () => import('../pages/FG_username.vue') },
  { path: '/fg_password', component: () => import('../pages/FG_password.vue') },
  { path: '/home', component: () => import('../pages/Home.vue') },
  { path: '/sc', component: () => import('../pages/ShoppingCart.vue') },
  { path: '/detail', component: () => import('../pages/Detail.vue') },
  { path: '/myPage', component: () => import('../pages/MyPage.vue') },
  { path: '/steak', component: () => import('../pages/Steak.vue') },
  { path: '/drink', component: () => import('../pages/Drink.vue') },
  { path: '/pasta', component: () => import('../pages/Pasta.vue') },
  { path: '/sushi', component: () => import('../pages/Sushi.vue') },
  { path: '/', redirect: '/home' },

  //   { path: "/:pathMatch(.*)*", component: () => import("../pages/NoPage.vue") },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
