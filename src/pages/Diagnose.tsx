import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Loading from "../components/Loading/Loading";
import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";
import Playlist from "../components/Playlist/Playlist";

// Data
import Sample from "../assets/data/sample.json";

// Style
import "../assets/Fetch.css";

const Diagnose = () => {
	const location = useLocation();

	const [loadingComplete, setLoadingComplete] = useState(true);
	const { color, mood, characteristics, artists, tracks, playlist } =
		Sample[location.state.text as keyof typeof Sample];

	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);

	useEffect(() => {
		// Loading completion after 10 seconds
		const loadingTimer = setTimeout(() => {
			setLoadingComplete(true);
		}, 25000);

		// Cleanup the timer to avoid memory leaks
		return () => clearTimeout(loadingTimer);
	}, []);

	return (
		<>
			{loadingComplete ? (
				<>
					<section className="container">
						<motion.h1
							className="result__title"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							style={{
								color: color,
							}}
						>
							{mood}
						</motion.h1>

						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1.5 }}
							style={{
								margin: "auto",
							}}
							src="/music_banner.png"
							width={500}
						/>
					</section>
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 3 }}
						className="container"
						id="description"
					>
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
					</motion.section>

					{secondWriterComplete && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
						>
							<section className="container">
								<h1 className="result__header">
									Famous artists represent your music taste
								</h1>

								{artists.map((artist: any, index: any) => (
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
								<h1 className="result__header">
									Here are the songs that are tailored for you
								</h1>
								<Frame trackIds={tracks} />
							</section>

							<section className="container">
								<h1 className="result__header">
									This playlist might be your cup of tea
								</h1>
								<Playlist playlist={playlist} color={color} />
							</section>
						</motion.div>
					)}
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Diagnose;
