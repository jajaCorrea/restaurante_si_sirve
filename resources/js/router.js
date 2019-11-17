import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Proveedores from "./components/Proveedores.vue";
import Cuenta from "./components/Cuenta.vue";
import Efectivo from "./components/Efectivo.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/efectivo",
      name: "efectivo total",
      component: Efectivo
    },
    {
      path: "/cuenta",
      name: "generar cuenta",
      component: Cuenta
    },
    {
      path: "/proveedores",
      name: "proveedores",
      component: Proveedores
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    }
  ]
});
