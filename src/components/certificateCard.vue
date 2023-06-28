<template>
	<li class="card">
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
					<skill-tag skill="Verify" color="grey" />
				</a>
			</div>
		</content>
	</li>
</template>
<script setup>
import { defineProps } from "vue";
import { getImgUrl } from "../utils";
import SkillTag from "./SkillTag.vue";

const { cert } = defineProps(["cert"]);
</script>
<style lang="scss" scoped>
@import "../style.scss";
.card {
	@extend .white-gradient;
	@extend .card-box-shadow;
	display: flex;
	padding: 15px;
	margin-bottom: 30px;

	figure {
		max-width: 100px;
		padding: 14px;

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
				font-size: 20px;

				span {
					margin-bottom: 0;
				}

				&:hover {
					color: $dark-grey-color;
				}
			}
		}
	}
}
</style>
