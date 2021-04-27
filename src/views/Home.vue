<template>
  <div class="home">
    <div class="buttons btn-demo">
      <a class="button is-primary is-rounded" @click="loadPublic">Get Public content</a>
      <a class="button is-link is-rounded" @click="loadPrivate">Get Private content</a>
    </div>

  </div>
</template>

<script>
import TestApiService from '@/services/TestApiService';

export default {
  name: 'Home',
  data() {
    return {
      testApiService: new TestApiService()
    }
  },
  methods: {
    loadPrivate() {
      console.log("load private")
      this.testApiService.private()
          .then((res) => console.log(res))
          .catch((err) => console.error(err))
    },
    loadPublic() {
      console.log("load public")
      this.testApiService.public()
          .then((res) => console.log(res))
          .catch((err) => console.error(err))
    },
  }
}
</script>

<style lang="scss" scoped>

.btn-demo{
  padding:36px;
  justify-content: center;
}

</style>