<template>

  <div class="crear">
    <el-row>
      <el-col :xs="24" :sm="24" :md="{span: 20, offset:2}" :lg="{span: 16, offset:4}" :gutter="20">
        <h1>{{ msg }}</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

          <el-form-item label="Fecha de salida" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="date">
                <el-date-picker class="date" type="date" placeholder="Fecha" v-model="ruleForm.date"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item label="Hora" required>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="time1">
                <el-time-select class="date" placeholder="Hora salida" :picker-options="pickerOptions" v-model="ruleForm.time1"></el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="2" class="line">.</el-col>
            <el-col :xs="24" :sm="11">
              <el-form-item prop="time2">
                <el-time-select class="date" placeholder="Hora llegada" :picker-options="pickerOptions" v-model="ruleForm.time2"></el-time-select>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item label="Total Capturas" prop="totalCapturas" required>
            <el-col :xs="24" :sm="11">
              <el-input-number v-model="ruleForm.totalCapturas" :min="0" :max="999" style="width: 100%;"></el-input-number>
            </el-col>
          </el-form-item>

          <el-form-item label="Zona de pesca" prop="zonaPesca">
            <el-input v-model="ruleForm.zonaPesca" placeholder="Nombre de roca, coordenadas, ..."></el-input>
          </el-form-item>

          <el-form-item label="Activity zone" prop="region">
            <el-select v-model="ruleForm.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Instant delivery" prop="delivery">
            <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Activity type" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="Online activities" name="type"></el-checkbox>
              <el-checkbox label="Promotion activities" name="type"></el-checkbox>
              <el-checkbox label="Offline activities" name="type"></el-checkbox>
              <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="Sponsorship"></el-radio>
              <el-radio label="Venue"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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

  export default {
    name: 'crear',
    data() {
      return {
        visible: false,
        msg: 'Crear',
        pickerOptions: {
          start: '00:00',
          step: '00:30',
          end: '23:59',
        },
        ruleForm: {
          date: new Date(),
          time1: '',
          time2: '',
          totalCapturas: '',
          name: '',
          region: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          date: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
          ],
          time1: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' },
          ],
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' },
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' },
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' },
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' },
          ],
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
  .date {
    width: 100%;
  }

  .line {
    color: white;
    height: 22px;
  }
</style>
