<template>
	<section class="contact">
		<div class="container">
			<h2 class="gradient-text purple-orange-gradient">Contact</h2>
			<div class="card" v-if="contact">
				<div class="card-content">
					<h3 class="card-title">Thomas Choi</h3>
					<h4 class="card-subtitle">
						<span class="typing-effect" :style="{ '--n': contact.motto.length }">
							{{ contact.motto }}
						</span>
					</h4>
					<div class="contacts">
						<p>
							<font-awesome-icon :icon="['fas', 'location-dot']" class="card-icon" />
							{{ contact.location }}
						</p>
						<p>
							<font-awesome-icon :icon="['fas', 'envelope']" class="card-icon" />
							{{ contact.email }}
						</p>
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
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { inject, ref } from "vue";

const data = inject("$data");
const contact = ref(null);

data.getContact()
	.then((r) => (contact.value = r))
	.catch((e) => console.log(e));
</script>
<style lang="scss" scoped>
@import "../style.scss";
section.contact {
	background-color: $primary-color;
	height: calc(100vh - 70.5px);

	.container {
		padding-top: 64px;
		padding-bottom: 64px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.card {
			aspect-ratio: 1 / 0.7;
			border: 4px solid $sky-blue-color;
			background: $primary-color;
			cursor: pointer;
			position: relative;
			width: 100%;
			max-width: 700px;

			&:before {
				background: linear-gradient(
					130deg,
					transparent 0% 33%,
					rgb(98, 0, 234) 66%,
					rgb(236, 64, 122) 83.5%,
					rgb(253, 216, 53) 100%
				);
				background-position: 0% 0%;
				background-size: 300% 300%;
				content: "";
				height: 100%;
				left: 0px;
				pointer-events: none;
				position: absolute;
				top: 0px;
				transition: background-position 350ms ease, transform 350ms ease;
				width: 100%;

				z-index: 1;
			}

			&:hover:before {
				background-position: 100% 100%;
				transform: scale(1.08, 1.03);
			}

			&:hover > .card-content {
				background-position: -10% 0%;
			}

			&:hover > .card-icon {
				color: white;
			}

			&:hover > .card-content > .card-subtitle > .typing-effect {
				opacity: 1;
				animation: blink 0.02s infinite steps(1),
					typing calc(var(--n) * 0.02s) steps(var(--n)) forwards;
			}

			.card-content {
				background-image: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
				background-position: 0% 0%;
				background-size: 5vmin 5vmin;
				height: 100%;
				padding: 70px 80px;
				text-align: center;
				color: #fff;
				position: relative;
				transition: background-position 350ms ease;
				z-index: 2;

				.card-title {
					font-weight: 900;

					font-size: 45px;
					letter-spacing: 2px;
				}
				.card-subtitle {
					padding: 10px 0;
					font-size: 16px;
				}

				.contacts {
					font-size: 20px;
					margin-top: 20px;
					margin-bottom: 20px;

					p {
						margin: 10px 0;
					}
				}

				.links {
					display: flex;
					justify-content: center;
					margin-top: 60px;

					.card-icon {
						color: rgba(255, 255, 255, 0.5);
						font-size: 45px;
						width: 90px;
						transition: color 250ms ease;
						z-index: 2;

						&:hover {
							color: #fff;
						}
					}
				}
			}
		}
	}
}
</style>
