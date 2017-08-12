<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <h3> {{ this.$route.name }}</h3>
  </div>

</template>

<script>

  export default {
    name: 'estadisticas',
    data() {
      return {
        msg: 'Estadisticas',
      };
    },
  };

</script>
