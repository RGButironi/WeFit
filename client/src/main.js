import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var app = new Vue({
  el: '#appworkout',
  data: {
    product: 'Your Personal Trainer'
  }
})
