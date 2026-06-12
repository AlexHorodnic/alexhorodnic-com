export interface PortfolioLink {
  readonly label: string;
  readonly url: string;
}

export interface PortfolioStat {
  readonly label: string;
  readonly value: string;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly dates: string;
  readonly location: string;
  readonly achievements: readonly string[];
}

export interface ProjectItem {
  readonly title: string;
  readonly description: string;
  readonly preview: 'dashboard' | 'marketing' | 'booking' | 'portfolio';
  readonly previewImages?: readonly {
    readonly src: string;
    readonly alt: string;
  }[];
  readonly techStack: readonly string[];
  readonly highlights: readonly string[];
  readonly liveUrl: string;
  readonly liveLabel?: string;
  readonly githubUrl: string;
  readonly githubLabel?: string;
}

export interface ServiceItem {
  readonly title: string;
  readonly description: string;
  readonly icon: 'tool' | 'layout' | 'code' | 'ui' | 'speed' | 'agency';
}

export interface PortfolioData {
  readonly person: {
    readonly name: string;
    readonly title: string;
    readonly location: string;
    readonly email: string;
    readonly linkedinUrl: string;
    readonly githubUrl: string;
    readonly cvUrl: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly valueProposition: string;
    readonly stats: readonly PortfolioStat[];
  };
  readonly about: {
    readonly summary: string;
    readonly strengths: readonly string[];
    readonly lookingFor: string;
  };
  readonly skills: readonly string[];
  readonly supportingSkills: readonly string[];
  readonly backendExposure: readonly string[];
  readonly experience: readonly ExperienceItem[];
  readonly projects: readonly ProjectItem[];
  readonly services: readonly ServiceItem[];
  readonly recruiterHighlights: readonly string[];
}

