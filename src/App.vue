<template>
  <div id="app">
    <Sidebar v-if="authenticated"
             class="sidebar"
             :email="user.email"
             :displayName="user.username"
             :role="user.role" />
    <div>
      <Topbar :authenticated="authenticated" />
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default {
  name: 'App',
  components: {
    Sidebar, Topbar
  },
  data() {
    return {
      user: {},
      authenticated: false
    }
  },
  mounted() {
    try {
      const keycloak = Vue.prototype.$keycloak;
      this.authenticated = keycloak.authenticated;
      if (keycloak.token !== null) {
        this.user.username = keycloak.userName;
        //FIXME: No role found for a user
        // this.user.role = Vue.prototype.$keycloak.tokenParsed.realm_access.roles[0];
        this.user.email = keycloak.tokenParsed.email;
      } else {
        console.log('Not logged');
      }
    } catch (e) {
      //
    }
  },
  methods: {
    logIn() {
      Vue.prototype.$keycloak.loginFn();
    },
    logOut() {
      Vue.prototype.$keycloak.logoutFn();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
