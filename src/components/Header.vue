<template>
  <div>
    <router-link to="/">Массажисты</router-link>
    <router-link to="login" v-if="!$store.getters['user/getUser']"
      >Создать анкету</router-link
    >
    <router-link to="dashboard" v-if="$store.getters['user/getUser']"
      >Личный кабинет</router-link
    >
    <button
      v-if="$store.getters['user/getUser']"
      @click="$store.dispatch('user/logout')"
    >
      Выход
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>
