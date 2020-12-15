import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Buefy from "buefy";
// import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBox,
  faCog,
  faHome,
  faMoneyBill,
  faQuestionCircle,
  faUser,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBox, faCog, faHome, faMoneyBill, faQuestionCircle, faUser, faShip);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultIconComponent: "font-awesome-icon",
});
// @ts-ignore
import App from "./App.vue";
// @ts-ignore
import Home from "./components/Home.vue";

const routes: RouteConfig[] = [
  { path: "/", component: Home }
];

const router = new VueRouter({
  routes,
  base: __dirname
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
