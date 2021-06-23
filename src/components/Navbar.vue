<template>
  <div id="nav">
    <div>
      <router-link to="/">
        <img src="../assets/logo2.png" class="logo" alt="logo">
      </router-link>

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
