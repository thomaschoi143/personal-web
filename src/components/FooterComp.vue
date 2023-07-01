<template>
	<div class="container">
		<p>
			This website is built with Vue.js.<br />
			Designed and Developed by<br /><strong>Thomas Choi</strong><br /><span class="copyright"
				>&copy;</span
			>
			{{ year }}. All rights reserved.
		</p>
	</div>
</template>
<script setup>
const d = new Date();
const year = d.getFullYear();
</script>
<style lang="scss" scoped>
@import "../style.scss";

.container {
	padding: 30px 10px;
	background: $primary-color;
	p {
		color: $dark-grey-color;
		text-align: center;
		line-height: 22px;
	}
}
</style>
