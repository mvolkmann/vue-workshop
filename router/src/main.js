import Vue from 'vue';
import App from './App.vue';
import router from './router';

//Vue.config.productionTip = false;

new Vue({
  router,
  // "h" is short for "hyperscript",
  // but it is really the createElement function.
  render: h => h(App)
}).$mount('#app');
