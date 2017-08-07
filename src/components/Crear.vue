<template>

  <div class="crear">
    <label>
      Location:
      <gmap-autocomplete class="full-width" :value="city" @place_changed="setPlace"></gmap-autocomplete>
    </label>
    <p class="latlng">{{ latLng }}</p>

    <el-row>
      <el-col :xs="24" :sm="24" :md="{span: 20, offset:2}" :lg="{span: 16, offset:4}" :gutter="20">
        <h1 class="h1">{{ msg }}</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

          <el-form-item label="Fecha de salida" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="date">
                <el-date-picker class="full-width" type="date" placeholder="Fecha"
                                format="dd/MM/yyyy"
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

  import Vue from 'vue';
  import axios from 'axios';
  import * as firebase from 'firebase';
  import * as VueGoogleMaps from 'vue2-google-maps';
  import { darkSky, firebaseConfig } from '../config/index';

  // Gmaps API
  Vue.use( VueGoogleMaps, {
    load: {
      key: 'AIzaSyAFIXqGSv2sqhKDJDAm-h4ZWUIUfijWSVs',
      libraries: 'geometry,places',
    },
  } );

  export default {
    name: 'Crear',
    data() {
      return {
        city: '',
        latLng: {},
        msg: 'Crear',
        ruleForm: {
          date: new Date(),
          time1: '',
          time2: '',
          totalCapturas: 0,
          zonaPesca: '4',
          abordo: [],
          videos: '1',
          fotos: '2',
          comentarios: '3',
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
            { type: 'array', required: true, message: 'Please select ppl', trigger: 'change' },
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
      setPlace( place ) {
        this.latLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        // https://api.darksky.net/forecast/APIKEY/lat,lng?options
        // https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
        const lat = this.latLng.lat;
        const lng = this.latLng.lng;
        const format = 'DD/MM/YYYY';
        const date = this.$moment( this.ruleForm.date ).format( format );
        const timestamp = this.$moment.utc( date, format ).unix();
        console.debug( 'MOMENT1: ', timestamp );
        const url = `${darkSky.api}/${darkSky.key}/${lat},${lng},${timestamp}?${darkSky.options}`;
        axios.get( url )
          .then( data => console.debug( data, url ) );
      },
      submitForm( formName ) {
        console.debug( this.$refs[ formName ] );
        this.$refs[ formName ]
          .validate( ( valid ) => {
            if ( valid ) {
              const fbApp = firebase.initializeApp( firebaseConfig );
              const db = fbApp.database();
              console.debug( 'submit!' );
              db.ref( 'salidas' ).push( this.ruleForm );
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
