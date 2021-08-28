import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {baseUrl} from '@/config'
console.log(baseUrl);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
