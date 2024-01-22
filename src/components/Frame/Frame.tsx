import React from "react";
import "./Frame.css";

interface FrameProps {
	trackIds: string[];
}

const Frame: React.FC<FrameProps> = ({ trackIds }) => {
	return (
		<section className="track__container">
			{trackIds.map((id) => (
				<iframe
					key={id}
					src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			))}
		</section>
	);
};

export default Frame;
