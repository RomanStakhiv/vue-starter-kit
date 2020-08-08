import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import loginWithGoogle from '@/firebase/auth/loginWithGoogle'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {},
  actions: {
    login() {
      return loginWithGoogle()
    },
    logout() {
      firebase.auth().signOut()
    },
  },
  modules: {},
})
