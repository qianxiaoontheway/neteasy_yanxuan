import Vue from 'vue'
import MintUI from 'mint-ui'
import iView from 'iview'
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(iView)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
