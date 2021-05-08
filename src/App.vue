<template>
  <div id="app">
    <div class="main-container">
      <Topbar :authenticated="authenticated" />
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Topbar from "@/components/topbar";

export default {
  name: 'App',
  components: {
    Topbar
  },
  data() {
    return {
      user: {
        email: 'unknow',
        firstName: 'unknow',
        lastName: 'unknow',
        role: 'unkown'
      },
      authenticated: false
    }
  },
  mounted() {
    try {
      const keycloak = Vue.prototype.$keycloak;
      this.authenticated = keycloak.authenticated;
      if (keycloak.token !== null) {
        keycloak.loadUserProfile().then((userProfile) => {
          this.user.email = userProfile.email
          this.user.firstName = userProfile.firstName
          this.user.lastName = userProfile.lastName
          this.user.role = keycloak.realmAccess.roles[0];
        });
      } else {
        console.log('Not logged');
      }
    } catch (e) {
      //
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  .main-container {
    width: 100%;
  }
}
</style>
