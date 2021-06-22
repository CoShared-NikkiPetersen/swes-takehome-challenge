<template>
  <div class="form-container">
    <form class="form" @submit.prevent="AddNew">
<!--      <label for="companyFloor">Choose an available floor: </label>-->
<!--      <select v-model="selected"  id="companyFloor" required>-->
<!--        <option v-for="floor in vacancies" :value="floor" :key="floor">{{ floor }}</option>-->
<!--      </select>-->

      <label for="companyName">Company Name: </label>
      <input id="companyName" type="text" name="companyName" minlength="5" v-model="companyName" required>
      <button class="button">Submit</button>
    </form>
    <div>
      {{ companyName }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddCompany',
  data () {
    return {
      companyName: '',
      selected: ''
    }
  },
  computed: {
    ...mapState([
      'fetchedBuildings',
      'fetchedCompanies',
      'fetchedEmployees',
      'fetchedOffices'
    ]),
    vacancies: function () {
      const occ = this.fetchedOffices.filter(office => office.building === this.building.name).map(office => office.floor).sort()
      const floors = []
      for (let i = 1; i < this.building.number_of_floors + 1; i++) {
        floors.push(i)
      }
      return floors.filter(floor => !occ.includes(floor))
    }
  },
  methods: {
    // when adding a company, it gets added to the building and to offices
    // company should also have employees
  }
}
</script>

<style scoped>
.form {
  margin: 20px;
}

</style>
