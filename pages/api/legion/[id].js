// pages/api/legion/[id].js
import pool from "../../../app/lib/database";

export default async (req, res) => {
	const legionId = parseInt(req.query.id); // Use req.query instead of req.params

	try {
		const query = "SELECT * FROM legions WHERE id = $1";
		const { rows: legion } = await pool.query(query, [legionId]);

		if (legion.length) {
			res.status(200).json(legion[0]); // Use res instead of req for sending response
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
