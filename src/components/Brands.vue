<template>
    <section class="brands">
      <div class="brands__inner"></div>
        <div class="slider container">
            <VueSlickCarousel v-bind="settings">
                <div class="slider__item">
                    <img src="../assets/images/continental.png" alt="">
                </div>
                <div class="slider__item">
                    <img src="../assets/images/michelin.png" alt="">
                </div>
                <div class="slider__item">
                    <img src="../assets/images/dunlop.png" alt="">
                </div>
                <div class="slider__item">
                    <img src="../assets/images/goodyear.png" alt="">
                </div>
                <div class="slider__item">
                    <img src="../assets/images/bridgestone.png" alt="">
                </div>
                <div class="slider__item">
                    <img src="../assets/images/pirelli.png" alt="">
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Brands',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
          breakpoint: 1160,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.brands {
    position: relative;
    padding: 30px 0;
    &--bg{
      .brands__inner{
       display: block;
      }
    }
    &__inner{
      display: none;
      position: absolute;
      background-color: black;
      height: 50%;
      top: 0;
      left: 0;
      right: 0;
    }
    .slider {
        padding: 30px 0;
    }
    .slider__item {
        background-color: #FFFFFF;
        border-radius: 8px;
        width: 280px !important;
        height: 100px;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        box-shadow: inset 20px 15px 30px rgba(0, 0, 0, 0.25),
        inset -20px -15px 30px rgba(0, 0, 0, 0.25);
        @media(max-width: 600px) {
            width: 100% !important;
        }
    }
}
</style>
