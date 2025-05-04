import axios, { AxiosInstance } from "axios";
import VueAxios from "vue-axios";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axiosInstance.interceptors.request.use(
  (config) => {
    // SET Authorization token if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  install: (app: any, options: any) => {
    app.use(VueAxios, axiosInstance);
    app.provide("$axios", app.config.globalProperties.axios as AxiosInstance);
  },
};

export { axiosInstance };
