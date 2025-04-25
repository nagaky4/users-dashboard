import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosPlugin from "./plugins/axiosPlugin";

import "@/assets/scss/index.scss";

const app: any = createApp(App);

app.use(axiosPlugin);
app.use(store).use(router);
app.mount("#app");
