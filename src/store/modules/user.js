// initial state
import firebase from 'firebase'
import api from '@/firebase/api'

const state = () => ({
  user: null,
  usersList: [],
})

// getters
const getters = {
  getUser(state) {
    return state.user
  },

  getUserEmail(state) {
    return state.user.email
  },

  usersList(state) {
    return state.usersList.map(user => user.data())
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
        email: state.user.email,
      },
    })
  },

  async getProfileData() {
    const resp = await api({
      method: 'get',
    })

    return resp.data()
  },

  async getUsersList({ commit }) {
    const resp = await firebase
      .firestore()
      .collection('users')
      .get()

    commit('setUsersList', resp.docs)
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setUsersList(state, usersList) {
    state.usersList = usersList
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
