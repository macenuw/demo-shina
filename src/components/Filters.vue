<template>
  <section class="filters">
    <h2 class="filters__title">Фильтры</h2>
    <div class="filters__content">
      <div
        class="filter"
        v-for="(filter, index) in catalogFilters"
        :key="index"
      >
        <h3 class="filter__title">{{ $terms[catalogFilters[index][0].category] }}</h3>
        <ul class="filter__items">
          <li
            class="filter__item"
            :class="{ 'filter__item--active': item.active }"
            v-for="item in filter"
            :key="item.name"
            @click="updateCatalogFilter(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Filters',
  computed: {
    ...mapGetters(['filterCategories', 'catalogFilters']),
    categories () {
      const _categories = {}
      console.log('catalogFilters :>> ', ...new Set(this.catalogFilters))
      return [
        ...new Set(
          this.catalogFilters.map((filter) => {
            if (filter?.length) return _categories[filter[0]]
          })
        )
      ]
    }
  },
  methods: {
    ...mapActions(['updateCatalogFilter'])
  }
}
</script>

<style lang="scss" scoped>
.filters {
  border: 2px solid gray;
  margin-bottom: 30px;
  padding: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 20px 15px 100px rgba(0, 0, 0, 0.25);
  &__title {
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }
}
.filter {
  margin-bottom: 24px;
  padding: 0 5%;
  &__title {
    font-weight: bold;
    font-size: 24px;
  }
  &__items {
    display: flex;
    padding-top: 16px;
  }
  &__item {
    padding: 4px 16px;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    transition: 0.3s;
    &:not(:last-child) {
      margin-right: 14px;
    }
    &:hover {
      background-color: white;;
      color: red;
      border-color: red;
    }
    &--active {
      background-color: red;
      color: white;
      border-color: red;
    }
  }
}
</style>
