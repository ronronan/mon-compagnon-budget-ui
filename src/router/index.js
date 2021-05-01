import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireBeAdmin: false,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireBeAdmin: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const keycloak = Vue.prototype.$keycloak;
  if (to.matched.some((record) => record.meta.requireBeAdmin)) {
    if (keycloak.authenticated) {
      if (keycloak.hasRealmRole('ADMIN')) {
        next();
      } else {
        alert('You are not allow to go in the admin section');
      }
    } else {
      alert('You are not authenticated');
    }
  } else {
    next();
  }
});

export default router
