import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./App.css"; // Import CSS
import { majorCourseData } from './courses.js';

function CourseTracker({ majorKey, onBack }) {
	const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const savedCatalog = localStorage.getItem(`catalog-${majorKey}`);
    if (savedCatalog) {
      const parsedCatalog = JSON.parse(savedCatalog);
      
      // Merge with original data to preserve prerequisites
      const originalCatalog = majorCourseData[majorKey];
      const mergedCatalog = parsedCatalog.map((semester, index) => {
        if (originalCatalog[index]) {
          return {
            ...semester,
            courses: semester.courses.map(course => {
              const originalCourse = originalCatalog[index].courses.find(oc => oc.code === course.code);
              return {
                ...course,
                prerequisites: originalCourse?.prerequisites || [],
                corequisites: originalCourse?.corequisites || []
              };
            })
          };
        }
        return semester;
      });
      
      setCatalog(mergedCatalog);
    } else {
      setCatalog(majorCourseData[majorKey]);
    }
  }, [majorKey]);

  // Save catalog to localStorage whenever it changes
  useEffect(() => {
    if (catalog.length > 0) {
      localStorage.setItem(`catalog-${majorKey}`, JSON.stringify(catalog));
    }
  }, [catalog, majorKey]);


  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredCourse, setHoveredCourse] = useState(null);

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

	// Handle course completion toggle
	const handleCheckbox = (course, semesterIndex) => {
		const updatedCatalog = [...catalog];
		const semCourses = updatedCatalog[semesterIndex].courses;

		// Toggle the completed status of the course
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

  const getPrerequisiteText = (course) => {
    if (course.prerequisites && course.prerequisites.length > 0) {
      return `Prerequisites: ${course.prerequisites.join(', ')}`;
    }
    if (course.corequisites && course.corequisites.length > 0) {
      return `Corequisites: ${course.corequisites.join(', ')}`;
    }
    return 'No prerequisites';
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
														className={`course ${course.completed ? "completed" : ""}`}
														onClick={() => handleCheckbox(course, index)} // Toggle the completion when clicking anywhere on the course
                            onMouseEnter={(e) => handleCourseHover(course, e)}
                            onMouseLeave={handleCourseLeave}
													>
														<input
															type="checkbox"
															checked={course.completed || false}
															onChange={() => handleCheckbox(course, index)} // Handle checkbox change (still works)
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
    {hoveredCourse && (hoveredCourse.prerequisites?.length > 0 || hoveredCourse.corequisites?.length > 0) && (
        <div 
          className="prereq-tooltip show"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`
          }}
        >
          <strong>{hoveredCourse.code}</strong><br/>
          {getPrerequisiteText(hoveredCourse)}
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