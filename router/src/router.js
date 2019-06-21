/* This file is for the "Router" exercise. */
import Vue from 'vue';
import Router from 'vue-router';
import Fruit from './views/Fruit.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // doesn't use hash routing
  //base: process.env.BASE_URL, // defaults to /; usually not needed
  routes: [
    {path: '/fruit/:name', component: Fruit},
    {path: '*', component: Home}
  ]
});
