<template>
  <div class="buildings">
    <h1>Buildings</h1>
    <p>
    <RouterLink to="{ name: 'Building', params: {name: DEN1}}">DEN1 </RouterLink>| companies in this building | total rent (based on occupancy) | available floors (1,3,6...)
    </p>
    <p>
      <RouterLink to="{ name: 'Building', params: {name: CHI1}}">CHI1 </RouterLink>| companies in this building | total rent (based on occupancy) | available floors (2,4...)
    </p>
  </div>
</template>

<script>
export default {
  name: 'Buildings'
}
</script>

<style scoped>

</style>
