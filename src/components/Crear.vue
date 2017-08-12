<template>

  <div class="crear">
    <h3> {{ this.$route.name }}</h3>
    <p class="latlng">{{latLng}}</p>

    <el-row>
      <el-col :xs="24" :sm="24" :md="{span: 20, offset:2}" :lg="{span: 16, offset:4}" :gutter="20">
        <h1 class="h1">{{ msg }}</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

          <!-- gmaps -->
          <div class="el-form-item is-required">
            <label class="el-form-item__label" style="width: 120px;">Zona de salida</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div class="el-input">
                <gmap-autocomplete class="el-input__inner" :value="city" @place_changed="setPlace"></gmap-autocomplete>
              </div>
            </div>
          </div>

          <el-form-item label="Fecha de salida" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="fecha">
                <el-date-picker class="full-width" type="date" placeholder="Fecha"
                                format="dd/MM/yyyy"
                                v-model="ruleForm.fecha"></el-date-picker>
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

          <el-form-item label="A bordo" prop="abordo" required>
            <el-col :xs="24" :sm="11">
              <el-select class="full-width" v-model="ruleForm.abordo" allow-create filterable multiple
                         placeholder="Selecciona personal">
                <el-option v-for="user in users" :key="user.value" :label="user.label" :value="user.value"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item label="Total Capturas" prop="totalCapturas" required>
            <el-col :xs="24" :sm="11">
              <el-input-number class="full-width" v-model="ruleForm.totalCapturas" :min="0" :max="999"></el-input-number>
            </el-col>
          </el-form-item>

          <el-form-item label="Detalle Captura">
            <el-switch v-model="crearDetalles" :disabled="isTotalETZ"></el-switch>
          </el-form-item>

          <template v-if="crearDetalles">

            <el-form-item>
              <el-input placeholder="* Nombre especie" v-model="captura.nombre"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Peso" v-model="captura.peso">
                <template slot="append">gramos</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Profundidad" v-model="captura.profundidad">
                <template slot="append">metros</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Cebo" v-model="captura.cebo"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Cómo" v-model="captura.como"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select class="full-width" v-model="captura.quien" clearable placeholder="* Quien">
                <el-option v-for="item in ruleForm.abordo" :key="item" :label="item" :value="item"></el-option>
              </el-select>
              <div v-if="crearDetallesError" class="el-form-item__error">Campos obligatorios (nombre, quien)</div>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click.prevent="anadir(captura)" class="full-width">Añadir</el-button>
            </el-form-item>

            <el-form-item>
              <hr>
            </el-form-item>

            <el-form-item>
            <el-table border :data="ruleForm.detalleCapturas" style="width: 100%">
              <el-table-column type="expand">
                <template scope="scope">
                  <ul>
                    <li>
                      <b>{{ scope.row.nombre }}</b>
                      <el-tag>{{ scope.row.peso }}g</el-tag>
                      <el-tag type="gray">{{ scope.row.profundidad }}m</el-tag>
                    </li>
                    <li>Cebo: {{ scope.row.cebo }}</li>
                    <li>Cómo: {{ scope.row.como }}</li>
                  </ul>
                </template>
              </el-table-column>
              <el-table-column prop="nombre" label="Nombre"></el-table-column>
              <el-table-column label="Gramos">
                <template scope="scope">
                  <el-tag type="gray">{{ scope.row.peso }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="Metros">
                <template scope="scope">
                  <el-tag type="gray">{{ scope.row.profundidad }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="quien" label="Quien" min-width="150"></el-table-column>
            </el-table>
            </el-form-item>

          </template>

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
  import * as VueGoogleMaps from 'vue2-google-maps';
  import { darkSky, db } from '../config/index';

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
        captura: {
          nombre: null,
          peso: null,
          profundidad: null,
          quien: null,
        },
        city: '',
        latLng: null,
        msg: 'Crear',
        ruleForm: {
          fecha: null,
          time1: '',
          time2: '',
          totalCapturas: 0,
          detalleCapturas: [
            {
              nombre: 'faneca',
              peso: '300',
              profundidad: '20',
              quien: 'Jorge Baumann',
              cebo: 'lorem ipsum  isuamsd si amet',
              como: 'a fondo',
            },
          ],
          zonaPesca: '',
          abordo: [],
          videos: '',
          fotos: '',
          comentarios: '',
        },
        rules: {
          fecha: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
          ],
          time1: [
            { required: true, message: 'Please pick a time', trigger: 'change' },
          ],
          totalCapturas: [
            { type: 'integer', required: true, message: 'Please set total', trigger: 'change' },
          ],
          abordo: [
            { type: 'array', required: true, trigger: 'change' },
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
        crearDetalles: true,
        crearDetallesError: false,
      };
    },
    methods: {
      anadir( captura ) {
        const { nombre, peso, profundidad, quien } = captura;
        console.debug( nombre );
        console.debug( peso );
        console.debug( profundidad );
        console.debug( quien );

        if ( nombre === null || quien === null ) {
          this.crearDetallesError = true;
        }
        else {
          this.crearDetallesError = false;
          const item = {
            nombre,
            peso,
            profundidad,
            quien,
          };
          this.ruleForm.detalleCapturas.push( item );
          this.captura = {
            nombre: null,
            peso: null,
            profundidad: null,
            quien: null,
          };
          this.$message( {
            message: 'Captura agregada',
            type: 'success',
          } );
        }
      },
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
        this.$refs[ formName ]
          .validate( ( valid ) => {
            if ( valid ) {
              console.debug( 'Formulario:' );
              console.debug( this.ruleForm );
              const datos = this.ruleForm;
              db.ref( 'salidas' ).push( datos )
                .then( ( res ) => {
                  this.$router.push( { name: 'salida', params: { id: res.key } } );
                  console.debug( res );
                } );
              // KrIPzU_PNpKe1NQ8XBD
              return true;
            }
            console.debug( 'error submit!!' );
            return false;
          } );
      },
      resetForm( formName ) {
        this.$router.push( { name: 'salida', params: { id: '-KrMRoCZmD8ECYP4m6hC' } } );
        this.$refs[ formName ].resetFields();
      },
    },
    computed: {
      // Equal to 0
      isTotalETZ() {
        return this.ruleForm.totalCapturas === 0 || this.ruleForm.abordo.length === 0;
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
