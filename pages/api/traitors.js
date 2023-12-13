import pool from "../../../app/lib/database";

export default async (req, res) => {
	try {
		const query = "SELECT * FROM legions WHERE traitor = true";
		const { rows: traitorLegions } = await pool.query(query);

		if (traitorLegions.length) {
			res.status(200).json(traitorLegions);
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
