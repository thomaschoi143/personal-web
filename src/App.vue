<template>
	<header-comp :is-scrolling="isScrolling" />
	<router-view />
</template>
<script setup>
import { ref } from "vue";
import HeaderComp from "./components/HeaderComp.vue";

let isScrolling = ref(false);

window.addEventListener("scroll", (e) => {
	if (window.scrollY > 100) {
		isScrolling.value = true;
	} else {
		isScrolling.value = false;
	}
});
</script>
