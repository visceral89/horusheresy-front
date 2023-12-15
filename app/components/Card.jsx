import styles from "./Card.module.scss";

export default function Card({ id, name, primarch_image, url }) {
	return <div className={styles.card}>{name}</div>;
}
