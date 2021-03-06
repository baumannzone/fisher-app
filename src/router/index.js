import Vue from 'vue';
import Router from 'vue-router';
import Salidas from '@/components/Salidas';
import Salida from '@/components/Salida';
import Editar from '@/components/Editar';
import Crear from '@/components/Crear';
import Estadisticas from '@/components/Estadisticas';

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'salidas',
      component: Salidas,
    },
    {
      path: '/salida/:id',
      name: 'salida',
      component: Salida,
    },
    {
      path: '/salida/:id/editar',
      name: 'editar',
      component: Editar,
    },
    {
      path: '/crear',
      name: 'crear',
      component: Crear,
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: Estadisticas,
    },
  ],
} );
