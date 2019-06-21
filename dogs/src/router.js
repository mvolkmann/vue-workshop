import Vue from 'vue';
import Router from 'vue-router';
import About from './components/About.vue';
import Dogs from './components/Dogs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // doesn't use hash routing
  routes: [
    {path: '/about', component: About},
    {path: '/dogs', component: Dogs},
    {path: '*', redirect: '/about'}
  ]
});
