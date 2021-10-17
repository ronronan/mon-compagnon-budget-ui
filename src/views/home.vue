<template>
  <div class="home">
    Bienvenue to MonBudget App
    <CategorieItem v-for="(category, index) in listCategory" :key="index" :name="category.name" :icon="category.icon" :color="category.color" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CategorieItem from '../components/categorie-item.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CategorieItem
  },
  data() {
    return {
      listCategory: [
        { name: 'Category 1', color: '#ff0000', icon: 'null' },
        { name: 'Category 2', color: '#ff5500', icon: 'null' },
        { name: 'Category 3', color: '#ffa000', icon: 'null' },
        { name: 'Category 4', color: '#00fff0', icon: 'null' },
        { name: 'Category 5', color: '#0000ff', icon: 'null' }
      ]
    }
  }
});
</script>

<style lang="scss" scoped>

</style>