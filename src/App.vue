<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
 @import '/src/assets/css/reset.scss';
 @import '/src/assets/css/fonts.scss';
 @import '/src/assets/css/global.scss';
</style>
