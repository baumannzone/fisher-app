<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>

    <el-table :data="salidas" border style="width: 100%">
      <el-table-column label="Fecha" prop="fecha" fixed></el-table-column>
      <el-table-column label="Total" prop="totalCapturas"></el-table-column>
      <el-table-column label="Media">
        <template scope="scope">
          <div class="center">
            <span v-if="scope.row.fotos">
              <el-tag type="gray">
                <i class="fa fa-picture-o fa-lg" aria-hidden="true"></i>
              </el-tag>
            </span>
            <span v-if="scope.row.videos">
              <el-tag type="gray">
                <a v-bind:href="scope.row.videos">
                  <i class="rojito fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                </a>
              </el-tag>
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Acciones">
        <template scope="scope">
          <div class="center icon-dark">
            <el-tag type="gray">
              <router-link :to="{ name: 'salida', params: { id: scope.row.id } }">
                <i class="fa fa-eye fa-lg" aria-hidden="true"></i>
              </router-link>
            </el-tag>
            <el-tag type="primary">
              <router-link :to="{ name: 'editar', params: { id: scope.row.id } }">
                <i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
              </router-link>
            </el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>

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

<style>
  .center {
    text-align: center;
  }

  .rojito {
    color: indianred;;
  }

   /* Default dark */
  .icon-dark i {
    color: #48576a;
  }

</style>
