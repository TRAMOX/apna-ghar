export interface Subject {
  id: number
  name: string
  description: string
  icon: string
  color: string
  topics: number
}

export interface ContentItem {
  id: number
  title: string
  type: 'video' | 'pdf' | 'notes' | 'test'
  duration?: string
  pages?: number
  questions?: number
  thumbnail?: string
  url: string
  uploadDate: string
  views: number
}

export interface ClassData {
  classNumber: number
  className: string
  subjects: Subject[]
  totalContent: number
  enrolledStudents: number
}

export const classesData: ClassData[] = [
  {
    classNumber: 1,
    className: 'Class 1',
    totalContent: 120,
    enrolledStudents: 1250,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Numbers, Shapes & Patterns', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 15 },
      { id: 2, name: 'English', description: 'Alphabet, Words & Stories', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 18 },
      { id: 3, name: 'Hindi', description: 'वर्णमाला और शब्द', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 16 },
      { id: 4, name: 'EVS', description: 'My Family & Environment', icon: '🌱', color: 'from-green-500 to-green-600', topics: 12 },
      { id: 5, name: 'General Knowledge', description: 'World Around Us', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 10 },
    ]
  },
  {
    classNumber: 2,
    className: 'Class 2',
    totalContent: 125,
    enrolledStudents: 1180,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Addition, Subtraction & Tables', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 18 },
      { id: 2, name: 'English', description: 'Reading & Writing Skills', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 20 },
      { id: 3, name: 'Hindi', description: 'व्याकरण और कहानी', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 18 },
      { id: 4, name: 'EVS', description: 'Plants, Animals & Seasons', icon: '🌱', color: 'from-green-500 to-green-600', topics: 15 },
      { id: 5, name: 'General Knowledge', description: 'Basic Facts & Figures', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 12 },
    ]
  },
  {
    classNumber: 3,
    className: 'Class 3',
    totalContent: 150,
    enrolledStudents: 1320,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Multiplication, Division & Geometry', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 22 },
      { id: 2, name: 'English', description: 'Grammar & Comprehension', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 24 },
      { id: 3, name: 'Hindi', description: 'रचना और समझ', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 20 },
      { id: 4, name: 'EVS', description: 'Earth, Water & Air', icon: '🌱', color: 'from-green-500 to-green-600', topics: 18 },
      { id: 5, name: 'General Knowledge', description: 'India & World', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 15 },
      { id: 6, name: 'Computer', description: 'Introduction to Computers', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 10 },
    ]
  },
  // Classes 4-12 with progressive subjects
  {
    classNumber: 4,
    className: 'Class 4',
    totalContent: 160,
    enrolledStudents: 1450,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Fractions, Decimals & Geometry', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 25 },
      { id: 2, name: 'English', description: 'Advanced Grammar & Writing', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 26 },
      { id: 3, name: 'Hindi', description: 'साहित्य और निबंध', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 22 },
      { id: 4, name: 'EVS', description: 'Natural Resources & Conservation', icon: '🌱', color: 'from-green-500 to-green-600', topics: 20 },
      { id: 5, name: 'General Knowledge', description: 'Current Affairs & Science', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 18 },
      { id: 6, name: 'Computer', description: 'MS Office & Internet', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 12 },
    ]
  },
  {
    classNumber: 5,
    className: 'Class 5',
    totalContent: 180,
    enrolledStudents: 1580,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Algebra, Ratios & Percentages', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 28 },
      { id: 2, name: 'English', description: 'Literature & Composition', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 28 },
      { id: 3, name: 'Hindi', description: 'उन्नत व्याकरण', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 24 },
      { id: 4, name: 'Science', description: 'Physics, Chemistry & Biology Basics', icon: '🔬', color: 'from-green-500 to-green-600', topics: 25 },
      { id: 5, name: 'Social Science', description: 'History, Geography & Civics', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 22 },
      { id: 6, name: 'Computer', description: 'Programming Basics', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 15 },
    ]
  },
  {
    classNumber: 6,
    className: 'Class 6',
    totalContent: 200,
    enrolledStudents: 1720,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Advanced Algebra & Geometry', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 32 },
      { id: 2, name: 'English', description: 'Advanced Literature', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 30 },
      { id: 3, name: 'Hindi', description: 'साहित्य और रचना', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 26 },
      { id: 4, name: 'Science', description: 'Physics, Chemistry & Biology', icon: '🔬', color: 'from-green-500 to-green-600', topics: 30 },
      { id: 5, name: 'Social Science', description: 'Ancient History & World Geography', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 28 },
      { id: 6, name: 'Computer', description: 'Web Development Basics', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 18 },
    ]
  },
  {
    classNumber: 7,
    className: 'Class 7',
    totalContent: 220,
    enrolledStudents: 1850,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Integers, Equations & Data Handling', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 35 },
      { id: 2, name: 'English', description: 'Poetry & Drama', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 32 },
      { id: 3, name: 'Hindi', description: 'उन्नत साहित्य', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 28 },
      { id: 4, name: 'Science', description: 'Heat, Motion & Life Processes', icon: '🔬', color: 'from-green-500 to-green-600', topics: 35 },
      { id: 5, name: 'Social Science', description: 'Medieval History & Climate', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 30 },
      { id: 6, name: 'Computer', description: 'Python Programming', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 20 },
    ]
  },
  {
    classNumber: 8,
    className: 'Class 8',
    totalContent: 250,
    enrolledStudents: 1950,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Rational Numbers & Linear Equations', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 38 },
      { id: 2, name: 'English', description: 'Advanced Composition', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 35 },
      { id: 3, name: 'Hindi', description: 'साहित्य विश्लेषण', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 30 },
      { id: 4, name: 'Science', description: 'Force, Pressure & Chemical Effects', icon: '🔬', color: 'from-green-500 to-green-600', topics: 40 },
      { id: 5, name: 'Social Science', description: 'Modern History & Constitution', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 35 },
      { id: 6, name: 'Computer', description: 'Data Structures', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 22 },
    ]
  },
  {
    classNumber: 9,
    className: 'Class 9',
    totalContent: 280,
    enrolledStudents: 2100,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Polynomials, Coordinate Geometry', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 42 },
      { id: 2, name: 'English', description: 'Literature & Language', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 38 },
      { id: 3, name: 'Hindi', description: 'क्षितिज और कृतिका', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 35 },
      { id: 4, name: 'Science', description: 'Physics, Chemistry & Biology', icon: '🔬', color: 'from-green-500 to-green-600', topics: 45 },
      { id: 5, name: 'Social Science', description: 'Democracy, Economics & Geography', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 40 },
      { id: 6, name: 'Computer', description: 'Java Programming', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 25 },
    ]
  },
  {
    classNumber: 10,
    className: 'Class 10',
    totalContent: 300,
    enrolledStudents: 2350,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Trigonometry, Statistics & Probability', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 45 },
      { id: 2, name: 'English', description: 'First Flight & Footprints', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 40 },
      { id: 3, name: 'Hindi', description: 'स्पर्श और संचयन', icon: '✍️', color: 'from-orange-500 to-orange-600', topics: 38 },
      { id: 4, name: 'Science', description: 'Board Exam Preparation', icon: '🔬', color: 'from-green-500 to-green-600', topics: 50 },
      { id: 5, name: 'Social Science', description: 'India & Contemporary World', icon: '🌍', color: 'from-teal-500 to-teal-600', topics: 45 },
      { id: 6, name: 'Computer', description: 'Database & Networking', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 28 },
    ]
  },
  {
    classNumber: 11,
    className: 'Class 11',
    totalContent: 350,
    enrolledStudents: 2580,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Calculus, Sets & Relations', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 55 },
      { id: 2, name: 'Physics', description: 'Mechanics, Thermodynamics', icon: '⚛️', color: 'from-cyan-500 to-cyan-600', topics: 50 },
      { id: 3, name: 'Chemistry', description: 'Physical, Organic & Inorganic', icon: '🧪', color: 'from-green-500 to-green-600', topics: 48 },
      { id: 4, name: 'Biology', description: 'Plant & Animal Kingdom', icon: '🧬', color: 'from-emerald-500 to-emerald-600', topics: 45 },
      { id: 5, name: 'English', description: 'Hornbill & Snapshots', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 42 },
      { id: 6, name: 'Computer Science', description: 'Python & Data Structures', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 35 },
      { id: 7, name: 'Accountancy', description: 'Financial Accounting', icon: '📊', color: 'from-orange-500 to-orange-600', topics: 38 },
      { id: 8, name: 'Business Studies', description: 'Nature & Purpose of Business', icon: '💼', color: 'from-yellow-500 to-yellow-600', topics: 32 },
      { id: 9, name: 'Economics', description: 'Microeconomics & Statistics', icon: '📈', color: 'from-red-500 to-red-600', topics: 40 },
    ]
  },
  {
    classNumber: 12,
    className: 'Class 12',
    totalContent: 400,
    enrolledStudents: 2850,
    subjects: [
      { id: 1, name: 'Mathematics', description: 'Differential Equations, Vectors', icon: '🔢', color: 'from-blue-500 to-blue-600', topics: 60 },
      { id: 2, name: 'Physics', description: 'Electromagnetism, Modern Physics', icon: '⚛️', color: 'from-cyan-500 to-cyan-600', topics: 55 },
      { id: 3, name: 'Chemistry', description: 'Solutions, Electrochemistry', icon: '🧪', color: 'from-green-500 to-green-600', topics: 52 },
      { id: 4, name: 'Biology', description: 'Genetics, Evolution & Ecology', icon: '🧬', color: 'from-emerald-500 to-emerald-600', topics: 50 },
      { id: 5, name: 'English', description: 'Flamingo & Vistas', icon: '📖', color: 'from-purple-500 to-purple-600', topics: 45 },
      { id: 6, name: 'Computer Science', description: 'OOP, Data Files & SQL', icon: '💻', color: 'from-indigo-500 to-indigo-600', topics: 40 },
      { id: 7, name: 'Accountancy', description: 'Company Accounts & Analysis', icon: '📊', color: 'from-orange-500 to-orange-600', topics: 42 },
      { id: 8, name: 'Business Studies', description: 'Management & Marketing', icon: '💼', color: 'from-yellow-500 to-yellow-600', topics: 38 },
      { id: 9, name: 'Economics', description: 'Macroeconomics & Development', icon: '📈', color: 'from-red-500 to-red-600', topics: 45 },
    ]
  },
]
