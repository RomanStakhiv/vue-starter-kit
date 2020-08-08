import firebase from 'firebase'

export default async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await firebase.auth().signInWithPopup(provider)
  } catch (err) {
    console.log('ERROR', err)
  }
}
