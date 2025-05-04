import { createStore } from "vuex";
import loadingStore from "./modules/loading";

export default createStore({
  modules: {
    loadingStore: loadingStore,
  },
});
