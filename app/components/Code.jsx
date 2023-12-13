"use client";
import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css"; // Use the style of your choice

hljs.registerLanguage("javascript", javascript);

const Code = ({ text }) => {
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, [text]);

	return (
		<pre>
			<code className='javascript'>{text}</code>
		</pre>
	);
};

export default Code;
