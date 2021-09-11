import Vue from 'vue'
import Vuex from 'vuex'
import tires from '../assets/js/tires'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wheels: [],
    wheelsFilters: [],
    tires: tires
  },
  getters: {
    getWheels: (state) => {
      const activeFilters = state.wheelsFilters.filter(item => item.active)

      if (!activeFilters.length) return state.wheels

      const expectedResult = activeFilters.length
      return state.wheels.filter(wheel => {
        let actualResult = 0
        activeFilters.map(filter => {
          if (filter.name === wheel[filter.category]) actualResult++
        })
        return actualResult === expectedResult
      })
    },
    getWheel: (state) => (id) => state.wheels.find(item => item.id === id),
    getWheelsFilter: (state) => state.wheelsFilters,
    getTires: (state) => state.tires,
    getTiresById: (state) => (id) => state.tires.find(item => item.id === id),
    getTiresFilter: (state) => {
      return {
        radius: [...new Set(state.tires.map(item => item.radius))],
        width: [...new Set(state.tires.map(item => item.width))],
        height: [...new Set(state.tires.map(item => item.height))]
      }
    }
  },
  mutations: {
    setWheels: (state, data) => {
      state.wheels = data
    },
    setWheelsFilter: (state, data) => {
      state.wheelsFilters = [
        ...[...new Set(data.map(item => item.radius))].map(item => ({ name: item, category: 'radius', active: false })),
        ...[...new Set(data.map(item => item.width))].map(item => ({ name: item, category: 'width', active: false })),
        ...[...new Set(data.map(item => item.bolt))].map(item => ({ name: item, category: 'bolt', active: false }))
      ]
    },
    updateWheelsFilter: (state, filterItem) => {
      state.wheelsFilters
        .filter(item => filterItem.category === item.category)
        .map(item => {
          if (filterItem.name === item.name) {
            item.active = !item.active
          } else {
            if (item.active) item.active = false
          }
          return item
        })
    },
    setTires: (state, data) => {
      state.tires = data
    }
  },
  actions: {
    fetchWheels ({ commit }, data) {
      commit('setWheels', data)
      commit('setWheelsFilter', data)
    },
    updateWheelsFilter ({ commit }, data) { commit('updateWheelsFilter', data) },
    fetchTires ({ commit }) {
      commit('setTires')
    }
  }
})
