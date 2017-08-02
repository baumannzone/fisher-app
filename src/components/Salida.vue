<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'salida',
    data() {
      return {
        visible: false,
        msg: 'VISTA DE UNA SALIDA de pesca',
      };
    },
    computed: mapState( [ 'user', 'cantidad' ] ),
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
