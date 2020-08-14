// initial state
import firebase from 'firebase'
import router from '@/router'

const state = () => ({
  user: null,
  usersList: [],
  fullDoc: {},
  profile: {
    name: '',
    surname: '',
    description: '',
    age: '',
    location: '',
    services: [{ type: '', price: '', duration: '' }],
    experience: '',
    workingHours: '',
  },
})

// getters
const getters = {
  getUser(state) {
    return state.user
  },

  slug(state) {
    return state.user.email.substring(0, state.user.email.indexOf('@'))
  },

  usersList(state) {
    return state.usersList.map(user => user.data())
  },

  profileData(state) {
    return state.profile
  },

  getFullDoc(state) {
    return state.fullDoc
  },
}

// actions
const actions = {
  async loginWithGoogle({ dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      // Авторизация через Google
      await firebase.auth().signInWithPopup(provider)
      await router.push('dashboard')

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

  // Создание пользователя
  async createProfile({ state, getters }) {
    await firebase
      .firestore()
      .collection('users')
      .doc(getters.slug)
      .set({ ...state.profile, slug: getters.slug })
  },

  // Обновление пользовательских данных
  async updateProfile({ state, getters }) {
    await firebase
      .firestore()
      .collection('users')
      .doc(getters.slug)
      .set({ ...state.profile, slug: getters.slug })
  },

  // Запрос пользовательских данных
  async fetchProfile({ commit, getters }) {
    const doc = await firebase
      .firestore()
      .collection('users')
      .doc(getters.slug)
      .get()

    commit('updateProfile', doc.data())
  },

  // Запрос списка анкет
  async fetchDocsList({ commit }) {
    const resp = await firebase
      .firestore()
      .collection('users')
      .get()

    commit('setUsersList', resp.docs)
  },

  // Запрос одной анкеты
  async fetchFullDoc({ commit }, slug) {
    const doc = await firebase
      .firestore()
      .collection('users')
      .doc(slug)
      .get()

    commit('setFullDoc', doc.data())
  },
}

// mutations
const mutations = {
  setUser(state, data) {
    state.user = data
  },

  setUsersList(state, data) {
    state.usersList = data
  },

  updateProfile(state, data) {
    state.profile = { ...state.profile, ...data }
  },

  addServiceType(state, data) {
    state.profile.services.push(data)
  },

  setFullDoc(state, data) {
    state.fullDoc = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
