import styles from "../legions.module.scss";
import getLegions from "@/app/lib/getLegions";

export default async function LegionDetails({ params: { id } }) {
	const slug = params;
	const legion = await getLegions(slug);

	return (
		<main>
			<h1>{legion.name}</h1>
		</main>
	);
}
