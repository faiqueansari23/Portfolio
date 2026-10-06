import {
  ContactInfo,
  EducationItem,
  Experience,
  Project,
  SalesforceCategory,
  SalesforceProject,
  SkillCategory,
} from '@/types/portfolio';

export const contactData: ContactInfo = {
  name: 'Faique Akmal Ansari',
  title: 'React Native Developer',
  email: 'ansarifaiqueakmal@gmail.com',
  phone: '8263891140',
  location: 'Nagpur, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/faique-akmal-ansari-5023a5263',
  github: 'https://github.com/faiqueansari23',
  resumeUrl: '/resume/Faique_Akmal_Ansari_Resume.pdf',
};

export const heroStats = [
  { label: 'Primary Specialization', value: 'React Native (iOS & Android)' },
  { label: 'Store Releases', value: 'Google Play & App Store' },
  { label: 'Architecture', value: 'REST APIs & Redux' },
  { label: 'Full-Stack Foundation', value: 'MERN + MySQL' },
];

export const experiences: Experience[] = [
  {
    id: 'cowberry',
    role: 'React Native Developer',
    company: 'Cowberry Industries Pvt. Ltd.',
    location: 'Surat, India',
    period: 'Jul 2025 – Present',
    current: true,
    projectsMentioned: ['Cowberry E-commerce App', 'Lantern360'],
    responsibilities: [
      'Built, deployed, and maintained cross-platform mobile applications for Android and iOS using React Native, including Cowberry E-commerce App and Lantern360, both published on the App Store and Play Store.',
      'Integrated RESTful APIs and real-time functionality to support core application features and external system connections.',
      'Implemented background services and device permission handling for reliable, continuous app operation.',
      'Optimized application performance and UI responsiveness across a wide range of devices.',
      'Resolved production issues and delivered feature enhancements and bug fixes.',
      'Prepared and managed Android release builds (APK/AAB) and iOS builds via TestFlight and the App Store for production releases.',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'REST APIs',
      'Redux',
      'Background Services',
      'Device Permissions',
      'APK/AAB Builds',
      'Xcode & TestFlight',
      'Apple App Store',
      'Google Play Store',
    ],
  },
  {
    id: 'qaswa',
    role: 'React Native Developer',
    company: 'Qaswa Technologies',
    location: 'Nagpur, India',
    period: 'Sep 2024 – Jul 2025',
    current: false,
    projectsMentioned: ['Anti-Theft', 'Brand-Boost', 'Islamic Ishtehar', 'Koding Street'],
    responsibilities: [
      'Built and deployed multiple React Native applications for Android and iOS, including Anti-Theft, Brand-Boost, Islamic Ishtehar, and Koding Street.',
      'Integrated native device features and third-party libraries to extend application functionality.',
      'Designed reusable components and scalable data/UI structures to support long-term maintainability.',
      'Worked with REST APIs, background tasks, and push notifications across multiple applications.',
      'Collaborated within Agile development teams to deliver features on schedule.',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'REST APIs',
      'Redux',
      'Push Notifications',
      'Native Device Features',
      'Background Tasks',
      'Agile/Scrum',
    ],
  },
];

