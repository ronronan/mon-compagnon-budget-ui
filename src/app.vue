<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar v-if="authenticated" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Topbar :authenticated="authenticated" :firstname="userFirstname" :lastname="userLastname" />

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
import { ApiService } from './services/api.service';

export default defineComponent({
  name: 'App',
  components: {
    Topbar, Sidebar
  },
  computed: {
    userFirstname(): string {
      return this.$store.state.user.firstname;
    },
    userLastname(): string {
      return this.$store.state.user.lastname;
    },
    authenticated(): boolean {
      return this.$store.state.authenticated;
    }
  },
  beforeCreate() {
    this.$store.dispatch('initKeycloak', this.$keycloak);
    ApiService.initInstance(this.axios);
  },
  mounted() {
    if(this.$store.state.authenticated) {
      this.$store.dispatch('checkAndRegister');
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