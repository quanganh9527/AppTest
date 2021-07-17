export const fetchAPI = async () => {
	const data = await fetch(
		'https://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint',
	) // use temporary mockup api
		.then((response) => response.json())
		.then((json) => json)
		.catch((error) => {
			console.error(error);
		});
	console.log('dataaa', data);
	return data;
};
