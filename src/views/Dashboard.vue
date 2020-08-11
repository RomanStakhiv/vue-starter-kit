<template>
  <div class="Dashboard">
    <h1>Анкета</h1>
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
      <input
        type="text"
        v-model="profile.workingHours"
        placeholder="working hours"
      />
      <input
        type="text"
        v-model="profile.experience"
        placeholder="experience"
      />
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
        <button @click.prevent="submit">Сохранить и опубликовать</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      profile: 'user/profileData',
    }),
  },
  methods: {
    ...mapActions({
      updateProfile: 'user/updateProfile',
      fetchProfile: 'user/fetchProfile',
    }),
    ...mapMutations({
      addServiceType: 'user/addServiceType',
    }),
    submit() {
      this.updateProfile()
      this.fetchProfile()
    },
    add() {
      this.addServiceType({ type: '', price: '', duration: '' })
    },
  },
  async mounted() {
    await this.fetchProfile()
  },
}
</script>

<style scoped></style>
