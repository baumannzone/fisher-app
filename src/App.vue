<template>
  <div id="app">

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{ name: 'salidas' }" exact>Salidas</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'crear' }" exact>Crear</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ name: 'estadisticas' }" exact>Estadísticas</router-link>
      </el-menu-item>
    </el-menu>

    <transition name="animt" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'app',
    mounted() {
      const name = this.$route.name;
      if ( name === 'crear' ) {
        this.activeIndex = '2';
      }
      else if ( name === 'estadisticas' ) {
        this.activeIndex = '3';
      }
      // By default active index is 1;
    },
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect( key, keyPath ) {
        console.debug( key, keyPath );
      },
    },
  };

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
  }

  * {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  h1 {
    text-align: center
  }

  .animt-enter-active {
    transition: all .2s ease;
  }
  .animt-leave-active {
    transition: all .2s ease-in;
  }
  .animt-enter,
  .animt-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

</style>
