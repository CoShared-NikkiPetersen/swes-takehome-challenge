<template>
  <div class="companies">
    <h1>Companies</h1>
    <button @click="showForm = !showForm">Add a new tenant</button>
    <AddCompany v-show="showForm" />
    <p>
      <RouterLink :to="{ name: 'Company', params: {name: 'Schmoogle'}}" >Schmoogle </RouterLink>
    </p>
    <p>
      <RouterLink :to="{ name: 'Company', params: {name: 'Bloogle'}}" >Bloogle</RouterLink>
    </p>
    <p>
      <RouterLink :to="{ name: 'Company', params: {name: 'Zazamon'}}" >Zazamon</RouterLink>
    </p>
    <hr>
    <h3>Add a new company (form)</h3>
  </div>
</template>

<script>
import AddCompany from '../components/AddCompany'

export default {
  name: 'Companies',
  data () {
    return {
      showForm: false
    }
  },
  components: { AddCompany }
}
</script>

<style scoped>

</style>
