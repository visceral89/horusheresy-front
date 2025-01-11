export default async function getLegions() {
	const response = await fetch("https://horus-heresy-next.vercel.app/api/legions", {
		headers: { "x-api-key": process.env.API_KEY },
	});

	if (!response.ok) {
		throw new Error("Couldnt fetch data, you suck.");
	}

	return await response.json();
}
