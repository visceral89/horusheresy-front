import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.headerImage}>
					<Image
						src='/HHLogo.png'
						width={856}
						height={250}
						alt='Horus Heresy Logo'
					/>
				</div>

				<div className={styles.headerTitle}>
					<h1 className={styles.heading1}>Welcome to the Horus Heresy API</h1>
					<p className={styles.subHeading1}>
						A public REST API by Rasmus Bremholm
					</p>
				</div>
			</div>
		</main>
	);
}
