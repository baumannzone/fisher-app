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
  import { mapState } from 'vuex';

  export default {
    name: 'createFishing',
    data() {
      return {
        visible: false,
        msg: 'Fisher',
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
