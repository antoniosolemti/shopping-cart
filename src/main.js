import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.filter('currency', function (param) {
  return '$' + parseFloat(param).toFixed(2);
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
