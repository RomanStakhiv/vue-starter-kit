import firebase from 'firebase'
import store from '../store'

export default firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('user/setUser', user)
  } else {
    store.commit('user/setUser', null)
  }
})
