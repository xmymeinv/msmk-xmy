import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    dotoken(state,data){
      state.token=data
    },
    tui(state){
      state.token=''
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
 
    storage:window.sessionStorage

})]

})
