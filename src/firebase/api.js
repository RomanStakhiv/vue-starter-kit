import firebase from "firebase";

export default ({ method = "set", collection, doc = "profile", data }) => {
  firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    [method](data);
};
