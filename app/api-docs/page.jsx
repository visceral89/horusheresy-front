import styles from "./api-docs.module.scss";
import Sidebar from "./Sidebar";
import Code from "../components/Code";

export default function Apidocs() {
	return (
		<main className={styles.main}>
			<Sidebar />
			<div className={styles.content} id='content'>
				<h1>API Documentation</h1>
				<p>
					Welcome to the API documentation for the Horus Heresy API. This API
					was made in 2023 by Rasmus Bremholm and started out as en experiement
					in ExpressJS and Supabase but grev into this fullstack app you are
					reading now.
					<br />
					<br />
					To get started read the intro chapter on how to use the API down
					below.
				</p>
				<h2>Quick Start</h2>
				<p>
					The fastest way to get started is by visiting our first API endpoint.
				</p>

				<Code text={`https://horus-heresy-next.vercel.app/api/legions`} />

				<p>
					Here you will find a list of all legions and the data that goes long
					with that legion. Data like Primarchs name, homeworld, size of army
					and what allegence they had during the end of the Horus Heresy.
				</p>
				<h2>Get Legion by ID</h2>
				<p>
					To get info on a specific legion you can use the following endpoint.
				</p>
				<Code text={`https://horus-heresy-next.vercel.app/api/legion/[id]`} />
				<p>
					The id field needs to be populated with a number between 1 and 20.
					Otherwise the API will return with a 500 error code telling you that
					the id is out of the scope.
				</p>
				<p>
					I made sure the ID field corresponds to each Legions number instead of
					beeing just an index. This way the user gets a two in one, both
					legiion number and a convinient id to select specific legions.
				</p>
				<p>
					For thoose not knowing what legion corresponds to each number i have
					included a list below.
				</p>
				<ol>
					<li>Dark Angels</li>
					<li>[Redacted]</li>
					<li>Emperor's Children</li>
					<li>Iron Warriors</li>
					<li>White Scars</li>
					<li>Space Wolves</li>
					<li>Imperial Fists</li>
					<li>Night Lords</li>
					<li>Blood Angels</li>
					<li>Iron Hands</li>
					<li>[UNKNOWN]</li>
					<li>World Eaters</li>
					<li>Ultramarines</li>
					<li>Death Guard</li>
					<li>Thousand Sons</li>
					<li>Sons of Horus (Luna Wolves)</li>
					<li>Word Bearers</li>
					<li>Salamanders</li>
					<li>Raven Guard</li>
					<li>Alpha Legion</li>
				</ol>
				<p className={styles.funfact}>
					If you are wondering about entry 2 and 11 thoose legions are expunged
					from the Imperial records in the Lore. So if you see entries such as
					[redacted] or [deleted] or even [unknown] I still added this info
					manually for "lore friendly" effect.
				</p>
			</div>
		</main>
	);
}
