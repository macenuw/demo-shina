<template>
  <main class="new-wheels container" id="content">
    <Brands/>
        <h2 class="new-wheels__title title">Каталог Дисков</h2>
        <div class="products-grid">
          <ProductCard v-for="wheel in wheels" :key="wheel.id" :card="wheel"
            @click="$router.push({name: 'ProductPage', params: { id: wheel.id }})"/>
        </div>
    </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Brands from '../components/Brands.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CatalogWheels',
  components: {
    Brands,
    ProductCard
  },
  computed: {
    ...mapGetters({ wheels: 'getWheels' })
  }
}
</script>

<style lang="scss" scoped>

</style>
