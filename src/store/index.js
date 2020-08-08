import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import api from "@/firebase/api";

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
        console.log("ERROR", err);
      }
    },
    logout() {
      firebase.auth().signOut();
    },

    updateProfile({ state: { user } }, { name }) {
      api({
        method: "update",
        collection: user.email,
        data: {
          name
        }
      });
    }
  },
  modules: {}
});
