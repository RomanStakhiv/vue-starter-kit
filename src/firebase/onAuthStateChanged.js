import firebase from 'firebase'
import store from '../store'
import router from '@/router'

export default firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('user/setUser', user)
    return router.push('/dashboard')
  } else {
    store.commit('user/setUser', null)
    return router.push('/login')
  }
})
