import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaseConfig from "@/firebase/firebaseConfig";
import onAuthStateChanged from "@/firebase/onAuthStateChanged";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebaseConfig,
  onAuthStateChanged,
  render: h => h(App)
}).$mount("#app");
