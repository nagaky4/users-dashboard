import axios, { AxiosInstance } from "axios";
import VueAxios from "vue-axios";

export default {
  install: (app: any, options: any) => {
    const instance = axios.create();
    instance.defaults.baseURL = process.env.VUE_APP_BASE_URL;
    instance.interceptors.request.use(
      (config) => {
        // SET Authorization token if needed
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    app.use(VueAxios, instance);
    app.provide("$axios", app.config.globalProperties.axios as AxiosInstance);
  },
};
