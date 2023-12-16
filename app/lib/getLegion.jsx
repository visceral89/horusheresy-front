export default async function getLegion(id) {
	const response = await fetch(
		`https://horus-heresy-next.vercel.app/api/legion/${id}`
	);

	if (!response.ok) {
		throw new Error("Couldnt fetch legion");
	}

	return await response.json();
}
