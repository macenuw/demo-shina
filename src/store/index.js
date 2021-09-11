import Vue from 'vue'
import Vuex from 'vuex'
import wheels from '../assets/js/wheels'
import tires from '../assets/js/tires'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wheels: wheels,
    tires: tires
  },
  getters: {
    getWheels: (state) => state.wheels,
    getWheelsByFilter: (state, filter) => state.wheels.filter(item => item),
    getWheel: (state) => (id) => state.wheels.find(item => item.id === id),
    getWheelsFilter: (state) => {
      return {
        radius: [...new Set(state.wheels.map(item => item.radius))],
        width: [...new Set(state.wheels.map(item => item.width))],
        bolt: [...new Set(state.wheels.map(item => item.bolt))]
      }
    },
    getTires: (state) => state.tires,
    getTiresByFilter: (state, filter) => state.tires.filter(item => item),
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
    setTires: (state, data) => {
      state.tires = data
    }
  },
  actions: {
    fetchWheels ({
      commit
    }) {
      commit('setWheels')
    },
    fetchTires ({
      commit
    }) {
      commit('setTires')
    }
  }
})
