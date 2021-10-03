import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const config = {
  tires: {
    filters: ['season', 'radius', 'width', 'height'],
    catalogUrl: 'http://demo-shina.od.ua/products/info/tires.json'
  },
  wheels: {
    filters: ['radius', 'width', 'bolt'],
    catalogUrl: 'http://demo-shina.od.ua/products/info/wheels.json'
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: '',
    catalog: [],
    filters: [],
    categories: {}
  },
  getters: {
    catalog: state => {
      let activeFilters = []
      state.filters.forEach(category => {
        activeFilters = [...activeFilters, ...category.filter(item => item.active)]
      })

      if (!activeFilters.length) return state.catalog

      return state.catalog.filter(item => {
        return activeFilters.every(filter => filter.name === item[filter.category])
      })
    },
    catalogItem: state => id => state.catalog.find(item => item.id === id),
    catalogFilters: state => state.filters,
    catalogType: state => state.type,
    filterCategories: state => state.categories
  },
  mutations: {
    setCatalogType: (state, type) => {
      state.type = type
    },
    setCatalog: (state, data) => {
      state.catalog = data
    },
    setCatalogFilters: (state, catalog) => {
      const _filters = []

      config[state.type].filters.forEach(category => {
        const options = [...new Set(catalog.map(item => item[category]))]
        const filterOptions = options
          .map(value => ({
            name: value,
            category: category,
            active: false
          }))
          .sort(function (a, b) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
          })
        _filters.push(filterOptions)
      })

      state.filters = _filters
    },
    updateCatalogFilter: (state, {
      category,
      name
    }) => {
      state.filters = state.filters.map(filterCategory => {
        return filterCategory.map(filter => {
          if (category === filter.category) {
            if (name === filter.name) {
              filter.active = !filter.active
            } else {
              filter.active = false
            }
          }
          return filter
        })
      })
    }
  },
  actions: {
    fetchCatalog ({
      state,
      commit
    }) {
      axios
        .get(config[state.type].catalogUrl)
        .then(response => {
          console.log('store response :>> ', response)
          commit('setCatalog', response.data)
          commit('setCatalogFilters', response.data)
        })
    },
    updateCatalogFilter ({
      commit
    }, data) {
      commit('updateCatalogFilter', data)
    }
  }
})
