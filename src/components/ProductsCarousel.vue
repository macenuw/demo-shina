<template>
   <div class="slider">
      <VueSlickCarousel v-bind="settings" ref="slick" v-if="images.length>0">
      <div class="slider-item" v-for="image in images" :key="image">
         <img :src="image" alt="" class="slider__img">
      </div>
      </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'ProductCarousel',
  props: { images: { type: Array, require: true } },
  components: {
    VueSlickCarousel
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
  .slider{
    max-width: 500px;
    margin-right: 50px;
    @media(max-width: 850px) {
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 50px;
        }
  &-item{
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
}
</style>
