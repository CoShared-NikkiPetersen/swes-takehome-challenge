<template>
  <div class="form-container">
    <form class="form" @submit.prevent="AddNewEmployee">
      <div class="new" v-show="employeeName">
        {{ employeeName }}, {{ employeeTitle }}
      </div>

      <label for="employeeFirstName">Employee Name: </label>
      <input id="employeeFirstName" type="text" name="employeeFirstName" minlength="5" v-model="employeeFirstName" required>
      <label for="employeeLastName">Employee Name: </label>
      <input id="employeeLastName" type="text" name="employeeLastName" minlength="5" v-model="employeeLastName" required>

      <label for="employeeTitle">Employee Title: </label>
      <input id="employeeTitle" type="text" name="employeeTitle" minlength="5" v-model="employeeTitle" required>
      <button class="button">Submit</button>
      <button type="reset" @click="resetForm">Cancel</button>
    </form>
  </div>
</template>

<script>
// import slugify from 'slugify'
import { mapState } from 'vuex'
import firebase from '../firebaseConfig'
const db = firebase

export default {
  name: 'AddEmployee',
  data () {
    return {
      employeeFirstName: null,
      employeeLastName: null,
      title: null
    }
  },
  props: {
    companyName: String
  },
  computed: {
    ...mapState([
      // 'fetchedBuildings',
      // 'fetchedCompanies',
      'fetchedEmployees'
      // 'fetchedOffices'
    ])
  },
  methods: {
    AddNewEmployee () {
      if (!this.fetchedEmployees.find(empl => empl.first_name === this.employeeFirstName && empl.last_name === this.employeeLastName && empl.company === this.companyName)) {
        // const slugifiedName = slugify(this.question, {
        //   replacement: '-',
        //   remove: /[$*_+~.()'"!?\-:@]/g,
        //   lower: true
        // })
        db.collection('employees').add({
          first_name: this.employeeFirstName,
          last_name: this.employeeLastName,
          title: this.title,
          company: this.companyName
        })
          .then(() => {
            this.$router.push('/companies')
          })
          .catch(err => {
            console.log(err)
          })
      }
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
