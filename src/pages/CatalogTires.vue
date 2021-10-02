<template>
  <main class="new-wheels" id="content">
        <Brands class="brands--bg"/>
        <div class="new-wheels__inner container">
        <h2 class="new-wheels__title title">Каталог Шин</h2>
        <Filters/>
        <div class="products-grid">
           <ProductCardTires v-for="tire in tires" :key="tire.id" :card="tire"
           />
        </div>
         </div>
    </main>
</template>

<script>
import ProductCardTires from '../components/ProductCardTire.vue'
import Brands from '../components/Brands.vue'
import Filters from '../components/FiltersTires.vue'
import tires from '../../public/tires'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'CatalogTires',
  components: {
    Brands,
    Filters,
    ProductCardTires
  },
  data () {
    return {
      tires: null
    }
  },
  mounted () {
    axios
      .get('https://drive.google.com/file/d/13IZi1qYKhsVoq4AxNwyY3bknPi5SpXPI/view?usp=sharing')
      .then(response => (this.tires = response.tires))
  },
  created () {
    this.fetchTires(tires)
  },
  computed: {
    ...mapGetters({ tires: 'getTires' })
  },
  methods: {
    ...mapActions(['fetchTires'])
  }
}
</script>

<style lang="scss" scoped>

</style>
