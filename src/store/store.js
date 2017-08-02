import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [
      {
        name: 'Jorge Baumann',
        birthDate: '21/01/88',
        alias: 'Jorgito',
      },
      {
        name: 'Jorge F. Baumann',
        birthDate: '21/01/88',
        alias: 'Papá',
      },
      {
        name: 'Ángel Aguilar',
        birthDate: '21/01/88',
        alias: 'Tío Ángel',
      },
    ],
    cantidad: 0,
  },
});

export { store as default };
