<template>
  <div id="nav">
    <div>
      <img src="../assets/logo.png" class="logo" alt="logo">
    </div>
    <div>
      <router-link to="/">Home</router-link> |
      <!--    <router-link to="/about">About</router-link> |-->
      <router-link to="/buildings">Buildings</router-link> |
      <router-link to="/companies">Companies</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