export const projects: Project[] = [
 {
  id: 'cowberry-ecommerce',
  title: 'Cowberry E-commerce App',
  subtitle: 'Live Production Cross-Platform Shopping App',
  category: 'Mobile E-Commerce',
  storeUrl: 'https://play.google.com/store/apps/details?id=cowberry.world.ecommerce&hl=en_IN',
  storeLabel: 'Google Play Store',
  
  description:
    'Developed a React Native e-commerce mobile application live in production, managing the complete lifecycle from UI development to store publication. Handled Android deployment to Google Play Store and iOS deployment through TestFlight and the Apple App Store.',
  technologies: [
    'React Native',
    'JavaScript',
    'REST APIs',
    'Redux',
    'Google Play Store',
    'Apple App Store',
    'TestFlight',
    'APK/AAB',
  ],
  role: [
    'Architected cross-platform e-commerce flows with React Native.',
    'Integrated backend REST APIs for product catalogs, user accounts, and checkout workflows.',
    'Managed store release pipelines: APK/AAB for Google Play Store and Xcode/TestFlight for Apple App Store.',
    'Ensured smooth 60fps animations and resilient error handling for production stability.',
  ],
  liveStatus: 'production',
  featured: true,
  publishedOn: ['Google Play Store', 'Apple App Store'],
  highlights: [
    'Live Production Application',
    'Dual Store Release (Play Store & App Store)',
    'End-to-end REST API & Cart Integration',
    'Background services and device permissions',
  ],
},
  {
    id: 'lantern360',
    title: 'Lantern360',
    subtitle: 'Enterprise Employee Management Application',
    category: 'Enterprise Mobility',
     storeUrl: 'https://play.google.com/store/apps/details?id=com.cowberry.lantern360&hl=en_IN',
  storeLabel: 'Google Play Store',
    description:
      'Built an enterprise employee management mobile application featuring real-time tracking, attendance and leave management, task assignment workflows, and in-app chat. Published and actively used on both the App Store and Google Play Store.',
    technologies: [
      'React Native',
      'JavaScript',
      'Real-Time Tracking',
      'REST APIs',
      'In-App Chat',
      'Background Services',
      'Google Play Store',
      'Apple App Store',
    ],
    role: [
      'Implemented real-time geolocation tracking and background location services.',
      'Built responsive modules for attendance, leave requests, and task assignment.',
      'Integrated real-time in-app chat communications.',
      'Managed release builds for Android and iOS distribution.',
    ],
    liveStatus: 'production',
    featured: false,
    publishedOn: ['Google Play Store', 'Apple App Store'],
    highlights: [
      'Published on App Store & Play Store',
      'Real-Time Geolocation & Tracking',
      'Attendance & Leave Lifecycle',
      'Secure In-App Chat',
    ],
  },
  {
    id: 'koding-street',
    title: 'Koding Street',
    subtitle: 'Full-Stack Institute Learning Platform',
    category: 'EdTech & Full-Stack',
    
    description:
      'Engineered a comprehensive full-stack learning platform for an educational institute, incorporating a management admin panel, backend REST APIs powered by Node.js, Express, and MySQL, and a student-facing mobile app with role-based access control.',
    technologies: [
      'React Native',
      'MERN Stack',
      'Node.js',
      'Express.js',
      'MySQL',
      'REST APIs',
      'Role-Based Access Control',
    ],
    role: [
      'Designed and executed backend relational database schema in MySQL.',
      'Constructed RESTful API endpoints using Node.js and Express.',
      'Built intuitive student mobile application in React Native.',
      'Implemented secure authentication and role-based access control.',
    ],
    liveStatus: 'completed',
    featured: false,
    highlights: [
      'Full-Stack MERN + MySQL Architecture',
      'Admin Panel & Student Mobile App',
      'Role-Based Access Control (RBAC)',
      'Custom RESTful API Services',
    ],
  },
  {
    id: 'anti-theft',
    title: 'Anti-Theft App',
    subtitle: 'Mobile Device Security & Sensor Detection',
    category: 'Security & Native Device',
    description:
      'Delivered a mobile safety application with hardware sensor-based intrusion detection, native device triggers, and centralized Redux state management to guard devices against unauthorized movement.',
    technologies: [
      'React Native',
      'Hardware Sensors',
      'Native Device Features',
      'Redux',
      'Background Tasks',
    ],
    role: [
      'Interfaced with device hardware sensors (motion and orientation).',
      'Configured background monitoring and security alarms.',
      'Engineered predictable state transitions utilizing Redux.',
    ],
    liveStatus: 'completed',
    featured: false,
    highlights: [
      'Sensor-based motion detection',
      'Native hardware integration',
      'Centralized Redux state machine',
    ],
  },
  {
    id: 'brand-boost',
    title: 'Brand-Boost',
    subtitle: 'Social Media Content Creation Mobile Tool',
    category: 'Creative Tools',
     storeUrl: 'https://play.google.com/store/apps/details?id=com.qaswa.brandboostindia&hl=en_IN',
  storeLabel: 'Google Play Store',
   publishedOn: ['Google Play Store', 'Apple App Store'],
    description:
      'Built a social media content-creation mobile application featuring dynamic, highly reusable UI components designed for intuitive user customization and speedy media generation.',
    technologies: ['React Native', 'JavaScript', 'Reusable UI Components', 'State Management'],
    role: [
      'Engineered a suite of dynamic UI components with smooth interactive layouts.',
      'Optimized rendering performance for complex image and media previews.',
    ],
    liveStatus: 'completed',
    featured: false,
    highlights: [
      'Dynamic, modular UI component system',
      'Smooth client-side rendering',
      'Fluid mobile user interaction',
    ],
  },
  {
    id: 'islamic-ishtehar',
    title: 'Islamic Ishtehar',
    subtitle: 'Community Communication & Announcements App',
    category: 'Community Mobile App',
     storeUrl: 'https://play.google.com/store/apps/details?id=com.grintech.islamicishtehar&hl=en_IN',
  storeLabel: 'Google Play Store',
     publishedOn: ['Google Play Store', 'Apple App Store'],
    description:
      'Developed and delivered a React Native mobile application providing announcements and community notices with reusable UI components and seamless REST API integration.',
    technologies: ['React Native', 'JavaScript', 'REST APIs', 'Reusable Components'],
    role: [
      'Structured mobile view architecture and API service layer.',
      'Implemented caching and offline-first state handling for notices.',
    ],
    liveStatus: 'completed',
    featured: false,
    highlights: [
      'Fast REST API integration',
      'Clean modular UI structure',
      'Reliable community notification flow',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    description:
      'Core specialization in building robust, production-grade applications for iOS & Android.',
    iconName: 'Smartphone',
    skills: [
      'React Native',
      'Cross-Platform iOS & Android',
      'Push Notifications',
      'Background Services',
      'Device Permissions & Native Features',
    ],
  },
  {
    title: 'Languages & Frameworks',
    description: 'Modern frontend, mobile, and backend JavaScript/TypeScript ecosystems.',
    iconName: 'Code',
    skills: [
      'JavaScript',
      'React Native',
      'ReactJS',
      'Node.js',
      'Express.js',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Deployment & Release Management',
    description:
      'Hands-on experience delivering mobile apps to production stores and beta pipelines.',
    iconName: 'Rocket',
    skills: [
      'Android Release Builds (APK / AAB)',
      'Google Play Store Deployment',
      'iOS Builds via Xcode',
      'TestFlight Beta Distribution',
      'Apple App Store Production Releases',
    ],
  },
  {
    title: 'State Management & UI',
    description: 'Creating predictable state flows and responsive, polished interfaces.',
    iconName: 'Layers',
    skills: ['Redux', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    description: 'Relational and NoSQL data stores supporting scalable client apps.',
    iconName: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    description: 'Development, debugging, cloud infrastructure, and design tooling.',
    iconName: 'Wrench',
    skills: ['AWS', 'Git / GitHub', 'VS Code', 'Postman', 'Figma', 'Canva'],
  },
  {
    title: 'Methodologies & Collaboration',
    description: 'Production-tested engineering habits within cross-functional teams.',
    iconName: 'Users',
    skills: [
      'Agile / Scrum Delivery',
      'Cross-Functional Team Collaboration',
      'Code Reviews',
      'Technical Documentation',
    ],
  },
];

export const salesforceLearning = {
  badge: 'Secondary Specialization / Fresher Level',
  intro:
    'Entry-level (fresher) Salesforce learner with foundational knowledge of Salesforce Administration and Development (Apex, SOQL, LWC, Flows) gained through Trailhead and self-study in a Developer Org, applying a strong software engineering mindset to the Salesforce ecosystem.',
  categories: [
    {
      title: 'Salesforce Administration',
      iconName: 'ShieldCheck',
      items: [
        'Object & Field Configuration',
        'Data Modeling (Lookup, Master-Detail)',
        'Security & Sharing Rules',
        'Reports & Dashboards',
        'User Management & Profiles',
        'Salesforce Setup & Customization',
      ],
    },
    {
      title: 'Process Automation',
      iconName: 'Cpu',
      items: [
        'Flow Builder (Record-Triggered, Screen, Autolaunched)',
        'Process Automation',
        'Validation Rules',
      ],
    },
    {
      title: 'Development (Apex & Queries)',
      iconName: 'Terminal',
      items: [
        'Apex Classes & Triggers',
        'SOQL & SOSL Queries',
        'Asynchronous Apex Fundamentals',
        'Custom Business Logic Handling',
      ],
    },
    {
      title: 'Front-End (Lightning)',
      iconName: 'Sparkles',
      items: [
        'Lightning Web Components (LWC)',
        'Lightning App Builder',
        'Reusable Record Displays & Forms',
      ],
    },
    {
      title: 'Practice Environment',
      iconName: 'Cloud',
      items: [
        'Salesforce Developer Org',
        'Trailhead Playground',
        'Hands-on Configuration & Coding Practice',
      ],
    },
  ] as SalesforceCategory[],
  projects: [
    {
      title: 'Salesforce CRM Practice Application',
      environment: 'Self-Directed Learning Project (Developer Org)',
      summary:
        'Modeled sample CRM business processes (lead and case management) with custom objects, fields, and relationships.',
      highlights: [
        'Implemented Apex classes and triggers for custom business logic.',
        'Executed SOQL/SOSL queries for data retrieval and record processing.',
        'Built Lightning Web Components (LWC) for record display and interactive data entry.',
        'Automated workflows using Flow Builder and enforced data integrity with validation rules.',
        'Configured Reports, Dashboards, and Sharing/Security Rules for visibility.',
      ],
    },
    {
      title: 'Hospital Management System',
      environment: 'Salesforce Practice Project (Developer Org)',
      summary:
        'Modeled hospital operations with custom objects for patients, doctors, appointments, and billing, along with relationships and validation rules.',
      highlights: [
        'Designed custom relational data schema for hospital entities.',
        'Automated appointment scheduling and status transitions with Flow Builder.',
        'Built tracking reports and visual dashboards for operational insights.',
      ],
    },
    {
      title: 'Delivery Track',
      environment: 'Salesforce Practice Project (Developer Org)',
      summary:
        'Created custom objects and fields to track customer orders, delivery status, and assigned logistics staff through the complete fulfillment lifecycle.',
      highlights: [
        'Automated delivery status updates and notifications with Flow Builder.',
        'Configured data validation rules and staff assignment workflows.',
        'Designed real-time monitoring dashboards and analytical reports.',
      ],
    },
  ] as SalesforceProject[],
};

export const educationList: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Sindhu Mahavidhyalaya College, Nagpur',
    boardOrUniversity: 'Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)',
    year: '2024',
  },
  {
    degree: 'Higher Secondary Certificate (HSC - 12th)',
    institution: 'Anjuman Jr. College, Nagpur',
    boardOrUniversity: 'Maharashtra State Board',
    year: '2018',
  },
  {
    degree: 'Secondary School Certificate (SSC - 10th)',
    institution: 'Qidwai High School, Nagpur',
    boardOrUniversity: 'Maharashtra State Board',
    year: '2016',
  },
];
