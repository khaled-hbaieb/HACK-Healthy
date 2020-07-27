import AuthService from "../services/auth.service";
import axios from "axios";
import jwt from "jwt-decode";
const user = localStorage.getItem("token");
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
console.log("user", user);
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      axios.defaults.headers.common["Authorization"] = user.token;
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);

          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      console.log("mutation ", user);
      state.user = user;
      axios
        .post("/api/users/clinicX/patients/checkPatient", {
          _id: jwt(user.token).userId,
        })
        .then(function(response) {
          console.log("headers", response.headers);
        });
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
