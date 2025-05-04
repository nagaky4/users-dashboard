import { useStore } from "vuex";

export const useLoading = () => {
  const store = useStore();

  const showLoading = () => {
    store.dispatch("loadingStore/startLoading");
  };

  const hideLoading = () => {
    store.dispatch("loadingStore/stopLoading");
  };

  return {
    showLoading,
    hideLoading,
  };
};
