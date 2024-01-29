import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "../components/Loading/Loading";
import Typewriter from "../components/Typewriter/Typewriter";
import Frame from "../components/Frame/Frame";
import Artist from "../components/Artist/Artist";
import Playlist from "../components/Playlist/Playlist";

import "../assets/Fetch.css";

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

const fetchJson = async (url: string, data: any) => {
	const response = await fetch(url, getBody(data));
	return response.json();
};

const Fetch = () => {
	const location = useLocation();
	const [data, setData] = useState<Data>();
	const [playlist, setPlaylist] = useState();

	const [firstWriterComplete, setFirstWriterComplete] = useState(false);
	const [secondWriterComplete, setSecondWriterComplete] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const playlist = await fetchJson(BASE + "playlist", {
				keyword: location.state.description,
			});
			setPlaylist(playlist);

			const analysis = await fetchJson(BASE + "analysis", {
				description: location.state.description,
			});

			const artists = await fetchJson(BASE + "artist", {
				names: analysis.artists,
			});

			analysis.artists = artists.map((artist: any, index: any) => ({
				...artist,
				content: analysis.content[index],
			}));
			delete analysis.content;

			const songs = await fetchJson(BASE + "recommendation", {
				ids: analysis.artists.map((artist: any) => artist.id),
			});

			analysis.tracks = songs.map((song: any) => song.id);
			setData(analysis);
		};

		fetchData();
	}, [location.state.description]);

	return (
		<>
			{data ? (
				<>
					<section className="container">
						<motion.h1
							className="result__title"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							style={{
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
								<h1 className="result__header">
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
								<h1 className="result__header">
									Here are the songs that are tailored for you
								</h1>
								<Frame trackIds={data.tracks} />
							</section>

							<section className="container">
								<h1 className="result__header">
									This playlist might be your cup of tea
								</h1>
								<Playlist
									playlist={playlist}
									color={data.color}
								/>
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

export default Fetch;
