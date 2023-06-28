import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: null
  },
  mutations: {
    addition(state) {
      state.counter++
    },
    subtraction(state) {
      state.counter--
    }
  },
  actions: {
    increment(context) {
      context.commit('addition')
    },
    decrement(context) {
      context.commit('subtraction')
    }
  },
  modules: {
  }
})
