<template>
  <div class="form-container">
    <form class="form" @submit.prevent="AddNewEmployee">
      <div class="new" >
        <h3>{{ employeeFirstName }} {{ employeeLastName }} {{ title }}</h3>
      </div>

      <label for="employeeFirstName">First Name: </label>
      <input id="employeeFirstName" type="text" name="employeeFirstName" minlength="5" v-model="employeeFirstName" required>
      <label for="employeeLastName">Last Name: </label>
      <input id="employeeLastName" type="text" name="employeeLastName" v-model="employeeLastName" required>

      <label for="employeeTitle">Title: </label>
      <input id="employeeTitle" type="text" name="employeeTitle"  v-model="title" required>
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
      console.log('made it this far')
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
            this.resetForm()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    resetForm: function () {
      this.employeeFirstName = null
      this.employeeLastName = null
      this.title = null
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

button {
  margin: 0 20px;
}
</style>
