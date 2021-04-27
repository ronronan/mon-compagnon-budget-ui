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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
  if (to.matched.some((record) => record.meta.requireBeAdmin)) {
    if (Vue.prototype.$keycloak.authenticated) {
      if (Vue.prototype.$keycloak.tokenParsed.realm_access.roles[0] === 'ADMIN') {
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
