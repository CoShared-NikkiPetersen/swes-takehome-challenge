<template>
  <div class="company-wrapper">
    <h1>{{ this.$route.params.name }}</h1>
    <p>Floor</p>
    <p>List of employees</p>
    <p>Add/remove employee in company</p>
    <p>total rent being paid (all floors, all buildings)</p>
  </div>
</template>

<script>
export default {
  name: 'Company'
}
</script>

<style scoped>

</style>
