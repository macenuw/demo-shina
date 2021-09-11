<template>
    <main class="filters">
      <h2 class="filters__title">Фильтр</h2>
      <div class="filters__content">
        <div class="filter" v-for="(filter, key) in filters" :key="key">
          <h3 class="filter__title">{{$terms[key]}}</h3>
          <ul class="filter__items">
            <li class="filter__item" v-for="item in filter" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Filters',
  computed: {
    ...mapGetters({ filters: 'getWheelsFilter' })
  }
}
</script>

<style lang="scss" scoped>
.filters{
  border: 2px solid gray;
  margin-bottom: 30px;
  padding: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 20px 15px 100px rgba(0, 0, 0, 0.25);
  &__title{
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }
}
.filter{
  margin-bottom: 24px;
  padding: 0 5%;
  &__title{
    font-weight: bold;
    font-size: 36px;
  }
  &__items{
    display: flex;
    padding-top: 16px;
  }
  &__item{
    padding: 8px 24px;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: .3s;
    &:not(:last-child){
      margin-right: 14px;
    }
    &:hover{
      background-color: red;
      color: white;
      border-color: white;
    }
    &--active{
      background-color: red;
      color: white;
      border-color: white;
    }
  }
}
</style>
