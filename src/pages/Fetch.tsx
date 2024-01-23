import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "../components/Loading/Loading";
import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";

const BASE: string = "http://127.0.0.1:8000/";

interface Artist {
	name: string;
	img: string;
	id: string;
	content: string;
}

interface Data {
	genre: string;
	mood: string;
	color: string;
	characteristics: string[];
	artists: Artist[];
	tracks: string[];
}

const getBody = (data: any) => {
	return {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
};

const Fetch = () => {
	const location = useLocation();
	const [data, setData] = useState<Data>();
	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);

	useEffect(() => {
		fetch(
			BASE + "analysis",
			getBody({ description: location.state.description })
		)
			.then((response) => response.json())
			.then((analysis) => {
				// NOTE: Get artist info
				fetch(BASE + "artist", getBody({ names: analysis["artists"] }))
					.then((response) => response.json())
					.then((artists) => {
						analysis["artists"] = artists;
						analysis["artists"].forEach(
							(artist: any, index: any) => {
								artist["content"] = analysis.content[index];
							}
						);
						delete analysis["content"];

						// NOTE: Get song recommendation
						fetch(
							BASE + "recommendation",
							getBody({
								ids: analysis["artists"].map(
									(artist: any) => artist.id
								),
							})
						)
							.then((response) => response.json())
							.then((songs) => {
								analysis["tracks"] = songs.map(
									(song: any) => song.id
								);
								setData(analysis);
							});
					});
			});
	}, []);

	return (
		<>
			{data ? (
				<>
					<section className="container">
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							style={{
								fontSize: "2rem",
								fontWeight: 700,
								textAlign: "center",
								marginBottom: "2rem",
								marginTop: "2rem",
								color: data.color,
							}}
						>
							{data.mood}
						</motion.h1>

						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1.5 }}
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
							text={data.characteristics[0]}
							delay={30}
							onComplete={() => {
								setFirstWriterComplete(true);
							}}
						/>
						{firstWriterComplete && (
							<Typewriter
								text={data.characteristics[1]}
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
										padding: "0.5rem",
									}}
								>
									Famous artists represent your music taste
								</h1>

								{data.artists.map((artist, index) => (
									<Artist
										key={index}
										img={artist.img}
										name={artist.name}
										content={artist.content}
										color={data.color}
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
								<Frame trackIds={data.tracks} />
							</section>

							<footer
								className="container"
								style={{ marginBottom: "2rem" }}
							>
								<a
									className="button-alter"
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

export default Fetch;
