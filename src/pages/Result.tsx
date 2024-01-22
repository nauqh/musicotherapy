// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";

import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";
import Sample from "../assets/data/sample.json";
import Loading from "../components/Loading/Loading";

const Result = () => {
	// const location = useLocation();
	const { color, mood, characteristics, artists, tracks } = Sample;
	const [loadingComplete, setLoadingComplete] = useState(false);
	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);

	useEffect(() => {
		// Loading completion after 5 seconds
		const loadingTimer = setTimeout(() => {
			setLoadingComplete(true);
		}, 1000);

		// Cleanup the timer to avoid memory leaks
		return () => clearTimeout(loadingTimer);
	}, []);

	useEffect(() => {
		if (loadingComplete) {
			const sr = ScrollReveal({
				distance: "60px",
				duration: 2500,
				reset: false,
			});

			sr.reveal(`#title`, { delay: 100 });
			sr.reveal(`#banner`, { delay: 1500 });
			sr.reveal(`#description`, { delay: 2500 });
		}
	}, [loadingComplete]);

	return (
		<>
			{loadingComplete ? (
				<>
					<section className="container">
						<h1
							id="title"
							style={{
								fontSize: "2rem",
								fontWeight: 700,
								textAlign: "center",
								marginBottom: "2rem",
								marginTop: "2rem",
								color: color,
							}}
						>
							{mood}
						</h1>

						<img
							id="banner"
							src="/music_banner.png"
							alt=""
							width={500}
						/>
					</section>

					<section className="container" id="description">
						<Typewriter
							text={characteristics[0]}
							delay={30}
							onComplete={() => {
								setFirstWriterComplete(true);
							}}
						/>
						{firstWriterComplete && (
							<Typewriter
								text={characteristics[1]}
								delay={30}
								onComplete={() => {
									setSecondWriterComplete(true);
								}}
							/>
						)}
					</section>

					{secondWriterComplete && (
						<motion.div
							id="rest"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, delay: 1 }}
						>
							<section className="container">
								<h1
									style={{
										fontSize: "1.5rem",
										padding: "0.5rem",
									}}
								>
									Famous artists represent your music taste
								</h1>

								{artists.map((artist, index) => (
									<Artist
										key={index}
										img={artist.img}
										name={artist.name}
										content={artist.content}
										color={color}
									/>
								))}
							</section>

							<section className="container">
								<h1
									style={{
										fontSize: "1.5rem",
										marginBottom: "2rem",
										padding: "0.5rem",
									}}
								>
									Here are the songs that are tailored for you
								</h1>
								<Frame trackIds={tracks} />
							</section>

							<footer
								className="container"
								style={{ marginBottom: "2rem" }}
							>
								<a
									className="button-alter"
									// href={
									// 	location.state.link !== ""
									// 		? location.state.link
									// 		: "https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk?si=62c10509dbca4222"
									// }
									href="https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk?si=62c10509dbca4222"
								>
									Here is your playlist
								</a>
							</footer>
						</motion.div>
					)}
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Result;
