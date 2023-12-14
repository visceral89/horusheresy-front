"use client";
import styles from "./api-docs.module.scss";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Sidebar() {
	const [toc, setToc] = useState([]);

	useEffect(() => {
		const contentContainer = document.querySelector("#content");
		const headings = Array.from(
			contentContainer.querySelectorAll("h1,h2,h3,h4,h5")
		);
		const tocData = headings.map((heading) => ({
			text: heading.innerText,
			id: heading.id,
		}));

		setToc(tocData);
	}, []);

	return (
		<aside className={styles.tocNav}>
			<div className={styles.listContainer}>
				<ul>
					{toc.map((item) => (
						<li key={item.id} className={styles.tocLinkItem}>
							<Link href={`#${item.id}`}>{item.text}</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}
