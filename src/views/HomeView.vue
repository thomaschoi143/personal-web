<template>
	<section class="banner">
		<div class="container">
			<h1>Website you're <br class="hide-mob" /><span>not afraid</span> to share</h1>
			<h3>Website solutions for all your needs</h3>
			<router-link to="/" class="button">Find out more</router-link>
		</div>
	</section>

	<section class="services">
		<div class="container">
			<h2>Services</h2>
			<div class="services-grid">
				<div class="service">
					<figure class="img-box">
						<img src="../assets/service-1.jpg" alt="Website Service" class="img" />
					</figure>
					<div class="content">
						<h3>Websites</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
					</div>
				</div>

				<div class="service">
					<figure class="img-box">
						<img src="../assets/service-2.jpg" alt="App Service" class="img" />
					</figure>
					<div class="content">
						<h3>Apps</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
					</div>
				</div>

				<div class="service">
					<figure class="img-box">
						<img src="../assets/service-3.jpg" alt="Games Service" class="img" />
					</figure>
					<div class="content">
						<h3>Games</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
					</div>
				</div>

				<div class="service">
					<figure class="img-box">
						<img src="../assets/service-4.jpg" alt="Mentoring Service" class="img" />
					</figure>
					<div class="content">
						<h3>Mentoring</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="projects">
		<div class="container">
			<h2>Projects</h2>

			<div class="projects-grid">
				<div class="project">
					<div class="content">
						<h3>Project 1</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
						<router-link to="/" class="button">Learn more</router-link>
					</div>
				</div>

				<div class="project">
					<div class="content">
						<h3>Project 2</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
						<router-link to="/" class="button">Learn more</router-link>
					</div>
				</div>

				<div class="project">
					<div class="content">
						<h3>Project 3</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
						<router-link to="/" class="button">Learn more</router-link>
					</div>
				</div>

				<div class="project">
					<div class="content">
						<h3>Project 4</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
						<router-link to="/" class="button">Learn more</router-link>
					</div>
				</div>

				<div class="project">
					<div class="content">
						<h3>Project 5</h3>
						<p>asdfadsf asdfasdfsa fdasfdsa fdsafg adsfdsa fdsafd asdf</p>
						<router-link to="/" class="button">Learn more</router-link>
					</div>
				</div>
			</div>

			<div class="center">
				<router-link to="/" class="button">View more</router-link>
			</div>
		</div>
	</section>

	<section class="contact">
		<div class="container">
			<h2>Contact</h2>
			<form action="">
				<div class="form-grid">
					<input
						type="text"
						name="name"
						id="name"
						class="form-element"
						placeholder="Name"
					/>
					<input
						type="email"
						name="email"
						id="email"
						class="form-element"
						placeholder="Email"
					/>
					<textarea
						name="message"
						id="message"
						placeholder="Message"
						class="form-area"
					></textarea>
				</div>
				<div class="right-align">
					<input type="submit" value="Send message" class="button" />
				</div>
			</form>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scope>
section.banner {
	color: #fff;
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url("/header.jpg");
	background-position: center right;
	background-size: cover;

	&:after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		background-color: #12002f;
		opacity: 0.8;
	}

	.container {
		position: relative;
		z-index: 1;

		h1 {
			font-size: 72px;
			margin-bottom: 32px;

			span {
				color: #ff9fdb;
			}

			@media (max-width: 768px) {
				font-size: 32px;
			}
		}

		h3 {
			font-size: 36px;
			font-weight: 400;
			margin-bottom: 32px;

			@media (max-width: 768px) {
				font-size: 18px;
			}
		}
	}
}

section.services {
	background-color: #eee;

	.container {
		padding-top: 64px;
		padding-bottom: 64px;

		.services-grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 16px;

			@media (max-width: 1024px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}

			.service {
				background-color: #fff;
				border-radius: 16px;
				overflow: hidden;
				box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);

				.img-box {
					display: block;
					width: 100%;
					border-bottom: 5px solid pink;

					.img {
						display: block;
						width: 100%;
						height: 128px;
						object-fit: cover;
					}
				}

				.content {
					padding: 16px;
				}
			}
		}
	}
}

section.projects {
	padding-top: 64px;
	padding-bottom: 64px;

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px;
		margin-bottom: 32px;

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}

		.project {
			background-image: url("../assets/service-1.jpg");
			border-radius: 16px;
			overflow: hidden;

			.content {
				opacity: 0;
				color: #fff;
				padding: 16px;
				background-color: rgba(64, 39, 68, 0.8);
				transition: 0.4s;

				h3 {
					font-size: 32px;
					margin-bottom: 16px;

					@media (max-width: 1024px) {
						font-size: 28px;
					}
				}

				p {
					font-size: 18px;
					margin-bottom: 16px;

					@media (max-width: 1024px) {
						font-size: 16px;
					}
				}
			}

			&:hover {
				.content {
					opacity: 1;
				}
			}
		}
	}

	.center {
		text-align: center;
	}
}

section.contact {
	background-color: #9875d7;

	.container {
		padding-top: 64px;
		padding-bottom: 65px;

		h2 {
			color: #fff;
		}

		form {
			display: block;
			margin: 0 auto;
			max-width: 680px;

			.form-grid {
				display: grid;
				grid-gap: 16px;
				grid-template-columns: repeat(2, 1fr);
				margin-bottom: 16px;

				@media (max-width: 768px) {
					grid-template-columns: 1fr;
				}

				.form-element,
				.form-area {
					appearance: none;
					border: none;
					outline: none;
					background: none;

					display: block;
					width: 100%;
					background-color: #fff;
					border-radius: 8px;

					padding: 16px;
					font-size: 20px;
					color: #313131;

					&::placeholder {
						color: #aaa;
					}
				}

				.form-area {
					grid-column: 1/-1;
				}
			}

			.right-align {
				text-align: right;
			}
		}
	}
}

@media (max-width: 768px) {
	.hide-mob {
		display: none;
	}
}
</style>
