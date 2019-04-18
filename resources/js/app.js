
import Vue from 'vue';
window.Vue = Vue;

import axios from 'axios';
window.axios = axios;

import App from './components/App'
Vue.component('app', App);

new Vue({
    el: '#app'
});
