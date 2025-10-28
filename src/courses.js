// ---- Course Data ----
const majorCourseData = {
  computer_engineering: [
    // First Year
    {
      title: "Computer Engineering",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "PHYS 110", title: "University Physics I", credits: 3, prerequisites: [], corequisites: ["PHYS 111"] },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1, corequisites: ["PHYS 110"] },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "ENGR 107", title: "Introduction to Engineering", credits: 2, corequisites: ["MATH 113"] },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
        { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3, corequisites: ["CSCI 113"] },
        { code: "CSCI 113", title: "Introduction to Computer Programming Lab", credits: 1, corequisites: ["CSCI 112"] },
        { code: "MATH 114", title: "Calculus II", credits: 3, prerequisites: ["MATH 113"] },
        { code: "PHYS 220", title: "University Physics II", credits: 3, prerequisites: ["PHYS 110"] },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1, corequisites: ["PHYS 220"] },
        { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "MATH 225", title: "Discrete Mathematics", credits: 3, prerequisites: ["MATH 113"] },
        { code: "CSCI 211", title: "Object-Oriented Programming", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "EEEN 280", title: "Electric Circuit Analysis I", credits: 3, prerequisites: ["PHYS 220"] },
        { code: "EEEN 281", title: "Electric Circuit Analysis I Lab", credits: 1, corequisites: ["EEEN 280", "MENG 231"] },
        { code: "MATH 213", title: "Calculus III", credits: 3, prerequisites: ["MATH 114"] },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3, prerequisites: ["CSCI 211", "MATH 225"] },
        { code: "EEEN 220", title: "Signal and Systems", credits: 3, prerequisites: ["MATH 113"], corequisites: ["EEEN 221"] },
        { code: "EEEN 221", title: "Signal and Systems Lab", credits: 1, corequisites: ["EEEN 220"] },
        { code: "EEEN 331", title: "Digital System Design", credits: 3, prerequisites: ["PHYS 220"], corequisites: ["EEEN 332"] },
        { code: "EEEN 332", title: "Digital Systems Design Lab", credits: 1, corequisites: ["EEEN 331"] },
        { code: "MATH 203", title: "Linear Algebra", credits: 3, prerequisites: ["MATH 113"] },
        { code: "PHIL 100", title: "Critical Thinking and Reasoning", credits: 3, prerequisites: ["ENGL 101"] }
      ]
    },
    {
      year: 2,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "CENG 335", title: "Computer Architecture", credits: 3, prerequisites: ["ECEN 331"], corequisites: ["CENG 336"] },
        { code: "CENG 336", title: "Computer Architecture Lab", credits: 1, prerequisites: ["ECEN 331"], corequisites: ["CENG 335"] },
        { code: "CSCI 326", title: "Database Systems", credits: 3, prerequisites: ["CSCI 211"] },
        { code: "EEEN 333", title: "Linear Electronics I", credits: 3, prerequisites: ["EEEN 280"] },
        { code: "EEEN 334", title: "Linear Electronics I Lab", credits: 1, prerequisites: ["EEEN 281"], corequisites: ["ECEN 333"] },
        { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3, prerequisites: ["CSCI 215"] }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "CENG 315", title: "Microprocessors", credits: 3, prerequisites: ["CSCI 112", "EEEN 331"] },
        { code: "CENG 316", title: "Microprocessors Lab", credits: 1, prerequisites: ["CSCI 112", "EEEN 331"], corequisites: ["CENG 315"] },
        { code: "MATH 214", title: "Elementary Differential Equations", credits: 3, prerequisites: ["MATH 114"] },
        { code: "CSCI 462", title: "Data Communications and Computer Networks", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "CSCI 463", title: "Data Communications and Computer Networks Lab", credits: 1, corequisites: ["CSCI 462"] },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 391", title: "Internship II", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "ENGR 450", title: "Engineering Seminar", credits: 1 },
        { code: "CSAI 484", title: "Internet of Things System", credits: 3, prerequisites: ["CSCI 232", "CSCI 462"] },
        { code: "GEN-ED", title: "Social and Behavioral Science", credits: 3 },
        { code: "CENG 411", title: "Software Engineering", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CENG 492", title: "Senior Design Project I", credits: 2, prerequisites: ["ENGR 450"], corequisites: ["ECEN 491"] },
        { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3, prerequisites: ["CSCI 215", "STAT 346"] }

      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "CENG 493", title: "Senior Design Project II", credits: 4, prerequisites: ["CENG 492"] },
        { code: "CENG 431", title: "Embedded Systems Design", credits: 3, prerequisites: ["CENG 315"], corequisites: ["CENG 432"] },
        { code: "CENG 432", title: "Embedded Systems Design Lab", credits: 1, corequisites: ["CENG 431"] },
        { code: "Technical Elective I", title: "Technical Elective I", credits: 3 },
        { code: "Technical Elective II", title: "Technical Elective II", credits: 3 }
      ]
    }],
  computer_science: [
    // First Year
    {
      title: "Computer Science",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "CSCI 104", title: "Introduction to Computing", credits: 3 },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "PHYS 110", title: "University Physics I", credits: 3, corequisites: ["PHYS 111"] },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1, corequisites: ["PHYS 110"] },
        { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
        { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3, corequisites: ["CSCI 113"] },
        { code: "CSCI 113", title: "Introduction to Computer Programming Lab", credits: 1, corequisites: ["CSCI 112"] },
        { code: "MATH 114", title: "Calculus II", credits: 3, prerequisites: ["MATH 113"] },
        { code: "PHYS 220", title: "University Physics II", credits: 3, prerequisites: ["PHYS 110"] },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1, corequisites: ["PHYS 220"] },
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "CSCI 211", title: "Object-Oriented Programming", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "MATH 213", title: "Calculus III", credits: 3, prerequisites: ["MATH 114"] },
        { code: "MATH 225", title: "Discrete Mathematics", credits: 3, prerequisites: ["MATH 113"] },
        { code: "CSCI 232", title: "Computer Organization", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3, prerequisites: ["CSCI 211", "MATH 225"] },
        { code: "EEEN 331", title: "Digital System Design", credits: 3, prerequisites: ["PHYS 220"], corequisites: ["EEEN 332"] },
        { code: "EEEN 332", title: "Digital Systems Design Lab", credits: 1, corequisites: ["EEEN 331"] },
        { code: "MATH 203", title: "Linear Algebra", credits: 3, prerequisites: ["MATH 113"] },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
        { code: "PHIL 100", title: "Critical Thinking and Reasoning", credits: 3, prerequisites: ["ENGL 101"] }
      ]
    },
    {
      year: 2,
      semester: "Summer Session",
      courses: [
        { code: "CSCI 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "CENG 335", title: "Computer Architecture", credits: 3, prerequisites: ["ECEN 331"], corequisites: ["CENG 336"] },
        { code: "CENG 336", title: "Computer Architecture Lab", credits: 1, prerequisites: ["ECEN 331"], corequisites: ["CENG 335"] },
        { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
        { code: "CSCI 326", title: "Database Systems", credits: 3, prerequisites: ["CSCI 211"] },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3, prerequisites: ["CSCI 215"] }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "GEN-ED", title: "Social and Behavioral Science", credits: 3 },
        { code: "CSCI 372", title: "Compiler Design", credits: 3, prerequisites: ["CSCI 232"] },
        { code: "CSCI 462", title: "Data Communications and Computer Networks", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "CSCI 463", title: "Data Communications and Computer Networks Lab", credits: 1, corequisites: ["CSCI 462"] },
        { code: "CSCI 388", title: "Programming Languages", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CSCI 315", title: "Design and Analysis of Algorithms", credits: 3, prerequisites: ["CSCI 215"] }
      ]
    },
    {
      year: 3,
      semester: "Summer Session",
      courses: [
        { code: "CSCI 391", title: "Internship II", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3, prerequisites: ["CSCI 215", "STAT 346"] },
        { code: "CENG 411", title: "Software Engineering", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CSCI 492", title: "Senior Design Project I", credits: 2 },
        { code: "Free Elective", title: "Free Elective", credits: 3 },
        { code: "Technical Elective I", title: "Technical Elective I", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 493", title: "Senior Design Project II", credits: 4, prerequisites: ["CSCI 492"] },
        { code: "CENG 461", title: "Network Security", credits: 3, prerequisites: ["MATH 225", "CSCI 462"] },
        { code: "CSAI 351", title: "Data Science", credits: 3 },
        { code: "Technical Elective II", title: "Technical Elective II", credits: 3 }
      ]
    }],
  artificial_intelligence: [
    // First Year
    {
      title: "Artificial Intelligence",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "CSCI 104", title: "Introduction to Computing", credits: 3 },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "PHYS 110", title: "University Physics I", credits: 3, corequisites: ["PHYS 111"] },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1, corequisites: ["PHYS 110"] },
        { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3, corequisites: ["CSCI 113"] },
        { code: "CSCI 113", title: "Introduction to Computer Programming Lab", credits: 1, corequisites: ["CSCI 112"] },
        { code: "MATH 114", title: "Calculus II", credits: 3, prerequisites: ["MATH 113"] },
        { code: "PHYS 220", title: "University Physics II", credits: 3, prerequisites: ["PHYS 110"] },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1, corequisites: ["PHYS 220"] },
        { code: "MEST 100", title: "Introduction to Islam in World Culture", credits: 3 },
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
      ]
    },

    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "CSCI 211", title: "Object-Oriented Programming", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "MATH 213", title: "Calculus III", credits: 3, prerequisites: ["MATH 114"] },
        { code: "MATH 225", title: "Discrete Mathematics", credits: 3, prerequisites: ["MATH 113"] },
        { code: "CSCI 232", title: "Computer Organization", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "GEN-ED", title: "Social and Behavioral Science", credits: 3 }
      ]
    },

    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3, prerequisites: ["CSCI 211", "MATH 225"] },
        { code: "EEEN 331", title: "Digital System Design", credits: 3, prerequisites: ["PHYS 220"], corequisites: ["EEEN 332"] },
        { code: "EEEN 332", title: "Digital Systems Design Lab", credits: 1, corequisites: ["EEEN 331"] },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
        { code: "PHIL 100", title: "Critical Thinking and Reasoning", credits: 3, prerequisites: ["ENGL 101"] },
        { code: "MATH 203", title: "Linear Algebra", credits: 3, prerequisites: ["MATH 113"] }
      ]
    },
    {
      year: 2,
      semester: "Summer Semester",
      courses: [
        { code: "CSAI 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3, prerequisites: ["CSCI 215", "STAT 346"] },
        { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
        { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CSCI 326", title: "Database Systems", credits: 3, prerequisites: ["CSCI 211"] },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 315", title: "Design and Analysis of Algorithms", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CSAI 351", title: "Data Science", credits: 3, prerequisites: ["CSAI 350", "MATH 203"] },
        { code: "CSCI 462", title: "Data Communications and Computer Networks", credits: 3, prerequisites: ["CSCI 112"] },
        { code: "CSCI 415", title: "Introduction to Parallel Programming", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "CSAI 391", title: "Internship II", credits: 3}
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "CSAI 450", title: "Machine Learning", credits: 3, prerequisites: ["CSAI 350", "CSAI 351"], corequisites: ["CSAI 451"] },
        { code: "CSAI 451", title: "Machine Learning Lab", credits: 1, corequisites: ["CSAI 450"] },
        { code: "CENG 411", title: "Software Engineering", credits: 3, prerequisites: ["CSCI 215"] },
        { code: "CSCI 492", title: "Senior Design Project I", credits: 2 },
        { code: "CSAI 490", title: "Professional Software Practice", credits: 2, prerequisites: ["CSCI 492"] },
        { code: "CSAI 484", title: "Internet of Things System", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 493", title: "Senior Design Project II", credits: 4 , prerequisites: ["CSCI 492"] },
        { code: "CSAI 432", title: "Natural Language Processing", credits: 3 },
        { code: "CSAI 433", title: "Data Visualization", credits: 3 },
        { code: "Elective", title: "Technical Elective I", credits: 3 },
        { code: "Elective", title: "Technical Elective II", credits: 3 }
      ]
    }
  ],
  mechanical_engineering: [
    // First Year
    {
      title: "Mechanical Engineering",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "PHYS 110", title: "University Physics I", credits: 3 },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1 },
        { code: "ENGR 101", title: "Composition", credits: 3 },
        { code: "ENGR 107", title: "Introduction to Engineering", credits: 2 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "CHEM 211", title: "General Chemistry I", credits: 3 },
        { code: "CHEM 212", title: "General Chemistry I Lab", credits: 1 },
        { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "CSCI 114", title: "Applied Computational Thinking", credits: 3 },
        { code: "CSCI 115", title: "Applied Computational Tools", credits: 1 },
        { code: "MATH 114", title: "Calculus II", credits: 3 },
        { code: "PHYS 220", title: "University Physics II", credits: 3 },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1 },
        { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "MENG 201", title: "Mechanical Engineering Drawing", credits: 3 },
        { code: "CEN 211", title: "Statics", credits: 3 },
        { code: "ENGR 210", title: "Sustainability in Engineering", credits: 2 },
        { code: "MATH 213", title: "Calculus III", credits: 3 },
        { code: "MENG 211", title: "Thermodynamics I", credits: 3 },
        { code: "MENG 231", title: "Engineering Measurements", credits: 2 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "CEN 212", title: "Mechanics of Materials", credits: 3 },
        { code: "MENG 221", title: "Dynamics", credits: 3 },
        { code: "CEN 251", title: "Fluid Mechanics", credits: 3 },
        { code: "MATH 214", title: "Elementary Differential Equations", credits: 3 },
        { code: "MENG 212", title: "Thermodynamics II", credits: 3 },
        { code: "MENG 252", title: "Fluid Mechanics Lab", credits: 1 }
      ]
    },
    {
      year: 2,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "MENG 241", title: "Engineering Materials", credits: 3 },
        { code: "MENG 242", title: "Engineering Materials Lab", credits: 1 },
        { code: "MATH 203", title: "Linear Algebra", credits: 3 },
        { code: "ECOM 103", title: "Principles of Microeconomics", credits: 3 },
        { code: "ENGL 202", title: "English for Workplace Communication", credits: 3 },
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "MENG 361", title: "Heat Transfer", credits: 3 },
        { code: "MENG 362", title: "Thermal Sciences Lab", credits: 1 },
        { code: "MENG 321", title: "Vibration and Control", credits: 3 },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
        { code: "MENG 312", title: "Manufacturing Processes", credits: 3 },
        { code: "MENG 313", title: "Manufacturing Processes Lab", credits: 1 },
        { code: "EEEN 280", title: "Electric Circuit Analysis", credits: 3 },
        { code: "EEEN 281", title: "Electric Circuit Analysis Lab", credits: 1 },
      ]
    },
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 391", title: "Internship II", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "MENG 451", title: "Mechanical Design I", credits: 3 },
        { code: "MENG 421", title: "Theory of Machines", credits: 3 },
        { code: "MATH 391", title: "Numerical Analysis", credits: 3 },
        { code: "MENG 491", title: "Senior Design Project I", credits: 2 },
        { code: "Elective", title: "ME Technical Elective 1", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "MENG 452", title: "Mechanical Design II", credits: 3 },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 },
        { code: "MENG 492", title: "Senior Design Project II", credits: 4 },
        { code: "ENGR 450", title: "Engineering Seminar", credits: 1 },
        { code: "Elective", title: "ME Technical Elective 2", credits: 3 }
      ]
    }
  ],
  chemical_engineering: [
    // First Year
    {
      title: "Chemical Engineering",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "PHYS 110", title: "University Physics I", credits: 3 },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1 },
        { code: "ENGR 107", title: "Introduction to Engineering", credits: 2 },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "UMN 100", title: "University Freshman Transition", credits: 1 },
        { code: "CHEM 211", title: "General Chemistry I", credits: 3 },
        { code: "CHEM 212", title: "General Chemistry I Lab", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "ENGL 202", title: "English for Workplace Communication", credits: 3 },
        { code: "MATH 114", title: "Calculus II", credits: 3 },
        { code: "GEN ED", title: "Elective from Humanities/Fine Arts", credits: 3 },
        { code: "PHYS 220", title: "University Physics II", credits: 3 },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1 },
        { code: "CSCI 114", title: "Applied Computational Thinking", credits: 3 },
        { code: "CSCI 115", title: "Applied Computational Tools", credits: 1 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "CHEM 213", title: "General Chemistry II", credits: 3 },
        { code: "CHEM 214", title: "General Chemistry II Lab", credits: 1 },
        { code: "ENGR 210", title: "Sustainability in Engineering", credits: 2 },
        { code: "MATH 203", title: "Linear Algebra", credits: 3 },
        { code: "UMN 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 },
        { code: "BIOL 112", title: "University Biology I", credits: 3 },
        { code: "ECOM 103", title: "Principles of Microeconomics", credits: 3 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "MENG 241", title: "Engineering Materials", credits: 3 },
        { code: "MENG 242", title: "Materials Lab", credits: 1 },
        { code: "CHEM 215", title: "Organic Chemistry I", credits: 3 },
        { code: "CHEM 216", title: "Organic Chemistry Lab I", credits: 1 },
        { code: "MATH 214", title: "Elementary Differential Equations", credits: 3 },
        { code: "CHEN 202", title: "Principles of Chemical and Petroleum Engineering", credits: 3 },
        { code: "CIEN 251", title: "Fluid Mechanics", credits: 3 }
      ]
    },
    {
      year: 2,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "CHEN 301", title: "Computational Tools in Chemical and Petroleum Engineering", credits: 1 },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
        { code: "CHEN 315", title: "Physical Chemistry", credits: 3 },
        { code: "CHEN 316", title: "Physical Chemistry Lab", credits: 1 },
        { code: "MENG 323", title: "Engineering Economy", credits: 3 },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "HNL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
        { code: "CHEN 312", title: "Chemical Engineering Thermodynamics", credits: 3 },
        { code: "CHEN 351", title: "Chemical Reaction Engineering", credits: 3 },
        { code: "CHEN 352", title: "Chemical Reaction Lab", credits: 1 },
        { code: "CHEN 370", title: "Heat and Mass Transport", credits: 3 },
        { code: "CHEN 372", title: "Thermal and Fluid Sciences Lab", credits: 1 }
      ]
    },
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 391", title: "Internship II", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "CHEN 404", title: "Safety and Environment Impact", credits: 3 },
        { code: "CHEN 471", title: "Unit Operation Lab", credits: 1 },
        { code: "CHEN 472", title: "Separation Processes", credits: 3 },
        { code: "CHEN 481", title: "Process & Plant Design", credits: 3 },
        { code: "CHEN 483", title: "CHEN Technical Elective I", credits: 3 },
        { code: "CHEN 491", title: "Advance Simulation Lab", credits: 1 },
        { code: "CHEN 491", title: "Senior Design Project I", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "CHEN 482", title: "Chemical Process Dynamics and Control", credits: 3 },
        { code: "CHEN 484", title: "Process Integration and Optimization", credits: 3 },
        { code: "CHEN 486", title: "Data Science in Chemical Engineering", credits: 3 },
        { code: "CHEN 492", title: "Senior Design Project II", credits: 3 },
        { code: "CHEN 483", title: "CHEN Technical Elective II", credits: 3 },
        { code: "ENGR 450", title: "Engineering Seminar", credits: 1 }
      ]
    }
  ],
  electrical_electronics_engineering: [
    // First Year
    {
      title: "Electrical and Electronics Engineering",
      year: 1,
      semester: "First Semester",
      courses: [
        { code: "PHYS 110", title: "Physics I", credits: 3 },
        { code: "PHYS 111", title: "Physics I Lab", credits: 1 },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "ENGR 107", title: "Introduction to Engineering", credits: 2 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "UNIV 100", title: "University First-Year Transition", credits: 1 },
        { code: "CHEM 211", title: "General Chemistry I", credits: 3 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "CSCI 112", title: "Intro. to Computer Programming", credits: 3 },
        { code: "CSCI 113", title: "Intro. to Computer Programming Lab", credits: 1 },
        { code: "MATH 114", title: "Calculus II", credits: 3 },
        { code: "PHYS 220", title: "Physics II", credits: 3 },
        { code: "PHYS 221", title: "Physics II Lab", credits: 1 },
        { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "EEEN 280", title: "Electric Circuit Analysis I", credits: 3 },
        { code: "EEEN 281", title: "Electric Circuit Analysis I Lab", credits: 1 },
        { code: "ENGL 202", title: "English for Workplace Communication", credits: 3 },
        { code: "MATH 203", title: "Linear Algebra", credits: 3 },
        { code: "MATH 213", title: "Calculus III", credits: 3 },
        { code: "EEEN 331", title: "Digital System Design", credits: 3 },
        { code: "EEEN 332", title: "Digital System Design Lab", credits: 1 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "EEEN 220", title: "Signals & Systems", credits: 3 },
        { code: "EEEN 221", title: "Signals & Systems Lab", credits: 1 },
        { code: "EEEN 282", title: "Electric Circuit Analysis II", credits: 3 },
        { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
        { code: "MATH 214", title: "Elementary Differential Equations", credits: 3 },
        { code: "ENGR 210", title: "Sustainability in Engineering", credits: 2 }
      ]
    },
    {
      year: 2,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 390", title: "Internship I", credits: 3 }
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "First Semester",
      courses: [
        { code: "EEEN 305", title: "Electromagnetic Theory", credits: 3 },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 },
        { code: "EEEN 350", title: "Electric Machines", credits: 3 },
        { code: "EEEN 351", title: "Electric Machines Lab", credits: 1 },
        { code: "EEEN 333", title: "Linear Electronics I", credits: 3 },
        { code: "EEEN 334", title: "Linear Electronics I Lab", credits: 1 },
        { code: "EEEN 413", title: "Microcontrollers and Embedded Systems", credits: 3 },
        { code: "EEEN 414", title: "Microcontrollers and Embedded Systems Lab", credits: 1 }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "EEEN 412", title: "Power Systems", credits: 3 },
        { code: "EEEN 433", title: "Linear Electronics II", credits: 3 },
        { code: "EEEN 434", title: "Linear Electronics II Lab", credits: 1 },
        { code: "EEEN 431", title: "Digital Circuit Design", credits: 3 },
        { code: "EEEN 451", title: "Control Theory", credits: 3 },
        { code: "EEEN 452", title: "Control Lab", credits: 1 },
        { code: "EEEN 460", title: "Communication Systems", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "ENGR 391", title: "Internship II", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 },
        { code: "EEEN 437", title: "Power Electronics", credits: 3 },
        { code: "EEEN 492", title: "Senior Design Project I", credits: 2 },
        { code: "EEEN 466", title: "Digital Signal Processing", credits: 3 },
        { code: "Elective", title: "Technical Elective I", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Second Semester",
      courses: [
        { code: "EEEN 464", title: "Digital Communication Systems", credits: 3 },
        { code: "ENGR 450", title: "Engineering Seminar", credits: 1 },
        { code: "EEEN 493", title: "Senior Design Project II", credits: 4 },
        { code: "EEEN 461", title: "Communication Engineering Lab", credits: 1 },
        { code: "Elective", title: "Technical Elective II", credits: 3 },
        { code: "ECON 103", title: "Principles of Microeconomics", credits: 3 }
      ]
    }
  ],
  "biotechnology": [
    {
      "title": "Biotechnology",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        { code: "BIOL 112", title: "University Biology I", credits: 3, corequisites: ["BIOL 113"] },
        { code: "BIOL 113", title: "University Biology I Lab", credits: 1, corequisites: ["BIOL 112"] },
        { code: "MATH 111", title: "Calculus with Life Sciences Applications", credits: 3 },
        { code: "ENG 101", title: "Composition", credits: 3 },
        { code: "CHEM 111", title: "Principles of General Chemistry", credits: 3, corequisites: ["CHEM 112"] },
        { code: "CHEM 112", title: "Principles of General Chemistry Lab", credits: 1, corequisites: ["CHEM 111"] },
        { code: "UNIV 100", title: "University First - Year Transition", credits: 1 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        { code: "BIOL 114", title: "University Biology II", credits: 3, corequisites: ["BIOL 115"] },
        { code: "BIOL 115", title: "University Biology II Lab", credits: 1, corequisites: ["BIOL 114"] },
        { code: "MEST 100", title: "Introduction to Islam in World Culture", credits: 3 },
        { code: "STAT 100", title: "Introductory Probability and Statistics", credits: 3 },
        { code: "CHEM 120", title: "Analytical Chemistry", credits: 3, corequisites: ["CHEM 121"] },
        { code: "CHEM 121", title: "Analytical Chemistry Lab", credits: 1, corequisites: ["CHEM 120"] },
        { code: "GEN ED", title: "Social Sciences Course", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 2,
      "semester": "First Semester",
      "courses": [
        { code: "BIOL 230", title: "General Microbiology", credits: 3, prerequisites: ["BIOL 114"] },
        { code: "BIOL 231", title: "General Microbiology Lab", credits: 1, corequisites: ["BIOL 230"] },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 },
        { code: "CHEM 215", title: "Organic Chemistry I", credits: 3, prerequisites: ["CHEM 111", "CHEM 120"] },
        { code: "CHEM 216", title: "Organic Chemistry Lab I", credits: 1, corequisites: ["CHEM 215"] },
        { code: "ITEC 103", title: "Fundamentals of Information Technology", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        { code: "BIOL 270", title: "General Genetics", credits: 3, prerequisites: ["BIOL 112", "BIOL 114"], corequisites: ["BIOL 271"] },
        { code: "BIOL 271", title: "General Genetics Lab", credits: 1, corequisites: ["BIOL 270"] },
        { code: "BIOL 250", title: "Biochemistry I", credits: 3, prerequisites: ["CHEM 111", "CHEM 120"], corequisites: ["BIOL 251"] },
        { code: "BIOL 251", title: "Biochemistry I Lab", credits: 1, corequisites: ["BIOL 250"] },
        { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
        { code: "GEN-ED", title: "Humanities and Fine Arts Elective ", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "First Semester",
      "courses": [
        { code: "BIOL 350", title: "Biochemistry II", credits: 3, prerequisites: ["BIOL 250"] },
        { code: "BIOL 380", title: "Biotechnology and Genetic Engineering", credits: 3, prerequisites: ["BIOL 270"] },
        { code: "BIOL 381", title: "Biotechnology Lab Methods and Techniques", credits: 1, corequisites: ["BIOL 380"] },
        { code: "BIOL 356", title: "Virology", credits: 3, prerequisites: ["BIOL 230"] },
        { code: "ENGL 202", title: "English for the Workplace", credits: 3, prerequisites: ["ENGL 101"] },
        { code: "Elective", title: "Free Elective", credits: 3 },
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        { code: "BIOL 330", title: "Applied and Industrial Microbiology", credits: 3, corequisites: ["BIOL 331"] },
        { code: "BIOL 331", title: "Techniques in Applied and Industrial Microbiology", credits: 1, corequisites: ["BIOL 330"] },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "BIOL 100", title: "Humankind in a Biological World", credits: 3, prerequisites: [] },
        { code: "Program Elective", title: "Biotechnology Elective", credits: 4 },
        { code: "Elective", title: "Free Elective", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        { code: "BIOL 390", title: "Internships", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        { code: "BIOL 435", title: "Stem Cell Biology and Regenerative Medicine", credits: 3, prerequisites: ["BIOL 270"] },
        { code: "BIOL 442", title: "Molecular Diagnostic", credits: 3, prerequisites: ["BIOL 270"], corequisites: ["BIOL 443"] },
        { code: "BIOL 443", title: "Molecular Diagnostics Lab", credits: 1, corequisites: ["BIOL 442"] },
        { code: "BIOL 493", title: "Research Methodology in the Biological Sciences", credits: 3 },
        { code: "BIOL 450", title: "Bioethics", credits: 3 },
        { code: "BIOL 491", title: "Senior Seminar", credits: 2 },
        { code: "Program Elective", title: "Biotechnology Elective", credits: 3 }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        { code: "BIOL 440", title: "Medical Microbiology", credits: 3, prerequisites: ["BIOL 330"], corequisites: ["BIOL 441"] },
        { code: "BIOL 441", title: "Medical Microbiology Lab", credits: 1, corequisites: ["BIOL 440"] },
        { code: "BIOL 436", title: "Immunology", credits: 3, prerequisites: ["BIOL 270"] },
        { code: "BIOL 411", title: "Drug Discovery, Design and Development", credits: 3, prerequisites: ["BIOL 350"] },
        { code: "BIOL 495", title: "Senior Project in Medical Biotechnology", credits: 4, prerequisites: ["BIOL 493"] }
      ]
    }
  ],
  "architecture": [
    {
      "title": "Architecture",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        { code: "ARCH 121", title: "Basic Design I", credits: 4 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "INDS 112", title: "Design Communication 1: Sketching and Drawing for Interiors", credits: 3 },
        { code: "ENGL 101", title: "Composition", credits: 3 },
        { code: "UNIV 100", title: "University First - Year Transition", credits: 1 }
      ]
    },
    {
      "title": "Architecture",
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        { code: "ARCH 122", title: "Basic Design 2", credits: 4, prerequisites: ["ARCH 121"] },
        { code: "INDS 121", title: "Interior Design Process, Human factors and Ergonomics", credits: 3 },
        { code: "INDS 122", title: "Design Communication 2: Digital Media for Interiors", credits: 3, prerequisites: ["INDS 112"] },
        { code: "PHYS 110", title: "University Physics I", credits: 3, corequisites: ["PHYS 111"] },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1, corequisites: ["PHYS 110"] },
        { code: "CSCI 114", title: "Applied Computational Thinking", credits: 3 },
        { code: "CSCI 115", title: "Applied Computational Tools", credits: 1 }
      ]
    },
    {
      "title": "Architecture",
      "year": 2,
      "semester": "First Semester",
      "courses": [
        { code: "ARCH 221", title: "Architectural Design Studio 1", credits: 4, prerequisites: ["ARCH 122"] },
        { code: "ARCH 231", title: "Building Construction 1", credits: 3, prerequisites: ["INDS 122"] },
        { code: "ARCH 241", title: "History and Theory of Architecture 1", credits: 3 },
        { code: "CIEN 216", title: "Structures for Architecture 1", credits: 3, prerequisites: ["MATH 113", "PHYS 110"] },
        { code: "ARCH 223", title: "Computer Architectural Drawing", credits: 3, prerequisites: ["INDS 122"] }
      ]
    },
    {
      "title": "Architecture",
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        { code: "ARCH 222", title: "Architectural Design Studio 2", credits: 4, prerequisites: ["ARCH 221"] },
        { code: "ARCH 232", title: "Building Construction 2", credits: 3, prerequisites: ["ARCH 231"] },
        { code: "ARCH 242", title: "History and Theory of Architecture 2", credits: 3, prerequisites: ["ARCH 241"] },
        { code: "CIEN 316", title: "Structures for Architecture 2", credits: 3, prerequisites: ["CIEN 216"] },
        { code: "ENGL 202", title: "English for Workplace Communication", credits: 3 }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "First Semester",
      "courses": [
        { code: "ARCH 321", title: "Architectural Design Studio 3", credits: 4, prerequisites: ["ARCH 222"] },
        { code: "ARCH 331", title: "Building Construction 3", credits: 3, prerequisites: ["ARCH 232"] },
        { code: "ARCH 341", title: "History and Theory of Architecture 3", credits: 3, prerequisites: ["ARCH 242"] },
        { code: "CIEN 261", title: "Surveying", credits: 1, prerequisites: ["CIEN 201", "INDS 122"] },
        { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
        { code: "GEN ED", title: "Social and Behavioral Science", credits: 3 }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        { code: "ARCH 322", title: "Architectural Design Studio 4", credits: 4, prerequisites: ["ARCH 321"] },
        { code: "ARCH 336", title: "Construction Drawings", credits: 3, prerequisites: ["ARCH 223", "ARCH 331"] },
        { code: "ARCH 342", title: "History and Theory of Contemporary Architecture", credits: 3, prerequisites: ["ARCH 341"] },
        { code: "ARCH 372", title: "Sustainable Architecture", credits: 3, prerequisites: ["ENVS 102"] },
        { code: "ARCH 000", title: "Technical Elective 1", credits: 3 }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        { code: "ARCH 390", title: "Internship I", credits: 3 }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        { code: "ARCH 421", title: "Architectural Design Studio 5", credits: 4, prerequisites: ["ARCH 322"] },
        { code: "ARCH 463", title: "Landscape Architecture", credits: 3, prerequisites: ["ARCH 322"] },
        { code: "MENG 468", title: "Building Utilities I: HVAC and Mechanical Building Services", credits: 3, prerequisites: ["PHYS 110", "ARCH 336"] },
        { code: "GEN-ED", title: "Humanities/Fine Arts Course", credits: 3 },
        { code: "ARCH 457", title: "Urban Design", credits: 3, corequisites: ["ARCH 463"] }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        { code: "ARCH 422", title: "Architectural Design Studio 6", credits: 4, prerequisites: ["ARCH 421"] },
        { code: "ARCH 466", title: "Building Utilities II: Illumination, Acoustics, and Electrical Building Services", credits: 3, prerequisites: ["MENG 468"] },
        { code: "ARCH 454", title: "Urban Planning", credits: 3, prerequisites: ["ARCH 322"] },
        { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
        { code: "PHIL 100", title: "Critical Thinking and Reasoning", credits: 3, prerequisites: ["ENGL 101"] }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Summer Semester",
      "courses": [
        { code: "ARCH 391", title: "Internship II", credits: 3 }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        { code: "ARCH 521", title: "Architectural Design Studio 7", credits: 4, prerequisites: ["ARCH 422"] },
        { code: "ARCH 591", title: "Graduation Project Thesis Research", credits: 2, prerequisites: ["ARCH 422"] },
        { code: "ARCH 000", title: "Technical Elective 2", credits: 3 },
        { code: "ARCH 487", title: "Project Management", credits: 3, prerequisites: ["ARCH 336"] }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        { code: "ARCH 592", title: "Graduation Project Design", credits: 5, prerequisites: ["ARCH 521", "ARCH 591"] },
        { code: "MENG 323", title: "Engineering Economy", credits: 3, prerequisites: ["MATH 113"] },
        { code: "ARCH 485", title: "Professional Practice", credits: 3, prerequisites: ["ARCH 422"] },
        { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 }
      ]
    }
  ],
  "mass_communication": [{
    title: "Mass Communications",
    year: 1,
    semester: "First Semester",
    courses: [
      { code: "COMM 111", title: "Introduction to Mass Communication", credits: 3 },
      { code: "ENGL 101", title: "Composition", credits: 3, prerequisites: ["ENGL 099"] },
      { code: "ITEC 103", title: "Fundamentals of Information Technology", credits: 3 },
      { code: "UNIV 100", title: "University First - Year Transition", credits: 1 },
      { code: "GEN_ED", title: "Humanities/Fine Arts Course", credits: 3 },
      { code: "GEN-ED-", title: "Social and Behavioral Science", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 1,
    semester: "Second Semester",
    courses: [
      { code: "COMM 112", title: "Introduction to Public Relations", credits: 3 },
      { code: "COMM 113", title: "Introduction to Digital Media", credits: 3 },
      { code: "ENGL 202", title: "English for Workplace Communication", credits: 3 },
      { code: "UNIV 200", title: "Innovation, Entrepreneurship and Sustainability", credits: 3 },
      { code: "PHIL 100", title: "Critical Thinking and Reasoning", credits: 3, prerequisites: ["ENGL 101"] }
    ]
  },
  {
    title: "Mass Communications",
    year: 2,
    semester: "First Semester",
    courses: [
      { code: "COMM 212", title: "Media Writing", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "COMM 222", title: "Intercultural Mass Communication", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "COMM 214", title: "New Media and Digital Culture", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
      { code: "GEN ED", title: "Mathematics Course", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 2,
    semester: "Second Semester",
    courses: [
      { code: "COMM 215", title: "Feature Writing", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "COMM 223", title: "Globalization and Media Cultures", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "COMM 224", title: "Visual Storytelling", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "Mass Communication", title: "Elective", credits: 3 },
      { code: "ARAB 210", title: "Arabic for Media: Native Speakers", credits: 3, prerequisites: ["ARAB 101"] }
    ]
  },
  {
    title: "Mass Communications",
    year: 3,
    semester: "First Semester",
    courses: [
      { code: "COMM 311", title: "Media Law and Ethics", credits: 3, prerequisites: ["COMM 111", "COMM 112", "COMM 113"] },
      { code: "COMM 321", title: "Theories of Media Communication", credits: 3, prerequisites: ["COMM 212", "COMM 222", "COMM 223"] },
      { code: "COMM 323", title: "News Reporting", credits: 3, prerequisites: ["COMM 212", "COMM 215"] },
      { code: "GEN-ED", title: "Natural Science Course", credits: 3 },
      { code: "Mass Communication", title: "Elective", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 3,
    semester: "Second Semester",
    courses: [
      { code: "COMM 391", title: "Communication Research Methodology", credits: 2, prerequisites: ["COMM 212", "COMM 222", "COMM 223"] },
      { code: "COMM 334", title: "Broadcast Journalism", credits: 3, prerequisites: ["COMM 212", "COMM 214", "COMM 215", "COMM 224"] },
      { code: "Mass Communication", title: "Elective", credits: 3 },
      { code: "Elective", title: "Free Elective", credits: 3 },
      { code: "Elective", title: "Free Elective", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 3,
    semester: "Summer Semester",
    courses: [
      { code: "COMM 390", title: "Internship in Mass Communication", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 4,
    semester: "First Semester",
    courses: [
      { code: "COMM 492", title: "Mass Media and Public Opinion", credits: 3, prerequisites: ["COMM 311", "COMM 321", "COMM 323", "COMM 391"] },
      { code: "COMM 423", title: "Interactive Multimedia", credits: 3, prerequisites: ["COMM 321", "COMM 337", "COMM 391"] },
      { code: "COMM 450", title: "Selected Topics in Communication ", credits: 3, prerequisites: [] },
      { code: "Mass Communication", title: "Elective", credits: 3 },
      { code: "Elective", title: "Free Elective", credits: 3 }
    ]
  },
  {
    title: "Mass Communications",
    year: 4,
    semester: "Second Semester",
    courses: [
      { code: "COMM 424", title: "Capstone: Multimedia Storytelling", credits: 3, prerequisites: [] },
      { code: "Elective", title: "Free Elective", credits: 3 },
      { code: "Elective", title: "Free Elective", credits: 3 },
      { code: "Mass Communication", title: "Elective", credits: 3 },
    ]
  }
  ],
};

export { majorCourseData };