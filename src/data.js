const loadJson = async () => {
	const res = await fetch("data.json");
	const data = await res.json();

	return data;
};

export default {
	getProjects() {
		const data = loadJson();

		return data.projects;
	},
};