export const portfolioData: PortfolioData = {
  person: {
    name: 'Alex Horodnic',
    title: 'Frontend Developer',
    location: 'Athens, Greece',
    email: 'alex@alexhorodnic.com',
    linkedinUrl: 'https://www.linkedin.com/in/alex-horodnic/',
    githubUrl: 'https://github.com/alexhorodnic',
    cvUrl: '/Alex-Horodnic-CV.pdf',
  },
  hero: {
    eyebrow: 'Frontend Developer',
    valueProposition:
      'I build responsive, maintainable Angular applications with strong attention to UI quality, SEO, performance, and production reliability.',
    stats: [
      { label: 'Experience', value: 'Production Experience' },
      { label: 'Main stack', value: 'Angular + TypeScript' },
      { label: 'Location', value: 'Athens, Greece' },
      { label: 'Availability', value: 'Open to interviews' },
    ],
  },
  about: {
    summary:
      'Frontend Developer with experience building responsive Angular applications and customer-facing digital products using TypeScript, JavaScript, HTML, and CSS. Currently working at Public Group, contributing to frontend development, SEO optimization, performance improvements, and production-level applications.',
    strengths: [
      'Building maintainable Angular interfaces with TypeScript, reusable components, and practical frontend architecture',
      'Implementing responsive UI from product requirements and design input with attention to accessibility and detail',
      'Collaborating with design, QA, product, and development teams to deliver production-ready customer-facing features',
    ],
    lookingFor:
      'I am looking for frontend-focused roles where Angular, responsive UI, production quality, and maintainable frontend development are valued.',
  },
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS / SCSS',
    'Responsive UI',
    'SEO Optimization',
    'REST APIs',
    'Performance Optimization',
    'Accessibility',
    'Git',
    'Jira',
    'Figma',
  ],
  supportingSkills: ['RxJS', 'React', 'Docker', 'Google Analytics', 'Google Tag Manager', 'Bitbucket'],
  backendExposure: ['Java', 'Spring Boot', 'Oracle', 'MariaDB', 'Oracle ATG'],
  experience: [
    {
      company: 'Public Group',
      role: 'Frontend Developer',
      dates: 'July 2022 - Present',
      location: 'Athens, Greece',
      achievements: [
        'Develop and maintain customer-facing Angular applications used in production environments.',
        'Contribute to frontend modernization, responsive UI improvements, and production issue resolution.',
        'Support SEO optimization and frontend performance improvements across digital products.',
        'Collaborate with product, design, QA, and development teams in agile workflows using Git, Jira, and Bitbucket.',
      ],
    },
    {
      company: 'Western Union',
      role: 'Customer & Technical Support Associate',
      dates: 'April 2021 - 2022',
      location: 'Athens, Greece',
      achievements: [
        'Supported customers and agents across Europe with transaction-related inquiries, account verification, and technical support issues.',
        'Handled documentation verification and escalated complex cases through Salesforce CRM to appropriate internal departments.',
        'Assisted with troubleshooting transaction workflows and resolving customer issues in a fast-paced international environment.',
        'Maintained strong communication and problem-solving standards while working across international support operations.',
      ],
    },
  ],
  projects: [
    {
      title: 'Operations Dashboard',
      description:
        'Responsive Angular SaaS dashboard focused on workflow management, operational analytics, scalable component architecture, and polished enterprise-grade UI interactions.',
      preview: 'dashboard',
      previewImages: [
        {
          src: '/featured-projects/operations-dashboard/overview.png',
          alt: 'Operations Dashboard overview screenshot',
        },
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular CDK', 'Responsive UI'],
      highlights: [
        'Built enterprise-style workflow management experience with interactive kanban operations board',
        'Designed responsive multi-device dashboard architecture optimized for desktop and mobile workflows',
        'Developed reusable Angular component system for analytics, task management, and operational monitoring',
        'Implemented advanced UI states including drag-and-drop interactions, task activity flows, blockers, and contextual detail drawers',
        'Crafted premium dark-theme SaaS interface with semantic color systems, accessibility considerations, and polished microinteractions',
      ],
      liveUrl: 'https://operations.alexhorodnic.com',
      liveLabel: 'Open Dashboard',
      githubUrl: 'https://github.com/alexhorodnic/operations-dashboard',
      githubLabel: 'View Source',
    },
    {
      title: 'Vertex Storefront',
      description:
        'Premium Angular ecommerce storefront and checkout experience focused on responsive UI architecture, reusable component systems, polished mobile-first interactions, and production-style frontend UX.',
      preview: 'marketing',
      previewImages: [
        {
          src: '/featured-projects/vertex-storefront/overview.png',
          alt: 'Vertex Storefront ecommerce homepage screenshot',
        },
      ],
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Responsive UI', 'Checkout UX', 'Component Architecture'],
      highlights: [
        'Built responsive ecommerce storefront with polished mobile-first checkout experience',
        'Implemented multi-step checkout flow with validation, local persistence, and animated UI states',
        'Designed premium cart interactions, order summaries, and responsive product browsing flows',
        'Crafted reusable Angular standalone component architecture with scalable frontend patterns',
        'Focused heavily on responsive spacing, accessibility, UI consistency, and modern ecommerce UX polish',
      ],
      liveUrl: 'https://vertex-storefront.alexhorodnic.com/',
      liveLabel: 'Live Storefront',
      githubUrl: 'https://github.com/AlexHorodnic/vertex-storefront',
      githubLabel: 'View Source',
    },
  ],
  services: [
    {
      title: 'Frontend debugging',
      description: 'Layout issues, broken interactions, responsive bugs, TypeScript errors, and UI polish.',
      icon: 'tool',
    },
    {
      title: 'Landing pages',
      description: 'Responsive marketing and product pages with clean structure, strong hierarchy, and practical SEO.',
      icon: 'layout',
    },
    {
      title: 'Angular applications',
      description: 'Feature implementation, component refactors, REST API integration, and maintainable UI flows.',
      icon: 'code',
    },
    {
      title: 'UI implementation',
      description: 'Careful conversion of Figma designs and product requirements into production-ready interfaces.',
      icon: 'ui',
    },
    {
      title: 'Frontend performance',
      description: 'Focused frontend improvements for perceived speed, SEO quality, and user experience.',
      icon: 'speed',
    },
    {
      title: 'Interface polishing',
      description: 'Refined spacing, states, accessibility details, and visual consistency for existing interfaces.',
      icon: 'agency',
    },
  ],
  recruiterHighlights: [
    'Production Angular applications',
    'Responsive UI implementation',
    'Component-driven frontend systems',
    'SEO & frontend performance',
    'Production-ready Angular workflows',
  ],
};
