import Link from "next/link";
import Card from "../components/Card";

async function getLegions() {
	const res = await fetch("https://horus-heresy-next.vercel.app/api/legions");

	if (!res.ok) {
		throw new Error("Failed to fetch data...");
	}
	return res.json;
}

export default async function Legions() {
	const legions = await getLegions();

	return (
		<>
			<h1>Legions Page</h1>
			<p>
				Here you will find all the active legions beeing used from the API For
				moore info on how this was achived, please visit the{" "}
				<Link href='/api-docs'>API Documentation.</Link>
			</p>
			<section></section>
		</>
	);
}
