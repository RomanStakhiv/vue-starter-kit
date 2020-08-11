<template>
  <div class="home">
    <div v-for="{ id, name, surname } in usersList" :key="id">
      <router-link :to="id">
        {{ name }} <b>{{ surname }}</b>
      </router-link>
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
