// initial state
import firebase from 'firebase'
import api from '@/firebase/api'

const state = () => ({
  user: null,
  usersList: [],
  profile: {
    name: '',
    surname: '',
    description: '',
    age: '',
    location: '',
    services: [],
    experience: '',
    workingHours: '',
  },
})

// getters
const getters = {
  getUser(state) {
    return state.user
  },

  userEmail(state) {
    return state.user.email
  },

  usersList(state) {
    return state.usersList.map(user => user.data())
  },

  profileData(state) {
    return state.profile
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
      const isExist = await dispatch('fetchProfile')

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

  async updateProfile(ctx, data) {
    console.log('PROFILE ===>', data)
    api({
      method: 'update',
      data,
    })
  },

  async fetchProfile({ commit }) {
    const resp = await api({
      method: 'get',
    })
    const profileData = resp.data()

    commit('setProfile', profileData)

    return profileData
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

  setProfile(state, profileData) {
    state.profile = profileData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
