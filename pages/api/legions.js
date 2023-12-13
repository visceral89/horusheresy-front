import pool from "../../app/lib/database";

export default async (req, res) => {
	try {
		const { rows: legions } = await pool.query("SELECT * FROM legions");
		res.status(200).json(legions);
	} catch (err) {
		res.status(500).send(err.message);
	}
};
