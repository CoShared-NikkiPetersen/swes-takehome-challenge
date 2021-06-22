<template>
  <div class="form-container">
    <form class="form" @submit.prevent="AddNewCompany">
      <div class="new" v-show="companyName">
        {{ companyName }}<span v-show="selected">, floor {{ selected }}</span>
      </div>
      <label for="companyFloor">Choose an available floor: </label>
      <select v-model="selected"  id="companyFloor" required>
        <option value="Select"></option>
        <option v-for="floor in vacancies" :value="floor" :key="floor" required>{{ floor }}</option>
      </select>

      <label for="companyName">Company Name: </label>
      <input id="companyName" type="text" name="companyName" minlength="5" v-model="companyName" required>
      <button class="button">Submit</button>
      <button type="reset" @click="resetForm">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from '../firebaseConfig'
const db = firebase

export default {
  name: 'AddCompany',
  data () {
    return {
      companyName: null,
      selected: null
    }
  },
  props: {
    vacancies: Array,
    buildingId: String,
    buildingName: String
  },
  computed: {
    ...mapState([
      'fetchedBuildings',
      'fetchedCompanies',
      'fetchedEmployees',
      'fetchedOffices'
    ])
  },
  methods: {
    // when adding a company, it gets added to the building and to offices
    // company should also have employees
    AddNewCompany () {
      db.collection('companies').add({
        name: this.companyName
      })

      db.collection('offices').add({
        floor: this.selected,
        company: this.companyName,
        building: this.buildingName
      })
        .then(() => {
          this.$router.push('/companies')
        })
        .catch(err => {
          console.log(err)
        })
    },
    resetForm: function () {
      this.companyName = null
    }
  }
}
</script>

<style scoped>
.form {
  margin: 20px;
}

.new {
  margin: 20px;
  /*background: #42b983;*/
}

label {
  margin: 10px;
}
</style>
