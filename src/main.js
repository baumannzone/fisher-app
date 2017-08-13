// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import ElementUI from 'element-ui';
import moment from 'moment';
import _ from 'lodash';

// load element UI css
import 'element-ui/lib/theme-default/index.css';
// set element UI lang
import locale from 'element-ui/lib/locale/lang/es';

import App from './App';
import router from './router';

Vue.use( VueFire );
Vue.use( ElementUI, { locale } );
Vue.config.productionTip = false;

// this.$moment (moment)
Object.defineProperty( Vue.prototype, '$moment', { value: moment } );
// this.$_ (lodash)
Object.defineProperty( Vue.prototype, '$_', { value: _ } );

/* eslint-disable no-new */
new Vue( {
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
} );
