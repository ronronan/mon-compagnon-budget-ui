<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar v-if="authenticated" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Topbar :authenticated="authenticated" />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './components/topbar.vue';
import Sidebar from './components/sidebar.vue';


export default defineComponent({
  name: 'App',
  components: {
    Topbar, Sidebar
  },
  data() {
    return {
      authenticated: false,
      user: {
        email: 'unknow',
        firstName: 'unknow',
        lastName: 'unknow',
        role: 'unkown'
      }
    }
  },
  mounted() {
    try {
      this.authenticated = this.$keycloak.authenticated;
      if (this.$keycloak.token !== null) {
        this.$keycloak.loadUserProfile().then((userProfile) => {
          this.user.email = userProfile.email
          this.user.firstName = userProfile.firstName
          this.user.lastName = userProfile.lastName
          this.user.role = this.$keycloak.realmAccess.roles[0];
        });
      } else {
        console.log('Not logged');
      }
    } catch (e) {
      //
    }
  }
});

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