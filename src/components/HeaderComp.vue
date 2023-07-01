<template>
	<header :class="{ 'is-scrolling': isScrolling }">
		<div class="container">
			<router-link to="/" @click="isActive ? toggleIsActive() : ''">
				<h2>Thomas Choi</h2>
			</router-link>
			<navbar />
			<button class="hamburger" :class="{ 'is-active': isActive }" @click="toggleIsActive()">
				<div class="bar"></div>
			</button>
		</div>
		<navbar class="mobile-nav" :class="{ 'is-active': isActive }" :toggle="toggleIsActive" />
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
@import "../style.scss";

header {
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;

	.container {
		position: relative;
		padding-top: 32px;
		padding-bottom: 32px;
		display: flex;
		justify-content: space-between;
		z-index: 99;

		h2 {
			color: inherit;
			text-transform: uppercase;
			font-size: 32px;
			font-weight: 600;
			transition: all 0.3s ease-in-out;

			@media (pointer: fine) {
				&:hover {
					color: #95a5a6;
				}
			}
		}

		nav {
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(4, auto);

			@media (max-width: $phone-width) {
				display: none;
			}
		}
	}

	&.is-scrolling {
		background-color: $primary-color;

		.container {
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}
}

.hamburger {
	position: relative;
	display: none;
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
	display: none;
	top: 0;
	left: 100%;
	width: 100%;
	min-height: 100vh;
	z-index: 98;
	background-color: $primary-color;
	padding-top: 120px;
	transition: 0.4s;

	a {
		display: block;
		width: 100%;
		max-width: 200px;
		margin: 0 auto 16px;
		text-align: center;
		padding: 12px 16px;
		font-size: 22px;

		color: #fff;
		text-decoration: none;
	}
}

.mobile-nav.is-active {
	left: 0;
}

@media (max-width: $phone-width) {
	.mobile-nav {
		display: block;
	}

	.hamburger {
		display: block;
	}
}
</style>
