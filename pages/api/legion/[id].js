import pool from "../../../app/lib/database";

export default async (req, res) => {
	const legionId = parseInt(req.params.id);

	try {
		const query = "SELECT * FROM legions WHERE id=$1";
		const { rows: legion } = await pool.query(query, [legionId]);
		if (legion.length) {
			req.status(200).json(legion[0]);
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("YOu need moore deditated wam to the sorvoor");
	}
};
