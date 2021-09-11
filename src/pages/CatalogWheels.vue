<template>
  <main class="new-wheels" id="content">
    <Brands class="brands--bg"/>
    <div class="new-wheels__inner container">
        <h2 class="new-wheels__title title">Каталог Дисков</h2>
        <Filters/>
        <div class="products-grid">
          <ProductCardWheel v-for="wheel in wheels" :key="wheel.id" :card="wheel"
           />
        </div>
        </div>
    </main>
</template>

<script>
import ProductCardWheel from '../components/ProductCardWheel.vue'
import Brands from '../components/Brands.vue'
import Filters from '../components/Filters.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CatalogWheels',
  components: {
    Brands,
    Filters,
    ProductCardWheel
  },
  computed: {
    ...mapGetters({ wheels: 'getWheels' })
  }
}
</script>

<style lang="scss" scoped>

</style>
