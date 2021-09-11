<template>
  <main class="new-wheels" id="content">
        <Brands class="brands--bg"/>
        <div class="new-wheels__inner container">
        <h2 class="new-wheels__title title">Каталог Шин</h2>
        <Filters/>
        <div class="products-grid">
           <ProductCardTires v-for="tire in tires" :key="tire.id" :card="tire"
            @click="$router.push({name: 'ProductPage', params: { id: tire.id }})"/>
        </div>
         </div>
    </main>
</template>

<script>
import ProductCardTires from '../components/ProductCardTire.vue'
import Brands from '../components/Brands.vue'
import Filters from '../components/Filters.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CatalogTires',
  components: {
    Brands,
    Filters,
    ProductCardTires
  },
  computed: {
    ...mapGetters({ tires: 'getTires' })
  }
}
</script>

<style lang="scss" scoped>

</style>
