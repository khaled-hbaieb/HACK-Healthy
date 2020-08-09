import Vue from "vue";
import Vuesax from "vuesax";

import App from "./App.vue";

import { validate } from "vee-validate";
Vue.use(validate);
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import store from "./store/store";

import AutoResponsive from "autoresponsive-vue";
Vue.use(AutoResponsive);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faLock);
Vue.component("font-awesome-icon", FontAwesomeIcon);
import "prismjs";
import "prismjs/themes/prism.css";
import VsPrism from "./components/prism/VsPrism.vue";
Vue.component(VsPrism.name, VsPrism);

import router from "./router";
Vue.config.productionTip = false;
Vue.config.devtools = true;

import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA5B4dM3gNQRexvjz3ge2mGewwYBWMOJo0",
    libraries: "places"
  },
  installComponents: true
});

import VueGmaps from 'vue-gmaps'
Vue.use(VueGmaps, {
  key: "AIzaSyA5B4dM3gNQRexvjz3ge2mGewwYBWMOJo0"
})
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#000000",
    },
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
import "@/assets/scss/style.scss";
