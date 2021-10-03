import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import tires from '../assets/js/tires' // TODO: DELETE
import wheels from '../assets/js/wheels' // TODO: DELETE

const config = {
  tires: {
    filters: ['season', 'radius', 'width', 'height'],
    catalogUrl: 'https://drive.google.com/file/d/13IZi1qYKhsVoq4AxNwyY3bknPi5SpXPI/view?usp=sharing',
    mocks: tires // TODO: DELETE
  },
  wheels: {
    filters: ['radius', 'width', 'bolt'],
    catalogUrl: 'https://drive.google.com/file/d/1aNf1U0huu_8rf78qAXBIc5WD5pzlTJQN/view?usp=sharing',
    mocks: wheels // TODO: DELETE
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
        return activeFilters.some(filter => filter.name === item[filter.category])
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
          if (category === filter.category && name === filter.name) {
            filter.active = !filter.active
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
        .get(config[state.type].catalogUrl, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          commit('setCatalog', response.data)
          commit('setCatalogFilters', response.data)
        })
        // TODO: delete this after place project on domain (FTP)
        .finally(_ => {
          commit('setCatalog', config[state.type].mocks)
          commit('setCatalogFilters', config[state.type].mocks)
        })
    },
    updateCatalogFilter ({
      commit
    }, data) {
      commit('updateCatalogFilter', data)
    }
  }
})
