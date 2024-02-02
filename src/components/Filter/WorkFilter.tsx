import React, { useEffect } from "react";
import "./WorkFilter.css";

type FilterKey =
	| "Euphoric/Upbeat"
	| "Melancholic/Ambient"
	| "Tense/Anxious"
	| "Triumphant/Inspiring";

interface WorkFilterProps {
	onFilterChange: (filter: FilterKey) => void;
}

const WorkFilter: React.FC<WorkFilterProps> = ({ onFilterChange }) => {
	useEffect(() => {
		const linkWork = document.querySelectorAll(".work__item");

		function activeWork(this: HTMLElement) {
			linkWork.forEach((l) => l.classList.remove("active-work"));
			this.classList.add("active-work");
			onFilterChange(this.innerText.toLowerCase() as FilterKey);
		}

		linkWork.forEach((l) => l.addEventListener("click", activeWork));

		return () => {
			linkWork.forEach((l) => l.removeEventListener("click", activeWork));
		};
	}, [onFilterChange]);

	return (
		<div className="work__filters">
			<span className="work__item">Euphoric/Upbeat</span>
			<span className="work__item">Melancholic/Ambient</span>
			<span className="work__item">Tense/Anxious</span>
			<span className="work__item">Triumphant/Inspiring</span>
		</div>
	);
};

export default WorkFilter;
