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
      requireBeAuthenticated: false
    }
  },
  {
    path: '/admin/users',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "user-list" */ '../views/admin/user-list.vue'),
    meta: {
      requireBeAdmin: true,
      requireBeAuthenticated: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/bank/account.vue'),
    meta: {
      requireBeAdmin: true,
      requireBeAuthenticated: true
    }
  }
]

const router = createRouter({
  history: createWebHistory((import.meta.env.VITE_BASE_URL === undefined || import.meta.env.VITE_BASE_URL === false || import.meta.env.VITE_BASE_URL === true) ? '/' : import.meta.env.VITE_BASE_URL),
  routes
})

export default router
