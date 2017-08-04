<template>

  <div class="crear">

    <span>location:</span><input type="text" id="txtautocomplete" style="width:300px" placeholder="enter the adress"/>
    <label id="lblresult"></label>

    <el-row>
      <el-col :xs="24" :sm="24" :md="{span: 20, offset:2}" :lg="{span: 16, offset:4}" :gutter="20">
        <h1>{{ msg }}</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

          <el-form-item label="Fecha de salida" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="date">
                <el-date-picker class="full-width" type="date" placeholder="Fecha"
                                v-model="ruleForm.date"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item label="Hora" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="time1">
                <el-time-select class="full-width" placeholder="Hora salida" v-model="ruleForm.time1"
                                :picker-options="timeOptions1"></el-time-select>
              </el-form-item>
            </el-col>

            <el-col :span="2" class="line">.</el-col>

            <el-col :xs="24" :sm="11">
              <el-form-item prop="time2">
                <el-time-select class="full-width" placeholder="Hora llegada" v-model="ruleForm.time2"
                                :picker-options="{ start: '00:00', step: '00:30', end: '23:59', minTime: ruleForm.time1 }">
                </el-time-select>
              </el-form-item>
            </el-col>

          </el-form-item>

          <el-form-item label="Total Capturas" prop="totalCapturas" required>
            <el-col :xs="24" :sm="11">
              <el-input-number class="full-width" v-model="ruleForm.totalCapturas" :min="0"
                               :max="999"></el-input-number>
            </el-col>
          </el-form-item>

          <el-form-item label="A bordo" prop="abordo" required>
            <el-col :xs="24" :sm="11">
              <el-select class="full-width" v-model="ruleForm.abordo" allow-create filterable multiple
                         placeholder="Selecciona personal">
                <el-option v-for="user in users" :key="user.value" :label="user.label" :value="user.value"></el-option>
              </el-select>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item label="Zona de pesca" prop="zonaPesca">
            <el-input v-model="ruleForm.zonaPesca" placeholder="Nombre de roca, coordenadas, ..."></el-input>
          </el-form-item>

          <el-form-item label="Videos" prop="videos">
            <el-input v-model="ruleForm.videos" placeholder="Youtube link"></el-input>
          </el-form-item>

          <el-form-item label="Fotos" prop="fotos">
            <el-input v-model="ruleForm.fotos" placeholder="Fotos"></el-input>
          </el-form-item>

          <el-form-item label="Comentarios" prop="comentarios">
            <el-input type="textarea" v-model="ruleForm.comentarios"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>

        </el-form>
      </el-col>
    </el-row>


  </div>

</template>

<script>
  /* global google:true */
  import darkSky from '../darksky/main';

  console.debug( darkSky );

  function intialize() {
    const autocomplete = new google.maps.places.Autocomplete( document.getElementById( 'txtautocomplete' ) );
    google.maps.event.addListener( autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      let location = `Address: ${place.formatted_address} <br/>`;
      location += `Latitude: ${place.geometry.location.lat()} <br/>`;
      location += `Longitude: ${place.geometry.location.lng()}`;
      document.getElementById( 'lblresult' ).innerHTML = location;
    } );
  }

  google.maps.event.addDomListener( window, 'load', intialize );


  export default {
    name: 'crear',
    data() {
      return {
        msg: 'Crear',
        ruleForm: {
          date: new Date(),
          time1: '',
          time2: '',
          totalCapturas: 0,
          zonaPesca: '',
          abordo: [],
          videos: '',
          fotos: '',
          comentarios: '',
        },
        rules: {
          date: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
          ],
          time1: [
            { required: true, message: 'Please pick a time', trigger: 'change' },
          ],
          totalCapturas: [
            { type: 'integer', required: true, message: 'Please set total', trigger: 'change' },
          ],
          abordo: [
            { type: 'array', required: true, message: 'Please select Activity zone', trigger: 'change' },
          ],
        },
        users: [
          {
            value: 'Jorge Baumann',
            label: 'Jorge Baumann',
          },
          {
            value: 'Jorge F. Baumann',
            label: 'Jorge F. Baumann',
          },
          {
            value: 'Angel Aguilar',
            label: 'Ángel Aguilar',
          },
        ],
        timeOptions1: {
          start: '00:00',
          step: '00:30',
          end: '23:59',
        },
      };
    },
    methods: {
      submitForm( formName ) {
        this.$refs[ formName ]
          .validate( ( valid ) => {
            if ( valid ) {
              console.debug( 'submit!' );
              return true;
            }
            console.debug( 'error submit!!' );
            return false;
          } );
      },
      resetForm( formName ) {
        this.$refs[ formName ].resetFields();
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
<style scoped>
  .full-width {
    width: 100%;
  }

  .line {
    color: white;
    height: 22px;
  }
</style>
