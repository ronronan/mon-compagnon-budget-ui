<template>
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

<script lang="ts">
import { defineComponent } from 'vue';
import UserItem from "../../components/user-item.vue";
import {User} from "../../models/user.model";

export default defineComponent({
  name: 'UserList',
  components: {
    UserItem
  },
  computed: {
    usersList(): User[] {
      return this.$store.state.usersList;
    }
  },
  mounted() {
    this.$store.dispatch('loadUser');
  }
});
</script>

<style lang="scss" scoped>
.user-container {
  @apply flex flex-wrap justify-start;
}
</style>