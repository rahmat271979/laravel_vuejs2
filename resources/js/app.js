


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes =[
    { path: '/data-user', component:require('./components/Pengguna/Data-pengguna.vue').default },
    { path: '/data-level', component:require('./components/Pengguna/Data-level.vue').default }
]


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('blank-component', require('./components/BlankComponent.vue').default);

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

const app = new Vue({
    el: '#app',
    router
});

