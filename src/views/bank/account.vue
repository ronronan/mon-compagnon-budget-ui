<template>
  <div>
    <div class="bank-account-list-container">
      <BankAccountItem v-for="(account, index) in bankAccountList"
                       :key="index"
                       :account-id="account.id"
                       :name="account.name"
                       :bank-name="account.bankName"
                       :amount="account.amount"
      />
    </div>
    <router-link
      class="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-4 right-4"
      to="/account/add"
    >
      <svg viewBox="0 0 20 20" class="w-6 h-6 mx-auto my-3">
        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BankAccountItem from "../../components/bank-account-item.vue";
import { BankAccount } from "../../models/bank-account.model";

export default defineComponent({
  name: 'Account',
  components: {
    BankAccountItem
  },
  computed: {
    bankAccountList(): BankAccount[] {
      return this.$store.state.bankAccountList;
    }
  },
  mounted() {
    this.$store.dispatch('loadBankAccountByUser');
  }
});
</script>

<style lang="scss" scoped>
.bank-account-list-container {
  @apply flex flex-wrap mb-2;
}
</style>