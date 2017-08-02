<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <p> Cantidad: {{ cantidad }}</p>

    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>

</template>

<script>

  export default {
    name: 'dashboard',
    data() {
      return {
        visible: false,
        msg: 'Create',
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
      cantidad() {
        return this.$store.state.cantidad;
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
