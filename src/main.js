import store from './store'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import AsyncComputed from 'vue-async-computed'

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

