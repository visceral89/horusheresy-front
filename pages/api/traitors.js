import pool from "../../app/lib/database";

export default async (req, res) => {
	// Handle CORS preflight
	if (req.method === "OPTIONS") {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
		return res.status(200).end(); // End preflight request
	}

	// Handle GET requests
	if (req.method === "GET") {
		try {
			const query = "SELECT * FROM legions WHERE traitor = true";
			const { rows: traitorLegions } = await pool.query(query);
			res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=3600");
			res.setHeader("Access-Control-Allow-Origin", "*");

			res.status(200).json(traitorLegions); // Corrected to traitorLegions
		} catch (err) {
			res.status(500).json({ message: "You need more dedicated RAM to the server" });
		}
	} else {
		// Handle unsupported methods
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.status(405).json({ message: "Method Not Allowed" });
	}
};
