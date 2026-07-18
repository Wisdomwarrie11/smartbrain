import { Course, Tutor, BlogPost, FAQItem } from './types';

export const INITIAL_TUTORS: Tutor[] = [
  {
    id: 'tutor-1',
    name: 'Henry Okorie',
    role: 'Founder & Lead STEM Instructor',
    bio: 'Henry is an educational technologist with over 8 years of experience teaching Mathematics, Physics, and Coding. He founded SmartBrain EdTech Academy to leverage technology in making quality learning accessible to students across Africa and beyond.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 4.9,
    coursesCount: 4,
    isCustom: false
  },
  {
    id: 'tutor-2',
    name: 'Sarah Chinedu',
    role: 'Primary Education Specialist',
    bio: 'Sarah holds a Master’s in Elementary Education and specializes in child development, phonics, and basic mathematics. She makes learning fun, engaging, and easy to grasp for primary school learners.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 4.8,
    coursesCount: 2,
    isCustom: false
  },
  {
    id: 'tutor-3',
    name: 'David Adebayo',
    role: 'Chemistry & Biology Lead',
    bio: 'David is a passionate science communicator with a background in Biochemistry. He has successfully coached over 500 students for WAEC, NECO, and JAMB examinations with exceptional success rates.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 4.7,
    coursesCount: 3,
    isCustom: false
  },
  {
    id: 'tutor-4',
    name: 'Elizabeth Henshaw',
    role: 'English & Literature Coach',
    bio: 'Based in Calabar, Elizabeth has been teaching English Literature and Creative Writing for 6 years. She is dedicated to improving reading comprehension, critical writing, and public speaking skills.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
    rating: 4.9,
    coursesCount: 2,
    isCustom: false
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Mathematics Mastery (JS1 - SS3)',
    category: 'Secondary',
    description: 'Comprehensive mathematics curriculum covering Algebra, Geometry, Calculus, and WAEC/NECO/JAMB exam prep with intensive practice.',
    longDescription: 'This course is tailored specifically for secondary school students in Nigeria preparing for internal or external exams (WAEC, NECO, JAMB). We break down complex topics like Trigonometry, Longitude & Latitude, Matrices, and Differentiation into bite-sized, interactive lectures with extensive practice sheets.',
    duration: '12 Weeks',
    priceNGN: 15000,
    priceUSD: 25,
    rating: 4.9,
    enrolledCount: 342,
    tutorId: 'tutor-1',
    features: [
      'Comprehensive coverage of JAMB & WAEC syllabus',
      'Over 60 video lessons and live interactive zoom sessions',
      'Weekly assessments and past questions reviews',
      'One-on-one virtual office hours with the tutor',
      'Access to Moodle LMS classroom & homework portal'
    ]
  },
  {
    id: 'course-2',
    title: 'Physics Fundamentals & Exam Prep',
    category: 'Secondary',
    description: 'Master Physics concepts from mechanics to electromagnetism. Perfect for science students preparing for SSCE and UTME.',
    longDescription: 'Physics is easy when you see it in action! This course simplifies physical concepts through visual simulations, practical problem-solving, and continuous feedback. Great for Senior Secondary students (SS1-SS3) aiming for excellence in science.',
    duration: '10 Weeks',
    priceNGN: 18000,
    priceUSD: 30,
    rating: 4.8,
    enrolledCount: 215,
    tutorId: 'tutor-1',
    features: [
      'Interactive formula sheets & study cards',
      'Real-world physical applications explained',
      'Full coverage of SSCE (WAEC/NECO) practical guides',
      'Step-by-step UTME Past Questions solutions',
      'Certificate of Completion'
    ]
  },
  {
    id: 'course-3',
    title: 'Primary Phonics & Creative Writing',
    category: 'Primary',
    description: 'Fun, engaging English language lessons focusing on reading pronunciation, vocabulary development, and creative storytelling.',
    longDescription: 'Designed for primary school pupils (Ages 6-11), this course helps children develop reading independence using phonic patterns and sparks their imagination through structured creative writing exercises, building solid foundations early.',
    duration: '8 Weeks',
    priceNGN: 12000,
    priceUSD: 20,
    rating: 4.9,
    enrolledCount: 156,
    tutorId: 'tutor-2',
    features: [
      'Exciting weekly storytelling webinars',
      'Interactive spelling games and worksheets',
      'Guided writing prompts with personal feedback',
      'Parent-teacher progress dashboard tracker',
      'Certificate of Achievement'
    ]
  },
  {
    id: 'course-4',
    title: 'Chemistry Essentials: From Atoms to Reactions',
    category: 'Secondary',
    description: 'Explore the periodic table, chemical bonding, organic chemistry, and stoichiometry with lab simulation guides.',
    longDescription: 'An interactive exploration of Chemistry for senior secondary science classes. Learn how atomic structures form compounds, how chemical reactions balance, and master organic chemistry topics that represent major parts of your exams.',
    duration: '10 Weeks',
    priceNGN: 18000,
    priceUSD: 30,
    rating: 4.7,
    enrolledCount: 188,
    tutorId: 'tutor-3',
    features: [
      'Animated chemical bonding and orbital models',
      'Stoichiometry & mole calculations workbook',
      'SSCE Practical Chemistry simulation guide',
      'Mock exam practice with feedback',
      'Dedicated Q&A peer-learning forum'
    ]
  },
  {
    id: 'course-5',
    title: 'Introduction to Web Development (HTML, CSS, JS)',
    category: 'Professional',
    description: 'Kickstart your tech career by learning HTML5, CSS3, modern JavaScript, and Responsive Web Design from scratch.',
    longDescription: 'A practical, hands-on introduction to building modern, fully responsive websites. Perfect for students, school leavers, and working professionals looking to transition into tech. Build real projects to showcase in your portfolio.',
    duration: '14 Weeks',
    priceNGN: 45000,
    priceUSD: 75,
    rating: 4.9,
    enrolledCount: 294,
    tutorId: 'tutor-1',
    features: [
      'Learn key principles of Responsive Design',
      'Build 5 real-world static website projects',
      'Intro to modern ES6+ Javascript programming',
      'Introduction to Git and hosting websites online',
      'Professional review of your project portfolio'
    ]
  },
  {
    id: 'course-6',
    title: 'Data Analysis with Excel & SQL',
    category: 'Professional',
    description: 'Master data cleaning, advanced formulas, pivot tables, and relational database queries using PostgreSQL.',
    longDescription: 'An essential skill course for anyone looking to enter the corporate or remote work environment. Learn to clean data, perform complex analytics calculations, compile interactive dashboards, and query relational databases with SQL.',
    duration: '12 Weeks',
    priceNGN: 50000,
    priceUSD: 85,
    rating: 4.8,
    enrolledCount: 203,
    tutorId: 'tutor-3',
    features: [
      'Real-world business case study datasets',
      'Advanced Excel macros & power queries',
      'Writing highly optimized SQL select statements',
      'Building professional portfolio projects',
      'Mentorship for remote tech job hunting'
    ]
  },
  {
    id: 'course-7',
    title: 'English Language & Composition (WAEC/JAMB Spec)',
    category: 'Secondary',
    description: 'Improve English grammar, summary writing, oral English, and essay compositions for standardized exams.',
    longDescription: 'We focus on the most difficult parts of the WAEC English Exam: Lexis and Structure, Oral English (sounds & stress), Summary Writing, and Essay Formats (formal letters, narratives, debates). Gain absolute confidence before test day!',
    duration: '8 Weeks',
    priceNGN: 14000,
    priceUSD: 23,
    rating: 4.8,
    enrolledCount: 260,
    tutorId: 'tutor-4',
    features: [
      'Weekly timed essay grading & correction',
      'Audio guides for Oral English articulation',
      'Summarizing complex texts with high efficiency',
      'JAMB "The Life Changer" novel comprehensive summary',
      'Interactive weekly grammar drills'
    ]
  },
  {
    id: 'course-8',
    title: 'Digital Literacy & Computer Basics',
    category: 'Lifelong',
    description: 'Empower yourself with fundamental computer skills, online research strategies, email communication, and Google Docs.',
    longDescription: 'Perfect for business owners, teachers, parents, and older adults who want to navigate the modern digital world with absolute ease. Learn file management, online security precautions, and productivity platforms like Google Drive.',
    duration: '6 Weeks',
    priceNGN: 10000,
    priceUSD: 18,
    rating: 4.7,
    enrolledCount: 97,
    tutorId: 'tutor-2',
    features: [
      'Friendly, slow-paced, patient screen recordings',
      'Understanding internet safety & scam protection',
      'Mastering Gmail, Google Docs, and Sheets',
      'How to safely make online transactions',
      'Weekly live helper sessions'
    ]
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 7 Strategies to Score Over 300 in UTME (JAMB)',
    category: 'Exam Tips',
    excerpt: 'Getting a high score in JAMB requires strategy, timing, and using the right study techniques. Here are proven steps to succeed.',
    content: `Yearly, hundreds of thousands of students write the Unified Tertiary Matriculation Examination (UTME) in Nigeria, but only a fraction secure scores above 300. Scoring 300+ is not about overnight studying; it is about strategic planning. Here is how:

1. **Understand the JAMB Syllabus Thoroughly**
Never study blindly. JAMB outlines every single topic that can possibly be tested. Study strictly along the official syllabus to avoid wasting time on out-of-scope concepts.

2. **Master the Past Questions Engine**
JAMB repeats concepts regularly. Solve past questions from the last 15 years. Don't just cram the answers; understand the logic behind why an option is correct.

3. **Practice Computer-Based Testing (CBT)**
Many students fail not because they don't know the material, but because they panic using a computer. Practice with CBT software regularly to master mouse control, keyboard navigation, and the countdown timer.

4. **Focus heavily on English Language**
With JAMB's grading weights, English remains a vital booster. Take your study of the recommended text extremely seriously.

At SmartBrain EdTech Academy, our CBT simulator and past-questions drills help students gain the exact muscle memory required to excel. Make learning smarter today!`,
    author: 'Henry Okorie',
    date: 'April 14, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'blog-2',
    title: 'How E-Learning is Revolutionizing Education in Nigeria',
    category: 'EdTech News',
    excerpt: 'Traditional classroom boundaries are expanding. Discover how digital tools and LMS portals like Moodle are giving Nigerian students a competitive edge.',
    content: `Education in Africa is undergoing a profound digital transformation. With the rise of affordable mobile data and cloud learning systems, high-quality education is no longer confined to top-tier physical classrooms in major cities.

By integrating Learning Management Systems (LMS) like Moodle, SmartBrain EdTech Academy brings expert Calabar tutors right to the screens of students in Lagos, Abuja, Port Harcourt, and even remote communities.

### The Power of Asynchronous Learning
Unlike physical classrooms where missing a day means missing information, digital learning platforms let students pause, rewind, and re-watch complex chemistry equations or math formulas as many times as they need.

### Bridging the Global Skills Gap
Working professionals can now acquire high-demand digital skills (like web design, coding, or data analytics) directly in their evening hours. Our courses match international standards, proving that with smart technology, anyone can think smart and learn smart.`,
    author: 'Henry Okorie',
    date: 'March 28, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'blog-3',
    title: 'A Parents Guide to Supporting Remote Learners',
    category: 'Parenting',
    excerpt: 'Online tutoring is highly effective, but parent support makes it twice as powerful. Learn how to construct a nurturing online learning space.',
    content: `As virtual tutoring becomes mainstream, parents are finding themselves in a new role: facilitators of remote learning. While professional tutors handle curriculum delivery, a parent’s presence and structure at home heavily influence a child’s progress.

Here are four simple ways parents can support their children:

1. **Create a Dedicated Study Nook**
Minimize distractions by setting up a quiet, well-lit table solely reserved for study. Avoid letting them study in bed, which signals sleep to the brain.

2. **Monitor Screen Consistency**
Ensure laptops and tablets are plugged in, and internet data plans are pre-renewed. Running out of data mid-class can break a student's focus.

3. **Check Moodle Portals Weekly**
Log into our SmartBrain student dashboards to review your child’s weekly test results, assignment submissions, and instructor comments.

4. **Encourage Breaks**
Online learning requires mental stamina. Make sure your child stands up, stretches, or drinks water between intensive sessions.`,
    author: 'Sarah Chinedu',
    date: 'March 12, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e84589d90?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I access my lessons after enrolling?',
    answer: 'Once you enroll and complete payment, you will receive your credentials to log into our integrated Moodle LMS (Learning Management System). There, you will find pre-recorded video lectures, assignments, quizzes, and live Zoom links.',
    category: 'Enrolment'
  },
  {
    id: 'faq-2',
    question: 'What payment options are available for Nigerian and international students?',
    answer: 'For students in Nigeria, we accept direct bank transfers, card payments (via Flutterwave/Paystack integrations), and USSD. For international students, we support PayPal and standard international card transactions in USD ($).',
    category: 'Payment'
  },
  {
    id: 'faq-3',
    question: 'Can primary and secondary school pupils study at their own pace?',
    answer: 'Yes! While we host live weekly Q&A webinars, all core educational materials, quizzes, and video lessons are fully archived on our platform, allowing children to learn comfortably at their own pace alongside school work.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Are SmartBrain EdTech certificates recognized?',
    answer: 'Absolutely. Upon passing all courses assessments with at least 70%, we award a verifiable SmartBrain Certificate of Achievement which can be attached to academic portfolios or LinkedIn resumes for career growth.',
    category: 'General'
  },
  {
    id: 'faq-5',
    question: 'How can I reach the administrators directly?',
    answer: 'You can chat with our founder, Henry Okorie, or our admin team directly via WhatsApp (+234 904 435 4766) or call us at 07034477971. We are physically located in Calabar, Cross River State, Nigeria.',
    category: 'Support'
  }
];
