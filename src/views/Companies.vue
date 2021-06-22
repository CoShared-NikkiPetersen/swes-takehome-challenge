<template>
  <div class="companies">
    <h1>Companies</h1>
    <ul>
      <li v-for="company in fetchedCompanies" :key="company.id">
        <RouterLink
          :to="{ name: 'Company', params: { name: company.name, id: company.id }}"
        >
          {{ company.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Companies',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      // 'fetchedBuildings',
      'fetchedCompanies'
      // 'fetchedEmployees',
      // 'fetchedOffices'
    ])
  }
}
</script>

<style scoped>

</style>
