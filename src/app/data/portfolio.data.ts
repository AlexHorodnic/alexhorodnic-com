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
    eyebrow: 'Available for frontend roles and contract work',
    valueProposition:
      'I build clean, maintainable Angular interfaces with strong attention to UX, performance, and delivery quality.',
    stats: [
      { label: 'Experience', value: '3+ years' },
      { label: 'Main stack', value: 'Angular + TypeScript' },
      { label: 'Location', value: 'Athens, Greece' },
      { label: 'Availability', value: 'Open to interviews' },
    ],
  },
  about: {
    summary:
      'Frontend developer focused on shipping dependable product interfaces for real users. I enjoy turning product requirements and Figma designs into responsive Angular applications that are easy to maintain and practical to extend.',
    strengths: [
      'Angular feature development with standalone components and strict TypeScript',
      'Responsive UI implementation with HTML, CSS, SCSS, and accessibility in mind',
      'API integration, state handling, bug fixing, and pragmatic performance improvements',
    ],
    lookingFor:
      'I am looking for frontend roles, product teams, and agency collaborations where clear communication, code quality, and thoughtful UI execution matter.',
  },
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'HTML',
    'CSS',
    'SCSS',
    'Responsive UI',
    'API integration',
    'Performance optimization',
    'Git',
    'Testing basics',
  ],
  experience: [
    {
      company: 'Product Studio',
      role: 'Frontend Developer',
      dates: '2024 - Present',
      location: 'Remote',
      achievements: [
        'Built Angular dashboard features used by internal operations teams to review customer activity faster.',
        'Improved reusable UI patterns, reducing duplicate component code across several product screens.',
        'Worked closely with backend developers to integrate REST APIs with clear loading, empty, and error states.',
      ],
    },
    {
      company: 'Digital Agency',
      role: 'Junior Frontend Developer',
      dates: '2022 - 2024',
      location: 'Hybrid',
      achievements: [
        'Implemented responsive landing pages and product pages for clients across SaaS and local service businesses.',
        'Helped reduce layout bugs on mobile by standardizing spacing, breakpoints, and component behavior.',
        'Maintained client websites, fixed production issues, and communicated progress clearly with project managers.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Frontend Developer',
      dates: '2021 - 2022',
      location: 'Remote',
      achievements: [
        'Delivered small business websites and UI updates with clear scope, timelines, and handoff notes.',
        'Converted static designs into fast, responsive pages with practical SEO and accessibility improvements.',
      ],
    },
  ],
  projects: [
    {
      title: 'Operations Dashboard',
      description:
        'A responsive Angular dashboard concept for tracking customers, tasks, and key operational metrics.',
      preview: 'dashboard',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      highlights: [
        'Clean component structure with reusable metric and table patterns',
        'Designed for fast scanning by support and operations teams',
        'Includes realistic empty, loading, and error-state planning',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/operations-dashboard',
    },
    {
      title: 'SaaS Marketing Site',
      description:
        'A polished product website layout built for credibility, conversion, and fast mobile performance.',
      preview: 'marketing',
      techStack: ['Angular', 'SCSS', 'Responsive UI'],
      highlights: [
        'Recruiter-friendly visual hierarchy and accessible contrast',
        'Reusable sections for pricing, features, testimonials, and contact',
        'Optimized layout without unnecessary animation or heavy dependencies',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/saas-marketing-site',
    },
    {
      title: 'Booking UI Prototype',
      description:
        'A frontend booking flow prototype with service selection, date choices, and confirmation states.',
      preview: 'booking',
      techStack: ['TypeScript', 'Angular', 'Forms', 'SCSS'],
      highlights: [
        'Clear form structure and validation-friendly layout',
        'Mobile-first interaction patterns for common booking tasks',
        'Prepared for backend API integration and analytics events',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/booking-ui-prototype',
    },
    {
      title: 'Portfolio System',
      description:
        'A personal portfolio architecture that keeps content editable from a single typed data source.',
      preview: 'portfolio',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      highlights: [
        'Strict typed content model for fast updates',
        'Semantic HTML structure for recruiters and search engines',
        'Lightweight design system with focused, maintainable styles',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexhorodnic/portfolio',
    },
  ],
  services: [
    {
      title: 'Frontend bug fixing',
      description: 'Layout issues, broken interactions, TypeScript errors, and UI polish work.',
    },
    {
      title: 'Landing pages',
      description: 'Responsive marketing pages with clean structure, strong hierarchy, and practical SEO.',
    },
    {
      title: 'Angular development',
      description: 'Feature implementation, component refactors, API integration, and maintainable UI flows.',
    },
    {
      title: 'UI implementation',
      description: 'Careful conversion of Figma designs into accessible, production-ready interfaces.',
    },
    {
      title: 'Performance improvements',
      description: 'Focused audits and front-end optimizations that improve perceived speed and usability.',
    },
    {
      title: 'Agency overflow work',
      description: 'Reliable extra frontend capacity for scoped client work and delivery deadlines.',
    },
  ],
  recruiterHighlights: [
    'Reliable communication',
    'Production experience',
    'Clean maintainable code',
    'Fast onboarding',
    'Strong UI attention to detail',
  ],
};
