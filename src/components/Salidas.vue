<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <p> cantidad: {{ cantidad }}</p>
  </div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Salidas',
    data() {
      return {
        visible: false,
        msg: 'Salidas',
      };
    },
    computed: mapState( [ 'user', 'cantidad' ] ),
  };

</script>
