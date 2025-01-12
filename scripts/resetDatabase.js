import pool from "../app/lib/database.js";

async function resetDatabase() {
	try {
		await pool.query("TRUNCATE TABLE legions;");
		await pool.query("INSERT INTO legions SELECT * FROM original_legions;");
		console.log("Database reset successful.");
	} catch (err) {
		console.error("Error resetting database:", err.message);
	} finally {
		pool.end();
	}
}

resetDatabase();
