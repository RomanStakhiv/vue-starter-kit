import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from '@/firebase/firebaseConfig'
import onAuthStateChanged from '@/firebase/onAuthStateChanged'

Vue.config.productionTip = false
Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  ru: {
    message: {
      createAccount: 'Создать анкету',
      chooseASpecialist: 'Выбрать специалиста',
      profile: 'Личный кабинет',
      login: 'Войти',
      saveAndPublish: 'Сохранить и опубликовать',
      logout: 'Выйти',
    },
  },
  en: {
    message: {
      createAccount: 'Create personal account',
      chooseASpecialist: 'Choose a specialist',
      profile: 'Profile',
      login: 'Login',
      saveAndPublish: 'Save and publish',
      logout: 'Logout',
    },
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
})

new Vue({
  i18n,
  router,
  store,
  firebaseConfig,
  onAuthStateChanged,
  render: h => h(App),
}).$mount('#app')
