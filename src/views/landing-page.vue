<template>
  <div>
    <header class="bg-gray-600" x-data="{ isOpen: false }">
      <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link class="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400" to="/">
            <img src="@/assets/images/icon.png" class="inline w-12" alt="Icon app"> MonCompagnonBudget
          </router-link>

          <!-- Mobile menu button -->
          <div class="flex md:hidden" @click="isOpen = !isOpen">
            <button type="button" class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div :class="isOpen ? 'flex' : 'hidden'" class="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <button class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400" @click="login">
            Se connecter
          </button>
          <button class="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400" @click="register">
            S'inscrire
          </button>
        </div>
      </nav>

      <section class="flex items-center justify-center" style="height: 500px;">
        <div class="text-center">
          <img src="@/assets/images/logo.png" class="w-48 m-auto" alt="Logo app">
          <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
            Une application qui vous accompagne <br> dans la gestion de votre budget
          </h2>

          <div class="flex justify-center mt-8">
            <button class="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500" @click="register">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </header>

    <section class="bg-white">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="grid gap-8 mt-10 md:mt-20 md:grid-cols-2">
          <div class="flex space-x-4">
            <div>
              <h4 class="text-xl font-medium text-gray-800">
                Site en cours de développement
              </h4>
              <p class="max-w-lg mt-4 text-gray-600">
                Le site est actuellement au stade de conception et réalisation.
                Toutes les fonctionnalités ne sont pas encore implémentées.
              </p>
            </div>
          </div>

          <div class="flex space-x-4">
            <div>
              <h4 class="text-xl font-medium text-gray-800">
                Fonctionnalités présentes
              </h4>
              <p class="max-w-lg mt-4 text-gray-600">
                Vous pouvez actuellement créer un compte.
                Vous pouvez vous connecter à votre espace.
                Et vous pouvez vous déconnecter de votre espace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="px-8 py-12 bg-gray-500 rounded-md md:px-20 md:flex md:items-center md:justify-between">
          <div>
            <h3 class="text-2xl font-semibold text-white">
              Accès gratuit et illimité
            </h3>
            <p class="max-w-md mt-4 text-gray-400">
              L'application est au stable de preuvre de concept.<br>
              L'accès est donc pour le moment, gratuit et en illimité.
            </p>
          </div>

          <button class="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500" @slick="register">
            S'inscrire
          </button>
        </div>
      </div>
    </section>

    <footer class="border-t">
      <div class="container flex items-center justify-between px-6 py-8 mx-auto">
        <p class="text-gray-500">
          © 2021 Morel Corp. Tout droit réservé.
        </p>
        <router-link class="font-medium text-gray-700" to="/">
          Mentions légales
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    login() {
      this.$store.dispatch('logIn');
    },
    register() {
      this.$store.dispatch('register');
    }
  }
});
</script>

<style lang="scss" scoped>

</style>