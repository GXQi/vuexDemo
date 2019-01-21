// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/header.styl'
import '@/assets/styles/iconfont.css'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
