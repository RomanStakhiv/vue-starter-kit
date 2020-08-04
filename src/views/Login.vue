<template>
  <div class="Login">
    <h1>Login</h1>
    <button @click="login">Login with Google</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Login",
  methods: {
    login() {
      store.dispatch("login");
    }
  }
};
</script>

<style scoped></style>
