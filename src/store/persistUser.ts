const persistUser = {
  namespaced: true,
  state: {
    user: {
      userName: null,
      roleRight: null,
      accessRight: null,
      token: null,
    },
    isFetchedAuth: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsLoged(state, payload) {
      state.isLoged = payload;
    },
    setIsFetchedAuth(state, payload) {
      state.isFetchedAuth = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
    },
  },
};

export default persistUser;
