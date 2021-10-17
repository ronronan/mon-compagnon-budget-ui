<template>
  <div class="categorie-item">
    <div class="widget w-full p-4 rounded-lg bg-white border-l-4" :style="{ borderColor: color }">
      <div class="flex items-center">
        <div class="icon w-14 p-3.5 text-white rounded-full mr-3" :style="{ backgroundColor: color }">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-lg">
            {{ name }}
          </div>
          <!-- <div class="text-sm text-gray-400">Sales</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserItem',
  props: {
    icon: {
      type: String,
      default() {
        return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
    },
    name: {
      type: String,
      default() {
        return 'Category 1'
      }
    },
    color: {
      type: String,
      default() {
        return '#ff0000'
      }
    }
  },
  computed: {
  }
});
</script>

<style lang="scss" scoped>
.categorie-item {
  @apply w-full lg:w-1/5;
}
</style>