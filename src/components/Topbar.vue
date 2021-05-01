<template>
  <b-navbar
    :fixed-top="false"
    type="is-info">
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a v-if="!authenticated" class="button is-success"><strong>Sign up</strong></a>
          <a v-if="!authenticated" class="button is-light" @click="logIn">Log in</a>
          <a v-else class="button is-light" @click="logOut">Log Out</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
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
    }
  }
}
</script>
