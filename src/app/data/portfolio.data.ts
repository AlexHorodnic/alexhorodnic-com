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
  readonly techStack: readonly string[];
  readonly highlights: readonly string[];
  readonly liveUrl: string;
  readonly githubUrl: string;
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
        'A responsive Angular dashboard UI for tracking operational data with clear information hierarchy and maintainable components.',
      preview: 'dashboard',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      highlights: [
        'Reusable metric, chart, and table patterns for production-style interfaces',
        'Responsive layout designed for fast scanning across desktop and mobile',
        'Clear loading, empty, and error-state planning for real application behavior',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/operations-dashboard',
    },
    {
      title: 'SaaS Marketing Site',
      description:
        'A polished customer-facing product frontend focused on responsive layout, SEO structure, and fast page experience.',
      preview: 'marketing',
      techStack: ['Angular', 'SCSS', 'SEO', 'Responsive UI'],
      highlights: [
        'Semantic page structure with recruiter-friendly visual hierarchy',
        'Reusable sections for product content, conversion areas, and contact',
        'Lightweight styling approach with accessible contrast and practical performance',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/saas-marketing-site',
    },
    {
      title: 'Booking UI Prototype',
      description:
        'A frontend booking flow prototype with service selection, responsive form states, and confirmation screens.',
      preview: 'booking',
      techStack: ['Angular', 'TypeScript', 'Forms', 'SCSS'],
      highlights: [
        'Validation-friendly UI structure for common booking interactions',
        'Mobile-first layout patterns for customer-facing workflows',
        'Prepared for REST API integration, analytics events, and production edge cases',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/booking-ui-prototype',
    },
    {
      title: 'Angular Frontend Architecture',
      description:
        'A structured Angular frontend approach for keeping content, UI sections, and styling maintainable over time.',
      preview: 'portfolio',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      highlights: [
        'Typed content model for safer edits and easier long-term maintenance',
        'Semantic HTML structure for search engines, accessibility, and recruiter readability',
        'Lightweight component structure with no unnecessary libraries',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/portfolio',
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
