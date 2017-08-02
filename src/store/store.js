import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use( Vuex );

const store = new Vuex.Store( {
  state: {
    users: [
      {
        name: 'Jorge Baumann',
        birthDate: '21/01/88',
        alias: 'Jorgito',
        active: true,
      },
      {
        name: 'Jorge F. Baumann',
        birthDate: '21/01/88',
        alias: 'Papá',
        active: true,
      },
      {
        name: 'Ángel Aguilar',
        birthDate: '21/01/88',
        alias: 'Tío Ángel',
        active: true,
      },
      {
        name: 'Jesús Aguilar',
        birthDate: '21/01/36',
        alias: 'Abuelo',
        active: false,
      },
    ],
    cantidad: 0,
  },
  getters: {
    // Devuelve los usuarios activos
    usuariosActivos: state => state.users.filter( user => user.active ).length,
  },
  actions: {
    obtenerSalidas: (context) => {

    },
  }
} );

export default store;
