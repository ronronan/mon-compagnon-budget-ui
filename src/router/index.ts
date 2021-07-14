import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireBeAdmin: false,
    }
  },
  {
    path: '/admin/users',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/user-list.vue'),
    meta: {
      requireBeAdmin: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory((import.meta.env.VITE_BASE_URL === undefined || import.meta.env.VITE_BASE_URL === false || import.meta.env.VITE_BASE_URL === true) ? '/' : import.meta.env.VITE_BASE_URL),
  routes
})

export default router
