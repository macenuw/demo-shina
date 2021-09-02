<template>
  <main>
    <TopSection/>
    <PromoTires/>
    <Brands/>
    <PromoWheels/>
    <Info/>
    <Contacts/>
    <Question/>
  </main>
</template>

<script>
import TopSection from '../components/TopSection.vue';
import PromoTires from '../components/PromoTires.vue';
import Brands from '../components/Brands.vue';
import PromoWheels from '../components/PromoWheels.vue';
import Info from '../components/Info.vue';
import Contacts from '../components/Contacts.vue';
import Question from '../components/Question.vue';

export default {
  name: 'MainPage',
  components: {
    TopSection,
    PromoTires,
    Brands,
    PromoWheels,
    Info,
    Contacts,
    Question,
  },
};
</script>

<style lang="scss">
 @import '/src/assets/css/reset.scss';
 @import '/src/assets/css/fonts.scss';
 @import '/src/assets/css/global.scss';
</style>
