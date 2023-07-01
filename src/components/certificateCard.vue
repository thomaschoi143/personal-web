<template>
	<li
		:class="['card', direction, isVisible && 'in-view']"
		v-element-visibility="onElementVisibility"
	>
		<figure>
			<img :src="getImgUrl('portfolio/' + cert.icon)" :alt="cert.name + ' logo'" />
		</figure>
		<content>
			<a :href="cert.link" target="_blank">
				<div class="card-heading">{{ cert.name }}</div>
			</a>
			<div class="issuer">
				{{ cert.issuer }} <span class="date"> | {{ cert.date }}</span>
			</div>
			<p v-if="cert.description">{{ cert.description }}</p>
			<div class="links" v-if="cert.link || cert.verify">
				<a :href="cert.verify" target="_blank" v-if="cert.verify">
					<skill-tag skill="Credential" color="grey" />
				</a>
			</div>
		</content>
	</li>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { getImgUrl } from "../utils";
import SkillTag from "./SkillTag.vue";
import { vElementVisibility } from "@vueuse/components";

const { cert, direction } = defineProps(["cert", "direction"]);
const isVisible = ref(false);

const onElementVisibility = (state) => {
	if (state && !isVisible.value) {
		isVisible.value = state;
	}
};
</script>
<style lang="scss" scoped>
@import "../style.scss";
.card {
	@extend .white-gradient;
	@extend .card-box-shadow;
	display: flex;
	padding: 15px;
	margin-bottom: 30px;

	visibility: hidden;
	opacity: 0;
	transition: all 0.6s cubic-bezier(0.57, -0.01, 0.38, 1.01);

	&.left {
		transform: translateX(-300px);
	}

	&.right {
		transform: translateX(300px);
	}

	&.in-view {
		transform: none;
		visibility: visible;
		opacity: 1;
	}

	figure {
		max-width: 100px;
		padding: 14px;

		@media (max-width: $phone-width) {
			max-width: 80px;
			padding: 10px;
		}

		img {
			width: 100%;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	content {
		flex: auto;
		padding: 5px;
		.card-heading {
			font-size: 18px;
			font-weight: 600;
			margin-bottom: 5px;

			&:hover {
				text-decoration: underline;
			}
		}

		.issuer {
			font-size: 16px;
			margin-bottom: 15px;

			.date {
				color: $grey-color;
			}
		}

		.links {
			display: flex;
			justify-content: end;

			a {
				font-size: 18px;
				margin-top: 15px;

				span {
					margin-bottom: 0;
				}
			}
		}
	}
}
</style>
