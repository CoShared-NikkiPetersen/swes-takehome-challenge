<template>
  <div class="companies">
    <div class="row-container">
      <h1>Companies</h1>
      <button @click="showForm = !showForm">Add a new tenant</button>
    </div>

    <AddCompany v-show="showForm" />
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
import AddCompany from '../components/AddCompany'
import { mapState } from 'vuex'

export default {
  name: 'Companies',
  data () {
    return {
      showForm: false
    }
  },
  components: { AddCompany },
  computed: {
    ...mapState([
      'fetchedBuildings',
      'fetchedCompanies',
      'fetchedEmployees',
      'fetchedOffices'
    ])
  }
}
</script>

<style scoped>
.row-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

button {
  margin: 0 20px;
}
</style>
