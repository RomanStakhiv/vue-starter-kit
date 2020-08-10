import firebase from 'firebase'
import store from '@/store'

export default ({
  method = 'set',
  collection = 'users',
  doc = store.getters['user/getUserEmail'],
  data = {},
}) => {
  if (collection) {
    return firebase
      .firestore()
      .collection(collection)
      .doc(doc)
      [method](data)
  }
}
