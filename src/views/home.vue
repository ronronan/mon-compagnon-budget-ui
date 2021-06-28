<template>
  <div class="home">
    <div class="m-4">
      <button class="btn btn-blue" @click="loadUsers">
        Get Users
      </button>
    </div>
    <p>{{ usersList }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '../models/user.model';

export default defineComponent({
  name: 'Home',
  computed: {
    usersList(): User[] {
      return this.$store.state.usersList;
    }
  },
  methods: {
    loadUsers() {
      this.$store.dispatch('loadUser');
    }
  }
});
</script>

<style lang="scss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-yellow {
  @apply bg-yellow-300 text-white;
}
.btn-yellow:hover {
  @apply bg-yellow-500;
}

</style>