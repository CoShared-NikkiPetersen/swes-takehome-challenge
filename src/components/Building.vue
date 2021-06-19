<template>
  <div class="building-wrapper">
<!--    <h1>{{ this.$route.params.name }}</h1>-->
    <h2>Building Name:  {{ building.name }}</h2>
    <h2>Address in {{ building.country }}:  {{ building.address }}</h2>
    <h3>Rent per floor:  {{ building.rent_per_floor }}</h3>
    <h3>Number of floors:  {{ building.number_of_floors }}</h3>
    <h3>Occupied floors:</h3>
      <ul>
        <li v-for="occupant in occupants" :key="occupant.id">{{ occupant.company}}, floor {{ occupant.floor }}</li>
      </ul>
    <h3>Total income based on current occupancy:  {{ calculateIncome() }}</h3>
    <h3>Available floors: <span>{{ vacancies.join(', ') }} </span></h3>
    <h3>Employees in this building:  {{ fetchedEmployees }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Building',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState([
      // 'fetchedBuildings',
      // 'fetchedCompanies',
      'fetchedEmployees',
      'fetchedOffices'
    ]),
    building: function () {
      return this.$store.getters.getSelectedBuilding(this.$route.params.name)
    },
    occupants: function () {
      return this.fetchedOffices.filter(office => office.building === this.building.name)
    },
    vacancies: function () {
      const occ = this.fetchedOffices.filter(office => office.building === this.building.name).map(office => office.floor).sort()
      const floors = []
      for (let i = 1; i < this.building.number_of_floors + 1; i++) {
        floors.push(i)
      }
      return floors.filter(floor => !occ.includes(floor))
    },
    currentEmployees: function () {
      const occupied = this.fetchedOffices.filter(office => office.building === this.building.name)
      return this.fetchedEmployees.filter(employee => occupied.includes(employee.company))
    }
  },
  methods: {
    calculateIncome: function () {
      const occupied = this.fetchedOffices.filter(office => office.building === this.building.name).length
      return this.building.rent_per_floor * (this.building.number_of_floors - occupied)
    }
    // findEmployees: function () {
    //   const inBuilding = this.fetchedOffices.filter(office => office.building === this.building.name)
    //   return this.fetchedEmployees.filter(employee => inBuilding.includes(employee.company))
    // }
    // displayOccupied: function () {
    //   const occupants = this.fetchedOffices.filter(office => office.building === this.building.name)
    //   console.log('occupants: ', occupants)
    //   // return occupants.map(office => office).sort()
    // }
  }
}
</script>

<style scoped>

</style>
