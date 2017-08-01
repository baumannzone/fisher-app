// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

const fBconfig = {
  apiKey: 'AIzaSyAFIXqGSv2sqhKDJDAm-h4ZWUIUfijWSVs',
  authDomain: 'fisher-app-db138.firebaseapp.com',
  databaseURL: 'https://fisher-app-db138.firebaseio.com',
  projectId: 'fisher-app-db138',
  storageBucket: 'fisher-app-db138.appspot.com',
  messagingSenderId: '869956372168',
};
firebase.initializeApp(fBconfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
