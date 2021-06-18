<template>
  <div class="home">
    <h3>Click on a link above, to see Companies or Buildings</h3>

    <ul> Buildings
      <li v-for="building in fetchedBuildings" :key="building.id">{{ building }}</li>
    </ul>

    <ul> Companies
      <li v-for="company in fetchedCompanies" :key="company.id">{{ company }}</li>
    </ul>

    <ul> Employees
      <li v-for="employee in fetchedEmployees" :key="employee.id">{{ employee }}</li>
    </ul>

    <ul> Offices
      <li v-for="office in fetchedOffices" :key="office.id">{{ office }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from '../firebaseConfig'
const db = firebase

export default {
  name: 'Home',
  data () {
    return {
      fetchedBuildings: [],
      fetchedCompanies: [],
      fetchedEmployees: [],
      fetchedOffices: []
    }
  },
  components: {
  },
  created () {
    // todo ==> fetch to get data from back end
    db.collection('buildings').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const building = doc.data()
          building.id = doc.id
          this.fetchedBuildings.push(building)
        })
      })

    db.collection('companies').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const company = doc.data()
          company.id = doc.id
          this.fetchedCompanies.push(company)
        })
      })

    db.collection('employees').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const employee = doc.data()
          employee.id = doc.id
          this.fetchedEmployees.push(employee)
        })
      })

    db.collection('offices').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const office = doc.data()
          office.id = doc.id
          this.fetchedOffices.push(office)
        })
      })
  }
}
</script>
