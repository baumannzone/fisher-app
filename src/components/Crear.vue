<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <p>
      Usuarios Activos: {{ usuariosActivos }}
    </p>
  </div>

</template>

<script>

  export default {
    name: 'crear',
    data() {
      return {
        visible: false,
        msg: 'Crear',
      };
    },
    methods: {
      aumentar() {
        this.$store.state.cantidad += 1;
      },
      reducir() {
        this.$store.state.cantidad -= 1;
      },
    },
    computed: {
      usuariosActivos() {
        return this.$store.getters.usuariosActivos;
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
