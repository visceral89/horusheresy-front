import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<div className={styles.navbarLinks}>HOME</div>
			</Link>
			<Link href='/legions'>
				<div className={styles.navbarLinks}>LEGIONS</div>
			</Link>
			<Link href='/api-docs'>
				<div className={styles.navbarLinks}>API</div>
			</Link>
		</nav>
	);
}
