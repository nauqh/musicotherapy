import React, { useState, ChangeEvent } from "react";
import "./SelectBox.css";

interface SelectBoxProps {
	label: string;
	options: string[];
	onChange: (selectedOption: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ label, options, onChange }) => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectedOption(value);
		onChange(value);
	};

	return (
		<>
			<label className="select__box-label">{label}</label>
			<div className="select__box">
				<select
					className="select__box-select"
					value={selectedOption}
					onChange={handleOptionChange}
				>
					{options.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
				<input
					className="select__box-text"
					type="text"
					placeholder="Year"
				/>
			</div>
		</>
	);
};

export default SelectBox;
