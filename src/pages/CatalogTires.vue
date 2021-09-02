<template>
  <main class="new-wheels container" id="content">
        <Brands/>
        <h2 class="new-wheels__title title">Каталог Шин</h2>
        <div class="products-grid">
          <ProductCard v-for="tire in tires" :key="tire.id" :card="tire"/>
        </div>
         <router-link :to="{name:'CatalogTires'}"></router-link>
    </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import Brands from '../components/Brands.vue';

export default {
  name: 'CatalogTires',
  components: {
    Brands,
    ProductCard,
  },
  data: () => ({
    tires: [
      {
        id: 1,
        brand: 'Micheline',
        model: 'Energy Saver',
        condition: 9.7,
        radius: '16',
        season: 'Лето',
        width: 225,
        height: 55,
        amount: 4,
        price: 800,
      },
      {
        id: 2,
        brand: 'Micheline',
        model: 'Energy Saver',
        condition: 9.7,
        radius: '16',
        season: 'Лето',
        width: 225,
        height: 55,
        amount: 4,
        price: 800,
      },
      {
        id: 3,
        brand: 'Micheline',
        model: 'Energy Saver',
        condition: 9.7,
        radius: '16',
        season: 'Лето',
        width: 225,
        height: 55,
        amount: 4,
        price: 800,
      },
      {
        id: 4,
        brand: 'Micheline',
        model: 'Energy Saver',
        condition: 9.7,
        radius: '16',
        season: 'Лето',
        width: 225,
        height: 55,
        amount: 4,
        price: 800,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
