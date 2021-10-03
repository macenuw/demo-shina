<template>
  <main class="new-wheels container">
        <h2 class="title">Последние поступления {{terms[type]}}</h2>
        <div class="products-grid">
          <ProductCard v-for="product in catalog" :key="product.id" :card="product" :type="type"/>
        </div>
        <router-link class="show-more" :to="{name: pathName}">Показать еще</router-link>
    </main>
</template>

<script>
import ProductCard from './ProductCard.vue'
import terms from '../assets/js/terms'
export default {
  name: 'Promo',
  props: {
    catalog: {
      type: Array,
      require: true
    },
    type: {
      type: String,
      require: true
    }
  },
  components: {
    ProductCard
  },
  computed: {
    pathName () {
      return `Catalog${this.type[0].toUpperCase() + this.type.slice(1)}`
    }
  },
  data () {
    return {
      terms
    }
  }
}
</script>
