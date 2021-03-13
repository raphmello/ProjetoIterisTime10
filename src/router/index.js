import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import PontosDeColeta from "../views/PontosDeColeta";
import Usuario from "../views/Usuario";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/pontosdecoleta",
    name: "PontosDeColeta",
    component: PontosDeColeta,
  },
  ,
  {
    path: "/usuario",
    name: "Usuario",
    component: Usuario,
  },
  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
