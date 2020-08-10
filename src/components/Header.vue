<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="login" v-if="!$store.getters['user/getUser']"
      >Login</router-link
    >
    <router-link to="dashboard" v-if="$store.getters['user/getUser']"
      >Dashboard</router-link
    >
    <button
      v-if="$store.getters['user/getUser']"
      @click="$store.dispatch('user/logout')"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>
