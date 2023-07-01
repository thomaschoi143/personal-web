<template>
	<nav>
		<router-link
			v-for="(view, index) in views"
			:to="view.link"
			:key="index"
			:class="{ 'on-this-view': isOnThisView(view.link) }"
			@click="toggle ? toggle() : ''"
			>{{ view.name }}</router-link
		>
	</nav>
</template>
<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const { toggle } = defineProps(["toggle"]);
const route = useRoute();
const isOnThisView = (linkName) => linkName === route.fullPath;
const views = [
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Projects",
		link: "/projects",
	},
	{
		name: "Portfolio",
		link: "/#portfolio",
	},
	{
		name: "Contact",
		link: "/#contact-section",
	},
];
</script>
<style lang="scss" scoped>
@import "../style.scss";

a {
	&::after {
		content: "";
		display: block;
		width: 0;
		height: 2px;
		background: #fff;
		transition: all 0.3s;
	}

	&:hover,
	&.on-this-view {
		color: #dcdde1;
	}

	&:hover::after,
	&.on-this-view::after {
		width: 100%;
	}
}
</style>
