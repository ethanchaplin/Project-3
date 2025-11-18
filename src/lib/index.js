export const CLASSES = [
  {
    title: "General Chemistry I",
    id: "chem1040",
    subject: "CHEM",
    number: 1040,
    college: "CAS",
    credits: 3,
    recYear: 1,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Karen Whitaker",
        days: ["Mon", "Wed", "Fri"],
        start: "09:05",
        end: "09:55",
        building: "OLD CHEM",
        room: "602"
      },
      {
        id: 2,
        professor: "Dr. Michael S. Turner",
        days: ["Tue", "Thu"],
        start: "11:00",
        end: "12:20",
        building: "OLD CHEM",
        room: "531"
      }
    ]
  },

  {
    title: "General Chemistry Laboratory I",
    id: "chem1040l",
    subject: "CHEM",
    number: 1040,
    college: "CAS",
    credits: 1,
    recYear: 1,
    prereqs: ["CHEM1040"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Lisa Mendel",
        days: ["Wed"],
        start: "13:30",
        end: "16:00",
        building: "OLD CHEM",
        room: "140L"
      },
      {
        id: 2,
        professor: "Dr. Jorge Alvarez",
        days: ["Thu"],
        start: "14:00",
        end: "16:30",
        building: "OLD CHEM",
        room: "142L"
      }
    ]
  },

  {
    title: "Introduction to Computer Science",
    id: "cs1100",
    subject: "CS",
    number: 1100,
    college: "CEAS",
    credits: 3,
    recYear: 1,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. James Holloway",
        days: ["Tue", "Thu"],
        start: "09:30",
        end: "10:50",
        building: "BALDWIN",
        room: "652"
      },
      {
        id: 2,
        professor: "Dr. Mei-Ling Zhou",
        days: ["Mon", "Wed", "Fri"],
        start: "10:10",
        end: "11:00",
        building: "LINDHALL",
        room: "4230"
      }
    ]
  },

  {
    title: "Foundations of Engineering Design Thinking I",
    id: "ened1100",
    subject: "ENED",
    number: 1100,
    college: "CEAS",
    credits: 2,
    recYear: 1,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Sara Iyer",
        days: ["Mon", "Wed", "Fri"],
        start: "13:35",
        end: "14:25",
        building: "RHODES",
        room: "801"
      }
    ]
  },

  {
    title: "English Composition",
    id: "engl1001",
    subject: "ENGL",
    number: 1001,
    college: "CAS",
    credits: 3,
    recYear: 3,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Daniel P. Reed",
        days: ["Tue", "Thu"],
        start: "12:30",
        end: "13:50",
        building: "TEACHER-DYER",
        room: "138"
      },
      {
        id: 2,
        professor: "Dr. Monica Hayes",
        days: ["Mon", "Wed", "Fri"],
        start: "11:15",
        end: "12:05",
        building: "LIBRARY",
        room: "3A"
      }
    ]
  },

  {
    title: "Calculus I",
    id: "math1061",
    subject: "MATH",
    number: 1061,
    college: "CAS",
    credits: 4,
    recYear: 1,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Robert McMillan",
        days: ["Mon", "Wed", "Fri"],
        start: "08:00",
        end: "08:50",
        building: "FRENCH-WEST",
        room: "155"
      },
      {
        id: 2,
        professor: "Dr. Ellen Strauss",
        days: ["Tue", "Thu"],
        start: "14:00",
        end: "15:20",
        building: "BRAUNSTEIN",
        room: "210"
      }
    ]
  },

  {
    title: "Computer Science I (Intro w/ lab)",
    id: "cs1021c",
    subject: "CS",
    number: 1021,
    college: "CEAS",
    credits: 4,
    recYear: 1,
    prereqs: ["CS1100"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. David R. Cohen",
        days: ["Tue", "Thu"],
        start: "11:00",
        end: "12:20",
        building: "BALDWIN",
        room: "530"
      },
      {
        id: 2,
        professor: "Dr. Priya Sharma",
        days: ["Mon", "Wed", "Fri"],
        start: "12:20",
        end: "13:10",
        building: "TEACHER-DYER",
        room: "201"
      }
    ]
  },

  {
    title: "Foundations of Engineering Design Thinking II",
    id: "ened1120",
    subject: "ENED",
    number: 1120,
    college: "CEAS",
    credits: 2,
    recYear: 1,
    prereqs: ["ENED1100"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Anita Gomez",
        days: ["Tue"],
        start: "15:30",
        end: "17:20",
        building: "RHODES",
        room: "700"
      }
    ]
  },

  {
    title: "Calculus II",
    id: "math1062",
    subject: "MATH",
    number: 1062,
    college: "CAS",
    credits: 4,
    recYear: 1,
    prereqs: ["MATH1061"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Ellen Strauss",
        days: ["Mon", "Wed", "Fri"],
        start: "09:05",
        end: "09:55",
        building: "FRENCH-WEST",
        room: "155"
      },
      {
        id: 2,
        professor: "Dr. Tara Nguyen",
        days: ["Tue", "Thu"],
        start: "10:10",
        end: "11:30",
        building: "BALDWIN",
        room: "756"
      }
    ]
  },

  {
    title: "Introduction to COOP for CEAS",
    id: "pd1011",
    subject: "PD",
    number: 1011,
    college: "CEAS",
    credits: 1,
    recYear: 1,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Linda Park",
        days: ["Mon"],
        start: "14:00",
        end: "15:15",
        building: "ONLINE",
        room: ""
      }
    ]
  },

  {
    title: "Introduction to Computer Systems",
    id: "cs2011",
    subject: "CS",
    number: 2011,
    college: "CEAS",
    credits: 3,
    recYear: 2,
    prereqs: ["CS1021C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Aaron Feldman",
        days: ["Tue", "Thu"],
        start: "09:30",
        end: "10:50",
        building: "BALDWIN",
        room: "530"
      }
    ]
  },

  {
    title: "Python Programming",
    id: "cs2021",
    subject: "CS",
    number: 2021,
    college: "CEAS",
    credits: 3,
    recYear: 2,
    prereqs: ["CS1021C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Heather Collins",
        days: ["Mon", "Wed", "Fri"],
        start: "10:10",
        end: "11:00",
        building: "RECCEN",
        room: "125"
      },
      {
        id: 2,
        professor: "Prof. Marcus Liu",
        days: ["Tue", "Thu"],
        start: "12:30",
        end: "13:50",
        building: "LINDHALL",
        room: "4255"
      }
    ]
  },

  {
    title: "Data Structures",
    id: "cs2028c",
    subject: "CS",
    number: 2028,
    college: "CEAS",
    credits: 3,
    recYear: 2,
    prereqs: ["CS1021C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Sanjay Patel",
        days: ["Tue", "Thu"],
        start: "14:00",
        end: "15:20",
        building: "TEACHER-DYER",
        room: "250"
      },
      {
        id: 2,
        professor: "Dr. Megan Ortiz",
        days: ["Mon", "Wed", "Fri"],
        start: "13:35",
        end: "14:25",
        building: "BALDWIN",
        room: "652"
      }
    ]
  },

  {
    title: "Information Security and Assurance",
    id: "it2030c",
    subject: "IT",
    number: 2030,
    college: "CEAS",
    credits: 3,
    recYear: 2,
    prereqs: ["CS1021C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Victor Ramos",
        days: ["Tue"],
        start: "17:30",
        end: "19:20",
        building: "ONLINE",
        room: ""
      }
    ]
  },

  {
    title: "Linear Algebra",
    id: "math2076",
    subject: "MATH",
    number: 2076,
    college: "CAS",
    credits: 3,
    prereqs: ["MATH1061"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Priya Srinivasan",
        days: ["Tue", "Thu"],
        start: "11:00",
        end: "12:20",
        building: "FRENCH-WEST",
        room: "302"
      }
    ]
  },

  {
    title: "Discrete Computational Structures",
    id: "cs2071",
    subject: "CS",
    number: 2071,
    college: "CEAS",
    credits: 3,
    recYear: 3,
    prereqs: ["CS1021C", "MATH1061"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Rachel Green",
        days: ["Mon", "Wed", "Fri"],
        start: "11:15",
        end: "12:05",
        building: "BALDWIN",
        room: "652"
      }
    ]
  },

  {
    title: "Programming Languages",
    id: "cs3003",
    subject: "CS",
    number: 3003,
    college: "CEAS",
    credits: 3,
    recYear: 3,
    prereqs: ["CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Kevin O'Neill",
        days: ["Tue", "Thu"],
        start: "12:30",
        end: "13:50",
        building: "TEACHER-DYER",
        room: "305"
      }
    ]
  },

  {
    title: "Intermediate Composition",
    id: "engl2089",
    subject: "ENGL",
    number: 2089,
    college: "CAS",
    credits: 3,
    recYear: 3,
    prereqs: ["ENGL1001"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Allison Page",
        days: ["Mon", "Wed"],
        start: "14:00",
        end: "15:15",
        building: "ONLINE",
        room: ""
      }
    ]
  },

  {
    title: "Probability and Statistics I",
    id: "stat2037",
    subject: "STAT",
    number: 2037,
    college: "CAS",
    credits: 3,
    recYear: 3,
    prereqs: ["MATH1061"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Omar Haddad",
        days: ["Tue", "Thu"],
        start: "09:30",
        end: "10:50",
        building: "BRAUNSTEIN",
        room: "210"
      }
    ]
  },

  {
    title: "Introduction to Effective Speaking",
    id: "comm1071",
    subject: "COMM",
    number: 1071,
    college: "CAS",
    credits: 3,
    recYear: 3,
    prereqs: [],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Emily Novak",
        days: ["Mon", "Wed", "Fri"],
        start: "12:20",
        end: "13:10",
        building: "LIBRARY",
        room: "2B"
      }
    ]
  },

  {
    title: "Design and Analysis of Algorithms",
    id: "cs4071",
    subject: "CS",
    number: 4071,
    college: "CEAS",
    credits: 3,
    recYear: 4,
    prereqs: ["CS2028C", "MATH1062"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Jonathan Keane",
        days: ["Tue", "Thu"],
        start: "15:30",
        end: "16:50",
        building: "RHODES",
        room: "700"
      }
    ]
  },

  {
    title: "Database Design and Development",
    id: "cs4092",
    subject: "CS",
    number: 4092,
    college: "CEAS",
    credits: 3,
    recYear: 4,
    prereqs: ["CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Priya Sharma",
        days: ["Tue", "Thu"],
        start: "08:00",
        end: "09:20",
        building: "TEACHER-DYER",
        room: "250"
      }
    ]
  },

  {
    title: "Software Engineering",
    id: "eece3093c",
    subject: "EECE",
    number: 3093,
    college: "CEAS",
    credits: 3,
    recYear: 4,
    prereqs: ["CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Mark Davidson",
        days: ["Mon", "Wed", "Fri"],
        start: "13:35",
        end: "14:25",
        building: "BALDWIN",
        room: "801"
      }
    ]
  },

  {
    title: "Artificial Intelligence: Principles and Applications",
    id: "cs4033",
    subject: "CS",
    number: 4033,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Lina Costa",
        days: ["Tue", "Thu"],
        start: "11:00",
        end: "12:20",
        building: "DAAP",
        room: "210"
      }
    ]
  },

  {
    title: "Computer Networks and Networked Computing",
    id: "cs4065",
    subject: "CS",
    number: 4065,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["CS2011"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Nathan Brooks",
        days: ["Mon", "Wed"],
        start: "15:35",
        end: "16:25",
        building: "SWIFT",
        room: "101"
      }
    ]
  },

  {
    title: "Operating Systems & Systems Programming",
    id: "eece4029",
    subject: "EECE",
    number: 4029,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["CS2011", "CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Karen Whitaker",
        days: ["Tue", "Thu"],
        start: "14:00",
        end: "15:20",
        building: "RHODES",
        room: "538"
      }
    ]
  },

  {
    title: "Technical and Scientific Writing",
    id: "engl4092",
    subject: "ENGL",
    number: 4092,
    college: "CAS",
    credits: 3,
    recYear: 5,
    prereqs: ["ENGL1001"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Prof. Olivia Trent",
        days: ["Tue"],
        start: "12:30",
        end: "15:20",
        building: "ONLINE",
        room: ""
      }
    ]
  },

  {
    title: "Computer Science Senior Design I",
    id: "cs5001",
    subject: "CS",
    number: 5001,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["SeniorStanding", "CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Samantha Lee",
        days: ["Wed"],
        start: "16:35",
        end: "18:25",
        building: "TEACHER-DYER",
        room: "410"
      }
    ]
  },

  {
    title: "The Theory of Formal Languages and Automata",
    id: "cs5170",
    subject: "CS",
    number: 5170,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["CS2028C"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Victor Kline",
        days: ["Tue", "Thu"],
        start: "15:30",
        end: "16:50",
        building: "TEACHER-DYER",
        room: "305"
      }
    ]
  },

  {
    title: "Computer Science Senior Design II",
    id: "cs5002",
    subject: "CS",
    number: 5002,
    college: "CEAS",
    credits: 3,
    recYear: 5,
    prereqs: ["CS5001"],
    description: "",
    sections: [
      {
        id: 1,
        professor: "Dr. Samantha Lee",
        days: ["Wed"],
        start: "16:35",
        end: "18:25",
        building: "TEACHER-DYER",
        room: "410"
      }
    ]
  }
];
