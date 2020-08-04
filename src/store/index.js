import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {},
  actions: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
      } catch (err) {
        alert("ERROR");
      }
    },
    logout() {
      firebase.auth().signOut();
    }
  },
  modules: {}
});
