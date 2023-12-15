import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({ id, name, primarch_image, url }) {
	return (
		<div className={styles.card}>
			<h2 className={styles.legionName}>{name}</h2>
			<p className={styles.legionNumber}>{id}</p>
			<Image src={"/"} fill={true} className={styles.legionImage} />
		</div>
	);
}
