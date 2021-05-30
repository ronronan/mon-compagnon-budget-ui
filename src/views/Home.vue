<template>
  <div class="home">
    <div class="m-4">
      <button class="btn btn-blue" @click="loadPublic">
        Get Public content
      </button>
      <button class="btn btn-yellow" @click="loadPrivate">
        Get Private content
      </button>
    </div>
    <p>{{ resultCallApi }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TestService } from '../services/test-api.service';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      resultCallApi: '',
      testService: new TestService(this.axios)
    }
  },
  methods: {
    loadPublic() {
      this.resultCallApi = '';
      this.testService.public()
        .then((res) => this.resultCallApi = res.toString())
        .catch((err) => console.error(err))
    },
    loadPrivate() {
      this.resultCallApi = '';
      this.testService.private()
        .then((res) => this.resultCallApi = res.toString())
        .catch((err) => console.error(err))
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