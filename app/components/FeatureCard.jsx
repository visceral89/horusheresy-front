import styles from "./FeatureCard.module.scss";
import Image from "next/image";

export default function FeatureCard({ cardTitle, cardImgUrl, cardDesc }) {
	return (
		<div className={styles.card}>
			<Image src={cardImgUrl} height={100} width={100} alt='feature icon' />
			<h3 className={styles.cardTitle}>{cardTitle}</h3>
			<p className={styles.cardDesc}>{cardDesc}</p>
		</div>
	);
}
