export default {
  namespaced: true,
  state: () => ({
    showSidebar: true,
  }),
  mutations: {
    SET_SHOW_SIDEBAR(state, value) {
      state.showSidebar = value;
    },
  },
  actions: {},
  getters: {
    showSidebarStatus(state) {
      return state.showSidebar;
    },
  },
};