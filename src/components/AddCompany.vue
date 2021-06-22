<template>
  <div class="form-container">
    <form class="form" @submit.prevent="AddNew">
      Add a new tenant
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
export default {
  name: 'AddCompany',
  data () {
    return {
      companyName: ''
    }
  }
}
</script>

<style scoped>
.form {
  margin: 20px;
}

</style>
