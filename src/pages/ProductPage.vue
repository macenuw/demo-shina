<template>
    <main class="product">
      <Brands class="brands--bg"/>
      <div class="product__inner container" v-if="product">
        <h2 class="title" v-if="product.brand">{{product.brand}} {{product.model}}</h2>
        <div class="product__items">
            <ProductsCarousel :images="product.images" v-if="product.images.length"/>
            <div class="product__info">
              <span class="product__number">Код Товара: {{product.id}}</span>
              <ul class="product__list">
                <li class="product__item" v-if="product.radius">
                  <span class="product__category">Радиус:</span>
                  <span class="product__category-info">R{{product.radius}}</span>
                </li>
                <li class="product__item" v-if="product.season">
                  <span class="product__category">Сезон:</span>
                  <span class="product__category-info">{{product.season}}</span>
                </li>
                <li class="product__item" v-if="product.condition">
                  <span class="product__category">Состояние:</span>
                  <span class="product__category-info">{{product.condition}}</span>
                </li>
                <li class="product__item" v-if="product.width">
                  <span class="product__category">Ширина:</span>
                  <span class="product__category-info">{{product.width}}</span>
                </li>
                <li class="product__item" v-if="product.height">
                  <span class="product__category">Высота:</span>
                  <span class="product__category-info">{{product.height}}</span>
                </li>
                <li class="product__item" v-if="product.year">
                  <span class="product__category">Год Изготовления:</span>
                  <span class="product__category-info">{{product.year}}</span>
                </li>
                <li class="product__item" v-if="product.country">
                  <span class="product__category">Страна Производитель:</span>
                  <span class="product__category-info">{{product.country}}</span>
                </li>
                <li class="product__item" v-if="product.amount">
                  <span class="product__category">Колличество</span>
                  <span class="product__category-info">{{product.amount}}шт.</span>
                </li>
              </ul>
              <div class="product__price-info" v-if="product.price">
                <span class="product__cost">Цена за шт.</span>
                <span class="product__price">{{product.price}}грн</span>
              </div>
            </div>
        </div>
        <Contacts/>
        </div>
    </main>
</template>

<script>

import Contacts from '../components/Contacts.vue'
import Brands from '../components/Brands.vue'
import ProductsCarousel from '../components/ProductsCarousel.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    Contacts,
    Brands,
    ProductsCarousel
  },
  async created () {
    if (this.$route.params.type) {
      await this.setCatalogType(this.$route.params.type)
      await this.fetchCatalog()
    }
  },
  computed: {
    ...mapGetters(['catalogItem']),
    product () {
      return this.catalogItem(Number(this.$route.params.id))
    }
  },
  methods: {
    ...mapMutations(['setCatalogType']),
    ...mapActions(['fetchCatalog'])
  }
}
</script>

<style lang="scss" scoped>
.product{
  .title{
    text-align: center;
    margin-bottom: 20px;
  }
  &__items{
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 850px) {
            flex-direction: column;
        }
  }
  &__info{
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;
    padding-bottom: 20px;
  }
  &__number{
    font-weight: bold;
  }
  &__list{
    width: 100%;
  }
  &__item{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed;
    padding: 6px 0;
    margin-bottom: 6px;
  }
  &__category-info{
    font-weight: bold;
  }
  &__price-info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  &__cost{
    font-weight: bold;
  }
  &__price{
    background-color: red;
    padding: 8px 16px;
    color: white;
    border-radius: 8px;
    font-size: 32px;
  }
}
</style>
