import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    name:''
  },
  mutations: {
    dotoken(state,data){
      state.token=data
    },
    tui(state){
      state.token=''
    },
    sub(state,data){
      state.name=data
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
