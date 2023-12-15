import styles from "../legions.module.scss";
import getLegions from "@/app/lib/getLegions";

export default async function LegionDetails({ params: { id } }) {
	const legion = await getLegions(id);

	return (
		<main>
			<h1>{legion.name}</h1>
		</main>
	);
}
