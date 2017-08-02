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
    name: 'Salidas',
    data() {
      return {
        visible: false,
        msg: 'Fisher',
      };
    },
    computed: mapState( [ 'user', 'cantidad' ] ),
  };

</script>
