import pool from "../../app/lib/database";

export default async (req, res) => {
	// Handle CORS preflight
	if (req.method === "OPTIONS") {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
		return res.status(200).end(); // End the preflight response
	}

	if (req.method === "GET") {
		try {
			const { rows: legions } = await pool.query("SELECT * FROM legions");
			res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=3600");
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.status(200).json(legions);
		} catch (err) {
			res.status(500).send(err.message);
		}
	} else {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.status(405).json({ message: "Method Not Allowed" });
	}
};
