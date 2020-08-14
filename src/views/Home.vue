<template>
  <div class="home">
    <div v-for="{ name, surname, slug } in docsList" :key="slug">
      <router-link :to="slug">
        {{ name }} <b>{{ surname }}</b>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      docsList: 'user/docsList',
    }),
  },
  methods: {
    ...mapActions({
      fetchDocsList: 'user/fetchDocsList',
    }),
  },
  async mounted() {
    await this.fetchDocsList()
  },
}
</script>
