export default {
  namespaced: true,
  state: () => ({
    LogoLg: process.env.VUE_APP_LOGO_LG,
    logoSm: process.env.VUE_APP_LOGO_SM,
    sidebarStatus: true,
    globalLoaderStatus: true,
    support_email: 'dev.erick95@gmail.com'
  }),
  mutations: {
    SET_SIDEBAR_STATUS(state, value) {
      state.sidebarStatus = value;
    },
    SET_GLOBAL_LOADER_STATUS(state, value) {
      state.globalLoaderStatus = value
    }
  },
  actions: {},
  getters: {
    getLogoLg(state) {
      return state.LogoLg
    },
    getlogoSm(state) {
      return state.logoSm
    },
    getSidebarStatus(state) {
      return state.sidebarStatus;
    },
    getGlobalLoaderStatus(state) {
      return state.globalLoaderStatus
    },
    getSupportEmail(state) {
      return state.support_email
    }
  },
};