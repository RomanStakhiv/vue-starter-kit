<template>
  <div>
    <h1>Card</h1>
    {{ getFullDoc.name }}
    {{ getFullDoc.surname }}
    {{ getFullDoc.description }}
    {{ getFullDoc.age }}
    {{ getFullDoc.location }}
    {{ getFullDoc.experience }}
    {{ getFullDoc.workingHours }}

    <div
      v-for="({ type, price, duration }, index) in getFullDoc.services"
      :key="index"
    >
      <div>{{ type }}</div>
      <div>{{ price }}</div>
      <div>{{ duration }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Card',
  computed: {
    ...mapGetters({
      getFullDoc: 'user/getFullDoc',
    }),
  },
  methods: {
    ...mapActions({
      fetchFullDoc: 'user/fetchFullDoc',
    }),
  },
  async created() {
    console.log('this.$router', this.$router.history.current.params.slug)
    await this.fetchFullDoc(this.$router.history.current.params.slug)
  },
}
</script>

<style scoped></style>
