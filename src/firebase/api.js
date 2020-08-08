import firebase from 'firebase'
import store from '@/store'
import { get } from 'lodash'

export default ({
  method = 'set',
  collection = get(store, 'state.user.email'),
  doc = 'profile',
  data,
}) => {
  if (collection) {
    firebase
      .firestore()
      .collection(collection)
      .doc(doc)
      [method](data)
  }
}
