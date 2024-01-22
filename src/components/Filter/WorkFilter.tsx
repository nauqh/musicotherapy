import React, { useEffect } from "react";
import "./WorkFilter.css";

type FilterKey = "pop" | "rock" | "edm" | "rnb";

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
			<span className="work__item">Pop</span>
			<span className="work__item">EDM</span>
			<span className="work__item">RnB</span>
			<span className="work__item">Rock</span>
		</div>
	);
};

export default WorkFilter;
