import styles from "./api-docs.module.scss";
import Sidebar from "./Sidebar";
import Code from "../components/Code";
import Divider from "../components/Divider";
import Link from "next/link";

export default function Apidocs() {
	return (
		<main className={styles.main}>
			<Sidebar />
			<div className={styles.content} id='content'>
				<h1 id='title'>API Documentation</h1>
				<h2 id='intro'>Introduction</h2>
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
				<Divider />
				<h2>News !</h2>
				<p>Some important news. As v 0.2 draws near the API will now a require an api-key to work.
				</p>
				<p>Please reach out to me via email, linkedin or whatever method you want incase you want to use the API and ill hook you up with a key.</p>
				<Divider />
				<h2 id='quickstart'>Quick Start</h2>
				<p>
					The fastest way to get started is by visiting our first API endpoint.
				</p>
				<Code text={`https://horus-heresy-next.vercel.app/api/legions`} />
				<p>
					Here you will find a list of all legions and the data that goes long
					with that legion. Data like Primarchs name, homeworld, size of army
					and what allegence they had during the end of the Horus Heresy.
				</p>
				<Divider />
				<h2 id='legionid'>Get Legion by ID</h2>
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
				<div className={styles.funfact}>
					<p>FUN FACT:</p>
					<p>
						If you are wondering about entry 2 and 11 thoose legions are
						expunged from the Imperial records in the Lore. So if you see
						entries such as [redacted] or [deleted] or even [unknown] I still
						added this info manually for "lore friendly" effect.
					</p>
				</div>
				<h3 id='legiondata'>Legion Data</h3>
				<p>
					Each legion returns as a single object with properties such as "id",
					"name" and "description". These are all properties of the single
					legion object so when acessing the properties you can just use.
				</p>
				<Code text={`const data = legions.name`} />
				<p>
					This makes it easier for me personally. That everything isnt packed in
					a single data object that you have to filter out stuff from. If you
					have suggestions on if I should change this, please shoot me a messege
					and i'll fix it right up.
				</p>
				<p>
					Here is a list of all the current properties as of v0.1.0. The list of
					properties and what they mean should be obvious, and i tried really
					hard to keep the naming as clear and concise as possible.
				</p>
				<Code text={`"id":int4`} />
				<Code text={`"name":varchar(255)`} />
				<Code text={`"description":text`} />
				<Code text={`"primarch":varchar(255)`} />
				<Code text={`"traitor":bool`} />
				<Code text={`"homeworld":varchar(255)`} />
				<Code
					text={`"colors":json (Object containing properties for "primary" and "secondary" colors.)`}
				/>
				<Code
					text={`"size":int8 (Size of the legions army, its usually in the 100,000 range.)`}
				/>
				<Code
					text={`"characters":json (Same as color, will be a list of noteworthy characters from the legion.)`}
				/>
				<Code text={`"quote":varchar(255)`} />
				<Code text={`"battlecry":varchar(255)`} />
				<h3>NOT USED RIGHT NOW</h3>
				<Code text={`"primarch_image_url":varchar(255)`} />
				<Code text={`"homeworld_image_url":varchar(255)`} />
				<div className={styles.funfact}>
					<p>Fun fact?</p>
					<p>
						I choose not to include the primarch image or homeworld image since
						i couldnt solve the image hosting. Ill probably modify the default
						endpoint to exclude theese field in the future. Right now the URL's
						will just point to the image paths of this project.
					</p>
				</div>
				<h2>Get all Traitor Legions</h2>
				<p>
					To get all the traitor legions (bad guys) use the following endpoint.
				</p>
				<Code text={`https://horus-heresy-next.vercel.app/api/traitors`} />
				<h2>Get all Loyalist Legions</h2>
				<p>
					On the other hand, if you want a list of all the goodies you can use
					the following endpoint.
				</p>
				<Code text={`https://horus-heresy-next.vercel.app/api/loyalists`} />
				<p>
					Too see all theese beeing used practically, please visit the{" "}
					<Link href='/legions'>Legions page</Link>.
				</p>
			</div>
		</main>
	);
}
