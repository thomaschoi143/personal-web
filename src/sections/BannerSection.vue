<template>
	<section class="banner">
		<div class="container">
			<h1>
				Hello World! <br />
				I am <span class="gradient-text purple-blue-gradient">Thomas Choi</span>
			</h1>
			<h3>Master of Computer Science Student @UniMelb</h3>
			<h4 style="display: inline-block">
				<span class="typing-effect show-typing-effect" style="--n: 42">
					Software Engineer | <br />Full-stack Developer | <br />Designer
				</span>
			</h4>
			<h4>
				Always <span class="keyword">learning</span>. <br />
				Always <span class="keyword">developing</span>. <br />
				Always <span class="keyword">improving</span>.<br />
			</h4>
			<router-link to="/about" class="button purple-orange-gradient purple-box-shadow"
				>Learn More</router-link
			>
		</div>
	</section>
</template>
<script setup></script>
<style lang="scss" scope>
@import '../style.scss';

section.banner {
	color: #fff;
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url('../assets/banner.jpg');
	background-position: center left;
	background-size: cover;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		background-color: $primary-color;
		opacity: 0.6;
	}

	.container {
		position: relative;
		z-index: 1;

		h1 {
			font-size: 72px;
			margin-bottom: 32px;

			span {
				color: $sky-blue-color;
			}

			@media (max-width: $phone-width) {
				font-size: 32px;
			}
		}

		h3 {
			font-size: 36px;
			font-weight: 400;
			margin-bottom: 10px;

			@media (max-width: $phone-width) {
				font-size: 20px;
			}
		}

		h4 {
			font-size: 25px;
			margin-bottom: 40px;
			padding: 5px 0;
			font-weight: 400;

			br {
				display: none;
			}

			@media (max-width: $phone-width) {
				font-size: 20px;
				margin-bottom: 18px;

				br {
					display: initial;
				}
			}

			.show-typing-effect {
				opacity: 1;
				animation: blink 0.05s infinite steps(1),
					typing calc(var(--n) * 0.05s) steps(var(--n)) forwards;
			}

			.keyword {
				color: $purple-color;
				font-weight: 600;
				text-transform: uppercase;
			}
		}

		@media (max-width: $phone-width) {
			.button {
				margin-top: 20px;
			}
		}
	}
}
</style>
