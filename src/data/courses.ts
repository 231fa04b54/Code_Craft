import pythonIcon from "@/assets/python-icon.jpg";
import javascriptIcon from "@/assets/javascript-icon.jpg";
import htmlCssIcon from "@/assets/html-css-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import nodejsIcon from "@/assets/nodejs-icon.jpg";
import sqlIcon from "@/assets/sql-icon.jpg";
import mongodbIcon from "@/assets/mongodb-icon.jpg";
import reactNativeIcon from "@/assets/react-native-icon.jpg";
import typescriptIcon from "@/assets/typescript-icon.jpg";
import dockerIcon from "@/assets/docker-icon.jpg";
import flutterIcon from "@/assets/flutter-icon.jpg";
import graphqlIcon from "@/assets/graphql-icon.jpg";

export const courseCategories = [
  { id: 'all', name: 'All Courses', icon: 'Code' },
  { id: 'frontend', name: 'Frontend', icon: 'Layout' },
  { id: 'backend', name: 'Backend', icon: 'Server' },
  { id: 'database', name: 'Database', icon: 'Database' },
  { id: 'mobile', name: 'Mobile', icon: 'Smartphone' }
];

export const allCourses = [
  {
    id: 'python-basics',
    title: "Python Adventure",
    description: "Master Python programming through magical quests and challenges. Learn variables, functions, and object-oriented programming.",
    category: 'backend',
    image: pythonIcon,
    level: "Beginner" as const,
    duration: "8 weeks",
    students: 25000,
    rating: 4.9,
    progress: 65,
    xp: 2500,
    badges: 12
  },
  {
    id: 'javascript-quest',
    title: "JavaScript Quest",
    description: "Embark on an epic JavaScript journey. Build interactive web applications and master modern ES6+ features.",
    category: 'frontend',
    image: javascriptIcon,
    level: "Intermediate" as const,
    duration: "10 weeks",
    students: 18000,
    rating: 4.8,
    xp: 3200,
    badges: 15
  },
  {
    id: 'html-css-realm',
    title: "HTML & CSS Realm",
    description: "Create stunning websites in the HTML & CSS realm. Learn responsive design, flexbox, and modern CSS techniques.",
    category: 'frontend',
    image: htmlCssIcon,
    level: "Beginner" as const,
    duration: "6 weeks",
    students: 32000,
    rating: 4.7,
    progress: 30,
    xp: 1800,
    badges: 8
  },
  {
    id: 'react-mastery',
    title: "React Mastery",
    description: "Master React and build dynamic UIs. Learn hooks, state management, and component architecture.",
    category: 'frontend',
    image: reactIcon,
    level: "Advanced" as const,
    duration: "12 weeks",
    students: 15000,
    rating: 4.9,
    xp: 4500,
    badges: 20
  },
  {
    id: 'node-backend',
    title: "Node.js Backend",
    description: "Build scalable backend services with Node.js. Master Express, APIs, and server-side JavaScript.",
    category: 'backend',
    image: nodejsIcon,
    level: "Intermediate" as const,
    duration: "10 weeks",
    students: 12000,
    rating: 4.7,
    xp: 3800,
    badges: 16
  },
  {
    id: 'sql-database',
    title: "SQL Database Design",
    description: "Master database design and SQL queries. Learn normalization, indexing, and optimization.",
    category: 'database',
    image: sqlIcon,
    level: "Intermediate" as const,
    duration: "8 weeks",
    students: 10000,
    rating: 4.8,
    xp: 3000,
    badges: 14
  },
  {
    id: 'mongodb-quest',
    title: "MongoDB Quest",
    description: "Dive into NoSQL databases with MongoDB. Learn document modeling and aggregation pipelines.",
    category: 'database',
    image: mongodbIcon,
    level: "Intermediate" as const,
    duration: "7 weeks",
    students: 8000,
    rating: 4.6,
    xp: 2800,
    badges: 12
  },
  {
    id: 'react-native',
    title: "React Native Mobile",
    description: "Build cross-platform mobile apps with React Native. Deploy to iOS and Android.",
    category: 'mobile',
    image: reactNativeIcon,
    level: "Advanced" as const,
    duration: "14 weeks",
    students: 9000,
    rating: 4.8,
    xp: 5000,
    badges: 22
  },
  {
    id: 'typescript-pro',
    title: "TypeScript Pro",
    description: "Master TypeScript for type-safe JavaScript. Learn generics, decorators, and advanced types.",
    category: 'frontend',
    image: typescriptIcon,
    level: "Advanced" as const,
    duration: "9 weeks",
    students: 11000,
    rating: 4.9,
    xp: 4000,
    badges: 18
  },
  {
    id: 'docker-kubernetes',
    title: "Docker & Kubernetes",
    description: "Master containerization and orchestration. Deploy scalable applications in the cloud.",
    category: 'backend',
    image: dockerIcon,
    level: "Advanced" as const,
    duration: "11 weeks",
    students: 7000,
    rating: 4.7,
    xp: 4200,
    badges: 19
  },
  {
    id: 'flutter-mobile',
    title: "Flutter Development",
    description: "Create beautiful native apps with Flutter and Dart. Build for iOS, Android, and web.",
    category: 'mobile',
    image: flutterIcon,
    level: "Intermediate" as const,
    duration: "12 weeks",
    students: 8500,
    rating: 4.8,
    xp: 3600,
    badges: 17
  },
  {
    id: 'graphql-apis',
    title: "GraphQL APIs",
    description: "Build efficient APIs with GraphQL. Learn queries, mutations, and schema design.",
    category: 'backend',
    image: graphqlIcon,
    level: "Advanced" as const,
    duration: "8 weeks",
    students: 6500,
    rating: 4.6,
    xp: 3400,
    badges: 15
  }
];
