<template>
  <div class="bank-account-list-container">
    <BankAccountItem v-for="(account, index) in bankAccountList"
                     :key="index"
                     :name="account.name"
                     :bank-name="account.bankName"
                     :amount="account.amount"
    />
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