export const profile = {
  name: 'Zumra Siddique',
  title: 'Flutter Developer',
  location: 'Lahore, Pakistan',
  availability: 'Open to Flutter Developer roles',
  introduction:
    'I design and ship cross-platform Android and iOS apps with Flutter and Dart — focused on clean UI, reliable APIs, and production-ready features.',
  about: [
    'Flutter Developer with 1.5+ years of experience building Android and iOS applications. My work covers Firebase-backed products, Laravel REST API integrations, authentication, local storage, and responsive UI.',
    'I contribute across the full app cycle: implementing features, connecting backends, managing state, and debugging on both platforms. Recent work includes expense tracking, school operations, and restaurant POS applications.',
  ],
  focus: ['Flutter', 'Firebase', 'REST APIs', 'State Management'],
  email: 'zumrasiddique2@gmail.com',
  phone: '+92 321 0618884',
  github: 'https://github.com/zumra20',
  githubHandle: 'zumra20',
  linkedin: 'https://www.linkedin.com/in/zumra-siddique-04344b394',
} as const

export const skillGroups = [
  {
    title: 'Core',
    items: ['Dart', 'Flutter', 'Java (Basic)'],
  },
  {
    title: 'State Management',
    items: ['Provider', 'GetX', 'Riverpod', 'Stacked'],
  },
  {
    title: 'Backend & Storage',
    items: [
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Storage',
      'Hive',
      'Shared Preferences',
    ],
  },
  {
    title: 'Integrations',
    items: [
      'REST APIs',
      'Laravel APIs',
      'Google Sign-In',
      'Apple Sign-In',
      'Push Notifications',
      'Google AdMob',
      'ML Kit OCR',
      'AI API',
    ],
  },
  {
    title: 'Tools',
    items: ['Android Studio', 'VS Code', 'Xcode', 'Git', 'GitHub'],
  },
] as const

export type ExperienceItem = {
  id: string
  role: string
  company?: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Flutter Developer',
    period: 'July 2025 – Present',
    highlights: [
      'Build and maintain cross-platform Android and iOS apps in Flutter and Dart.',
      'Integrate Laravel REST APIs with Firebase Authentication, Cloud Firestore, and Firebase Storage.',
      'Implement Google Sign-In, Apple Sign-In, push notifications, and Google AdMob.',
      'Persist data locally with Hive and Shared Preferences.',
      'Use Provider, GetX, Stacked, and Riverpod depending on project needs.',
      'Ship responsive layouts and resolve performance and platform-specific issues.',
    ],
  },
]

export const education = {
  degree: 'Associate Degree Program (ADP) in Computer Science',
  school: 'The Leads University, Lahore',
  period: '2023 – 2025',
} as const

export type Project = {
  id: string
  name: string
  year: string
  status?: string
  description: string
  technologies: string[]
  images: string[]
  imageAlt: string
  link?: string
  linkLabel?: string
}

