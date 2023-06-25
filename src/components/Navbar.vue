<template>
	<nav>
		<router-link v-for="(view, index) in views" :to="`/${view.link}`" :key="index">{{
			view.name
		}}</router-link>
	</nav>
</template>
<script setup>
const views = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Projects",
		link: "project",
	},
	{
		name: "Contact",
		link: "contact",
	},
];
</script>
<style scope>
a {
	color: inherit;
	font-size: 20px;
	text-decoration: none;
}
</style>
