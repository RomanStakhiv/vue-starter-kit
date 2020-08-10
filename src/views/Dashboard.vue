<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
    <div v-for="user in usersList" :key="user.email">
      {{ user.email }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      usersList: 'user/usersList',
    }),
  },
  async mounted() {
    await this.$store.dispatch('user/getUsersList')
  },
}
</script>

<style scoped></style>
