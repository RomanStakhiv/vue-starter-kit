import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user) {
    next("login");
  } else if (to.name === "Login" && store.state.user) {
    next("dashboard");
  } else {
    next();
  }
});

export default router;
