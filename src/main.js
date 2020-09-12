import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/css/iconfont.css'
import './assets/css/overwrite.css'
import VueLazyload from 'vue-lazyload'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload,{
  error: require('./assets/img/error/error.png'),
  loading: require('./assets/img/loading/loading.png'),
})
Vue.use(Mint);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
