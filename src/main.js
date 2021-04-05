import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import VueResource from 'vue-resource'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faArrowRight,faStar} from '@fortawesome/free-solid-svg-icons'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

library.add(faArrowRight,faStar)

Vue.component('fa-icon',FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Buefy)



const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')