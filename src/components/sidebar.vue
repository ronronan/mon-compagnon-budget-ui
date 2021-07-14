<template>
  <div class="h-screen hidden lg:block shadow-lg relative w-80">
    <div class="bg-white h-full dark:bg-gray-700">
      <div class="flex items-center justify-start pt-6 ml-8">
        <p class="font-bold dark:text-white text-xl">
          MonBudget App
        </p>
      </div>
      <nav class="mt-6">
        <div>
          <router-link class="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500" to="/">
            <span class="text-left">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
                />
              </svg>
            </span>
            <span class="mx-2 text-sm font-normal"> Home </span>
          </router-link>
          <router-link v-if="isAdmin" class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" to="/admin/users">
            <span class="text-left">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                />
              </svg>
            </span>
            <span class="mx-2 text-sm font-normal">
              Users
            </span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
});

</script>

<style lang="scss" scoped>
</style>