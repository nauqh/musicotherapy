import "./Playlist.css";

const Playlist = () => {
	return (
		<div className="playlist__container">
			<iframe
				src="https://open.spotify.com/embed/playlist/0d94FaVJFNNspToUDtZptD?utm_source=generator"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
			<div className="playlist__description">
				<div className="playlist__description-head">
					<h5>PUBLIC PLAYLIST</h5>
					<h1>Vietnamese R&B/Chill Indie</h1>
					<p>
						Cover: unidentified artist | Cải lương? What&#x27;s
						that? | nhạc pop&#x2F;R&amp;B Việt Nam nhẹ nhàng
					</p>
				</div>
				<div className="playlist__description-stats">
					<h3>
						<span>Owner</span>: Alyssa
					</h3>
					<h3>
						<span>Content</span>: 220 tracks
					</h3>
					<h3>
						<span>Duration</span>: 12h
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
