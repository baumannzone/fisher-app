<template>

  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="Fecha" width="120" sortable></el-table-column>
      <el-table-column
        prop="name"
        label="Hora">
      </el-table-column>
      <el-table-column
        prop="state"
        label="Total"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="Temp"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="Zip"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template scope="scope">
          <el-button @click="handleClick" type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>

  export default {
    name: 'Salidas',
    methods: {
      handleClick() {
        console.debug( 'click' );
      },
    },
    data() {
      return {
        visible: false,
        msg: 'Salidas',
        tableData: [ {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        } ],
      };
    },
  };

</script>
