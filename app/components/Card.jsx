import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({ id, name, primarch_image, url }) {
	console.log(primarch_image);

	return (
		<div className={styles.card}>
			<h2 className={styles.legionName}>{name}</h2>
			<p className={styles.legionNumber}>{id}</p>
			<div className={styles.legionImageContainer}>
				{primarch_image && (
					<Image
						className={styles.legionImage}
						src={primarch_image}
						fill={true}
						objectFit='cover'
					/>
				)}
			</div>
		</div>
	);
}
