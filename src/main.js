import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/usage/core/reset.scss'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
