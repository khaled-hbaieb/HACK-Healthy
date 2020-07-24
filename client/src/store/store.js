import Vue from "vue";
import Vuex from "vuex";
import { auth } from './auth.module';
Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    isSidebarActive: false,
    themeColor: "#2962ff",
    isAuthenticated: !!localStorage.token || false,
  },
  mutations: {
    //This is for Sidbar trigger in mobile
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
