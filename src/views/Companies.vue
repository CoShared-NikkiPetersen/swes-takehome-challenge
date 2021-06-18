<template>
  <div class="companies">
    <h1>Companies</h1>
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
export default {
  name: 'Companies'
}
</script>

<style scoped>

</style>
