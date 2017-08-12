<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>

    <pre> {{ salida }} </pre>
  </div>

</template>

<script>
  import { db } from '../config/index';

  export default {
    name: 'salida',
    mounted() {
      const salidaRef = db.ref( `salidas/${this.$route.params.id}` );
      salidaRef.on( 'value', ( snapshot ) => {
        this.salida = snapshot.val();
        console.debug( 'snapshot:' );
        console.debug( snapshot.val() );
      } );
    },
    data() {
      return {
        visible: false,
        msg: 'EDITAR SALIDA',
        salida: null,
      };
    },
  };

</script>
