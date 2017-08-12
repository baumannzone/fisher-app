<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>

    <el-table :data="salidas" style="width: 100%">
      <el-table-column label="Time1" prop="time1"></el-table-column>
      <el-table-column label="Time2" prop="time2"></el-table-column>
      <el-table-column label="Acciones">
        <template scope="scope">
          <router-link :to="{ name: 'salida', params: { id: scope.row.id } }">Ver</router-link>
          <router-link :to="{ name: 'editar', params: { id: scope.row.id } }">Editar</router-link>
        </template>
      </el-table-column>
    </el-table>

    <pre> {{ salidas }}</pre>

  </div>

</template>

<script>
  import { db } from '../config/index';

  export default {
    name: 'Salidas',
    mounted() {
      const salidasRef = db.ref( 'salidas' );
      salidasRef.on( 'value', ( snapshot ) => {
        const salidasArr = this.$_( snapshot.val() ) // wrap object so that you can chain lodash methods
          .mapValues( ( value, id ) => this.$_.merge( {}, value, { id } ) ) // attach id to object
          .values() // get the values of the result
          .value(); // unwrap array of objects

        this.salidas = salidasArr;
        console.debug( salidasArr );
        this.loading = false;
      } );
    },
    methods: {
      handleClick() {
        console.debug( 'click' );
      },
    },
    data() {
      return {
        visible: false,
        msg: 'Salidas',
        salidas: null,
      };
    },
  };

</script>
