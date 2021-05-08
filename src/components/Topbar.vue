<template>
  <div class="container mx-auto bg-blue-600 p-5">
    <nav class="flex justify-between text-white cursor-pointer">
        <div>
          <a href="#">MonBudget App</a>
        </div>
        <ul class="flex flex-row">
          <li class="pr-5"><router-link to="">Home</router-link></li>
          <li class="pr-5"><router-link to="/about">About</router-link></li>
        </ul>
        <ul class="flex flex-row">
          <li v-if="!authenticated" class="pr-5"><a  class="button is-light" @click="logIn">Log in</a></li>
          <li v-else class="pr-5"><a class="button is-light" @click="logOut">Log Out</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Topbar",
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logIn() {
      Vue.prototype.$keycloak.loginFn()
    },
    logOut() {
      Vue.prototype.$keycloak.logoutFn()
    },
    signUp() {
      Vue.prototype.$keycloak.register();
    }
  }
}
</script>
