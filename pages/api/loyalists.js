import pool from "../../../app/lib/database";

export default async (req, res) => {
	try {
		const query = "SELECT * FROM legions WHERE traitor = false";
		const { rows: loyalistLegions } = await pool.query(query);

		if (loyalistLegions.length) {
			res.status(200).json(loyalistLegions);
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
