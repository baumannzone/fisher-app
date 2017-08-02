import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

const store = new Vuex.Store( {
  state: {
    users: [],
    cantidad: 0,
    salidas: [],
  },
  getters: {
    // Devuelve los usuarios activos
    usuariosActivos: state => state.users.filter( user => user.active ).length,
  },
  actions: {},
  mutations: {},
} );

export default store;
