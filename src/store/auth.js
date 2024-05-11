import Cookies from "js-cookie";

import AuthService from "../services/auth";

export default {
  namespaced: true,
  state: () => ({
    user: null,
    authRoute: null,
    authToken: Cookies.get(process.env.VUE_APP_COOKIE_NAME) || null
  }),
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SET_SESSION(state, token) {
      state.authToken = token
      Cookies.set(process.env.VUE_APP_COOKIE_NAME, token, { expires: 7 });
    },
    LOGOUT(state) {
      Cookies.remove(process.env.VUE_APP_COOKIE_NAME);
      state.user = null;
    },
    SET_AUTH_ROUTE(state, data) {
      state.authRoute = data;
    },
  },
  actions: {
    async verifyToken({state}) {
      try {
        let response = await AuthService.getUserData(process.env.VUE_APP_AUTH_ROUTE, state);

        return response.data.user;
      } catch (error) {
        console.log("Error en verifyToken");
        console.log(error);
      }
    },
  },
  getters: {
    getAuthToken(state) {
      return state.authToken
    },
    getCurrentUser(state) {
      return state.user;
    },
    getAuthRoute(state) {
      return state.authRoute;
    },
  },
};

