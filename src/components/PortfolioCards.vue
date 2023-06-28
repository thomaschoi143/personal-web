<template>
	<ul class="cards">
		<portfolio-card
			v-for="(experience, index) in experience"
			:key="index"
			:experience="experience"
			:direction="direction"
		/>
	</ul>
</template>
<script setup>
import { defineProps } from "vue";
import PortfolioCard from "../components/PortfolioCard.vue";

const { experience, direction } = defineProps(["experience", "direction"]);
</script>
<style lang="scss" scoped>
@import "../style.scss";
.cards {
	padding-top: 20px;
	padding-bottom: 20px;
}
</style>
