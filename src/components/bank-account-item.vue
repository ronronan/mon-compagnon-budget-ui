<template>
  <div class="bank-account-card-main-container">
    <div class="bank-account-card-second-container">
      <div class="bank-account-card-third-container">
        <div class="bank-account-card-fourth-container">
          <router-link class="bank-account-edit-link" :to="{name: 'AccountEdit', params: { id: accountId }}">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z" />
            </svg>
          </router-link>
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
    accountId: {
      type: Number,
      default() {
        return 0;
      }
    },
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
      type: String,
      default() {
        return "0.00";
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
.bank-account-edit-link {
  @apply float-right px-2;
}
</style>