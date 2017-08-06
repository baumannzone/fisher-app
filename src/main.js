// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
// import moment from 'moment';

// load element UI css
import 'element-ui/lib/theme-default/index.css';
// set element UI lang
import locale from 'element-ui/lib/locale/lang/es';

import App from './App';
import router from './router';

Vue.use( ElementUI, { locale } );
Vue.config.productionTip = false;

// Moment - this.$moment
// Object.defineProperty( Vue.prototype, '$moment', { value: moment } );

/* eslint-disable no-new */
new Vue( {
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
} );
