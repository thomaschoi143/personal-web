<template>
	<li :class="[isVisible ? 'in-view' : '', direction]" class="timeline">
		<div class="card" v-element-visibility="onElementVisibility">
			<figure>
				<img
					:src="getImgUrl('portfolio/' + experience.company.icon)"
					:alt="experience.company.name + 'Logo'"
				/>
			</figure>
			<content>
				<div class="card-heading">
					<a :href="experience.company.link" target="_blank">{{
						experience.company.name
					}}</a>
				</div>
				<div
					class="position"
					v-for="(position, index) in experience.positions"
					:key="index"
				>
					<div class="title">
						{{ position.name }}
						<span class="period">| {{ position.start }} ~ {{ position.end }}</span>
					</div>
					<p v-if="position.WAM">WAM: {{ position.WAM }}</p>
					<p v-if="position.GPA">GPA: {{ position.GPA }}</p>
					<ul v-if="position.responsibilities">
						<li
							v-for="(responsibility, index) in position.responsibilities"
							:key="index"
						>
							{{ responsibility }}
						</li>
					</ul>
					<div v-if="position.subjects" class="subjects">
						<p>Notable subjects taken:</p>
						<ul>
							<li v-for="(sub, index) in position.subjects" :key="index">
								{{ sub }}
							</li>
						</ul>
					</div>
				</div>
				<div class="skills" v-if="experience.skills">
					<skill-tag
						v-for="(skill, index) in experience.skills"
						:key="index"
						:skill="skill"
						color="orange"
					/>
				</div>
				<div class="links" v-if="experience.company.link || experience.company.linkedin">
					<a
						:href="experience.company.link"
						target="_blank"
						v-if="experience.company.link"
					>
						<font-awesome-icon :icon="['fas', 'link']" />
					</a>
					<a
						:href="experience.company.linkedin"
						target="_blank"
						v-if="experience.company.linkedin"
					>
						<font-awesome-icon :icon="['fab', 'linkedin']" />
					</a>
				</div>
			</content>
		</div>
	</li>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { vElementVisibility } from "@vueuse/components";
import SkillTag from "./SkillTag.vue";
import { getImgUrl } from "../utils";

const isVisible = ref(false);

const { experience, direction } = defineProps(["experience", "direction"]);

const onElementVisibility = (state) => {
	if (state && !isVisible.value) {
		isVisible.value = state;
	}
};
</script>

<style lang="scss" scoped>
@import "../style.scss";

li.timeline {
	list-style: none;
	position: relative;
	width: 6px;
	margin: 0;
	padding-top: 50px;
	background: $primary-color;

	&::after {
		content: "";
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: inherit;
		z-index: 1;

		transition: all 0.5s ease-in-out;
	}

	&.left {
		margin-left: 100%;

		.card {
			left: calc(-100vw + 250px);
			transform: translateX(-300px);

			@media (max-width: $tablet-width) {
				left: calc(-100vw + 130px);
			}

			@media (max-width: $phone-width) {
				left: calc(-100vw + 70px);
			}
		}
	}

	&.in-view::after {
		background-color: $sky-blue-color;
	}

	&.in-view .card {
		transform: none;
		visibility: visible;
		opacity: 1;
	}

	.card {
		@extend .white-gradient;
		@extend .card-box-shadow;
		display: flex;
		padding: 10px;
		position: relative;
		bottom: 0;
		left: 50px;
		width: calc(100vw - 300px);

		visibility: hidden;
		opacity: 0;
		transition: all 0.6s cubic-bezier(0.57, -0.01, 0.38, 1.01);

		transform: translateX(300px);

		@media (min-width: 1600px) {
			width: 1300px;
		}

		@media (max-width: $tablet-width) {
			width: calc(100vw - 170px);
		}

		@media (max-width: $phone-width) {
			width: calc(100vw - 90px);
			transform: translateX(100px);
			flex-direction: column;
			left: 30px;
		}

		figure {
			max-width: 120px;
			padding: 16px;

			@media (max-width: $phone-width) {
				margin: 0 auto;
				padding: 5px;
			}

			img {
				width: 100%;
				border-radius: 50%;
				object-fit: cover;
			}
		}

		content {
			flex: auto;
			padding: 8px 16px;

			.card-heading {
				font-weight: bold;
				font-size: 22px;

				margin: 10px 0;

				a:hover {
					text-decoration: underline;
				}
			}

			.position {
				margin-bottom: 5px;
				font-size: 18px;
				.title {
					font-weight: 600;
					margin-bottom: 6px;
					.period {
						color: $grey-color;
					}
				}

				ul {
					margin-left: 15px;
					li {
						list-style: initial;
						margin: 2px 0;
					}
				}
			}

			.skills {
				margin-top: 20px;
				margin-bottom: 5px;
			}

			.links {
				display: flex;
				align-items: center;
				justify-content: end;

				a {
					margin-right: 15px;
					font-size: 30px;

					&:first-child {
						font-size: 25px;
					}

					&:hover {
						color: $dark-grey-color;
					}
				}
			}
		}
	}
}
</style>
