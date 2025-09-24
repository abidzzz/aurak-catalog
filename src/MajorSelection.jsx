import React from "react";
import { majorCourseData } from './courses.js';

const formatMajorName = (majorKey) => {
	return majorKey
		.replace(/_/g, ' ')
		.replace(/\b\w/g, char => char.toUpperCase());
};

function MajorSelection({ onSelectMajor }) {
	return (
		<div className="major-selection">
			<h1 className="title">🎓 Select Your Major</h1>

			<p className="subtitle">Start by choosing a major to view and customize your course plan.</p>

			<div className="major-list">
				{Object.keys(majorCourseData).map((majorKey) => (
					<button
						key={majorKey}
						onClick={() => onSelectMajor(majorKey)}
						className="major-button"
					>
						{formatMajorName(majorKey)}
					</button>
				))}
			</div>
		</div>
	);
}

export default MajorSelection;
