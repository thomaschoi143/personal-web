<template>
	<section class="banner">
		<div class="container">
			<h1>
				Website you're <br class="hide-mob" /><span
					class="purple-blue-gradient gradient-text"
					>not afraid</span
				>
				to share
			</h1>
			<h3>Website solutions for all your needs</h3>
			<router-link to="/" class="button">Find out more</router-link>
		</div>
	</section>
</template>
<script setup></script>
<style lang="scss" scope>
@import "../style.scss";

section.banner {
	color: #fff;
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url("/header.jpg");
	background-position: center right;
	background-size: cover;

	&:after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		background-color: $primary-color;
		opacity: 0.7;
	}

	.container {
		position: relative;
		z-index: 1;

		h1 {
			font-size: 72px;
			margin-bottom: 32px;

			span {
				color: $sky-blue-color;
			}

			@media (max-width: 768px) {
				font-size: 32px;
			}
		}

		h3 {
			font-size: 36px;
			font-weight: 400;
			margin-bottom: 32px;

			@media (max-width: 768px) {
				font-size: 18px;
			}
		}
	}
}

@media (max-width: 768px) {
	.hide-mob {
		display: none;
	}
}
</style>
