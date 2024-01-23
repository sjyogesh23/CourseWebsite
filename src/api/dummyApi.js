const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    description:
      "Dive deep into advanced JavaScript concepts and improve your coding skills.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: [
      "Proficient in basic JavaScript",
      "Experience with ES6 features",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Prototypes",
        content:
          "Understanding closures, prototype chain, and their applications.",
      },
      {
        week: 2,
        topic: "Asynchronous JavaScript",
        content:
          "Working with promises, async/await, and handling asynchronous operations.",
      },
      {
        week: 2,
        topic: "Asynchronous JavaScript",
        content:
          "Working with promises, async/await, and handling asynchronous operations.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Diana Johnson",
        email: "diana@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    instructor: "Emily Johnson",
    description:
      "A comprehensive bootcamp covering HTML, CSS, and JavaScript for web development.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "10 weeks",
    schedule: "Mondays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["No prerequisites, suitable for beginners"],
    syllabus: [
      {
        week: 1,
        topic: "HTML Fundamentals",
        content: "Introduction to HTML tags and basic document structure.",
      },
      {
        week: 2,
        topic: "CSS Styling",
        content: "Styling web pages using CSS properties and selectors.",
      },
    ],
    students: [
      {
        id: 301,
        name: "Eva Wilson",
        email: "eva@example.com",
      },
      {
        id: 302,
        name: "Frank Miller",
        email: "frank@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Alex Thompson",
    description:
      "Explore the foundations of data science, including statistics and machine learning.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "12 weeks",
    schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic knowledge of mathematics",
      "Familiarity with Python",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content:
          "Overview of data science, its applications, and ethical considerations.",
      },
      {
        week: 2,
        topic: "Statistics for Data Science",
        content:
          "Fundamental statistical concepts for analyzing and interpreting data.",
      },
    ],
    students: [
      {
        id: 401,
        name: "Grace Davis",
        email: "grace@example.com",
      },
      {
        id: 402,
        name: "Henry Turner",
        email: "henry@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Mobile App Design Workshop",
    instructor: "Sophia Rodriguez",
    description:
      "Learn principles of mobile app design and create stunning user interfaces.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 7:30 PM - 9:30 PM",
    location: "Online",
    prerequisites: ["Basic understanding of UI/UX concepts"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile Design",
        content: "Fundamental principles of designing for mobile applications.",
      },
      {
        week: 2,
        topic: "UI Elements and Layouts",
        content: "Exploration of common UI elements and layout strategies.",
      },
    ],
    students: [
      {
        id: 501,
        name: "Isaac Brown",
        email: "isaac@example.com",
      },
      {
        id: 502,
        name: "Jasmine Miller",
        email: "jasmine@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Python for Machine Learning",
    instructor: "Oliver Taylor",
    description:
      "Master Python programming for machine learning applications and algorithms.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Python knowledge",
      "Understanding of basic machine learning concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Python Basics for ML",
        content: "Review of Python fundamentals relevant to machine learning.",
      },
      {
        week: 2,
        topic: "Data Manipulation with Pandas",
        content:
          "Hands-on exercises using the Pandas library for data manipulation.",
      },
    ],
    students: [
      {
        id: 601,
        name: "Katherine White",
        email: "katherine@example.com",
      },
      {
        id: 602,
        name: "Liam Johnson",
        email: "liam@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Full Stack Web Development",
    instructor: "Ava Martinez",
    description:
      "Become a full-stack web developer by learning both front-end and back-end technologies.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 5:30 PM - 7:30 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of HTML, CSS, and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Front-end Basics",
        content:
          "Introduction to HTML, CSS, and basic front-end development principles.",
      },
      {
        week: 2,
        topic: "Back-end Technologies",
        content:
          "Exploration of server-side programming using Node.js and Express.",
      },
    ],
    students: [
      {
        id: 701,
        name: "Mason Reed",
        email: "mason@example.com",
      },
      {
        id: 702,
        name: "Natalie Turner",
        email: "natalie@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Digital Marketing Fundamentals",
    instructor: "Lucas Anderson",
    description:
      "Explore the basics of digital marketing, including SEO, social media, and content strategy.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 7:30 PM - 9:30 PM",
    location: "Online",
    prerequisites: ["No prerequisites, suitable for beginners"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and their importance.",
      },
      {
        week: 2,
        topic: "SEO Strategies",
        content:
          "Understanding search engine optimization for better online visibility.",
      },
    ],
    students: [
      {
        id: 801,
        name: "Olivia Garcia",
        email: "olivia@example.com",
      },
      {
        id: 802,
        name: "Peter Harris",
        email: "peter@example.com",
      },
    ],
  },
  {
    id: 9,
    name: "Artificial Intelligence Essentials",
    instructor: "Victoria Lee",
    description:
      "Discover the fundamentals of artificial intelligence, machine learning, and neural networks.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "10 weeks",
    schedule: "Thursdays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of linear algebra",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AI",
        content:
          "Overview of artificial intelligence, its history, and applications.",
      },
      {
        week: 2,
        topic: "Machine Learning Basics",
        content:
          "Understanding machine learning algorithms and their use cases.",
      },
    ],
    students: [
      {
        id: 901,
        name: "Quinn Anderson",
        email: "quinn@example.com",
      },
      {
        id: 902,
        name: "Rachel White",
        email: "rachel@example.com",
      },
    ],
  },
  {
    id: 10,
    name: "Cybersecurity Fundamentals",
    instructor: "Christopher Davis",
    description:
      "Learn the basics of cybersecurity, including threat detection, encryption, and network security.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/1080",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of computer networks",
      "Familiarity with operating systems",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content:
          "Overview of cybersecurity, common threats, and security principles.",
      },
      {
        week: 2,
        topic: "Network Security",
        content:
          "Exploration of techniques to secure computer networks from unauthorized access.",
      },
    ],
    students: [
      {
        id: 1001,
        name: "Samuel Turner",
        email: "samuel@example.com",
      },
      {
        id: 1002,
        name: "Tiffany Martinez",
        email: "tiffany@example.com",
      },
    ],
  },
];

export default courseModel;
