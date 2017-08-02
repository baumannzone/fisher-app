<template>
  <div id="app">
    <img src="./assets/logo.png" width="50">
    <router-view></router-view>
  </div>
</template>

<script>
//  import Firebase from 'firebase';
//  const config = {
//    apiKey: 'AIzaSyAFIXqGSv2sqhKDJDAm-h4ZWUIUfijWSVs',
//    authDomain: 'fisher-app-db138.firebaseapp.com',
//    databaseURL: 'https://fisher-app-db138.firebaseio.com',
//    projectId: 'fisher-app-db138',
//    storageBucket: 'fisher-app-db138.appspot.com',
//    messagingSenderId: '869956372168',
//  };
//  const app = Firebase.initializeApp(config);
//  const db = app.database();
//  const users = db.ref('users');

  export default {
    name: 'app',
  };

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
