import React from "react";

interface GenreGridProps {
	onDiagnoseSelect: (text: string) => void;
}

const GenreGrid: React.FC<GenreGridProps> = ({
	onDiagnoseSelect: handleDiagnoseSelect,
}) => {
	return (
		<div className="container-grid">
			<div
				className="button-brick"
				onClick={() => handleDiagnoseSelect("Pop Punk")}
			>
				Pop Punk
			</div>
			<div
				className="button-brick grid-3"
				onClick={() => handleDiagnoseSelect("Korean Soft Indie")}
			>
				Korean Soft Indie
			</div>
			<div
				className="button-brick"
				onClick={() => handleDiagnoseSelect("R&B")}
			>
				R&B
			</div>
			<div
				className="button-brick"
				onClick={() => handleDiagnoseSelect("Lo-fi")}
			>
				Lo-fi
			</div>
			<div
				className="button-brick grid-2"
				onClick={() => handleDiagnoseSelect("Rap Hip-hop")}
			>
				Rap Hip-hop
			</div>
			<div
				className="button-brick grid-2"
				onClick={() => handleDiagnoseSelect("Disney Soundtracks")}
			>
				Disney Soundtracks
			</div>
			<div
				className="button-brick"
				onClick={() => handleDiagnoseSelect("EDM")}
			>
				EDM
			</div>
			<div
				className="button-brick"
				onClick={() => handleDiagnoseSelect("Mandopop")}
			>
				Mandopop
			</div>
		</div>
	);
};

export default GenreGrid;
