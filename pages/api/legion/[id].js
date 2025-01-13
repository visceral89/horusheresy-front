import pool from "../../../app/lib/database";

export default async (req, res) => {
	// Handle CORS preflight
	if (req.method === "OPTIONS") {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
		return res.status(200).end(); // End preflight request
	}

	if (req.method === "GET") {
		const legionId = parseInt(req.query.id);

		try {
			const query = "SELECT * FROM legions WHERE id = $1";
			const { rows: legion } = await pool.query(query, [legionId]);
			res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=3600");
			res.setHeader("Access-Control-Allow-Origin", "*");

			if (legion.length) {
				res.status(200).json(legion[0]);
			} else {
				res.status(404).json({ message: "Legion not found, try 1-20" });
			}
		} catch (err) {
			res.status(500).json({ message: "You need more dedicated RAM to the server" });
		}
	} else {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.status(405).json({ message: "Method Not Allowed" });
	}
};
