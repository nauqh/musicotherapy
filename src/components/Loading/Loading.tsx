import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Loading.css";

const Loading: React.FC = () => {
	useEffect(() => {
		const dots = document.querySelector(".loading__dots") as HTMLElement;

		const addAnimate = () => {
			dots.classList.add("animate");

			setTimeout(() => {
				dots.classList.remove("animate");

				setTimeout(() => {
					addAnimate();
				}, 100);
			}, 2600);
		};

		addAnimate();
	}, []);

	return (
		<section className="loading__container">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				style={{
					fontSize: "1rem",
					fontWeight: 400,
					marginTop: "5rem",
				}}
			>
				&gt; Initializating large language model . . .
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 4 }}
				style={{
					fontSize: "1rem",
					fontWeight: 400,
					marginTop: "1rem",
				}}
			>
				&gt; Training on 79,032 indicators of objectively good music . .
				.
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 7 }}
				style={{
					fontSize: "1rem",
					fontWeight: 400,
					marginTop: "1rem",
				}}
			>
				&gt; Finalizing . . .
			</motion.h1>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 10 }}
				className="loading"
				style={{
					fontWeight: 400,
				}}
			>
				Based on your listening habits, we can tell your music
				characteristics are
				<div className="loading__dots">
					<span className="loading__dot"></span>
					<span className="loading__dot"></span>
					<span className="loading__dot"></span>
					<span className="loading__dot">
						<span className="loading__dot-down"></span>
					</span>
				</div>
			</motion.h1>
		</section>
	);
};

export default Loading;
