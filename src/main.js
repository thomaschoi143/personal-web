import { createApp } from "vue";
import "./style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faSquareGithub, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./routes";
import $data from "./data";

library.add(faLinkedin, faSquareGithub, faSquareInstagram, faEnvelope, faLocationDot, faLink);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.provide("$data", $data);

app.mount("#app");
