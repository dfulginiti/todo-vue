
import Vue from 'vue';
window.Vue = Vue;

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy, {
    defaultIconPack: 'fas'
});

import axios from 'axios';
window.axios = axios;

import moment from 'moment';
window.moment = moment;

import App from './components/App'
Vue.component('app', App);

new Vue({
    el: '#app'
});
