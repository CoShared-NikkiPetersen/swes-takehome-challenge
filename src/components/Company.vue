<template>
  <div class="company-wrapper">
    <div class="row-container">
      <h1>{{ this.$route.params.name }}</h1>
      <button @click="showForm = !showForm">Add a new employee to this company</button>
    </div>
    <AddEmployee v-show="showForm" :companyName="this.$route.params.name"/>

    <h3>Offices
<!--      (total rent:  {{ calcTotalRent() }})-->
    </h3>
    <ul>
      <li v-for="office in officesByCompany" :key="office.id" class="office-card">
        <h3>Building: {{ office.building }}</h3>
        Floor: {{ office.floor }}
        <br>
        Rent for this building: {{ calculateRent(office.building) }}
      </li>
    </ul>
    <h3>Staff</h3>
    <ul>
      <li v-for="employee in staff" :key="employee.id">{{ employee.first_name }} {{ employee.last_name }}, {{ employee.title }}</li>
    </ul>
    <p>Add/remove employee in company</p>
    <p>total rent being paid (all floors, all buildings)</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddEmployee from '@/components/AddEmployee'

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
    }
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

<style scoped>
li {
  list-style-type: none;
}

.office-card {
  width: 30%;
  padding: 10px;
  list-style-type: none;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;
}

.row-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

button {
  margin: 0 20px;
}
</style>
