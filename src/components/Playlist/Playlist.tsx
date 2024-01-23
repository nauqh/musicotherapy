import "./Playlist.css";

const Playlist = () => {
	return (
		<section
			className="container"
			style={{
				display: "flex",
				columnGap: "2rem",
				paddingRight: "10rem",
			}}
		>
			<iframe
				src="https://open.spotify.com/embed/playlist/0d94FaVJFNNspToUDtZptD?utm_source=generator"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				style={{
					borderRadius: "12px",
					width: "350px",
					height: "450px",
				}}
			></iframe>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						rowGap: "1rem",
					}}
				>
					<h5
						style={{
							fontWeight: 400,
						}}
					>
						PUBLIC PLAYLIST
					</h5>
					<h1
						style={{
							fontSize: "2rem",
							color: "#FF9E80",
						}}
					>
						Vietnamese R&B/Chill Indie
					</h1>
					<p
						style={{
							maxWidth: "400px",
						}}
					>
						Cover: unidentified artist | Cải lương? What&#x27;s
						that? | nhạc pop&#x2F;R&amp;B Việt Nam nhẹ nhàng
					</p>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						rowGap: "1.5rem",
					}}
				>
					<h3
						style={{
							fontWeight: 400,
							fontSize: "0.9rem",
						}}
					>
						<span
							style={{
								padding: "0.2rem",
								background: "#f2f2f2",
								borderRadius: "0.2rem",
								color: "#FF9E80",
							}}
						>
							Owner
						</span>
						: Alyssa
					</h3>
					<h3
						style={{
							fontWeight: 400,
							fontSize: "0.9rem",
						}}
					>
						<span
							style={{
								padding: "0.2rem",
								background: "#f2f2f2",
								borderRadius: "0.2rem",
								color: "#FF9E80",
							}}
						>
							Content
						</span>
						: 220 tracks
					</h3>
					<h3
						style={{
							fontWeight: 400,
							fontSize: "0.9rem",
						}}
					>
						<span
							style={{
								padding: "0.2rem",
								background: "#f2f2f2",
								borderRadius: "0.2rem",
								color: "#FF9E80",
							}}
						>
							Duration
						</span>
						: 12h
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Playlist;
