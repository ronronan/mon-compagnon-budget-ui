<template>
  <div class="home">
    <div class="m-4">
      <button class="btn btn-blue" @click="loadPublic">Get Public content</button>
      <button class="btn btn-yellow" @click="loadPrivate">Get Private content</button>
    </div>

    <p>{{resultCallApi}}</p>

  </div>
</template>

<script>
import TestApiService from '@/services/test-api.service';

export default {
  name: 'Home',
  data() {
    return {
      testApiService: new TestApiService(),
      resultCallApi: ''
    }
  },
  methods: {
    loadPrivate() {
      this.resultCallApi = '';
      this.testApiService.private()
          .then((res) => this.resultCallApi = res)
          .catch((err) => console.error(err))
    },
    loadPublic() {
      this.resultCallApi = '';
      this.testApiService.public()
          .then((res) => this.resultCallApi = res)
          .catch((err) => console.error(err))
    },
  }
}
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