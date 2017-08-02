import Vue from 'vue';
import Router from 'vue-router';
import Salidas from '@/components/Salidas';
import Crear from '@/components/Crear';

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Salidas',
      component: Salidas,
    },
    {
      path: '/crear',
      name: 'Crear',
      component: Crear,
    },
  ],
} );
