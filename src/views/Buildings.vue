<template>
  <div class="buildings">
    <h1>Buildings</h1>
    <ul>
      <li v-for="building in fetchedBuildings" :key="building.id">
        <RouterLink
          :to="{ name: 'Building', params: { name: building.name, id: building.id }}"
        >
          {{ building.name }}
        </RouterLink>
      </li>
    </ul>

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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Buildings',
  data () {
    return {
    }
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
    ...mapActions([
      'fetchBuildings',
      'fetchCompanies',
      'fetchEmployees',
      'fetchOffices'
    ])
  },
  created () {
    this.fetchBuildings()
    this.fetchCompanies()
    this.fetchEmployees()
    this.fetchOffices()
  }
}
</script>

<style scoped>
</style>
