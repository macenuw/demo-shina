<template>
  <main class="new-wheels" id="content">
    <Brands class="brands--bg" />
    <div class="new-wheels__inner container">
      <h2 class="new-wheels__title title">{{ terms[`catalog_${catalogType}`]}}</h2>
      <Filters />
      <div class="products-grid">
        <ProductCard v-for="item in catalog" :key="item.id" :card="item" :type="catalogType" />
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Brands from '../components/Brands.vue'
import Filters from '../components/Filters.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import terms from '../assets/js/terms'

export default {
  name: 'Catalog',
  components: {
    Brands,
    Filters,
    ProductCard
  },
  created () {
    this.setCatalogType(this.$route.meta?.type || 'tires')
    this.fetchCatalog()
  },
  computed: {
    ...mapGetters(['catalog', 'catalogType', 'catalogFilters'])
  },
  data () {
    return {
      terms
    }
  },
  methods: {
    ...mapMutations(['setCatalogType']),
    ...mapActions(['fetchCatalog'])
  },
  watch: {
    $route (to) {
      const type = to.meta?.type
      if (type && this.catalogType !== type) {
        this.setCatalogType(type)
        this.fetchCatalog()
      }
    }
  }
}
</script>
