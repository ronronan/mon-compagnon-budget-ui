<template>
  <div>
    <form class="w-full max-w-lg bg-white p-6" method="post" @submit="checkForm">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="account-name">
            Nom du compte
          </label>
          <input
            id="account-name"
            v-model="name"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="account-name"
            type="text"
            placeholder="Compte"
            disabled
            required
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="back-name">
            Nom de la banque
          </label>
          <input
            id="back-name"
            v-model="bankName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="back-name"
            type="text"
            placeholder="Banque"
            disabled
            required
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="amount">
            Montant
          </label>
          <input
            id="amount"
            v-model="amount"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="amount"
            type="number"
            step="0.01"
            placeholder="0.00"
            required
          >
        </div>
      </div>
      <input
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountEdit',
  data() {
    return {
      name: '',
      bankName: '',
      amount: 0.0
    }
  },
  mounted() {
    const idAccount = Number(this.$route.params.id as string);
    const listFiltered = this.$store.state.bankAccountList.filter(it => it.id === idAccount);
    if(listFiltered.length > 0) {
      const account = listFiltered[0];
      this.name = account.name;
      this.bankName = account.bankName;
      this.amount = account.amount;
    }
  },
  methods: {
    checkForm(e: Event) {
      const router = this.$router;
      this.$store.dispatch('updateAmountBankAccount', {
        id: this.$route.params.id,
        name: this.name,
        bankName: this.bankName,
        amount: this.amount
      }).then(() => {
        router.push("/account");
      });
      e.preventDefault();
    }
  }
});
</script>

<style lang="scss" scoped>

</style>