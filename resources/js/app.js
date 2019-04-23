
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

import lodash from 'lodash';
window._ = lodash;

import App from './components/App'
Vue.component('app', App);

new Vue({
    el: '#app',
    methods: {
        isEmptyObject(obj) {
            return Object.entries(obj).length === 0 && obj.constructor === Object
        },
        removeEmptyValues(obj) {
            Object.keys(obj).forEach((key) => ([null, ""].includes(obj[key])) && delete obj[key]);
        },
        datesAreEqual(date1, date2) {
            date1 = new Date(date1);
            date2 = new Date(date2);

            return date1.getFullYear() === date2.getFullYear()
                && date1.getMonth() === date2.getMonth()
                && date1.getDate() === date2.getDate();
        }
    }
});
