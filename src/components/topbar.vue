<template>
  <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
    <div class="flex flex-col w-full md:space-y-4">
      <header class="w-full h-16 z-40 flex items-center justify-between">
        <div class="block lg:hidden ml-6">
          <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
            <svg width="20" height="20" class="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
            </svg>
          </button>
        </div>
        <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
          <div class="relative p-1 flex items-center w-full space-x-4 justify-end">
            <template v-if="authenticated">
              <!--              <router-link to="/">-->
              <!--                <button class="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">-->
              <!--                  <svg width="20" height="20" class="" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />-->
              <!--                  </svg>-->
              <!--                </button>-->
              <!--              </router-link>-->
              <!--              <router-link to="/about">-->
              <!--                <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">-->
              <!--                  <svg width="20" height="20" class="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z" />-->
              <!--                  </svg>-->
              <!--                </button>-->
              <!--              </router-link>-->
              <span class="w-1 h-8 rounded-lg bg-gray-200" />
              <a href="#" class="block relative">
                <img alt="Profile picture" :src="profilePicture" class="mx-auto object-cover rounded-full h-10 w-10 ">
              </a>
              <button class="flex items-center text-gray-500 dark:text-white text-md" @click="menuOpen = !menuOpen">
                {{ username }}
                <svg width="20" height="20" class="ml-2 text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                </svg>
              </button>
            </template>
            <template v-else>
              <button class="flex items-center text-gray-500 dark:text-white text-md" @click="logIn">
                Log In
              </button>
            </template>
          </div>
          <div v-if="menuOpen" class="relative inline-block text-left">
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <!-- <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a> -->
                <button class="text-gray-700 block w-full text-left px-4 py-2 text-sm" tabindex="-1" @click="logOut">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Topbar',
  props: {
    authenticated: {
      type: Boolean,
      default: true
    },
    firstname: {
      type: String,
      default() {
        return 'John'
      }
    },
    lastname: {
      type: String,
      default() {
        return 'D.'
      }
    },
    profilePicture: {
      type: String,
      default() {
        return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
    }
  },
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    username(): string {
      const lastname = this.lastname.substring(0, 1) + '.';
      return `${this.firstname} ${lastname}`;
    }
  },
  methods: {
    logIn() {
      this.$store.dispatch('logIn');
    },
    logOut() {
      this.$store.dispatch('logOut');
    }
  },
});
</script>

<style lang="scss" scoped>

.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}

</style>