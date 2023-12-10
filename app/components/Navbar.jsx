import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<div>HOME</div>
			</Link>
			<Link href='/legions'>
				<div>LEGIONS</div>
			</Link>
			<Link href='/api'>
				<div>API</div>
			</Link>
		</nav>
	);
}
