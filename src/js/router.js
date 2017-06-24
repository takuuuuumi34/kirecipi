import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import Hoge from './components/Hoge.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/hoge', name: 'Hoge', component: Hoge }
  ]
})

export default router