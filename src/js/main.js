import Vue from 'vue'
import store from './store.js'
import router from './router.js'
import App from './components/App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
