<template>
    <main class="product">
      {{product}}
      <Brands/>
      <div class="product__inner container">
        <h2 class="title">Michelin Energy Saver</h2>
        <div class="product__items">
            <div class="product__slider">
               <VueSlickCarousel v-bind="settings">
              <div class="product__slider-item">
                <img src="../assets/images/header-bg.jpg" alt="" class="product__img">
              </div>
              <div class="product__slider-item">
                <img src="../assets/images/header-bg.jpg" alt="" class="product__img">
              </div>
              <div class="product__slider-item">
                <img src="../assets/images/header-bg.jpg" alt="" class="product__img">
              </div>
               </VueSlickCarousel>
            </div>
            <div class="product__info">
              <span class="product__number">Код Товара: 1</span>
              <ul class="product__list">
                <li class="product__item">
                  <span class="product__category">Радиус:</span>
                  <span class="product__category-info">R</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Сезон:</span>
                  <span class="product__category-info">лето</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Состояние:</span>
                  <span class="product__category-info">9,7</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Ширина:</span>
                  <span class="product__category-info">225</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Высота:</span>
                  <span class="product__category-info">55</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Год Изготовления:</span>
                  <span class="product__category-info">2021</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Страна Производитель:</span>
                  <span class="product__category-info">фвфывф</span>
                </li>
                <li class="product__item">
                  <span class="product__category">Колличество</span>
                  <span class="product__category-info">12шт.</span>
                </li>
              </ul>
              <div class="product__price-info">
                <span class="product__cost">Цена за шт.</span>
                <span class="product__price">800грн</span>
              </div>
            </div>
        </div>
        <Contacts/>
        </div>
    </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Contacts from '../components/Contacts.vue'
import Brands from '../components/Brands.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    Contacts,
    Brands,
    VueSlickCarousel
  },
  computed: {
    ...mapGetters(['getWheelsById']),
    product () {
      return this.getWheelsById(this.$route.params?.id)
    }
  },
  data () {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
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
  &__slider{
    max-width: 500px;
    margin-right: 50px;
    @media(max-width: 850px) {
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 50px;
        }
  }
  &__slider-item{
    max-width: 500px;
    min-width: 400px;
    width: 100%;
    height: 600px;
    @media(max-width: 850px) {
            min-width: 290px;
            max-width: 100%;
            width: 100%;
            height: 400px;
            margin-bottom: 20px;
        }
  }
  &__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
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
.slick-prev{
    left: 0 !important;
    background-color: red;
  }
</style>
