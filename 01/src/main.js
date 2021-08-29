import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {baseUrl} from '@/config'
console.log(baseUrl);
import 'lib-flexible/flexible'
import '@/plugins/vant.js'
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
