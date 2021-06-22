<template>
  <div class="company-wrapper">
    <h1>{{ this.$route.params.name }}</h1>
    <ul>
      <li v-for="office in officesByCompany" :key="office.id">
        Building: {{ office.building }}, Floor: {{ office.floor }}
      </li>
    </ul>
    <p>floor</p>
    <p>List of employees</p>
    <p>Add/remove employee in company</p>
    <p>total rent being paid (all floors, all buildings)</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Company',
  data () {
    return {
      officesByCompany: [],
      currentCompany: null
    }
  },
  computed: {
    ...mapState([
      // 'fetchedBuildings',
      // 'fetchedCompanies',
      'fetchedEmployees',
      'fetchedOffices'
    ]),
    company: function () {
      console.log(this.$route.params.name)
      return this.$store.getters.getSelectedCompany(this.$route.params.name)
    }
    // sortedOffices: function () {
    //   // take fetchedOffices and filter by this company, then map it by the building
    //   // display
    // }
  },
  created () {
    return this.officesByCompany.push(...this.fetchedOffices.filter(office => office.company === this.company.name).map(office => office))
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
