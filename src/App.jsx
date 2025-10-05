import React, { useState, useEffect } from "react";
import MajorSelection from "./MajorSelection";
import CourseTracker from "./CourseTracker";

function App() {
	// Initialize from localStorage or null
	const [selectedMajor, setSelectedMajor] = useState(() => {
		return localStorage.getItem("selectedMajor") || null;
	});

	// Save to localStorage whenever selectedMajor changes
	useEffect(() => {
		if (selectedMajor) {
			localStorage.setItem("selectedMajor", selectedMajor);
			window.gtag('event', 'page_view', {
				page_path: window.location.pathname + window.location.search,
			});
		} else {
			localStorage.removeItem("selectedMajor");
		}
	}, [selectedMajor]);

	return (
		<div className="app-container">
			<title>Major Selection</title>
			{!selectedMajor ? (
				<MajorSelection onSelectMajor={setSelectedMajor} />
			) : (
				<CourseTracker
					majorKey={selectedMajor}
					onBack={() => setSelectedMajor(null)}
				/>
			)}
		</div>
	);
}

export default App;
