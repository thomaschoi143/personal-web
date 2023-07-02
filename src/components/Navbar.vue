<template>
	<nav>
		<router-link
			v-for="(view, index) in views"
			:to="view.link"
			:key="index"
			class="link"
			:class="{ 'on-this-view': isOnThisView(view.link) }"
			@click="toggle ? toggle() : ''"
			>{{ view.name }}</router-link
		>
		<a
			class="button purple-gradient resume"
			:href="getImgUrl('Resume_ThomasChoi_web.pdf')"
			target="_blank"
			@click="toggle ? toggle() : ''"
		>
			Resume
		</a>
	</nav>
</template>
<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import { getImgUrl } from "../utils";

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

nav {
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(5, auto);
	align-items: center;

	@media (max-width: $phone-width) {
		display: none;
	}

	.link {
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

	.button.resume {
		font-size: 20px;
	}
}
</style>
