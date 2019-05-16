import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'
import store from './store'

Vue.use(VeeValidate);

Vue.filter('currency', function (param) {
  return '$' + parseFloat(param).toFixed(2);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
