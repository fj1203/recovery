import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './directives/index';
import router from './router'
import store from './store'
import components from './components';
Vue.use(MintUI)
Vue.use(components);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
