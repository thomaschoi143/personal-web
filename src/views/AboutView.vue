<template>
	<section id="about" class="dark-gradient">
		<div class="container">
			<div class="card">
				<div class="photo"></div>
				<div class="banner"></div>
				<content>
					<h2>Thomas Choi</h2>
					<h3>Software Engineer</h3>

					<p>
						Hi there! My name is Thomas and I'm a master of Computer Science student at
						the University of Melbourne. My hobbies include photography and workout. I
						code with passion and heart and am eager to constantly explore new fields in
						software development and technologies that improve people's lives and the
						world we live in.
					</p>

					<p>
						<font-awesome-icon :icon="['fas', 'envelope']" class="card-icon" />
						{{ contact.email }}
					</p>

					<div class="techs-button">Frontend</div>
					<div class="techs" id="frontend-techs">
						<tech-logo
							v-for="(tech, index) in contact.frontend"
							:key="index"
							:tech="tech"
						/>
					</div>

					<div class="techs-button">Backend</div>
					<div class="techs" id="backend-techs">
						<tech-logo
							v-for="(tech, index) in contact.backend"
							:key="index"
							:tech="tech"
						/>
					</div>

					<div class="links">
						<a :href="contact.github" target="”_blank”">
							<font-awesome-icon :icon="['fab', 'square-github']" class="card-icon"
						/></a>
						<a :href="contact.linkedin" target="”_blank”">
							<font-awesome-icon :icon="['fab', 'linkedin']" class="card-icon"
						/></a>
						<a :href="contact.instagram" target="”_blank”">
							<font-awesome-icon
								:icon="['fab', 'square-instagram']"
								class="card-icon"
						/></a>
					</div>
				</content>
			</div>
		</div>
	</section>
</template>
<script setup>
import { inject } from 'vue';
import TechLogo from '../components/TechLogo.vue';

const data = inject('$data');
const contact = data.getContact();
</script>
<style lang="scss" scoped>
@import '../style.scss';

section {
	.container {
		padding-top: 140px;
		padding-bottom: 64px;
		min-height: 100vh;

		.card {
			margin: 0 auto;
			max-width: 700px;

			border-radius: 10px;
			overflow: hidden;

			@extend .white-gradient;
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

			.photo {
				z-index: 3;
				position: relative;
				border-radius: 50%;
				height: 180px;
				width: 180px;
				margin: 0 auto;
				background-image: url('../assets/profile.jpg');
				background-size: cover;
				background-position: 50% 50%;
				top: 100px;
				box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
			}

			.banner {
				z-index: 2;
				position: relative;
				margin-top: -184px;
				width: 100%;
				height: 200px;
				background-image: url('../assets/profileBanner.jpg');
				background-size: cover;
				border-bottom: solid 1px lightgrey;
			}

			content {
				display: block;
				margin-top: 97px;
				margin-bottom: 30px;

				text-align: center;

				h2 {
					margin-bottom: 0px;
					text-transform: none;
				}

				h3 {
					font-weight: 400;
					font-size: 20px;
					margin-bottom: 15px;
				}

				p {
					margin: 20px;
					font-size: 18px;
				}

				.techs-button {
					padding: 10px;

					color: #fff;
					text-transform: uppercase;
					background: $sky-blue-color;
				}

				.techs {
					padding: 15px;
				}

				.links {
					margin-top: 20px;
					display: flex;
					justify-content: center;
					a {
						color: $sky-blue-color;
						margin: 10px 10px;
						font-size: 40px;

						&:hover {
							color: $light-sky-blue-color;
						}
					}
				}
			}
		}
	}
}
</style>
