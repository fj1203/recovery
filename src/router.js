import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home'
Vue.use(Router);
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },{
    path: '/order',
    name: 'Order',
    component: () => import('./views/order.vue'),
  },{
    path: '/map',
    name: 'Map',
    component: () => import('./views/map.vue'),
  },{
    path: '/recycler',
    name: 'Recycler',
    component: () => import('./views/recycler.vue'),
  },{
    path: '/my-order',
    name: 'MyOrder',
    component: () => import('./views/my-order.vue'),
  },{
    path: '/points',
    name: 'Points',
    component: () => import('./views/points.vue'),
  }
]
const router = new Router({
  mode:'history',
  routes
});
export default router;