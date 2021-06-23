<template>
  <div class="buildings">
    <h1>Buildings</h1>
    <h4>Buildings with vacancies are green</h4>
    <h4>Click on the building name to see that building's details and to add a company.</h4>
    <h4>Click on a tenant to see that company's details and to add employees.</h4>
    <section>
      <ul class="buildings-container">
        <li v-for="building in fetchedBuildings"
            :key="building.id"
            class="building-card"
            :class="vacancies(building.name)"
        >
          <RouterLink
            :to="{ name: 'Building', params: { name: building.name, id: building.id }}"
          >
            <h2>{{ building.name }}</h2>
            <span class="building-card__loc">({{ building.address[1] }}, {{ building.address[2] }})</span>
          </RouterLink>
          <ul class="tenants">
            <li v-for="company in occupants(building.name)" :key="company.id" class="company">
              <RouterLink
                :to="{ name: 'Company', params: { name: company.company, id: company.id, slug: company.slug }}"
              >
                <p>{{ company.company }}</p>
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Buildings',
  data () {
    return {
      bldgName: ''
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
    ]),
    occupants: function (name) {
      return this.fetchedOffices.filter(office => office.building === name)
    },
    vacancies: function (name) {
      const occ = this.fetchedOffices.filter(office => office.building === name)
      const numFloors = this.fetchedBuildings.find(building => building.name === name).number_of_floors
      return {
        green: occ.length < numFloors,
        red: occ.length === numFloors
      }
    }
  },
  created () {
    this.fetchBuildings()
    this.fetchCompanies()
    this.fetchEmployees()
    this.fetchOffices()
  }
}
</script>
