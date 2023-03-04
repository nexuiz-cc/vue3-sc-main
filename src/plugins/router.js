import { createRouter, createWebHashHistory } from 'vue-router'
import { store } from '../stores/store';
import Login from '../pages/Login.vue'
// import Reg from "../pages/Reg.vue";
const routes = [
  { path: '/login', component: Login },
  //   { path: "/reg", component: Reg },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
    beforeEnter: () => {
      if (store.isLogin) {
        return true
      } else {
        router.push('./login')
        return false
      }
    },
  },
  { path: '/menu', component: () => import('../pages/Menu.vue') },
  { path: '/fp', component: () => import('../pages/FP.vue') },
  { path: '/home', component: () => import('../pages/Home.vue') },
  { path: '/friends', component: () => import('../pages/Follow.vue') },
  { path: '/detail', component: () => import('../pages/Detail.vue') },
  { path: '/user', component: () => import('../pages/MyPage.vue') },
  { path: '/steak', component: () => import('../pages/Steak.vue') },
  { path: '/drink', component: () => import('../pages/Drink.vue') },
  { path: '/', redirect: '/home' },

  //   { path: "/:pathMatch(.*)*", component: () => import("../pages/NoPage.vue") },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
