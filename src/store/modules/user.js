// initial state
import firebase from 'firebase'
import api from '@/firebase/api'

const state = () => ({
  user: null,
})

// getters
const getters = {
  getUser(state) {
    return state.user
  },

  getUserEmail(state) {
    return state.user.email
  },
}

// actions
const actions = {
  async loginWithGoogle({ dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      // Авторизация через Google
      await firebase.auth().signInWithPopup(provider)

      // Проверяю ести ли такой пользователь
      const isExist = await dispatch('getProfileData')

      // Если пользователя нет то создаем если есть то ниего не делаем
      if (!isExist) {
        dispatch('createProfile')
      }
    } catch (err) {
      console.log('ERROR', err)
    }
  },

  logout() {
    firebase.auth().signOut()
  },

  createProfile({ state }) {
    api({
      method: 'set',
      data: {
        name: state.user.displayName,
      },
    })
  },

  async getProfileData() {
    const resp = await api({
      method: 'get',
    })

    return resp.data()
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
