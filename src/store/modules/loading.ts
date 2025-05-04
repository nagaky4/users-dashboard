interface ILoadingState {
  isLoading: boolean;
}

export default {
  namespaced: true,
  state: () => ({
    isLoading: false,
  }),
  mutations: {
    setLoading(state: ILoadingState, status: boolean) {
      state.isLoading = status;
    },
  },
  actions: {
    startLoading({ commit }: any) {
      commit("setLoading", true);
    },
    stopLoading({ commit }: any) {
      commit("setLoading", false);
    },
  },
  getters: {
    isLoading: (state: ILoadingState) => state.isLoading,
  },
};
