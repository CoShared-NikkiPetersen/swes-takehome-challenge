<template>
  <div class="companies">
    <h1>Companies</h1>
    <ul class="companies-container">
      <li v-for="company in fetchedCompanies" :key="company.id" class="company-card">
        <RouterLink
          :to="{ name: 'Company', params: { name: company.name, id: company.id, slug: company.slug }}"
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
      'fetchedCompanies',
      'fetchedEmployees'
      // 'fetchedOffices'
    ])
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}

.company-card {
  width: 30%;
  padding: 10px;
  list-style-type: none;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;
}

</style>
