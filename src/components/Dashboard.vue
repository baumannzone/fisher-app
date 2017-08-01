<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <ul id="example-1">
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>

    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>

  </div>
</template>

<script>
  import Firebase from 'firebase';

  const config = {
    apiKey: 'AIzaSyAFIXqGSv2sqhKDJDAm-h4ZWUIUfijWSVs',
    authDomain: 'fisher-app-db138.firebaseapp.com',
    databaseURL: 'https://fisher-app-db138.firebaseio.com',
    projectId: 'fisher-app-db138',
    storageBucket: 'fisher-app-db138.appspot.com',
    messagingSenderId: '869956372168',
  };
  const app = Firebase.initializeApp(config);
  const db = app.database();
  const users = db.ref('users');

  export default {
    name: 'dashboard',
    data() {
      return {
        visible: false,
        msg: 'Lmao',
      };
    },
    firebase: {
      users,
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