export const projects: Project[] = [
  {
    id: 'expense-management-pro',
    name: 'Expense Management Pro',
    year: '2026',
    description:
      'Personal finance app for tracking expenses, budgets, and reports. Built with Flutter and Firebase, including authentication, local storage, Apple Sign-In, notifications, AdMob, ML Kit OCR, and an AI API.',
    technologies: [
      'Flutter',
      'Firebase',
      'Apple Sign-In',
      'Push Notifications',
      'Google AdMob',
      'ML Kit OCR',
      'AI API',
    ],
    images: [
      '/projects/expense/01-dashboard.png',
      '/projects/expense/02-profile.png',
      '/projects/expense/05-transactions.png',
      '/projects/expense/06-edit-profile.png',
      '/projects/expense/07-login.png',
      '/projects/expense/08-budget.png',
      '/projects/expense/03-promo.png',
    ],
    imageAlt: 'Expense Management Pro app screenshots',
    link: 'https://play.google.com/store/apps/details?id=com.smartaisoft.expense.management',
    linkLabel: 'Play Store',
  },
  {
    id: 'school-management',
    name: 'Instivio',
    year: '2025',
    description:
      'School operations app with Admin, Teacher, Parent, and Staff modules. Laravel REST APIs power attendance, homework, exams, fees, profiles, notices, messaging, and online classes.',
    technologies: ['Flutter', 'Laravel REST APIs', 'Firebase', 'Responsive UI'],
    images: [
      '/projects/school/03-dashboard.png',
      '/projects/school/01-attendance.png',
      '/projects/school/05-finance.png',
      '/projects/school/02-contacts.png',
      '/projects/school/04-profile.png',
    ],
    imageAlt: 'Instivio School Management System screenshots',
    link: 'https://play.google.com/store/apps/details?id=com.smartai.instivio',
    linkLabel: 'Play Store',
  },
  {
    id: 'butt-karahi-pos',
    name: 'Butt Karahi POS',
    year: '2026',
    description:
      'Restaurant point-of-sale app covering orders, kitchen display, payments, staff roles, and inventory. Connected to backend APIs with session-based authentication.',
    technologies: ['Flutter', 'REST APIs', 'Session Auth', 'Responsive UI'],
    images: [
      '/projects/pos/08-dashboard.png',
      '/projects/pos/01-payment.png',
      '/projects/pos/04-orders.png',
      '/projects/pos/07-kitchen.png',
      '/projects/pos/06-receipt.png',
      '/projects/pos/02-screen.png',
    ],
    imageAlt: 'Butt Karahi POS app screenshots',
    link: 'https://drive.google.com/file/d/1Nvnzk2y4Hvp7XlwwCpIbVVD2U0e59BnH/view?usp=sharing',
    linkLabel: 'Download APK',
  },
  {
    id: 'adventurequest-ai',
    name: 'AdventureQuest AI',
    year: 'In Progress',
    status: 'In Progress',
    description:
      'Kids adventure app currently in development with Flutter on the client and Python on the backend.',
    technologies: ['Flutter', 'Python'],
    images: [
      '/projects/adventure/01-onboarding.png',
      '/projects/adventure/02-role-select.png',
    ],
    imageAlt: 'AdventureQuest AI app screenshots',
    link: 'https://drive.google.com/file/d/1EMJQjBl48aMqsUpof0Z3A3AR-bytcduS/view?usp=sharing',
    linkLabel: 'Download APK',
  },
  {
    id: 'smart-notes',
    name: 'Smart Notes',
    year: '2025',
    description:
      'Offline notes app with create, read, update, and delete flows, stored locally using Hive.',
    technologies: ['Flutter', 'Hive'],
    images: [
      '/projects/notes/01-list.png',
      '/projects/notes/04-editor.png',
      '/projects/notes/02-settings.png',
    ],
    imageAlt: 'Smart Notes app screenshots',
  },
  {
    id: 'medical-app',
    name: 'Medico',
    year: '2025',
    description:
      'Medical application with responsive Flutter UI and REST API integration, including doctor sign-up and secure login flows.',
    technologies: ['Flutter', 'REST APIs', 'Responsive UI'],
    images: [
      '/projects/medico/01-login.png',
      '/projects/medico/02-signup.png',
    ],
    imageAlt: 'Medico medical app screenshots',
    link: 'https://drive.google.com/file/d/1mag-mA9H5Ztr_lwkEyvgNheRVph8-Hhk/view?usp=sharing',
    linkLabel: 'Download APK',
  },
  {
    id: 'style-desk',
    name: 'Style Desk',
    year: '2026',
    description:
      'Barber shop booking app where clients book salon and barber slots. Includes home discovery, messaging, profile management, and an AI Try-On feature for hairstyles.',
    technologies: ['Flutter', 'Responsive UI'],
    images: [
      '/projects/styledesk/01-home.png',
      '/projects/styledesk/02-contacts.png',
      '/projects/styledesk/03-ai-tryon.png',
      '/projects/styledesk/04-profile.png',
    ],
    imageAlt: 'Style Desk barber booking app screenshots',
  },
]
