<template>
	<section>
		<div class="container">
			<h2 class="purple-orange-gradient gradient-text">Projects</h2>
			<div class="cards">
				<div class="card" v-for="(project, index) in projects" :key="index">
					<a :href="project.github || project.link" target="_blank" class="card-figure">
						<figure
							:style="{
								backgroundImage: project.icon
									? `url(${getImgUrl('projects/' + project.icon)})`
									: `url(${getImgUrl('projects/placeholder.jpg')})`,
							}"
						></figure
					></a>
					<content>
						<div class="card-info">
							<span class="card-grad-tag">{{ project.techs[0] }}</span>
							<span>{{ project.startDate }}</span>
							<span :class="`status-${project.status}`">{{ project.status }}</span>
						</div>

						<div class="card-heading">
							<a :href="project.github || project.link" target="_blank">{{
								project.name
							}}</a>
						</div>

						<p class="workload">
							<font-awesome-icon :icon="['far', 'clock']" /><span
								>{{ project.workload }}+ Hours</span
							>
						</p>

						<p class="marks" v-if="project.marks">UniMelb Marks: {{ project.marks }}</p>

						<ul>
							<li v-for="(des, index) in project.description" :key="index">
								{{ des }}
							</li>
						</ul>

						<div class="card-tags">
							<skill-tag
								v-for="(skill, index) in project.techs"
								:key="index"
								:skill="skill"
								color="grey"
							/>
						</div>

						<div class="links">
							<a
								:href="project.link"
								v-if="project.link"
								class="live-demo"
								target="_blank"
								>live demo</a
							>
							<a :href="project.github" class="github" target="_blank">
								<font-awesome-icon
									:icon="['fab', 'square-github']"
									class="card-icon"
								/>
							</a>
						</div>
					</content>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { inject } from "vue";
import SkillTag from "../components/SkillTag.vue";
import { getImgUrl } from "../utils";

const data = inject("$data");

const projects = data.getProjects();
</script>
<style lang="scss" scoped>
@import "../style.scss";

section {
	background-color: $primary-color;
	padding-top: 128px;
	padding-bottom: 128px;

	&.pseudo-section {
		height: 1000px;
	}

	.cards {
		.card {
			@extend .white-gradient;
			@extend .card-box-shadow;
			margin-top: 20px;
			margin-bottom: 20px;
			border-radius: 20px;
			display: flex;
			overflow: hidden;

			transition: all 0.3s;
			position: relative;

			&:hover {
				transform: translateX(20px);
			}

			@media (max-width: $phone-width) {
				flex-direction: column;
			}

			.card-figure {
				flex: 1 1 150px;

				figure {
					overflow: hidden;
					background-position: center;
					background-size: cover;
					position: relative;
					height: 150px;

					&::before {
						content: "";
						display: block;
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: 0;
						@extend .purple-gradient;
						opacity: 0.6;
					}
				}
			}

			content {
				flex: 2;
				padding: 30px 40px;
				.card-info {
					margin-bottom: 5px;

					& > span:first-child {
						margin-right: 6px;
					}

					& > span:nth-child(2) {
						color: $grey-color;
						margin-right: 6px;
					}

					& > span:last-child {
						text-transform: uppercase;
						float: right;
					}

					.status-developing {
						color: $purple-color;
					}

					.status-maintaining {
						color: $orange-color;
					}

					.status-finished {
						color: $green-color;
					}
				}

				.card-grad-tag {
					@extend .gradient-text;
					@extend .purple-blue-gradient;
				}

				.card-heading {
					font-size: 28px;
					margin-bottom: 20px;

					a {
						color: $primary-color;
						font-weight: bold;
						text-decoration: none;
					}

					a:hover {
						text-decoration: underline;
					}
				}

				.workload {
					font-size: 18px;
					margin-bottom: 10px;
					span {
						margin-left: 7px;
					}
				}

				.marks {
					margin-bottom: 10px;
				}

				ul {
					margin-left: 15px;
					margin-bottom: 30px;
					li {
						margin: 5px 0;
					}
				}

				.links {
					margin-top: 10px;
					display: flex;
					justify-content: end;
					align-items: center;

					.live-demo {
						background: $red-color;
						padding: 1px 5px;
						border-radius: 4px;
						color: #fff;
						text-transform: uppercase;
						font-size: 22px;
						margin-right: 15px;
						animation: live 2s infinite;

						&:hover {
							background: $light-red-color;
						}

						@keyframes live {
							0%,
							100% {
								opacity: 0.2;
							}
							50% {
								opacity: 1;
							}
						}
					}

					.github {
						font-size: 40px;
						cursor: pointer;

						&:hover {
							color: $dark-grey-color;
						}
					}
				}
			}
		}
	}
}
</style>
