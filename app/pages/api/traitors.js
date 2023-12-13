import pool from "../../lib/database";

export default async (req, res) => {};
try {
	const query = "SELECT * FROM legions WHERE traitor = true";
	const { rows: traitorLegions } = await pool.query(query);
	res.status(200).json(traitorLegions);
} catch (err) {
	console.error(err.message);
	res.status(500).send("We need moore detitated wam to da sooorvor");
}
