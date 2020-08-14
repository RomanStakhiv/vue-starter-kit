<template>
  <div>
    <router-link to="/">{{ $t('message.chooseASpecialist') }}</router-link>
    <router-link to="login" v-if="!$store.getters['user/getUser']">{{
      $t('message.createAccount')
    }}</router-link>
    <router-link to="dashboard" v-if="$store.getters['user/getUser']">{{
      $t('message.profile')
    }}</router-link>
    <button
      v-if="$store.getters['user/getUser']"
      @click="$store.dispatch('user/logout')"
    >
      {{ $t('message.logout') }}
    </button>
    <select v-model="$i18n.locale">
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>
