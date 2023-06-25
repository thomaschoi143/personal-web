import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./routes";
import $pages from "./data";

const app = createApp(App);

app.use(router);

app.provide("$pages", $pages);

app.mount("#app");
