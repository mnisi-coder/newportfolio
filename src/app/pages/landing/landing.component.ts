import { Component, OnInit } from '@angular/core';

type Link = {
  label: string;
  detail: string;
  url: string;
};

type WhyCard = {
  icon: string;
  title: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  accent: string;
  demoUrl: string;
  codeUrl: string;
};

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  details: string[];
};

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  isDarkMode = false;

  readonly contactLinks: Link[] = [
    {
      label: 'LinkedIn',
      detail: 'Professional profile',
      url: 'https://www.linkedin.com/'
    },
    {
      label: 'GitHub',
      detail: 'Code and projects',
      url: 'https://github.com/'
    },
    {
      label: 'Email',
      detail: 'Start a conversation',
      url: 'mailto:charles.mnisi@example.com'
    }
  ];

  readonly whyChooseMe: WhyCard[] = [
    {
      icon: '01',
      title: 'Expertise',
      description: 'I am comfortable moving between cloud support, backend logic, databases, and the Angular screens that sit on top.'
    },
    {
      icon: '02',
      title: 'Problem-Solving Skills',
      description: 'I slow down enough to understand the real issue, then work toward fixes that are simple to explain and maintain.'
    },
    {
      icon: '03',
      title: 'Passion for Learning',
      description: 'I keep learning by building, reading, testing ideas, and improving the projects I already have in motion.'
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'Vendor Lami',
      description: 'A vendor platform for onboarding, roles, service workflows, and database-backed business operations.',
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      accent: '#2563eb',
      demoUrl: '#projects',
      codeUrl: '#projects'
    },
    {
      title: 'Carwash Management System',
      description: 'A management tool for bookings, customers, staff coordination, and cleaner day-to-day operations.',
      tech: ['TypeScript', 'Angular', 'SQL', 'Docker'],
      accent: '#0891b2',
      demoUrl: '#projects',
      codeUrl: '#projects'
    },
    {
      title: 'Property24 Scraper',
      description: 'A scraper project for collecting property listing data and preparing it for structured analysis.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Git'],
      accent: '#16a34a',
      demoUrl: '#projects',
      codeUrl: '#projects'
    },
    {
      title: 'FVP Audit Platform',
      description: 'An audit workflow platform for evidence, reviews, findings, and operational reporting.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      accent: '#7c3aed',
      demoUrl: '#projects',
      codeUrl: '#projects'
    }
  ];

  readonly skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Node.js',
    'Python',
    'Django',
    'Java',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Git'
  ];

  readonly experience: TimelineItem[] = [
    {
      title: 'Cloud Engineer',
      place: 'Amazon Web Services',
      period: '2023 - Present',
      details: ['Cloud support and engineering work across customer environments.', 'Troubleshooting, documentation, and scalable service thinking.']
    },
    {
      title: 'Cloud Associate',
      place: 'Shaper / Digital Academy',
      period: '2022 - 2023',
      details: ['Cloud foundations, infrastructure concepts, and hands-on technical training.', 'Built strong habits around learning, teamwork, and delivery.']
    },
    {
      title: 'Software Developer Intern',
      place: 'ICEP',
      period: 'Internship',
      details: ['Contributed to software development tasks and UI implementation.', 'Practiced agile collaboration, debugging, and clean project delivery.']
    }
  ];

  readonly education: TimelineItem[] = [
    {
      title: 'Computer Science',
      place: 'Tshwane University of Technology',
      period: 'Tertiary Education',
      details: ['Core software engineering, databases, programming, and systems fundamentals.']
    },
    {
      title: 'Matric',
      place: 'High School XYZ',
      period: 'Secondary Education',
      details: ['Completed secondary education with a technical and problem-solving foundation.']
    }
  ];

  private readonly themeStorageKey = 'portfolio-theme';

  ngOnInit(): void {
    if (!this.canUseBrowserStorage()) {
      return;
    }

    const savedTheme = localStorage.getItem(this.themeStorageKey);
    this.isDarkMode = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.canUseBrowserStorage()) {
      localStorage.setItem(this.themeStorageKey, this.isDarkMode ? 'dark' : 'light');
    }
  }

  private canUseBrowserStorage(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
