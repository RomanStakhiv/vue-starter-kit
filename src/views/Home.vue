<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="handleClick">click</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import api from '@/firebase/api'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      name: 'Ivan',
    }
  },
  methods: {
    handleClick() {
      api({
        method: 'update',
        data: { name: this.name },
      })
    },
  },
}
</script>
