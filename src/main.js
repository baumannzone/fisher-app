// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-default/index.css';
import locale from 'element-ui/lib/locale/lang/es';

import App from './App';
import router from './router';
import store from './store/store';

Vue.use( VueFire );
Vue.use( ElementUI, { locale } );
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue( {
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
} );
