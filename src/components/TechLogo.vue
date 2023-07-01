<template>
	<div class="tech">
		<div class="logo">
			<img :src="getImgUrl('logos/' + techLogo)" :alt="tech + ' logo'" />
		</div>
		<div class="name">{{ tech }}</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue";
import { getImgUrl } from "../utils";

const { tech } = defineProps(["tech"]);

let techLogo = tech.replace(" ", "").replace(".", "").toLowerCase();

if (tech === "Express" || tech === "SQL") {
	techLogo += ".png";
} else {
	techLogo += ".svg";
}
</script>
<style lang="scss" scoped>
@import "../style.scss";

.tech {
	display: inline-block;
	height: 100px;
	margin: 10px;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
	.logo {
		height: 80%;
		padding: 5px;

		img {
			height: 100%;
			width: auto;
			margin: 0 auto;
		}
	}

	.name {
		color: $dark-grey-color;
		margin-top: 5px;
	}

	&:hover {
		transform: scale(115%);
	}

	&:active {
		transform: scale(140%);
	}
}
</style>
