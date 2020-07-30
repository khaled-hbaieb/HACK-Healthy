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

import "prismjs";
import "prismjs/themes/prism.css";
import VsPrism from "./components/prism/VsPrism.vue";
Vue.component(VsPrism.name, VsPrism);

import router from "./router";
Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuesax, {

  theme: {
    colors: {
      primary: "#fb9678",
    },
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
import "@/assets/scss/style.scss";
