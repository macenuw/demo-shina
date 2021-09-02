import Vue from 'vue'
import Vuex from 'vuex'
import wheels from '../assets/js/wheels'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wheels: wheels,
    tires: []
  },
  getters: {
    getWheels: (state) => state.wheels,
    getWheelsByFilter: (state, filter) => state.wheels.filter(item => item),
    getWheelsById: (state) => (id) => state.wheels.find(item => item.id === id)
  },
  mutations: {
    setWheels: (state, data) => {
      state.wheels = data
    }
  },
  actions: {
    fetchWheels ({
      commit
    }) {
      commit('setWheels')
    }
  }
})
