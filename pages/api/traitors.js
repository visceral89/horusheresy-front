import pool from "../../app/lib/database";

export default async (req, res) => {
	try {
		const query = "SELECT * FROM legions WHERE traitor = true";
		const { rows: traitorLegions } = await pool.query(query);
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=3600, stale-while-revalidate=3600"
		);
		res.status(200).json(traitorLegions);
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
