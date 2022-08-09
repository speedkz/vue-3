enum PromptStatus {
  "ERROR" = 0,
  "SUCCESS" = 1,
}
type PromptInput = {
  status: PromptStatus;
  message: string;
};

const state = () => ({
  isLoading: false,
  prompt: {
    show: false,
    status: 0,
    message: "",
  },
});

const getters = {};

const actions = {
  setPrompt: ({ commit }, payload: PromptInput) => {
    commit("setPrompt", payload);
  },
};

const mutations = {
  setIsLoading: (state, isLoading: boolean) => {
    state.isLoading = isLoading;
  },
  setPrompt: (state, payload) => {
    state.prompt = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
