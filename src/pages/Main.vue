<template>
  <main>
    <TopSection />
    <Promo v-if="tires.length" :catalog="tires" type="tires" id="content" />
    <Brands />
    <Promo v-if="wheels.length" :catalog="wheels" type="wheels" />
    <Info />
    <Contacts />
    <Question />
  </main>
</template>

<script>
import TopSection from '../components/TopSection.vue'
import Promo from '../components/Promo.vue'
import Brands from '../components/Brands.vue'
import Info from '../components/Info.vue'
import Contacts from '../components/Contacts.vue'
import Question from '../components/Question.vue'
import axios from 'axios'

export default {
  name: 'MainPage',
  components: {
    TopSection,
    Promo,
    Brands,
    Info,
    Contacts,
    Question
  },
  created () {
    axios
      .get('/products/info/promo.json')
      .then((response) => {
        console.log('response :>> ', response)
        this.tires = response.tires
        this.wheels = response.wheels
      })
    this.tires = []
    this.wheels = []
  },
  data () {
    return {
      tires: [],
      wheels: []
    }
  }
}
</script>

<style lang="scss">
@import "/src/assets/css/reset.scss";
@import "/src/assets/css/fonts.scss";
@import "/src/assets/css/global.scss";
</style>
