<template>
  <section class="custom-sidebar">
    <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :fullwidth="fullwidth"
        :overlay="overlay"
        :right="right"
        v-model="open"
    >
      <div class="p-1">
        <div class="media-content">
          <p class="title is-4">{{ displayName }}</p>
          <p class="subtitle is-6 tag">{{ email }}</p>
          <p v-if="role === 'ADMIN'" class="tag is-danger">{{ role }}</p>
          <p v-else class="tag is-info">{{ role }}</p>
        </div>
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Info"></b-menu-item>

            <b-menu-item icon="account" label="My Account">
              <b-menu-item label="Account data"></b-menu-item>
              <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item label="Home" icon="link" tag="router-link" to="/"></b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item label="About" icon="link" tag="router-link" to="/about"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>

</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  },
  props: {
    displayName: {
      type: String,
      default: "Unknow name"
    },
    email: {
      type: String,
      default: "Unknow email"
    },
    role: {
      type: String,
      default: "Unknow role"
    }
  }
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
</style>