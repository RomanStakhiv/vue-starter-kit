<template>
  <div class="Login">
    <h1>{{ $t('message.login') }}</h1>
    <button @click="$store.dispatch('user/loginWithGoogle')">
      Google
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped></style>
