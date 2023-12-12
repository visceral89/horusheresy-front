import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Divider from "./components/Divider";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>
					<h1 className={styles.heading1}>Welcome to the Horus Heresy API</h1>
					<p className={styles.subHeading1}>
						A REST API by Rasmus Bremholm. The API provides useful information
						about both Loyalist and Traitor legion present during the Horus
						Heresy. Acess this data in your website, app or anything you can
						think of!
					</p>
				</div>
			</div>

			<div className={styles.buttons}>
				<Link href='/legions'>
					<div className={styles.button}>Examples</div>
				</Link>
				<Link href='/api-docs'>
					<div className={styles.button}>API Docs</div>
				</Link>
			</div>
			<Divider />
			<section className={styles.features}>
				<h2>Features</h2>
				<p>
					Check out the <Link href='/api-docs'>API documentation</Link> for
					moore info and all the API endpoints.
				</p>
				<div className={styles.featuresGrid}>
					<FeatureCard
						cardTitle='Specific Legion'
						cardDesc='Lorem Ipsum'
						cardImgUrl='./icons/icon.svg'
					/>
					<FeatureCard
						cardTitle='Specific Legion'
						cardDesc='Lorem Ipsum'
						cardImgUrl='./icons/icon.svg'
					/>
					<FeatureCard
						cardTitle='Specific Legion'
						cardDesc='Lorem Ipsum'
						cardImgUrl='./icons/icon.svg'
					/>
				</div>
			</section>
		</main>
	);
}
