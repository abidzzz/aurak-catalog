import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./App.css";
import { majorCourseData } from './courses.js';

function CourseTracker({ majorKey, onBack }) {
	// Variables 
	const [catalog, setCatalog] = useState([]);
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	const [hoveredCourse, setHoveredCourse] = useState(null);
	const [warning, setWarning] = useState({ show: false, message: '' });
	const [shakingCourse, setShakingCourse] = useState(null);

	// Total and remaining credits calculation
	const totalCredits = catalog
		.flatMap((semester) => semester.courses)
		.filter((course) => course.completed)
		.reduce((sum, course) => sum + course.credits, 0);

	const remainingCredits = catalog
		.flatMap((semester) => semester.courses)
		.filter((course) => !course.completed)
		.reduce((sum, course) => sum + course.credits, 0);

	const resetProgress = () => {
		localStorage.removeItem(`catalog-${majorKey}`);
		setCatalog(majorCourseData[majorKey]);
	};
	const totalPossibleCredits = catalog
		.flatMap((semester) => semester.courses)
		.reduce((sum, course) => sum + course.credits, 0);

	const progressPercentage = totalPossibleCredits > 0
		? (totalCredits / totalPossibleCredits) * 100
		: 0;

	// To Store and Retrieve Catalog from localStorage
// To Store and Retrieve Catalog from localStorage
useEffect(() => {
	const originalCatalog = majorCourseData[majorKey];
	const savedCatalog = localStorage.getItem(`catalog-${majorKey}`);
	
	if (savedCatalog) {
		const parsedCatalog = JSON.parse(savedCatalog);
		
		// Reconstruct catalog from saved structure but with fresh data from original
		const updatedCatalog = parsedCatalog.map((savedSemester) => {
			// Find matching semester in original catalog by year and semester name
			const originalSemester = originalCatalog.find(orig => 
				orig.year === savedSemester.year && orig.semester === savedSemester.semester
			);
			
			if (!originalSemester) return savedSemester;
			
			// For each course in the saved semester, find the fresh version from original
			const updatedCourses = savedSemester.courses.map(savedCourse => {
				// Find fresh course data from original semester
				const freshCourse = originalSemester.courses.find(c => c.code === savedCourse.code);
				
				if (freshCourse) {
					// Use fresh course data (with updated prerequisites) but keep completion status
					return {
						...freshCourse,
						completed: savedCourse.completed || false
					};
				}
				// If course not found in original (maybe removed from curriculum), keep saved version
				return savedCourse;
			});
			
			return {
				...savedSemester,
				courses: updatedCourses
			};
		});
		
		setCatalog(updatedCatalog);
	} else {
		setCatalog(originalCatalog);
	}
}, [majorKey]);

// Save catalog to localStorage whenever it changes
useEffect(() => {
	if (catalog.length > 0) {
		// ONLY save essential data - course codes, positions, and completion status
		// Don't save prerequisites, titles, credits, etc. - they come from courses.js
		const catalogToSave = catalog.map(semester => ({
			year: semester.year,
			semester: semester.semester,
			title: semester.title,
			courses: semester.courses.map(course => ({
				code: course.code,
				completed: course.completed || false
				// That's it! No prerequisites, no titles, no credits
			}))
		}));
		localStorage.setItem(`catalog-${majorKey}`, JSON.stringify(catalogToSave));
	}
}, [catalog, majorKey]);
	// Check prerequisites for a course
	const checkPrerequisites = (course, semesterIndex) => {
		if (!course.prerequisites || course.prerequisites.length === 0) {
			return { valid: true };
		}

		// Get all completed courses from previous semesters
		const previousCourses = catalog
			.slice(0, semesterIndex)
			.flatMap(sem => sem.courses)
			.filter(c => c.completed)
			.map(c => c.code);

		// Get total completed credits
		const totalCompletedCredits = catalog
			.flatMap(sem => sem.courses)
			.filter(c => c.completed)
			.reduce((sum, c) => sum + c.credits, 0);

		const missingRequirements = [];

		// Check each prerequisite condition
		for (const prereq of course.prerequisites) {
			// Check for credit hour requirements
			if (typeof prereq === 'string' && prereq.toLowerCase().includes('credit')) {
				const creditMatch = prereq.match(/(\d+)\s*Credit/);
				if (creditMatch) {
					const requiredCredits = parseInt(creditMatch[1]);
					if (totalCompletedCredits < requiredCredits) {
						missingRequirements.push(prereq);
					}
				}
				continue;
			}
			
			// Check for CGPA requirements (always return true for now, or handle differently)
			if (typeof prereq === 'string' && prereq.toLowerCase().includes('cgpa')) {
				// You could add CGPA tracking if needed
				// For now, assume satisfied
				continue;
			}
			
			// Check if prerequisite contains "or" (case insensitive)
			if (typeof prereq === 'string' && prereq.toLowerCase().includes(' or ')) {
				// Handle OR condition
				const options = prereq.split(/\s+or\s+/i);
				const validOptions = options.filter(option => 
					previousCourses.includes(option) || previousCourses.includes(option.trim())
				);
				
				if (validOptions.length === 0) {
					missingRequirements.push(`(${options.join(' or ')})`);
				}
			} else {
				// Handle AND condition - only check if it looks like a course code
				// Skip text-based prerequisites that aren't course codes
				const looksLikeCourseCode = /^[A-Z]{2,4}\s?\d{3}/.test(prereq);
				if (looksLikeCourseCode && !previousCourses.includes(prereq)) {
					missingRequirements.push(prereq);
				}
			}
		}

		if (missingRequirements.length > 0) {
			return {
				valid: false,
				message: `Missing: ${missingRequirements.join(', ')}`
			};
		}

		return { valid: true };
	};

	const getPrerequisiteText = (course) => {
		const formatPrereq = (prereq) => {
				if (prereq.toLowerCase().includes(' or ')) {
					return `(${prereq})`;
				}
				return prereq;
			};

		if (course.prerequisites && course.prerequisites.length > 0) {
			const formattedPrereqs = course.prerequisites.map(formatPrereq);
			return `Prerequisites: ${formattedPrereqs.join(', ')}`;
		}
		if (course.corequisites && course.corequisites.length > 0) {
			return `Corequisites: ${course.corequisites.join(', ')}`;
		}
		return 'No prerequisites';
	};

	// handleCheckbox function 
	const handleCheckbox = (course, semesterIndex) => {
		const validation = checkPrerequisites(course, semesterIndex);

		if (!course.completed && !validation.valid) {
			// Show warning and shake animation
			setWarning({
				show: true,
				message: validation.message
			});
			setShakingCourse(course.code);

			// Hide warning after 4 seconds
			setTimeout(() => {
				setWarning({ show: false, message: '' });
			}, 4000);

			// Stop shaking after 600ms
			setTimeout(() => {
				setShakingCourse(null);
			}, 600);

			return;
		}

		// If validation passes, proceed with toggle
		const updatedCatalog = [...catalog];
		const semCourses = updatedCatalog[semesterIndex].courses;

		const updatedCourses = semCourses.map((c) =>
			c.code === course.code ? { ...c, completed: !c.completed } : c
		);

		updatedCatalog[semesterIndex].courses = updatedCourses;
		setCatalog(updatedCatalog);
	};


	const handleCourseHover = (course, event) => {
		setHoveredCourse(course);
		const rect = event.currentTarget.getBoundingClientRect();
		setTooltipPosition({
			x: rect.left + window.scrollX,
			y: rect.bottom + window.scrollY + 5
		});
	};

	const handleCourseLeave = () => {
		setHoveredCourse(null);
	};

	// Handle drag and drop functionality
	const handleDragEnd = (result) => {
		const { source, destination } = result;

		if (!destination) return;

		const startSemesterIndex = parseInt(source.droppableId.split("-")[1]);
		const endSemesterIndex = parseInt(destination.droppableId.split("-")[1]);

		// If the course is being dropped back in the same place, do nothing
		if (startSemesterIndex === endSemesterIndex && source.index === destination.index) {
			return;
		}

		const startSemesterCourses = [...catalog[startSemesterIndex].courses];
		const endSemesterCourses = [...catalog[endSemesterIndex].courses];

		const [removed] = startSemesterCourses.splice(source.index, 1); // Get the removed course

		// Check if the course already exists in the destination semester
		const courseAlreadyInTarget = endSemesterCourses.some((course) => course.code === removed.code);

		if (courseAlreadyInTarget) {
			// If the course already exists in the target semester, revert the change
			startSemesterCourses.splice(source.index, 0, removed);
			setCatalog([...catalog]);
			return;
		}

		// If the course doesn't exist, proceed with the drag-and-drop
		endSemesterCourses.splice(destination.index, 0, removed);

		const updatedCatalog = [...catalog];
		updatedCatalog[startSemesterIndex].courses = startSemesterCourses;
		updatedCatalog[endSemesterIndex].courses = endSemesterCourses;

		setCatalog(updatedCatalog); // Update the catalog with the new state
	};

	return (
		<div className="app">
			<title>Course Tracker</title>
			<button className="back-button" onClick={onBack}>← Back to Major Selection</button>

			<h1 className="main-title">BS in {catalog.length > 0 && catalog[0].title} Four-Year Schedule</h1>
			<DragDropContext onDragEnd={handleDragEnd}>
				<div className="credits-container">
					<div className="credits">Total Credits: {totalCredits + remainingCredits}</div>
					<div className="credits">Completed Credits: {totalCredits}</div>
					<div className="credits">Remaining Credits: {remainingCredits}</div>
				</div>
				<div className="progress-section">
					<div className="progress-header">
						<span>Progress</span>
						<span>{progressPercentage.toFixed(1)}%</span>
					</div>
					<div className="progress-bar">
						<div
							className="progress-fill"
							style={{ width: `${progressPercentage}%` }}
						></div>
					</div>
					<div className="progress-stats">
						<span>{totalCredits} / {totalPossibleCredits} credits completed</span>
					</div>
				</div>

				<button className="reset-button" onClick={resetProgress}>Reset Progress</button>

				<div className="grid">
					{catalog.map((sem, index) => {
						const semesterTotalCredits = sem.courses.reduce((sum, course) => sum + course.credits, 0); // Total credits per semester

						return (
							<Droppable droppableId={`semester-${index}`} key={index}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className={`card ${sem.semester.includes("Summer") ? "summer-semester" : ""}`}
									>
										<h2 className="subtitle">
											Year {sem.year} - {sem.semester}
										</h2>
										{sem.courses.map((course, idx) => (
											<Draggable key={course.code} draggableId={course.code} index={idx}>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														className={`course ${course.completed ? "completed" : ""} ${shakingCourse === course.code ? 'shake-animation' : ''
															}`}
														onClick={() => handleCheckbox(course, index)}
														onMouseEnter={(e) => handleCourseHover(course, e)}
														onMouseLeave={handleCourseLeave}
													>
														<input
															type="checkbox"
															checked={course.completed || false}
															onChange={(e) => {
																e.stopPropagation();
																handleCheckbox(course, index);
															}}
															onClick={(e) => e.stopPropagation()}
														/>
														<span>
															<strong>{course.code}</strong> - {course.title} ({course.credits} cr)
														</span>
													</div>
												)}
											</Draggable>

										))}
										{provided.placeholder}
										<div className="semester-credits">
											<strong>Total Credits: {semesterTotalCredits}</strong>
										</div>
									</div>
								)}
							</Droppable>
						);
					})}
				</div>
			</DragDropContext>

			{/* Prerequisites Tooltip */}
			{hoveredCourse && (hoveredCourse.prerequisites?.length > 0 || hoveredCourse.corequisites?.length > 0) && (
				<div
					className="prereq-tooltip show"
					style={{
						left: `${tooltipPosition.x}px`,
						top: `${tooltipPosition.y}px`
					}}
				>
					<strong>{hoveredCourse.code}</strong><br />
					{getPrerequisiteText(hoveredCourse)}
				</div>
			)}

			{/* Warning Toast - Bottom Right */}
			{warning.show && (
				<div className="warning-toast">
					<div className="warning-icon">⚠️</div>
					<div className="warning-content">
						<strong>Prerequisite Warning</strong>
						<p>{warning.message}</p>
					</div>
				</div>
			)}

			<footer>
				<p>
					© 2025 – Present • Developed by <strong>Abid</strong> •
					<a href="https://github.com/abidzzz" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</p>
			</footer>
		</div>
	);
}

export default CourseTracker;