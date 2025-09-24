// ---- Course Data ----
const majorCourseData = {
    computer_engineering: [
  // First Year
  {
    title: "Computer Engineering",
    year: 1,
    semester: "First Semester",
    courses: [
      { code: "PHYS 110", title: "University Physics I", credits: 3 },
      { code: "PHYS 111", title: "University Physics I Lab", credits: 1 },
      { code: "ENGL 101", title: "Composition", credits: 3 },
      { code: "ENGR 107", title: "Introduction to Engineering", credits: 2 },
      { code: "MATH 113", title: "Calculus I", credits: 3 },
      { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
      { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
    ]
  },
  {
    year: 1,
    semester: "Second Semester",
    courses: [
      { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
      { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3 },
      { code: "CSCI 113", title: "Intro. to Computer Programming Lab", credits: 1 },
      { code: "MATH 114", title: "Calculus II", credits: 3 },
      { code: "PHYS 220", title: "University Physics II", credits: 3 },
      { code: "PHYS 221", title: "University Physics II Lab", credits: 1 },
      { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
    ]
  },

  // Second Year
  {
    year: 2,
    semester: "First Semester",
    courses: [
      { code: "MATH 225", title: "Discrete Mathematics", credits: 3 },
      { code: "CSCI 211", title: "Object-Oriented Programming", credits: 3 },
      { code: "EEEN 280", title: "Electric Circuit Analysis I", credits: 3 },
      { code: "EEEN 281", title: "Electric Circuit Analysis Lab", credits: 1 },
      { code: "MATH 213", title: "Calculus III", credits: 3 },
      { code: "ENGR 200", title: "Engineering Statistics", credits: 3 }
    ]
  },
  {
    year: 2,
    semester: "Second Semester",
    courses: [
      { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3 },
      { code: "EEEN 220", title: "Signals & Systems", credits: 3 },
      { code: "EEEN 221", title: "Signals & Systems Lab", credits: 1 },
      { code: "EEEN 331", title: "Digital System Design", credits: 3 },
      { code: "EEEN 332", title: "Digital System Design Lab", credits: 1 },
      { code: "MATH 203", title: "Linear Algebra", credits: 3 },
      { code: "ENG 202", title: "English for Workplace Communication", credits: 3 }
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
      { code: "CENG 335", title: "Computer Architecture", credits: 3 },
      { code: "CENG 336", title: "Computer Architecture Lab", credits: 1 },
      { code: "CSCI 326", title: "Database Systems", credits: 3 },
      { code: "EEEN 333", title: "Linear Electronics I", credits: 3 },
      { code: "EEEN 334", title: "Linear Electronics Lab I", credits: 1 },
      { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3 }
    ]
  },
  {
    year: 3,
    semester: "Second Semester",
    courses: [
      { code: "CENG 315", title: "Microprocessor", credits: 3 },
      { code: "CENG 316", title: "Microprocessor Lab", credits: 1 },
      { code: "MATH 214", title: "Elementary Differential Equations", credits: 3 },
      { code: "CSCI 462", title: "Data Comm. and Computer Networks", credits: 3 },
      { code: "CSCI 463", title: "Data Comm. and Computer Networks Lab", credits: 1 },
      { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
      { code: "UNIV 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 }
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
      { code: "CSAI 484", title: "Internet of Things System", credits: 3 },
      { code: "GEN-ED ", title: "Social and Behavioral Sciences Course", credits: 3 },
      { code: "CENG 411", title: "Software Engineering", credits: 3 },
      { code: "CENG 492", title: "Senior Design Project I", credits: 2 },
      { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3 }
    ]
  },
  {
    year: 4,
    semester: "Second Semester",
    courses: [
      { code: "CENG 493", title: "Senior Design Project II", credits: 4 },
      { code: "CENG 431", title: "Embedded Systems Design", credits: 3 },
      { code: "CENG 432", title: "Embedded Systems Design Lab", credits: 1 },
      { code: "Technical Elective I", title: "Technical Elective I", credits: 3 },
      { code: "Technical Elective II", title: "Technical Elective II", credits: 3 }
    ]
  }],
  computer_science : [
  // First Year
  {
    title: "Computer Science",
    year: 1,
    semester: "First Semester",
    courses: [
      { code: "CSCI 104", title: "Introduction to Computing", credits: 3 },
      { code: "ENGL 101", title: "Composition", credits: 3 },
      { code: "MATH 113", title: "Calculus I", credits: 3 },
      { code: "PHYS 110", title: "University Physics I", credits: 3 },
      { code: "PHYS 111", title: "University Physics I Lab", credits: 1 },
      { code: "UNIV 100", title: "University First-Year Transition", credits: 1 }
    ]
  },
  {
    year: 1,
    semester: "Second Semester",
    courses: [
      { code: "PHIL 100/ENGL 200/MEST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
      { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3 },
      { code: "CSCI 113", title: "Intro. to Computer Programming Lab", credits: 1 },
      { code: "MATH 114", title: "Calculus II", credits: 3 },
      { code: "PHYS 220", title: "University Physics II", credits: 3 },
      { code: "PHYS 221", title: "University Physics II Lab", credits: 1 },
      { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
    ]
  },

  // Second Year
  {
    year: 2,
    semester: "First Semester",
    courses: [
      { code: "CSCI 211", title: "Object Oriented Programming", credits: 3 },
      { code: "MATH 213", title: "Calculus III", credits: 3 },
      { code: "MATH 225", title: "Discrete Mathematics", credits: 3 },
      { code: "CSCI 232", title: "Computer Organization", credits: 3 },
      { code: "UNIV 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 }
    ]
  },
  {
    year: 2,
    semester: "Second Semester",
    courses: [
      { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3 },
      { code: "EEEN 331", title: "Digital Systems Design", credits: 3 },
      { code: "EEEN 332", title: "Digital Systems Design Lab", credits: 1 },
      { code: "MATH 203", title: "Linear Algebra", credits: 3 },
      { code: "ENGR 200", title: "Engineering Statistics", credits: 3 },
      { code: "ENG 202", title: "English for Workplace Communication", credits: 3 }
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
      { code: "CENG 335", title: "Computer Architecture", credits: 3 },
      { code: "CENG 336", title: "Computer Architecture Lab", credits: 1 },
      { code: "ENVS 102", title: "Sustainability and Human-Environment Relations", credits: 3 },
      { code: "CSCI 326", title: "Database Systems", credits: 3 },
      { code: "UAES 200", title: "Survey of United Arab Emirates Studies", credits: 3 },
      { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3 }
    ]
  },
  {
    year: 3,
    semester: "Second Semester",
    courses: [
      { code: "GEN ED", title: "Social and Behavioral Sciences Course", credits: 3 },
      { code: "CSCI 372", title: "Compiler Design", credits: 3 },
      { code: "CSCI 462", title: "Data Comm. and Computer Networks", credits: 3 },
      { code: "CSCI 463", title: "Data Comm. and Computer Networks Lab", credits: 1 },
      { code: "CSCI 388", title: "Programming Languages", credits: 3 },
      { code: "CSCI 315", title: "Design and Analysis of Algorithms", credits: 3 }
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
      { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3 },
      { code: "CENG 411", title: "Software Engineering", credits: 3 },
      { code: "CSCI 492", title: "Senior Design Project I", credits: 2 },
      { code: "Free Elective", title: "Free Elective", credits: 3 },
      { code: "Technical Elective I", title: "Technical Elective I", credits: 3 }
    ]
  },
  {
    year: 4,
    semester: "Second Semester",
    courses: [
      { code: "CSCI 493", title: "Senior Design Project II", credits: 4 },
      { code: "CENG 461", title: "Network Security", credits: 3 },
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
        { code: "EMSL 101", title: "Composition", credits: 3 },
        { code: "MATH 113", title: "Calculus I", credits: 3 },
        { code: "PHYS 110", title: "University Physics I", credits: 3 },
        { code: "PHYS 111", title: "University Physics I Lab", credits: 1 },
        { code: "DINV 100", title: "University First-Year Transition", credits: 1 }
      ]
    },
    {
      year: 1,
      semester: "Second Semester",
      courses: [
        { code: "PHIL 100/EMSL 200/MST 100", title: "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture", credits: 3 },
        { code: "CSCI 112", title: "Introduction to Computer Programming", credits: 3 },
        { code: "CSCI 113", title: "Introduction to Computer Programming Lab", credits: 1 },
        { code: "MATH 114", title: "Calculus II", credits: 3 },
        { code: "PHYS 220", title: "University Physics II", credits: 3 },
        { code: "PHYS 221", title: "University Physics II Lab", credits: 1 },
        { code: "GEN ED", title: "Humanities/Fine Arts Course", credits: 3 }
      ]
    },

    // Second Year
    {
      year: 2,
      semester: "First Semester",
      courses: [
        { code: "CSCI 211", title: "Object Oriented Programming", credits: 3 },
        { code: "MATH 213", title: "Calculus III", credits: 3 },
        { code: "MATH 225", title: "Discrete Mathematics", credits: 3 },
        { code: "CSCI 232", title: "Computer Organization", credits: 3 },
        { code: "GEN ED", title: "Social and Behavioral Sciences Course", credits: 3 }
      ]
    },
    {
      year: 2,
      semester: "Second Semester",
      courses: [
        { code: "CSCI 215", title: "Data Structures and Algorithms", credits: 3 },
        { code: "EEEN 331", title: "Digital Systems Design", credits: 3 },
        { code: "EEEN 332", title: "Digital Systems Design Lab", credits: 1 },
        { code: "EMSR 200", title: "Engineering Statistics", credits: 3 },
        { code: "EMSR 202", title: "English for Workplace Communication", credits: 3 },
        { code: "MATH 203", title: "Linear Algebra", credits: 3 },
      ]
    },

    // Third Year
    {
      year: 3,
      semester: "Summer Semester",
      courses: [
        { code: "CSAJ 300", title: "Internship I", credits: 3 }
      ]
    },
    {
      year: 3,
      semester: "Second Semester",
      courses: [
        { code: "CSAI 350", title: "Introduction to Artificial Intelligence", credits: 3 },
        { code: "ENVS 101", title: "Sustainability and Human Environment Relations", credits: 3 },
        { code: "CSCI 312", title: "Operating System Fundamentals", credits: 3 },
        { code: "CSCI 326", title: "Database Systems", credits: 3 },
        { code: "DINV 200", title: "Innovation, Entrepreneurship, and Sustainability", credits: 3 }
      ]
    },

    // Fourth Year
    {
      year: 4,
      semester: "First Semester",
      courses: [
        { code: "CSCI 315", title: "Design and Analysis of Algorithms", credits: 3 },
        { code: "CSAI 462", title: "Data Science", credits: 3 },
        { code: "CSCI 462", title: "Data Comm. and Computer Networks", credits: 3 },
        { code: "CSCI 415", title: "Introduction to Parallel Programming", credits: 3 },
        { code: "UMS 200", title: "Survey of United Arab Emirates Studies", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Summer Semester",
      courses: [
        { code: "CSAJ 931", title: "Internship II", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Third Semester",
      courses: [
        { code: "CSAI 450", title: "Machine Learning", credits: 3 },
        { code: "CSAI 451", title: "Machine Learning Lab", credits: 1 },
        { code: "CENG 411", title: "Software Engineering", credits: 3 },
        { code: "CSCI 492", title: "Senior Design Project I", credits: 2 },
        { code: "CSAI 490", title: "Professional Software Practice", credits: 2 },
        { code: "CSAI 484", title: "Internet of Things System", credits: 3 }
      ]
    },
    {
      year: 4,
      semester: "Fourth Semester",
      courses: [
        { code: "CSCI 493", title: "Senior Design Project II", credits: 4 },
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

};

export { majorCourseData };