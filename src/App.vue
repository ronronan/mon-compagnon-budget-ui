<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar v-if="authenticated" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Topbar :authenticated="authenticated" :firstName="firstName" :lastName="lastName" />

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

import { TestService } from './services/test-api.service';

export default defineComponent({
  name: 'App',
  components: {
    Topbar, Sidebar
  },
  data() {
    return {
      authenticated: false,
      email: 'unknow',
      firstName: 'unknow',
      lastName: 'unknow',
      role: 'unkown',
      testService: new TestService(this.axios)
    }
  },
  mounted() {
    try {
      this.authenticated = this.$keycloak.authenticated;
      if (this.$keycloak.token !== null) {
        this.testService.private().then((response) => {
          console.log(response);
        });
        this.$keycloak.loadUserProfile().then((userProfile) => {
          this.email = userProfile.email
          this.firstName = userProfile.firstName
          this.lastName = userProfile.lastName
          this.role = this.$keycloak.realmAccess.roles[0];
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