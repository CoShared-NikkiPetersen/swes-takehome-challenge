<template>
  <div class="company-wrapper">
    <h1>{{ company.name }}</h1>
    <p>floor</p>
    <p>List of employees</p>
    <p>Add/remove employee in company</p>
    <p>total rent being paid (all floors, all buildings)</p>
  </div>
</template>

<script>
export default {
  name: 'Company',
  computed: {
    company: function () {
      return this.$store.getters.getSelectedCompany(this.$route.params.name)
    }
  }
}
</script>

<style scoped>

</style>
