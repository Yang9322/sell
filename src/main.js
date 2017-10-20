import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from '../src/components/goods/goods';
import ratings from '../src/components/ratings/ratings';
import seller from '../src/components/seller/seller';
import custom from  '../src/components/CustomView/custom.vue'
import '../src/common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: goods
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}, {
  path:'/custom',
  component: custom
}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
