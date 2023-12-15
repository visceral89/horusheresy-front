import styles from "../legions.module.scss";
import getLegions from "@/app/lib/getLegions";

export default async function LegionDetails({ params }) {
	const legion = await getLegions();

	return (
		<main>
			<h1>{legion.name}</h1>
		</main>
	);
}
