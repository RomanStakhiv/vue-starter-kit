<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
    <form>
      <input type="text" v-model="profile.name" placeholder="name" />
      <input type="text" v-model="profile.surname" placeholder="surname" />
      <input
        type="textarea"
        v-model="profile.description"
        placeholder="description"
      />
      <input type="text" v-model="profile.age" placeholder="age" />
      <input type="text" v-model="profile.location" placeholder="location" />
      <div>
        <div v-for="(service, index) in profile.services" :key="index">
          <input type="text" v-model="service.type" placeholder="type" />
          <input type="text" v-model="service.price" placeholder="price" />
          <input
            type="text"
            v-model="service.duration"
            placeholder="duration"
          />
        </div>
        <button @click.prevent="add">+</button>
      </div>
      <div>
        <button @click.prevent="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      profile: {
        name: '',
        surname: '',
        description: '',
        age: '',
        location: '',
        services: [],
        experience: '',
        workingHours: '',
      },
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('user/updateProfile', this.profile)
      this.$store.dispatch('user/fetchProfile')
    },
    add() {
      this.profile.services.push({ type: '', price: '', duration: '' })
    },
    fillForm() {
      this.profile = this.$store.getters['user/profileData']
    },
  },
  async mounted() {
    await this.$store.dispatch('user/fetchProfile')
    await this.fillForm()
  },
}
</script>

<style scoped></style>
