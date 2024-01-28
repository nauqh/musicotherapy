import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Components
import Loading from "../components/Loading/Loading";
import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";
import Playlist from "../components/Playlist/Playlist";

// Data
import Sample from "../assets/data/sample.json";

const Fetch2 = () => {
	const [loadingComplete, setLoadingComplete] = useState(false);
	const { color, mood, characteristics, artists, tracks, playlist } = Sample;

	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);

	useEffect(() => {
		// Loading completion after 5 seconds
		const loadingTimer = setTimeout(() => {
			setLoadingComplete(true);
		}, 20000);

		// Cleanup the timer to avoid memory leaks
		return () => clearTimeout(loadingTimer);
	}, []);

	return (
		<>
			{loadingComplete ? (
				<>
					<section className="container">
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							style={{
								fontSize: "2.5rem",
								fontWeight: 700,
								textAlign: "center",
								marginBottom: "2rem",
								marginTop: "2rem",
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
								<h1
									style={{
										fontSize: "1.5rem",
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
										marginBottom: "1rem",
									}}
								>
									Here are the songs that are tailored for you
								</h1>
								<Frame trackIds={tracks} />
							</section>

							<section className="container">
								<h1
									style={{
										fontSize: "1.5rem",
										marginBottom: "1rem",
									}}
								>
									This playlist might be your cup of tea
								</h1>
								<Playlist playlist={playlist} />
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

export default Fetch2;
