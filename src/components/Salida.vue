<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
  export default {
    name: 'salida',
    data() {
      return {
        visible: false,
        msg: 'VISTA DE UNA SALIDA de pesca',
      };
    },
  };

</script>
