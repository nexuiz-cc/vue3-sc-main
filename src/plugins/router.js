import { createRouter, createWebHashHistory } from 'vue-router'
import { useMenuStore } from '../stores/menu'
import Login from '../pages/Login.vue'
// import Reg from "../pages/Reg.vue";
const routes = [
  { path: '/login', component: Login },
  //   { path: "/reg", component: Reg },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
    beforeEnter: () => {
      const menuStore = useMenuStore();
      if (menuStore.$state.isLogin) {
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
  { path: '/', redirect: '/home' },
  //   { path: "/:pathMatch(.*)*", component: () => import("../pages/NoPage.vue") },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
