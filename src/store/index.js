import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: false,
    zIndex: -1
  },
  mutations: {
    search(state) {
      state.show = true
      state.zIndex = 9
    },
    cancel(state) {
      state.show = false
      state.zIndex = -1
    },
  },
  actions: {

  },
  modules: {
  }
})
