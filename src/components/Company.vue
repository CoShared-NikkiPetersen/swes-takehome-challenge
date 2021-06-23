<template>
  <div class="company-wrapper">
    <div class="row-container">
      <h1>{{ this.$route.params.name }}</h1>
      <button @click="showForm = !showForm">Add a new employee to this company</button>
    </div>
    <AddEmployee v-show="showForm" :companyName="this.$route.params.name"/>

    <section class="details">
      <h3>Offices
      <!--      (total rent:  {{ calcTotalRent() }})-->
      </h3>
      <ul>
        <li v-for="office in officesByCompany" :key="office.id" class="office-card">
          <h3>{{ office.building }}
            <span id="loc">({{ getAddress(office.building).address[1] }}, {{ getAddress(office.building).address[2] }})</span>
          </h3>
          <p>Floor: {{ office.floor }}</p>
          <p>Rent for this building: {{ calculateRent(office.building) }}</p>
        </li>
      </ul>
      <h3>Staff</h3>
      <ul>
        <li v-for="employee in staff" :key="employee.id" class="staff">
          <div class="staff__details">
            {{ employee.first_name }} {{ employee.last_name }}, {{ employee.title }}
          </div>
          <div class="staff__delete">
            <button class="staff__delete--wrapper" @click="removeEmployee(employee.id)">
              <i class="fal fa-times"> </i>
            </button>

          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddEmployee from '@/components/AddEmployee'
import firebase from '../firebaseConfig'
const db = firebase

export default {
  name: 'Company',
  components: { AddEmployee },
  data () {
    return {
      officesByCompany: [],
      showForm: false,
      totalRent: 0
    }
  },
  // watch: {
  //   $route (to, from) {
  //     this.staff()
  //   }
  // },
  computed: {
    ...mapState([
      'fetchedBuildings',
      'fetchedEmployees',
      'fetchedOffices'
    ]),
    company () {
      return this.$store.getters.getSelectedCompany(this.$route.params.name)
    },
    staff () {
      return this.fetchedEmployees.filter(employee => employee.company === this.company.name)
    }
  },
  created () {
    return this.officesByCompany.push(...this.fetchedOffices.filter(office => office.company === this.company.name).map(office => office))
  },
  methods: {
    calculateRent (buildingName) {
      const renting = this.fetchedBuildings.filter(building => building.name === buildingName)
      const rent = renting.map(r => r.rent_per_floor) * renting.length
      return Number(rent)
    },
    getAddress (buildingName) {
      return this.fetchedBuildings.find(building => building.name === buildingName)
    },
    removeEmployee (id) {
      db.collection('employees').doc(id).delete()
        .then(() => {
          this.fetchedEmployees.filter(employee => employee.id !== id)
        })
    }
    // todo ==> finish this in a way that isn't updating state directly
    // calcTotalRent: function () {
    //   // let total = 0
    //   // // find rent for each office in each building and add them up
    //   // const renting = this.fetchedBuildings.filter(building => building.name === this.$route.params.name)
    //   // const rent = renting.map(r => r.rent_per_floor) * renting.length
    //   // total = rent.forEach(v => v)
    //   return true
    // }
  }
}
</script>
