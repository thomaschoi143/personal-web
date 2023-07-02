import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import AboutView from "./views/AboutView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: HomeView },
		{ path: "/about", component: AboutView },
		{ path: "/projects", component: ProjectsView },
	],
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { el: to.hash, behavior: "smooth" };
		} else {
			return { top: 0 };
		}
	},
});

export default router;
