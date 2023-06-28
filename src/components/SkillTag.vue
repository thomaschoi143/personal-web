<template>
	<span :class="color" v-if="skill">{{ skill }}</span>
</template>
<script setup>
import { defineProps } from "vue";

const { skill, color } = defineProps(["skill", "color"]);
</script>
<style lang="scss" scoped>
@import "../style.scss";

span {
	display: inline-block;
	padding: 5px 12px;
	font-size: 0.9em;

	border-radius: 100px;
	text-transform: uppercase;
	margin-right: 10px;
	margin-bottom: 10px;

	&:hover {
		color: #fff !important;
	}
}

span.orange {
	color: $orange-color;
	border: 2px solid $orange-color;
	cursor: pointer;

	&:hover {
		background: $orange-color;
	}
}

span.grey {
	color: $grey-color;
	border: 2px solid $grey-color;

	&:hover {
		background: $grey-color;
	}
}
</style>
