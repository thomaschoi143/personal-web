<template>
	<section class="projects" v-if="projects">
		<div class="container">
			<h2 class="purple-orange-gradient gradient-text">Projects</h2>
		</div>
		<div class="cards">
			<div class="card" v-for="(project, index) in projects" :key="index">
				<div class="card-info">
					<span class="card-grad--video">{{ project.techs[0] }}</span>
					<span>{{ project.date }}</span>
				</div>

				<div class="card-heading">
					<a :href="project.link || project.github" target="_blank">{{ project.name }}</a>
				</div>

				<div class="card-tags">
					<skill-tag v-for="i in 2" :key="i" :skill="project.techs[i - 1]" color="grey" />
				</div>
			</div>
		</div>
		<div class="container">
			<div class="center">
				<router-link to="/projects" class="button">View more</router-link>
			</div>
		</div>
	</section>
</template>
<script setup>
import { inject, ref } from "vue";
import SkillTag from "../components/SkillTag.vue";

const data = inject("$data");

const projects = ref(null);

data.getProjects()
	.then((r) => (projects.value = r))
	.catch((e) => console.log(e));
</script>
<style lang="scss" scoped>
@import "../style.scss";
section.projects {
	padding-top: 64px;
	padding-bottom: 64px;
	background-color: $primary-color;

	.cards {
		display: flex;
		align-items: center;
		overflow-x: scroll;
		padding-top: 50px;
		padding-bottom: 50px;
		padding-left: 128px;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none;
		}

		@media (max-width: 1024px) {
			padding-left: 64px;
		}

		@media (max-width: 768px) {
			padding-left: 32px;
		}
	}

	.card {
		@extend .white-gradient;
		@extend .card-box-shadow;

		min-width: 300px;
		max-width: 300px;
		height: 400px;
		margin-left: -80px;
		border-radius: 40px;
		padding: 30px;

		transition: all 0.3s;
		position: relative;

		&:first-child {
			margin-left: 0;
		}

		&:hover {
			transform: translateY(-20px);
		}

		&:hover + .card {
			transform: translateX(80px);
		}

		&:last-child {
			margin-right: 128px;
		}
	}

	.card-info {
		margin-bottom: 14px;

		& > span:first-child {
			margin-right: 6px;
		}

		& > span:last-child {
			color: $grey-color;
		}
	}

	.card-grad--video {
		@extend .gradient-text;
		@extend .purple-blue-gradient;
	}

	.card-grad--shot {
		@extend .gradient-text;
		@extend .green-gradient;
	}

	.card-heading {
		font-size: 1.6em;

		a {
			color: $primary-color;
			font-weight: bold;
			text-decoration: none;
		}
	}

	.card-tags {
		position: absolute;
		bottom: 50px;
	}

	.center {
		text-align: center;

		.button {
		}

		.button:hover {
		}
	}
}
</style>
