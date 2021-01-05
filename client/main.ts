import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Buefy from "buefy";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faBox,
  faCalendarDay,
  faCog,
  faHome,
  faMinus,
  faMoneyBill,
  faPen,
  faPlus,
  faQuestionCircle,
  faUser,
  faShip,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";
library.add(
  faAngleLeft,
  faAngleRight,
  faBox,
  faCalendarDay,
  faCog,
  faHome,
  faMinus,
  faMoneyBill,
  faPen,
  faPlus,
  faQuestionCircle,
  faUser,
  faShip,
  faTrash
);
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

const routes: RouteConfig[] = [{ path: "/", component: Home }];

const router = new VueRouter({
  routes,
  base: __dirname,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
