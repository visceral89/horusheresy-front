import { headers } from "@/next.config";

export default async function getLegion(id) {
	const response = await fetch(`https://horus-heresy-next.vercel.app/api/legion/${id}`, {
		headers: {
			"x-api-key": process.env.API_KEY,
		},
	});

	if (!response.ok) {
		throw new Error("Couldnt fetch legion");
	}

	return await response.json();
}
