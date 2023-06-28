const loadJson = async () => {
	const res = await fetch("data.json");
	const data = await res.json();

	return data;
};

export default {
	async getContact() {
		const data = await loadJson();
		return data.contact;
	},
	async getProjects() {
		const data = await loadJson();
		return data.projects;
	},
	async getExperience() {
		const data = await loadJson();
		return data.portfolio;
	},
};
