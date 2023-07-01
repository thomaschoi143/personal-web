import data from "../public/data.json";

export default {
	getContact() {
		return data.contact;
	},
	getProjects() {
		return data.projects;
	},
	getPortfolio() {
		return data.portfolio;
	},
};
