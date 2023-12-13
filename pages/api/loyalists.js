import pool from "../../../app/lib/database";

export default async (req, res) => {
	try {
		const query = "SELECT * FROM legions WHERE traitor = false";
		const { rows: loyalistLegions } = await pool.query(query);
		res.status(200).json(loyalistLegions);
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
