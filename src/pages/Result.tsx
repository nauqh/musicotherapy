// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";

import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";
import Sample from "../assets/data/sample.json";
import Loading from "../components/Loading/Loading";
import Playlist from "../components/Playlist/Playlist";

const getBody = (data: any) => {
	return {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
};

const BASE: string = "http://127.0.0.1:8000/";

const Result = () => {
	// const location = useLocation();
	const { color, mood, characteristics, artists, tracks } = Sample;
	const [loadingComplete, setLoadingComplete] = useState(true);
	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);
	const [playlist, setPlaylist] = useState();

	useEffect(() => {
		// Loading completion after 5 seconds
		const loadingTimer = setTimeout(() => {
			setLoadingComplete(true);
		}, 28000);

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

	useEffect(() => {
		fetch(BASE + "playlist", getBody({ keyword: "vintage pop" }))
			.then((response) => response.json())
			.then((playlist) => setPlaylist(playlist));
	}, []);

	return (
		<>
			{loadingComplete ? (
				<>
					<section className="container">
						<h1
							id="title"
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
							delay={10}
							onComplete={() => {
								setFirstWriterComplete(true);
							}}
						/>
						{firstWriterComplete && (
							<Typewriter
								text={characteristics[1]}
								delay={10}
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

export default Result;
