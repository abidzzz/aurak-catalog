// ---- Course Data ----
const majorCourseData = {
  "computer_engineering": [
    {
      "title": "Computer Engineering",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "corequisites": [
            "PHYS 110"
          ],
          "prerequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGR 107",
          "title": "Introduction to Engineering",
          "credits": 2,
          "corequisites": [],
          "prerequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENVS 102",
          "title": "Sustainability and Human-Environment Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSCI 112",
          "title": "Introduction to Computer Programming",
          "credits": 3,
          "corequisites": [
            "CSCI 113"
          ],
          "prerequisites": []
        },
        {
          "code": "CSCI 113",
          "title": "Introduction to Computer Programming Lab",
          "credits": 1,
          "corequisites": [
            "CSCI 112"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "corequisites": [
            "PHYS 220"
          ],
          "prerequisites": []
        },
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "MATH 225",
          "title": "Discrete Mathematics",
          "credits": 3,
          "prerequisites": [
            "MATH 113",
            "(CSCI 112 or CSCI 114)"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 211",
          "title": "Object-Oriented Programming",
          "credits": 3,
          "prerequisites": [
            "CSCI 112 or CSCI 114"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 280",
          "title": "Electric Circuit Analysis I",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 281",
          "title": "Electric Circuit Analysis I Lab",
          "credits": 1,
          "corequisites": [
            "EEEN 280 or MENG 231"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSCI 215",
          "title": "Data Structures and Algorithms",
          "credits": 3,
          "prerequisites": [
            "CSCI 211",
            "MATH 225"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 220",
          "title": "Signal and Systems",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": [
            "EEEN 221"
          ]
        },
        {
          "code": "EEEN 221",
          "title": "Signal and Systems Lab",
          "credits": 1,
          "corequisites": [
            "EEEN 220"
          ],
          "prerequisites": []
        },
        {
          "code": "EEEN 331",
          "title": "Digital System Design",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": [
            "EEEN 332"
          ]
        },
        {
          "code": "EEEN 332",
          "title": "Digital Systems Design Lab",
          "credits": 1,
          "corequisites": [
            "EEEN 331"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHIL 100",
          "title": "Critical Thinking and Reasoning",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CENG 335",
          "title": "Computer Architecture",
          "credits": 3,
          "prerequisites": [
            "EEEN 331"
          ],
          "corequisites": [
            "CENG 336"
          ]
        },
        {
          "code": "CENG 336",
          "title": "Computer Architecture Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 331"
          ],
          "corequisites": [
            "CENG 335"
          ]
        },
        {
          "code": "CSCI 326",
          "title": "Database Systems",
          "credits": 3,
          "prerequisites": [
            "CSCI 211"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 333",
          "title": "Linear Electronics I",
          "credits": 3,
          "prerequisites": [
            "EEEN 280"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 334",
          "title": "Linear Electronics I Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 281"
          ],
          "corequisites": [
            "EEEN 333"
          ]
        },
        {
          "code": "CSCI 312",
          "title": "Operating System Fundamentals",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CENG 315",
          "title": "Microprocessors",
          "credits": 3,
          "prerequisites": [
            "CSCI 112",
            "EEEN 331"
          ],
          "corequisites": []
        },
        {
          "code": "CENG 316",
          "title": "Microprocessors Lab",
          "credits": 1,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": [
            "CENG 315"
          ]
        },
        {
          "code": "MATH 214",
          "title": "Elementary Differential Equations",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 462",
          "title": "Data Communications and Computer Networks",
          "credits": 3,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 463",
          "title": "Data Communications and Computer Networks Lab",
          "credits": 1,
          "corequisites": [
            "CSCI 462"
          ],
          "prerequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ENGR 450",
          "title": "Engineering Seminar",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "CSAI 484",
          "title": "Internet of Things System",
          "credits": 3,
          "prerequisites": [
            "(CSCI 232 or CENG 315)",
            "CSCI 462"
          ],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Social and Behavioral Science",
          "credits": 3
        },
        {
          "code": "CENG 411",
          "title": "Software Engineering",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CENG 492",
          "title": "Senior Design Project I",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": [
            "ENGR 450"
          ]
        },
        {
          "code": "CSAI 350",
          "title": "Introduction to Artificial Intelligence",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CENG 493",
          "title": "Senior Design Project II",
          "credits": 4,
          "prerequisites": [
            "CENG 492"
          ],
          "corequisites": []
        },
        {
          "code": "CENG 431",
          "title": "Embedded Systems Design",
          "credits": 3,
          "prerequisites": [
            "CSCI 232 or CENG 315"
          ],
          "corequisites": [
            "CENG 432"
          ]
        },
        {
          "code": "CENG 432",
          "title": "Embedded Systems Design Lab",
          "credits": 1,
          "corequisites": [
            "CENG 431"
          ],
          "prerequisites": []
        },
        {
          "code": "Technical Elective I",
          "title": "Technical Elective I",
          "credits": 3
        },
        {
          "code": "Technical Elective II",
          "title": "Technical Elective II",
          "credits": 3
        }
      ]
    }
  ],
  "computer_science": [
    {
      "title": "Computer Science",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSCI 104",
          "title": "Introduction to Computing",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "corequisites": [
            "PHYS 111"
          ],
          "prerequisites": []
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "corequisites": [
            "PHYS 110"
          ],
          "prerequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        },
        {
          "code": "CSCI 112",
          "title": "Introduction to Computer Programming",
          "credits": 3,
          "corequisites": [
            "CSCI 113"
          ],
          "prerequisites": []
        },
        {
          "code": "CSCI 113",
          "title": "Introduction to Computer Programming Lab",
          "credits": 1,
          "corequisites": [
            "CSCI 112"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "corequisites": [
            "PHYS 220"
          ],
          "prerequisites": []
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSCI 211",
          "title": "Object-Oriented Programming",
          "credits": 3,
          "prerequisites": [
            "CSCI 112 or CSCI 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 225",
          "title": "Discrete Mathematics",
          "credits": 3,
          "prerequisites": [
            "MATH 113",
            "(CSCI 112 or CSCI 114)"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 232",
          "title": "Computer Organization",
          "credits": 3,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSCI 215",
          "title": "Data Structures and Algorithms",
          "credits": 3,
          "prerequisites": [
            "CSCI 211",
            "MATH 225"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 331",
          "title": "Digital System Design",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": [
            "EEEN 332"
          ]
        },
        {
          "code": "EEEN 332",
          "title": "Digital Systems Design Lab",
          "credits": 1,
          "corequisites": [
            "EEEN 331"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "PHIL 100",
          "title": "Critical Thinking and Reasoning",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Session",
      "courses": [
        {
          "code": "CSCI 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 credits",
            "a CGPA of 2.0 or higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CENG 335",
          "title": "Computer Architecture",
          "credits": 3,
          "prerequisites": [
            "EEEN 331"
          ],
          "corequisites": [
            "CENG 336"
          ]
        },
        {
          "code": "CENG 336",
          "title": "Computer Architecture Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 331"
          ],
          "corequisites": [
            "CENG 335"
          ]
        },
        {
          "code": "ENVS 102",
          "title": "Sustainability and Human-Environment Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 326",
          "title": "Database Systems",
          "credits": 3,
          "prerequisites": [
            "CSCI 211"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 312",
          "title": "Operating System Fundamentals",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "GEN ED",
          "title": "Social and Behavioral Science",
          "credits": 3
        },
        {
          "code": "CSCI 372",
          "title": "Compiler Design",
          "credits": 3,
          "prerequisites": [
            "CSCI 232"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 462",
          "title": "Data Communications and Computer Networks",
          "credits": 3,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 463",
          "title": "Data Communications and Computer Networks Lab",
          "credits": 1,
          "corequisites": [
            "CSCI 462"
          ],
          "prerequisites": []
        },
        {
          "code": "CSCI 388",
          "title": "Programming Languages",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 315",
          "title": "Design and Analysis of Algorithms",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Session",
      "courses": [
        {
          "code": "CSCI 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSAI 350",
          "title": "Introduction to Artificial Intelligence",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CENG 411",
          "title": "Software Engineering",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 492",
          "title": "Senior Design Project I",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3
        },
        {
          "code": "Technical Elective I",
          "title": "Technical Elective I",
          "credits": 3
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSCI 493",
          "title": "Senior Design Project II",
          "credits": 4,
          "prerequisites": [
            "CSCI 492"
          ],
          "corequisites": []
        },
        {
          "code": "CENG 461",
          "title": "Network Security",
          "credits": 3,
          "prerequisites": [
            "MATH 225",
            "CSCI 462 or EEEN 462"
          ],
          "corequisites": []
        },
        {
          "code": "CSAI 351",
          "title": "Data Science",
          "credits": 3,
          "prerequisites": [
            "CSAI 350",
            "MATH 203"
          ],
          "corequisites": []
        },
        {
          "code": "Technical Elective II",
          "title": "Technical Elective II",
          "credits": 3
        }
      ]
    }
  ],
  "artificial_intelligence": [
    {
      "title": "Artificial Intelligence",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSCI 104",
          "title": "Introduction to Computing",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 110"
          ]
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        },
        {
          "code": "CSCI 112",
          "title": "Introduction to Computer Programming",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "CSCI 113"
          ]
        },
        {
          "code": "CSCI 113",
          "title": "Introduction to Computer Programming Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CSCI 112"
          ]
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 220"
          ]
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSCI 211",
          "title": "Object Oriented Programming",
          "credits": 3,
          "prerequisites": [
            "CSCI 112 or CSCI 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 225",
          "title": "Discrete Mathematics",
          "credits": 3,
          "prerequisites": [
            "MATH 113",
            "(CSCI 112 or CSCI 114)"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 232",
          "title": "Computer Organization",
          "credits": 3,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Social and Behavioral Sciences Course",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSCI 215",
          "title": "Data Structures and Algorithms",
          "credits": 3,
          "prerequisites": [
            "CSCI 211",
            "MATH 225"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 331",
          "title": "Digital Systems Design",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": [
            "EEEN 332"
          ]
        },
        {
          "code": "EEEN 332",
          "title": "Digital Systems Design Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 331"
          ]
        },
        {
          "code": "EMSR 200",
          "title": "Engineering Statistics",
          "credits": 3
        },
        {
          "code": "EMSR 202",
          "title": "English for Workplace Communication",
          "credits": 3
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "CSAI 300",
          "title": "Internship I",
          "credits": 3
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CSAI 350",
          "title": "Introduction to Artificial Intelligence",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "ENVS 101",
          "title": "Sustainability and Human Environment Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 312",
          "title": "Operating System Fundamentals",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 326",
          "title": "Database Systems",
          "credits": 3,
          "prerequisites": [
            "CSCI 211"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CSCI 315",
          "title": "Design and Analysis of Algorithms",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CSAI 462",
          "title": "Data Science",
          "credits": 3
        },
        {
          "code": "CSCI 462",
          "title": "Data Comm. and Computer Networks",
          "credits": 3,
          "prerequisites": [
            "CSCI 112"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 415",
          "title": "Introduction to Parallel Programming",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "CSAI 931",
          "title": "Internship II",
          "credits": 3
        }
      ]
    },
    {
      "year": 4,
      "semester": "Third Semester",
      "courses": [
        {
          "code": "CSAI 450",
          "title": "Machine Learning",
          "credits": 3,
          "prerequisites": [
            "CSAI 350",
            "ENGR 200"
          ],
          "corequisites": [
            "CSAI 451"
          ]
        },
        {
          "code": "CSAI 451",
          "title": "Machine Learning Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CSAI 450"
          ]
        },
        {
          "code": "CENG 411",
          "title": "Software Engineering",
          "credits": 3,
          "prerequisites": [
            "CSCI 215"
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 492",
          "title": "Senior Design Project I",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "CSAI 490",
          "title": "Professional Software Practice",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": [
            "CSCI 492"
          ]
        },
        {
          "code": "CSAI 484",
          "title": "Internet of Things System",
          "credits": 3,
          "prerequisites": [
            "(CSCI 232 or CENG 315)",
            "CSCI 462"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Fourth Semester",
      "courses": [
        {
          "code": "CSCI 493",
          "title": "Senior Design Project II",
          "credits": 4,
          "prerequisites": [
            "CSCI 492"
          ],
          "corequisites": []
        },
        {
          "code": "CSAI 432",
          "title": "Natural Language Processing",
          "credits": 3
        },
        {
          "code": "CSAI 433",
          "title": "Data Visualization",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Technical Elective I",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Technical Elective II",
          "credits": 3
        }
      ]
    }
  ],
  "mechanical_engineering": [
    {
      "title": "Mechanical Engineering",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 110"
          ]
        },
        {
          "code": "ENGR 101",
          "title": "Composition",
          "credits": 3
        },
        {
          "code": "ENGR 107",
          "title": "Introduction to Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 211",
          "title": "General Chemistry I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 212",
          "title": "General Chemistry I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEM 211"
          ]
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 114",
          "title": "Applied Computational Thinking",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 115",
          "title": "Applied Computational Tools",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 220"
          ]
        },
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "MENG 201",
          "title": "Mechanical Engineering Drawing",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CEN 211",
          "title": "Statics",
          "credits": 3
        },
        {
          "code": "ENGR 210",
          "title": "Sustainability in Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 211",
          "title": "Thermodynamics I",
          "credits": 3,
          "prerequisites": [
            "CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 231",
          "title": "Engineering Measurements",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CEN 212",
          "title": "Mechanics of Materials",
          "credits": 3
        },
        {
          "code": "MENG 221",
          "title": "Dynamics",
          "credits": 3,
          "prerequisites": [
            "CIEN 211"
          ],
          "corequisites": []
        },
        {
          "code": "CEN 251",
          "title": "Fluid Mechanics",
          "credits": 3
        },
        {
          "code": "MATH 214",
          "title": "Elementary Differential Equations",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 212",
          "title": "Thermodynamics II",
          "credits": 3,
          "prerequisites": [
            "MENG 211"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 252",
          "title": "Fluid Mechanics Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CIEN 251"
          ]
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "MENG 241",
          "title": "Engineering Materials",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MENG 242",
          "title": "Engineering Materials Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "MENG 241"
          ]
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "ECOM 103",
          "title": "Principles of Microeconomics",
          "credits": 3
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "MENG 361",
          "title": "Heat Transfer",
          "credits": 3,
          "prerequisites": [
            "MENG 212",
            "MATH 214"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 362",
          "title": "Thermal Sciences Lab",
          "credits": 1,
          "prerequisites": [
            "MENG 211",
            "MENG 231"
          ],
          "corequisites": [
            "MENG 361"
          ]
        },
        {
          "code": "MENG 321",
          "title": "Vibration and Control",
          "credits": 3,
          "prerequisites": [
            "MATH 214",
            "MENG 221"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 312",
          "title": "Manufacturing Processes",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MENG 313",
          "title": "Manufacturing Processes Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "MENG 312"
          ]
        },
        {
          "code": "EEEN 280",
          "title": "Electric Circuit Analysis",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 281",
          "title": "Electric Circuit Analysis Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 280 or MENG 231"
          ]
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "MENG 451",
          "title": "Mechanical Design I",
          "credits": 3,
          "prerequisites": [
            "CIEN 212",
            "MENG 241"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 421",
          "title": "Theory of Machines",
          "credits": 3,
          "prerequisites": [
            "MENG 221"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 391",
          "title": "Numerical Analysis",
          "credits": 3
        },
        {
          "code": "MENG 491",
          "title": "Senior Design Project I",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "Elective",
          "title": "ME Technical Elective 1",
          "credits": 3
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "MENG 452",
          "title": "Mechanical Design II",
          "credits": 3,
          "prerequisites": [
            "MENG 451"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MENG 492",
          "title": "Senior Design Project II",
          "credits": 4,
          "prerequisites": [
            "MENG 491"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 450",
          "title": "Engineering Seminar",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "Elective",
          "title": "ME Technical Elective 2",
          "credits": 3
        }
      ]
    }
  ],
  "chemical_engineering": [
    {
      "title": "Chemical Engineering",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 110"
          ]
        },
        {
          "code": "ENGR 107",
          "title": "Introduction to Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UMN 100",
          "title": "University Freshman Transition",
          "credits": 1
        },
        {
          "code": "CHEM 211",
          "title": "General Chemistry I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 212",
          "title": "General Chemistry I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEM 211"
          ]
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Elective from Humanities/Fine Arts",
          "credits": 3
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 220"
          ]
        },
        {
          "code": "CSCI 114",
          "title": "Applied Computational Thinking",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 115",
          "title": "Applied Computational Tools",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CHEM 213",
          "title": "General Chemistry II",
          "credits": 3,
          "prerequisites": [
            "CHEM 211"
          ],
          "corequisites": [
            "CHEM 214"
          ]
        },
        {
          "code": "CHEM 214",
          "title": "General Chemistry II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEM 213"
          ]
        },
        {
          "code": "ENGR 210",
          "title": "Sustainability in Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "UMN 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3
        },
        {
          "code": "BIOL 112",
          "title": "University Biology I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "BIOL 113 University Biology I Laboratory"
          ]
        },
        {
          "code": "ECOM 103",
          "title": "Principles of Microeconomics",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "MENG 241",
          "title": "Engineering Materials",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MENG 242",
          "title": "Materials Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "MENG 241"
          ]
        },
        {
          "code": "CHEM 215",
          "title": "Organic Chemistry I",
          "credits": 3,
          "prerequisites": [
            "CHEM 111 or CHEM 120 or CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "CHEM 216",
          "title": "Organic Chemistry Lab I",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEM 215"
          ]
        },
        {
          "code": "MATH 214",
          "title": "Elementary Differential Equations",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 202",
          "title": "Principles of Chemical and Petroleum Engineering",
          "credits": 3,
          "prerequisites": [
            "CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 251",
          "title": "Fluid Mechanics",
          "credits": 3,
          "prerequisites": [
            "MATH 213 & CIEN 211 (Civil Engineering)",
            "MATH 114",
            "PHYS 110 (Chemical",
            "Mechanical",
            "Petroleum Engineering)"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CHEN 301",
          "title": "Computational Tools in Chemical and Petroleum Engineering",
          "credits": 1,
          "prerequisites": [
            "CHEN 202"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 315",
          "title": "Physical Chemistry",
          "credits": 3
        },
        {
          "code": "CHEN 316",
          "title": "Physical Chemistry Lab",
          "credits": 1
        },
        {
          "code": "MENG 323",
          "title": "Engineering Economy",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "HNL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        },
        {
          "code": "CHEN 312",
          "title": "Chemical Engineering Thermodynamics",
          "credits": 3,
          "prerequisites": [
            "CHEM 315"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 351",
          "title": "Chemical Reaction Engineering",
          "credits": 3,
          "prerequisites": [
            "CHEN 202",
            "CHEM 315"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 352",
          "title": "Chemical Reaction Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEN 351"
          ]
        },
        {
          "code": "CHEN 370",
          "title": "Heat and Mass Transport",
          "credits": 3,
          "prerequisites": [
            "CIEN 251"
          ],
          "corequisites": [
            "CHEN 312"
          ]
        },
        {
          "code": "CHEN 372",
          "title": "Thermal and Fluid Sciences Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEN 370"
          ]
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CHEN 404",
          "title": "Safety and Environment Impact",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 471",
          "title": "Unit Operation Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEN 472"
          ]
        },
        {
          "code": "CHEN 472",
          "title": "Separation Processes",
          "credits": 3,
          "prerequisites": [
            "CHEN 370"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 481",
          "title": "Process & Plant Design",
          "credits": 3,
          "prerequisites": [
            "MENG 241",
            "MENG 323"
          ],
          "corequisites": [
            "CHEN 472"
          ]
        },
        {
          "code": "CHEN 483",
          "title": "CHEN Technical Elective I",
          "credits": 3,
          "prerequisites": [
            "CHEN 312"
          ],
          "corequisites": [
            "CHEN 472"
          ]
        },
        {
          "code": "CHEN 491",
          "title": "Advance Simulation Lab",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 491",
          "title": "Senior Design Project I",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CHEN 482",
          "title": "Chemical Process Dynamics and Control",
          "credits": 3,
          "prerequisites": [
            "CHEN 301",
            "CHEN 351"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 484",
          "title": "Process Integration and Optimization",
          "credits": 3,
          "prerequisites": [
            "CHEN 481"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 486",
          "title": "Data Science in Chemical Engineering",
          "credits": 3,
          "prerequisites": [
            "ENGR 200"
          ],
          "corequisites": [
            "Completion of 90 Credit Hours"
          ]
        },
        {
          "code": "CHEN 492",
          "title": "Senior Design Project II",
          "credits": 3,
          "prerequisites": [
            "CHEN 491"
          ],
          "corequisites": []
        },
        {
          "code": "CHEN 483",
          "title": "CHEN Technical Elective II",
          "credits": 3,
          "prerequisites": [
            "CHEN 312"
          ],
          "corequisites": [
            "CHEN 472"
          ]
        },
        {
          "code": "ENGR 450",
          "title": "Engineering Seminar",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        }
      ]
    }
  ],
  "electrical_electronics_engineering": [
    {
      "title": "Electrical and Electronics Engineering",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PHYS 110",
          "title": "Physics I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "Physics I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 110"
          ]
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGR 107",
          "title": "Introduction to Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 211",
          "title": "General Chemistry I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 112",
          "title": "Intro. to Computer Programming",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "CSCI 113"
          ]
        },
        {
          "code": "CSCI 113",
          "title": "Intro. to Computer Programming Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CSCI 112"
          ]
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "Physics II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 220"
          ]
        },
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning/Advanced Composition/Introduction to Islam in World Culture",
          "credits": 3
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "EEEN 280",
          "title": "Electric Circuit Analysis I",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 281",
          "title": "Electric Circuit Analysis I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 280 or MENG 231"
          ]
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 203",
          "title": "Linear Algebra",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 331",
          "title": "Digital System Design",
          "credits": 3,
          "prerequisites": [
            "PHYS 220"
          ],
          "corequisites": [
            "EEEN 332"
          ]
        },
        {
          "code": "EEEN 332",
          "title": "Digital System Design Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 331"
          ]
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "EEEN 220",
          "title": "Signals & Systems",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": [
            "EEEN 221"
          ]
        },
        {
          "code": "EEEN 221",
          "title": "Signals & Systems Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 220"
          ]
        },
        {
          "code": "EEEN 282",
          "title": "Electric Circuit Analysis II",
          "credits": 3,
          "prerequisites": [
            "EEEN 280"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 214",
          "title": "Elementary Differential Equations",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 210",
          "title": "Sustainability in Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "EEEN 305",
          "title": "Electromagnetic Theory",
          "credits": 3,
          "prerequisites": [
            "PHYS 220",
            "MATH 214"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "EEEN 350",
          "title": "Electric Machines",
          "credits": 3,
          "prerequisites": [
            "EEEN 282"
          ],
          "corequisites": [
            "EEEN 351"
          ]
        },
        {
          "code": "EEEN 351",
          "title": "Electric Machines Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 350"
          ]
        },
        {
          "code": "EEEN 333",
          "title": "Linear Electronics I",
          "credits": 3,
          "prerequisites": [
            "EEEN 280"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 334",
          "title": "Linear Electronics I Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 281"
          ],
          "corequisites": [
            "EEEN 333"
          ]
        },
        {
          "code": "EEEN 413",
          "title": "Microcontrollers and Embedded Systems",
          "credits": 3,
          "prerequisites": [
            "CSCI 112",
            "EEEN 331"
          ],
          "corequisites": [
            "EEEN 414"
          ]
        },
        {
          "code": "EEEN 414",
          "title": "Microcontrollers and Embedded Systems Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 413"
          ]
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "EEEN 412",
          "title": "Power Systems",
          "credits": 3,
          "prerequisites": [
            "EEEN 350"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 433",
          "title": "Linear Electronics II",
          "credits": 3,
          "prerequisites": [
            "EEEN 333"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 434",
          "title": "Linear Electronics II Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 334"
          ],
          "corequisites": [
            "EEEN 433"
          ]
        },
        {
          "code": "EEEN 431",
          "title": "Digital Circuit Design",
          "credits": 3,
          "prerequisites": [
            "EEEN 331",
            "EEEN 333"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 451",
          "title": "Control Theory",
          "credits": 3,
          "prerequisites": [
            "EEEN 220 or MATH 214"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 452",
          "title": "Control Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "EEEN 451"
          ]
        },
        {
          "code": "EEEN 460",
          "title": "Communication Systems",
          "credits": 3,
          "prerequisites": [
            "EEEN 220",
            "ENGR 200"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        },
        {
          "code": "EEEN 437",
          "title": "Power Electronics",
          "credits": 3,
          "prerequisites": [
            "EEEN 333"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 492",
          "title": "Senior Design Project I",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 466",
          "title": "Digital Signal Processing",
          "credits": 3,
          "prerequisites": [
            "EEEN 220",
            "ENGR 200"
          ],
          "corequisites": []
        },
        {
          "code": "Elective",
          "title": "Technical Elective I",
          "credits": 3
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "EEEN 464",
          "title": "Digital Communication Systems",
          "credits": 3,
          "prerequisites": [
            "EEEN 460"
          ],
          "corequisites": [
            "EEEN 461"
          ]
        },
        {
          "code": "ENGR 450",
          "title": "Engineering Seminar",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 493",
          "title": "Senior Design Project II",
          "credits": 4,
          "prerequisites": [
            "EEEN 492"
          ],
          "corequisites": []
        },
        {
          "code": "EEEN 461",
          "title": "Communication Engineering Lab",
          "credits": 1,
          "prerequisites": [
            "EEEN 460"
          ],
          "corequisites": [
            "EEEN 464."
          ]
        },
        {
          "code": "Elective",
          "title": "Technical Elective II",
          "credits": 3
        },
        {
          "code": "ECON 103",
          "title": "Principles of Microeconomics",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    }
  ],
  "biotechnology": [
    {
      "title": "Biotechnology",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "BIOL 112",
          "title": "University Biology I",
          "credits": 3,
          "corequisites": [
            "BIOL 113 University Biology I Laboratory"
          ],
          "prerequisites": []
        },
        {
          "code": "BIOL 113",
          "title": "University Biology I Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 112"
          ],
          "prerequisites": []
        },
        {
          "code": "MATH 111",
          "title": "Calculus with Life Sciences Applications",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENG 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [
            "ENGL 099"
          ]
        },
        {
          "code": "CHEM 111",
          "title": "Principles of General Chemistry",
          "credits": 3,
          "corequisites": [
            "CHEM 112"
          ],
          "prerequisites": []
        },
        {
          "code": "CHEM 112",
          "title": "Principles of General Chemistry Lab",
          "credits": 1,
          "corequisites": [
            "CHEM 111"
          ],
          "prerequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First - Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "BIOL 114",
          "title": "University Biology II",
          "credits": 3,
          "corequisites": [
            "BIOL 115"
          ],
          "prerequisites": []
        },
        {
          "code": "BIOL 115",
          "title": "University Biology II Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 114"
          ],
          "prerequisites": []
        },
        {
          "code": "MEST 100",
          "title": "Introduction to Islam in World Culture",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "STAT 100",
          "title": "Introductory Probability and Statistics",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 120",
          "title": "Analytical Chemistry",
          "credits": 3,
          "corequisites": [
            "CHEM 121"
          ],
          "prerequisites": []
        },
        {
          "code": "CHEM 121",
          "title": "Analytical Chemistry Lab",
          "credits": 1,
          "corequisites": [
            "CHEM 120"
          ],
          "prerequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Social Sciences Course",
          "credits": 3
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "BIOL 230",
          "title": "General Microbiology",
          "credits": 3,
          "prerequisites": [
            "BIOL 114"
          ],
          "corequisites": [
            "BIOL 231"
          ]
        },
        {
          "code": "BIOL 231",
          "title": "General Microbiology Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 230"
          ],
          "prerequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 215",
          "title": "Organic Chemistry I",
          "credits": 3,
          "prerequisites": [
            "CHEM 111 or CHEM 120 or CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "CHEM 216",
          "title": "Organic Chemistry Lab I",
          "credits": 1,
          "corequisites": [
            "CHEM 215"
          ],
          "prerequisites": []
        },
        {
          "code": "ITEC 103",
          "title": "Fundamentals of Information Technology",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "BIOL 270",
          "title": "General Genetics",
          "credits": 3,
          "prerequisites": [
            "BIOL 112 or BIOL 114"
          ],
          "corequisites": [
            "BIOL 271"
          ]
        },
        {
          "code": "BIOL 271",
          "title": "General Genetics Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 270"
          ],
          "prerequisites": []
        },
        {
          "code": "BIOL 250",
          "title": "Biochemistry I",
          "credits": 3,
          "prerequisites": [
            "CHEM 111 or CHEM 120"
          ],
          "corequisites": [
            "BIOL 251"
          ]
        },
        {
          "code": "BIOL 251",
          "title": "Biochemistry I Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 250"
          ],
          "prerequisites": []
        },
        {
          "code": "ENVS 102",
          "title": "Sustainability and Human-Environment Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Humanities and Fine Arts Elective ",
          "credits": 3
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "BIOL 350",
          "title": "Biochemistry II",
          "credits": 3,
          "prerequisites": [
            "CHEM\u00c2\u00a0250"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 380",
          "title": "Biotechnology and Genetic Engineering",
          "credits": 3,
          "prerequisites": [
            "BIOL 270"
          ],
          "corequisites": [
            "BIOL 381"
          ]
        },
        {
          "code": "BIOL 381",
          "title": "Biotechnology Lab Methods and Techniques",
          "credits": 1,
          "corequisites": [
            "BIOL 380"
          ],
          "prerequisites": []
        },
        {
          "code": "BIOL 356",
          "title": "Virology",
          "credits": 3,
          "prerequisites": [
            "BIOL 230"
          ],
          "corequisites": []
        },
        {
          "code": "ENGL 202",
          "title": "English for the Workplace",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "BIOL 330",
          "title": "Applied and Industrial Microbiology",
          "credits": 3,
          "corequisites": [
            "BIOL 331"
          ],
          "prerequisites": [
            "BIOL 230"
          ]
        },
        {
          "code": "BIOL 331",
          "title": "Techniques in Applied and Industrial Microbiology",
          "credits": 1,
          "corequisites": [
            "BIOL 330"
          ],
          "prerequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "BIOL 100",
          "title": "Humankind in a Biological World",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Program Elective",
          "title": "Biotechnology Elective",
          "credits": 4
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "BIOL 390",
          "title": "Internships",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "BIOL 435",
          "title": "Stem Cell Biology and Regenerative Medicine",
          "credits": 3,
          "prerequisites": [
            "BIOL 270"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 442",
          "title": "Molecular Diagnostic",
          "credits": 3,
          "prerequisites": [
            "BIOL 380"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 443",
          "title": "Molecular Diagnostics Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 442"
          ],
          "prerequisites": [
            "BIOL 380",
            "BIOL 381"
          ]
        },
        {
          "code": "BIOL 493",
          "title": "Research Methodology in the Biological Sciences",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 450",
          "title": "Bioethics",
          "credits": 3,
          "prerequisites": [
            "90 credits"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 491",
          "title": "Senior Seminar",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "Program Elective",
          "title": "Biotechnology Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Biotechnology",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "BIOL 440",
          "title": "Medical Microbiology",
          "credits": 3,
          "prerequisites": [
            "BIOL 230"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 441",
          "title": "Medical Microbiology Lab",
          "credits": 1,
          "corequisites": [
            "BIOL 440"
          ],
          "prerequisites": []
        },
        {
          "code": "BIOL 436",
          "title": "Immunology",
          "credits": 3,
          "prerequisites": [
            "BIOL 270"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 411",
          "title": "Drug Discovery, Design and Development",
          "credits": 3,
          "prerequisites": [
            "BIOL 350"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 495",
          "title": "Senior Project in Medical Biotechnology",
          "credits": 4,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "BIOL 490"
          ],
          "corequisites": []
        }
      ]
    }
  ],
  "architecture": [
    {
      "title": "Architecture",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ARCH 121",
          "title": "Basic Design I",
          "credits": 4,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "INDS 112",
          "title": "Design Communication 1: Sketching and Drawing for Interiors",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First - Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ARCH 122",
          "title": "Basic Design 2",
          "credits": 4,
          "prerequisites": [
            "ARCH 121"
          ],
          "corequisites": []
        },
        {
          "code": "INDS 121",
          "title": "Interior Design Process, Human factors and Ergonomics",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "INDS 122",
          "title": "Design Communication 2: Digital Media for Interiors",
          "credits": 3,
          "prerequisites": [
            "INDS 112"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "corequisites": [
            "PHYS 111"
          ],
          "prerequisites": []
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "corequisites": [
            "PHYS 110"
          ],
          "prerequisites": []
        },
        {
          "code": "CSCI 114",
          "title": "Applied Computational Thinking",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 115",
          "title": "Applied Computational Tools",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ARCH 221",
          "title": "Architectural Design Studio 1",
          "credits": 4,
          "prerequisites": [
            "ARCH 122"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 231",
          "title": "Building Construction 1",
          "credits": 3,
          "prerequisites": [
            "INDS 122"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 241",
          "title": "History and Theory of Architecture 1",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CIEN 216",
          "title": "Structures for Architecture 1",
          "credits": 3,
          "prerequisites": [
            "MATH 113",
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 223",
          "title": "Computer Architectural Drawing",
          "credits": 3,
          "prerequisites": [
            "INDS 122"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ARCH 222",
          "title": "Architectural Design Studio 2",
          "credits": 4,
          "prerequisites": [
            "ARCH 221"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 232",
          "title": "Building Construction 2",
          "credits": 3,
          "prerequisites": [
            "ARCH 231"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 242",
          "title": "History and Theory of Architecture 2",
          "credits": 3,
          "prerequisites": [
            "ARCH 241"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 316",
          "title": "Structures for Architecture 2",
          "credits": 3,
          "prerequisites": [
            "CIEN 216"
          ],
          "corequisites": []
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ARCH 321",
          "title": "Architectural Design Studio 3",
          "credits": 4,
          "prerequisites": [
            "ARCH 222"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 331",
          "title": "Building Construction 3",
          "credits": 3,
          "prerequisites": [
            "ARCH 232"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 341",
          "title": "History and Theory of Architecture 3",
          "credits": 3,
          "prerequisites": [
            "ARCH 242"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 261",
          "title": "Surveying",
          "credits": 1,
          "prerequisites": [
            "CIEN 201 (for Civil Engineering)",
            "INDS 122 (for Architecture Students)"
          ],
          "corequisites": []
        },
        {
          "code": "ENVS 102",
          "title": "Sustainability and Human-Environment Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Social and Behavioral Science",
          "credits": 3
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ARCH 322",
          "title": "Architectural Design Studio 4",
          "credits": 4,
          "prerequisites": [
            "ARCH 321"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 336",
          "title": "Construction Drawings",
          "credits": 3,
          "prerequisites": [
            "ARCH 223",
            "ARCH 331"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 342",
          "title": "History and Theory of Contemporary Architecture",
          "credits": 3,
          "prerequisites": [
            "ARCH 341"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 372",
          "title": "Sustainable Architecture",
          "credits": 3,
          "prerequisites": [
            "ENVS 102"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 000",
          "title": "Technical Elective 1",
          "credits": 3
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ARCH 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "90 credits",
            "a CGPA of 2.0 or higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ARCH 421",
          "title": "Architectural Design Studio 5",
          "credits": 4,
          "prerequisites": [
            "ARCH 322"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 463",
          "title": "Landscape Architecture",
          "credits": 3,
          "prerequisites": [
            "ARCH 322"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 468",
          "title": "Building Utilities I: HVAC and Mechanical Building Services",
          "credits": 3,
          "prerequisites": [
            "PHYS 110",
            "ARCH 336"
          ],
          "corequisites": []
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        },
        {
          "code": "ARCH 457",
          "title": "Urban Design",
          "credits": 3,
          "corequisites": [
            "ARCH 463"
          ],
          "prerequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ARCH 422",
          "title": "Architectural Design Studio 6",
          "credits": 4,
          "prerequisites": [
            "ARCH 421"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 466",
          "title": "Building Utilities II: Illumination, Acoustics, and Electrical Building Services",
          "credits": 3,
          "prerequisites": [
            "MENG 468"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 454",
          "title": "Urban Planning",
          "credits": 3,
          "prerequisites": [
            "ARCH 322"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "PHIL 100",
          "title": "Critical Thinking and Reasoning",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ARCH 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 130 credits",
            "a CGPA of 2.0 or higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ARCH 521",
          "title": "Architectural Design Studio 7",
          "credits": 4,
          "prerequisites": [
            "ARCH 422"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 591",
          "title": "Graduation Project Thesis Research",
          "credits": 2,
          "prerequisites": [
            "ARCH 422"
          ],
          "corequisites": []
        },
        {
          "code": "ARCH 000",
          "title": "Technical Elective 2",
          "credits": 3
        },
        {
          "code": "ARCH 487",
          "title": "Project Management",
          "credits": 3,
          "prerequisites": [
            "ARCH 336"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Architecture",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "ARCH 592",
          "title": "Graduation Project Design",
          "credits": 5,
          "prerequisites": [
            "ARCH 521",
            "ARCH 591"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 323",
          "title": "Engineering Economy",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ARCH 485",
          "title": "Professional Practice",
          "credits": 3,
          "prerequisites": [
            "ARCH 422"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    }
  ],
  "mass_communication": [
    {
      "title": "Mass Communications",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "COMM 111",
          "title": "Introduction to Mass Communication",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ITEC 103",
          "title": "Fundamentals of Information Technology",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First - Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "GEN-ED",
          "title": "Humanities/Fine Arts Course",
          "credits": 3
        },
        {
          "code": "GEN ED",
          "title": "Social and Behavioral Science",
          "credits": 3
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "COMM 112",
          "title": "Introduction to Public Relations",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "COMM 113",
          "title": "Introduction to Digital Media",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "PHIL 100",
          "title": "Critical Thinking and Reasoning",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "COMM 212",
          "title": "Media Writing",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 222",
          "title": "Intercultural Mass Communication",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 214",
          "title": "New Media and Digital Culture",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Mathematics Course",
          "credits": 3
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "COMM 215",
          "title": "Feature Writing",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 223",
          "title": "Globalization and Media Cultures",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 224",
          "title": "Visual Storytelling",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "Mass Communication",
          "title": "Elective",
          "credits": 3
        },
        {
          "code": "ARAB 210",
          "title": "Arabic for Media: Native Speakers",
          "credits": 3,
          "prerequisites": [
            "ARAB 110"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "COMM 311",
          "title": "Media Law and Ethics",
          "credits": 3,
          "prerequisites": [
            "COMM 111 or COMM 112 or COMM 113"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 321",
          "title": "Theories of Media Communication",
          "credits": 3,
          "prerequisites": [
            "COMM 212 or COMM 222 or COMM 223"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 323",
          "title": "News Reporting",
          "credits": 3,
          "prerequisites": [
            "COMM 212 or COMM 215"
          ],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "Natural Science Course",
          "credits": 3
        },
        {
          "code": "Mass Communication",
          "title": "Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "COMM 391",
          "title": "Communication Research Methodology",
          "credits": 2,
          "prerequisites": [
            "COMM 212 or COMM 222 or COMM 223"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 334",
          "title": "Broadcast Journalism",
          "credits": 3,
          "prerequisites": [
            "COMM 212",
            "COMM 214",
            "COMM 215",
            "or COMM 224"
          ],
          "corequisites": []
        },
        {
          "code": "Mass Communication",
          "title": "Elective",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "COMM 390",
          "title": "Internship in Mass Communication",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "COMM 492",
          "title": "Mass Media and Public Opinion",
          "credits": 3,
          "prerequisites": [
            "COMM 311 or COMM 321 or COMM 323 or COMM 391"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 423",
          "title": "Interactive Multimedia",
          "credits": 3,
          "prerequisites": [
            "COMM 321 or COMM 323 or COMM 334 or COMM 391"
          ],
          "corequisites": []
        },
        {
          "code": "COMM 450",
          "title": "Selected Topics in Communication ",
          "credits": 3,
          "prerequisites": [
            "COMM 212 or COMM 222 or COMM 223"
          ],
          "corequisites": []
        },
        {
          "code": "Mass Communication",
          "title": "Elective",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        }
      ]
    },
    {
      "title": "Mass Communications",
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "COMM 424",
          "title": "Capstone: Multimedia Storytelling",
          "credits": 3,
          "prerequisites": [
            "COMM 321 or COMM 323 or COMM 334 or COMM 391"
          ],
          "corequisites": []
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        },
        {
          "code": "Elective",
          "title": "Free Elective",
          "credits": 3
        },
        {
          "code": "Mass Communication",
          "title": "Elective",
          "credits": 3
        }
      ]
    }
  ],
  "psychology": [
    {
      "title": "Psychology",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PSYC 100",
          "title": "Introduction to Psychology",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ITEC 103",
          "title": "Fundamentals of Information Technology",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Gen Ed",
          "title": "Natural Science Course",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Gen Ed",
          "title": "Social and Behavioral Science Course",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PSYC 250",
          "title": "Social Psychology",
          "credits": 3,
          "prerequisites": [
            "PSYC 100"
          ],
          "corequisites": []
        },
        {
          "code": "STAT 100",
          "title": "Statistics",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Gen Ed",
          "title": "Humanities/Fine Arts Course",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 260",
          "title": "Child Development",
          "credits": 3,
          "prerequisites": [
            "PSYC 100"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ENGL 200",
          "title": "Advanced Composition",
          "credits": 3,
          "prerequisites": [
            "Completion of a minimum of 45 credit hours",
            "ENGL 101"
          ],
          "corequisites": []
        },
        {
          "code": "BIOL 112",
          "title": "University Biology I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": [
            "BIOL 113 University Biology I Laboratory"
          ]
        },
        {
          "code": "BIOL 113",
          "title": "University Biology II (Lab)",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "BIOL 112"
          ]
        },
        {
          "code": "PSYC 290",
          "title": "Analysis of Psychological Data",
          "credits": 3,
          "prerequisites": [
            "PSYC 100",
            "STAT 100"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 291",
          "title": "Analysis of Psychological Data Lab",
          "credits": 1,
          "prerequisites": [
            "PSYC 100",
            "STAT 100"
          ],
          "corequisites": [
            "PSYC 290"
          ]
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PSYC 220",
          "title": "Brain and Behavior",
          "credits": 3,
          "prerequisites": [
            "PSYC 100",
            "BIOL 112",
            "BIOL 113"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 292",
          "title": "Research Methods I",
          "credits": 3,
          "prerequisites": [
            "PSYC 290",
            "PSYC 291"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 293",
          "title": "Research Methods II Lab",
          "credits": 1,
          "prerequisites": [
            "PSYC 290",
            "PSYC 291"
          ],
          "corequisites": [
            "PSYC 292"
          ]
        },
        {
          "code": "COMM 101",
          "title": "Interpersonal Communication and Group Interaction",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PSYC 394",
          "title": "Research Methods II",
          "credits": 3,
          "prerequisites": [
            "PSYC 292",
            "PSYC 293"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 395",
          "title": "Research Methods III Lab",
          "credits": 1,
          "prerequisites": [
            "PSYC 292",
            "PSYC 293"
          ],
          "corequisites": [
            "PSYC 394"
          ]
        },
        {
          "code": "PSYC 371",
          "title": "Personality Theories",
          "credits": 3,
          "prerequisites": [
            "PSYC 100"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PSYC 332",
          "title": "Cognitive Psychology",
          "credits": 3,
          "prerequisites": [
            "PSYC 394",
            "PSYC 395"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 333",
          "title": "Cognitive Psychology Lab",
          "credits": 1,
          "prerequisites": [
            "PSYC 394",
            "PSYC 395"
          ],
          "corequisites": [
            "PSYC 332"
          ]
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "title": "Psychology",
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "PSYC 390",
          "title": "Psychology Internship",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "CGPA greater than 2.0."
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "PSYC 498",
          "title": "Senior Project I",
          "credits": 3,
          "prerequisites": [
            "PSYC 394",
            "PSYC 395"
          ],
          "corequisites": []
        },
        {
          "code": "PSYC 481",
          "title": "Adult Psychopathology",
          "credits": 3,
          "prerequisites": [
            "PSYC 220"
          ],
          "corequisites": []
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PSYC 499",
          "title": "Senior Project II",
          "credits": 3,
          "prerequisites": [
            "PSYC 498"
          ],
          "corequisites": []
        },
        {
          "code": "Psychology Elective",
          "title": "Psychology Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "Free Elective",
          "title": "Free Elective",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    }
  ],

  "civil_engineering": [
    {
      "title": "Civil Engineering",
      "year": 1,
      "semester": "First Semester",
      "courses": [
        {
          "code": "ENGI 101",
          "title": "Composition",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGR 107",
          "title": "Introduction to Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 113",
          "title": "Calculus I",
          "credits": 3,
          "prerequisites": [
            
          ],
          "corequisites": []
        },
        {
          "code": "UNIV 100",
          "title": "University First-Year Transition",
          "credits": 1,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "PHYS 110",
          "title": "University Physics I",
          "credits": 3,
          "prerequisites": [
            
          ],
          "corequisites": [
            "PHYS 111"
          ]
        },
        {
          "code": "PHYS 111",
          "title": "University Physics I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 110"
          ]
        },
        {
          "code": "CHEM 211",
          "title": "General Chemistry I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CHEM 212",
          "title": "General Chemistry I Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CHEM 211"
          ]
        }
      ]
    },
    {
      "year": 1,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "PHIL 100/ENGL 200/MEST 100",
          "title": "Critical Thinking and Reasoning OR Advanced Composition OR Introduction to Islam in World Culture",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 114",
          "title": "Calculus II",
          "credits": 3,
          "prerequisites": [
            "MATH 113"
          ],
          "corequisites": []
        },
        {
          "code": "PENG 101/BIOL 112",
          "title": "Physical Geology OR University Biology",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CSCI 114",
          "title": "Applied Computational Thinking",
          "credits": 3,
          "prerequisites": [
            
          ],
          "corequisites": []
        },
        {
          "code": "CSCI 115",
          "title": "Applied Computational Tools",
          "credits": 1,
          "prerequisites": [
            
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 220",
          "title": "University Physics II",
          "credits": 3,
          "prerequisites": [
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "PHYS 221",
          "title": "University Physics II Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "PHYS 220"
          ]
        }
      ]
    },
    {
      "year": 2,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CIEN 201",
          "title": "Computer Aided Drawings",
          "credits": 3,
          "prerequisites": [
            
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 211",
          "title": "Statics",
          "credits": 3,
          "prerequisites": [
            "MATH 113",
            "PHYS 110"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 210",
          "title": "Sustainability in Engineering",
          "credits": 2,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "MATH 213",
          "title": "Calculus III",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "ECON 103",
          "title": "Principles of Microeconomics",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "ENGL 202",
          "title": "English for Workplace Communication",
          "credits": 3,
          "prerequisites": [
            "ENGL 101"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CIEN 212",
          "title": "Mechanics of Materials",
          "credits": 3,
          "prerequisites": [
            "CIEN 211"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 251",
          "title": "Fluid Mechanics",
          "credits": 3,
          "prerequisites": [
            "MATH 213 & CIEN 211 (Civil Engineering)",
            "MATH 114",
            "PHYS 110 (Chemical",
            "Mechanical",
            "Petroleum Engineering)"
          ],
          "corequisites": []
        },
        {
          "code": "MENG 252",
          "title": "Fluid Mechanics Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CIEN 251"
          ]
        },
        {
          "code": "CIEN 261",
          "title": "Surveying",
          "credits": 1,
          "prerequisites": [
            "CIEN 201 (for Civil Engineering)",
            "INDS 122 (for Architecture Students)"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 265",
          "title": "Geographical Information System",
          "credits": 2,
          "prerequisites": [
            "CSCI 112 or CSCI 114"
          ],
          "corequisites": []
        },
        {
          "code": "MATH 214",
          "title": "Elementary Differential Equations",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        },
        {
          "code": "GEN ED",
          "title": "The Field of Humanities and Fine Arts",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 2,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 390",
          "title": "Internship I",
          "credits": 3,
          "prerequisites": [
            "Completion of 60 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CIEN 301",
          "title": "Numerical Analysis",
          "credits": 3,
          "prerequisites": [
            "MATH 214",
            "(CSCI 112 or CSCI 114)"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 311",
          "title": "Structural Analysis",
          "credits": 3,
          "prerequisites": [
            "CIEN 212"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 331",
          "title": "Construction Materials",
          "credits": 3,
          "prerequisites": [
            "CIEN 212",
            "CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 332",
          "title": "Construction Materials Lab",
          "credits": 1,
          "prerequisites": [
            "CIEN 212",
            "CHEM 211"
          ],
          "corequisites": [
            "CIEN 331"
          ]
        },
        {
          "code": "CIEN 333",
          "title": "Geotechnical Engineering",
          "credits": 3,
          "prerequisites": [
            "CIEN 212",
            "CHEM 211"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 335",
          "title": "Geotechnical Engineering Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CIEN 333"
          ]
        },
        {
          "code": "UNIV 200",
          "title": "Innovation, Entrepreneurship, and Sustainability",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "CIEN 321",
          "title": "Reinforced Concrete Design",
          "credits": 3,
          "prerequisites": [
            "CIEN 311",
            "CIEN 331"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 352",
          "title": "Environmental Engineering",
          "credits": 3,
          "prerequisites": [
            
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 361",
          "title": "Highway Engineering and Design",
          "credits": 3,
          "prerequisites": [
            "CIEN 331"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 362",
          "title": "Transportation Engineering",
          "credits": 3,
          "prerequisites": [
            "CIEN 261"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 363",
          "title": "Highway and Traffic Engineering Lab",
          "credits": 1,
          "prerequisites": [],
          "corequisites": [
            "CIEN 361"
          ]
        },
        {
          "code": "ENGR 200",
          "title": "Engineering Statistics",
          "credits": 3,
          "prerequisites": [
            "MATH 114"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 3,
      "semester": "Summer Semester",
      "courses": [
        {
          "code": "ENGR 391",
          "title": "Internship II",
          "credits": 3,
          "prerequisites": [
            "Completion of 90 Credit Hours",
            "a CGPA of 2.0 or Higher"
          ],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "First Semester",
      "courses": [
        {
          "code": "CIEN 421",
          "title": "Structural Steel Design",
          "credits": 3,
          "prerequisites": [
            "CIEN 311"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 441",
          "title": "Construction Management",
          "credits": 3,
          "prerequisites": [
            "CIEN 331"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 452",
          "title": "Water Resources Engineering",
          "credits": 3,
          "prerequisites": [
            "CIEN 251"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 491",
          "title": "Senior Design Project (1)",
          "credits": 2,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "ENGR 450",
          "title": "Engineering Seminar",
          "credits": 1,
          "prerequisites": [
            "Completion of 90 Credit Hours"
          ],
          "corequisites": []
        },
        {
          "code": "Technical Elective I",
          "title": "Technical Elective I",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    },
    {
      "year": 4,
      "semester": "Second Semester",
      "courses": [
        {
          "code": "Technical Elective II",
          "title": "Technical Elective II",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        },
        {
          "code": "CIEN 492",
          "title": "Senior Design Project (2)",
          "credits": 4,
          "prerequisites": [
            "CIEN 491"
          ],
          "corequisites": []
        },
        {
          "code": "CIEN 453",
          "title": "AI and Sustainability in Civil Engineering Systems",
          "credits": 3,
          "prerequisites": [
            "ENGR 210"
          ],
          "corequisites": []
        },
        {
          "code": "UAES 200",
          "title": "Survey of United Arab Emirates Studies",
          "credits": 3,
          "prerequisites": [],
          "corequisites": []
        }
      ]
    }
  ]

};

export { majorCourseData };