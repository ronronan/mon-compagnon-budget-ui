import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueKeycloak from '@dsb-norge/vue-keycloak-js';
import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import './assets/scss/tailwind.scss';
import { Store } from 'vuex';
import { IState } from './store/state';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(VueKeycloak, {
    config: {
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
      url: import.meta.env.VITE_KEYCLOAK_AUTH_URL
    },
    init: {
      flow: 'standard',
      onLoad: 'check-sso'
    },
    onReady: (keycloak: VueKeycloakInstance) => {
      axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${keycloak.token}`
        return config
      }, error => {
        return Promise.reject(error)
      })
      if (!keycloak.authenticated) {
        router.push("/").then();
      }
      app.mount("#app");
    }
  });


// Allow usage of this.$keycloak in components
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties  {
    $keycloak: VueKeycloakInstance,
    $store: Store<IState>;
  }
}
