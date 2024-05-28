function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		//simulating an API call that resolves successfully
		const success = true;
		if (success) {
			resolve("API response");
		} else {
			reject("API error");
		}
	});
}

export default getResponseFromAPI;
