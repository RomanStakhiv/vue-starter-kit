import firebase from 'firebase'
import store from '../store'
import router from '@/router'

export default firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.state.user = user
    router.push('/dashboard')
  } else {
    store.state.user = null
  }
})
