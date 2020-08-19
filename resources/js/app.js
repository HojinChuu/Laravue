require('./bootstrap');

import Vue from 'vue';
import router from './router';

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    router
});
