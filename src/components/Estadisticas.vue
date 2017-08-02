<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'estadisticas',
    data() {
      return {
        msg: 'Estadisticas',
      };
    },
    computed: mapState( [ 'user', 'cantidad' ] ),
  };

</script>
