import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import loading from "./loading";
import persistUser from "./persistUser";

const store = createStore({
  state() {
    return {
      persistUser: persistUser.state,
      loading: loading.state,
    };
  },
  mutations: {},
  modules: {
    persistUser,
    loading,
  },
  plugins: [
    createPersistedState({
      paths: [""],
    }),
  ],
});

export default store;
