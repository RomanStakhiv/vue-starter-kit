<template>
  <div class="Login">
    <h1>Login</h1>
    <button @click="$store.dispatch('login')">Login with Google</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped></style>
