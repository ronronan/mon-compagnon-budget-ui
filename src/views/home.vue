<template>
  <div class="home">
    <template v-if="currentUserIsAdmin">
      <div class="m-4">
        <button class="btn btn-blue" @click="loadUsers">
          Get Users
        </button>
      </div>
      <div class="user-container">
        <UserItem v-for="(user, index) in usersList" :key="index"
                  :firstname="user.firstname"
                  :lastname="user.lastname"
                  :role="user.role"
                  :last-connection="user.lastConnection"
                  :profile-image="user.picture"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {User} from '../models/user.model';
import UserItem from '../components/user-item.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UserItem
  },
  computed: {
    currentUserIsAdmin(): boolean {
      return this.$store.state.user.role == 'ADMIN';
    },
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
.user-container {
  @apply flex flex-wrap justify-start;
}

</style>