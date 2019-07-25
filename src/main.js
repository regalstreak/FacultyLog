import store from './store'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import AsyncComputed from 'vue-async-computed'

import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

