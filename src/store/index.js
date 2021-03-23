import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: [],
    showOnboard: true
  },
  mutations: {
    addExpense(state, expense) {
      state.expenses.push(Object.assign({}, expense))
    },
    changeOnboard(state) {
      state.showOnboard = false
    }
  },
  actions: {},
  modules: {},
  plugins: [new VuexPersistence().plugin]
})
