import Vue from "vue";
import Vuex from "vuex";
import { auth } from './auth.module';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isSidebarActive: false,
    themeColor: "#2962ff",
    isAuthenticated: !!localStorage.token || false,
  },
  mutations: {
    IS_SIDEBAR_ACTIVE(state, value) {
      state.isSidebarActive = value;
    },
  },
  actions: {
    
  },
  getters: {

  },
  modules: {
    auth
  },
});
