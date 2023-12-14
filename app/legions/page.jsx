import Link from "next/link";
import Card from "../components/Card";

export default async function Legions() {
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
