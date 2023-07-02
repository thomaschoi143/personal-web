<template>
	<section>
		<div class="container">
			<p>
				This website is built with Vue.js.<br />
				Designed and Developed by<br /><strong>Thomas Choi</strong><br /><span
					class="copyright"
					>&copy;</span
				>
				{{ year }}. All rights reserved.
			</p>
		</div>
	</section>
</template>
<script setup>
const d = new Date();
const year = d.getFullYear();
</script>
<style lang="scss" scoped>
@import "../style.scss";
section {
	background: $primary-color;

	.container {
		padding: 30px 10px;

		p {
			color: $dark-grey-color;
			text-align: center;
			line-height: 22px;
		}
	}
}
</style>
