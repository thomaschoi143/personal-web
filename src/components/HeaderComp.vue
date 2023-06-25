<template>
	<header :class="{ 'is-scrolling': isScrolling }">
		<div class="container">
			<h2>Thomas Choi</h2>
			<navbar />
			<button class="hamburger" :class="{ 'is-active': isActive }" @click="toggleIsActive()">
				<div class="bar"></div>
			</button>
		</div>
		<navbar class="mobile-nav" :class="{ 'is-active': isActive }" />
	</header>
</template>
<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";

let { isScrolling } = defineProps(["isScrolling"]);

let isActive = ref(false);

function toggleIsActive() {
	isActive.value = !isActive.value;
}
</script>
<style lang="scss" scope>
header {
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;

	.container {
		padding-top: 32px;
		padding-bottom: 32px;
		display: flex;
		justify-content: space-between;

		h2 {
			color: inherit;
			text-transform: uppercase;
			font-size: 32px;
			font-weight: 600;
		}

		nav {
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(4, auto);

			@media (max-width: 768px) {
				display: none;
			}
		}
	}

	&.is-scrolling {
		background-color: #12002f;

		.container {
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}
}

.hamburger {
	position: relative;
	display: block;
	width: 35px;
	cursor: pointer;

	appearance: none;
	background: none;
	outline: none;
	border: none;
}

.hamburger .bar,
.hamburger:after,
.hamburger:before {
	content: "";
	display: block;
	width: 100%;
	height: 5px;
	background: #fff;
	margin: 6px 0px;
	transition: 0.4s;
}

.hamburger.is-active:before {
	transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active:after {
	transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar {
	opacity: 0;
}

.mobile-nav {
	position: fixed;
	display: block;
	top: 0;
	left: 100%;
	width: 100%;
	min-height: 100vh;
	z-index: 98;
	background-color: #12002f;
	padding-top: 120px;
	transition: 0.4s;

	a {
		display: block;
		width: 100%;
		max-width: 200px;
		margin: 0 auto 16px;
		text-align: center;
		padding: 12px 16px;
		background-color: #1f103f;

		color: #fff;
		text-decoration: none;
	}
}

.mobile-nav.is-active {
	left: 0;
}

.mobile-nav a:hover {
	background-color: #241044;
}

@media (min-width: 768px) {
	.mobile-nav {
		display: none;
	}

	.hamburger {
		display: none;
	}
}
</style>
