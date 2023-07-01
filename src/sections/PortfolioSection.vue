<template>
	<section class="portfolio">
		<div class="container">
			<h2 class="purple-gradient gradient-text">Portfolio</h2>
			<section class="experience">
				<h3>Working Experience</h3>
				<portfolio-cards :experience="portfolio.experience" direction="right" />
			</section>
			<section class="education">
				<h3>Education</h3>
				<portfolio-cards :experience="portfolio.education" direction="left" />
			</section>
			<section class="cert">
				<div class="category">
					<h3>Honours & Awards</h3>
					<ul>
						<certificate-card
							v-for="(cert, index) in portfolio.awards"
							:key="index"
							:cert="cert"
							direction="left"
						/>
					</ul>
				</div>
				<div class="category">
					<h3>Licenses & certifications</h3>
					<ul>
						<certificate-card
							v-for="(cert, index) in portfolio.certifications"
							:key="index"
							:cert="cert"
							direction="right"
						/>
					</ul>
				</div>
			</section>
		</div>
	</section>
</template>
<script setup>
import { inject } from "vue";
import PortfolioCards from "../components/PortfolioCards.vue";
import certificateCard from "../components/certificateCard.vue";

const data = inject("$data");

const portfolio = data.getPortfolio();
</script>
<style lang="scss" scoped>
@import "../style.scss";
section.portfolio {
	background-color: #fff;
	overflow-x: hidden;

	.container {
		padding-top: 90px;
		padding-bottom: 64px;

		h3 {
			font-size: 24px;
			text-align: center;
		}

		section {
			padding-top: 15px;
			padding-bottom: 15px;

			&.cert {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 30px;

				margin-top: 10px;

				@media (max-width: $tablet-width) {
					display: block;
				}

				h3 {
					margin-bottom: 15px;
				}
			}
		}
	}
}
</style>
