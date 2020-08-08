<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="handleClick">click</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "Ivan"
    };
  },
  methods: {
    handleClick() {
      store.dispatch("updateProfile", { name: this.name });
    }
  }
};
</script>
