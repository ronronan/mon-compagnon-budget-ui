import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import '@/assets/scss/tailwind.scss';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

function tokenInterceptor() {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
}

Vue.use(VueKeyCloak, {
  config: {
    authRealm: process.env.VUE_APP_KEYCLOAK_REALM,
    authClientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
    authUrl: process.env.VUE_APP_KEYCLOAK_AUTH_URL,
    logoutRedirectUri: process.env.VUE_APP_KEYCLOAK_REDIRECT_URL,
  },
  init: {
    onLoad: 'check-sso',
  },
  onReady: () => {
    if (Vue.prototype.$keycloak.authenticated) {
      tokenInterceptor();
    }
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  },
});
