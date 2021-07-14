<template>
  <div class="bank-account-card-main-container">
    <div class="bank-account-card-second-container">
      <div class="bank-account-card-third-container">
        <div class="bank-account-card-fourth-container">
          <h5 class="text-white">
            <strong>{{ name }}</strong> -
            <span>{{ bankName }}</span>
          </h5>
          <h3 class="text-white text-3xl">
            {{ amount }} &euro;
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BankAccountItem',
  props: {
    name: {
      type: String,
      default() {
        return 'Account 01';
      }
    },
    bankName: {
      type: String,
      default() {
        return 'Bank AAA';
      }
    },
    amount: {
      type: Number,
      default() {
        return 0;
      }
    },
  },
  computed: {
    displayLastConnection(): string {
      return '2 day ago';
    }
  }
});
</script>

<style lang="scss" scoped>
.bank-account-card-main-container {
  @apply w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2;
}
.bank-account-card-second-container {
  @apply bg-green-600 border rounded shadow p-2;
}
.bank-account-card-third-container {
  @apply flex flex-row items-center;
}
.bank-account-card-fourth-container {
  @apply flex-1 text-right;
}
</style>