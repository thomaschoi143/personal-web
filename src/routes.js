import { createRouter, createWebHashHistory } from "vue-router";
import HomeScreen from "./views/HomeView.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [{ path: "/", component: HomeScreen }],
});

export default router;
