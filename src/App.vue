<template>
	<header-comp :is-scrolling="isScrolling" />
	<router-view />
	<footer-comp />
</template>
<script setup>
import { ref } from "vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

let isScrolling = ref(false);

window.addEventListener("scroll", (e) => {
	if (window.scrollY > 30) {
		isScrolling.value = true;
	} else {
		isScrolling.value = false;
	}
});
</script>
