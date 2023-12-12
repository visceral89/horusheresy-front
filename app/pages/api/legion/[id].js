import pool from "../../../lib/database";

export default async (req, res) => {
	const { id } = req.query;

	try {
		const { rows } = await pool.query("SELECT * FROM legions WHERE id = $1", [
			id,
		]);
		if (rows.length) {
			req.status(200).json(rows[0]);
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("YOu need moore deditated wam to the sorvoor");
	}
};
