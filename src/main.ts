import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueKeycloak from '@dsb-norge/vue-keycloak-js';
// import { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import './assets/scss/tailwind.scss';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  // .use(VueKeycloak, {
  //   config: {
  //     realm: import.meta.env.KEYCLOAK_REALM,
  //     clientId: import.meta.env.KEYCLOAK_CLIENT_ID,
  //     url: import.meta.env.KEYCLOAK_AUTH_URL
  //   },
  //   init: {
  //     onLoad: 'check-sso',
  //   },
  //   onReady: () => {
  //     console.log("trest")
  //     app.mount("#app");
  //   }
  // });
  .mount('#app');

// Allow usage of this.$keycloak in components
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties  {
//     $keycloak: VueKeycloakInstance
//   }
// }