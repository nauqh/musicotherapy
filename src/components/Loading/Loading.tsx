import React, { useEffect } from "react";
import "./Loading.css";
import { motion } from "framer-motion";

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
		<motion.h1
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className="loading"
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
	);
};

export default Loading;
