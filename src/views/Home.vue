<template>
  <div class="home">
    <div v-for="user in usersList" :key="user.email">
      {{ user.email }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
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
