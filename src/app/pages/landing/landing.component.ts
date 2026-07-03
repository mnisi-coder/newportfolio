import { Component, OnInit } from '@angular/core';
import { AskCharlesAiComponent } from '../../components/ask-charles-ai/ask-charles-ai.component';

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
  technologies: string[];
  category: string;
  status: 'Live' | 'In Progress' | 'Planned' | 'Portfolio';
  previewLink: string;
  codeLink: string;
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
  imports: [AskCharlesAiComponent],
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
      description: 'Township business discovery and advertising platform with agents, business onboarding, admin dashboards, analytics, ratings, and future events.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      category: 'Business Platform',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Carwash Management System',
      description: 'Full carwash operations system for tellers and admins, including customers, vehicles, washes, loyalty points, expenses, attendance, and dashboards.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
      category: 'Operations',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Carwash Finder Public Site',
      description: 'Public carwash discovery platform where users can find carwashes by location, services, ratings, comments, weather suggestions, and future events.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'REST API'],
      category: 'Public Platform',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'FVP Audit Platform',
      description: 'Audit and data-capture platform for auditors, including evidence uploads, review workflows, findings, and operational reporting.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'Docker'],
      category: 'Audit',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Flowing Visual Patterns Website',
      description: 'Corporate website for Flowing Visual Patterns, built to present services, methodology, sectors, insights, and company information.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      category: 'Corporate Site',
      status: 'Live',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Property24 Scraper',
      description: 'Playwright scraper for collecting Property24 listing URLs, property details, prices, locations, and exporting structured data to Excel.',
      technologies: ['Node.js', 'Playwright', 'JavaScript', 'Excel'],
      category: 'Scraper',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Cars.co.za Scraper',
      description: 'Vehicle listing scraper for collecting car data such as make, model, price, mileage, dealer information, and listing URLs.',
      technologies: ['Node.js', 'Playwright', 'JavaScript', 'Excel'],
      category: 'Scraper',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'WeBuyCars Scraper',
      description: 'Vehicle data scraper for collecting listings from WeBuyCars and preparing structured car data for analysis.',
      technologies: ['Node.js', 'Playwright', 'JavaScript'],
      category: 'Scraper',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'AutoTrader Scraper',
      description: 'Vehicle listing scraper for collecting AutoTrader car listings and preparing vehicle market data.',
      technologies: ['Node.js', 'Playwright', 'JavaScript'],
      category: 'Scraper',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'South African Car News Scraper',
      description: 'Planned automated news scraper that checks South African car news and YouTube updates daily, then categorizes updates by pricing, new cars, reviews, and market news.',
      technologies: ['Node.js', 'Playwright', 'YouTube', 'Cron', 'APIs'],
      category: 'Automation',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'KFC Menu Scraper',
      description: 'Scraper project for collecting KFC menu items, prices, categories, and related food data.',
      technologies: ['Node.js', 'JavaScript', 'Web Scraping'],
      category: 'Scraper',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Studenterb.co.za',
      description: 'Online selling platform created for students to buy and sell items.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'Marketplace',
      status: 'Live',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Retail.flowvisualpatterns.co.za',
      description: 'Data-capture platform for auditors with image uploads, structured records, and reporting workflows.',
      technologies: ['Angular', 'Express', 'Node.js', 'PostgreSQL', 'AWS S3'],
      category: 'Audit',
      status: 'Live',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Crypto.studenterb.co.za',
      description: 'Cryptocurrency viewing app for browsing and checking crypto market information.',
      technologies: ['React', 'JavaScript', 'APIs'],
      category: 'Web App',
      status: 'Live',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Koneseti',
      description: 'Personal assistant website built to support helpful tools and user interaction features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'Assistant',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Online Auction',
      description: 'Auction platform concept for listing items, bidding, and managing auction workflows.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      category: 'Concept',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'InsureMe',
      description: 'Insurance-related application concept focused on managing insurance products, users, and service workflows.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      category: 'Concept',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Encryption and Decryption Tool',
      description: 'Tool for encrypting and decrypting text using a frontend interface and backend API.',
      technologies: ['Angular', 'React', 'PHP', 'API'],
      category: 'Tool',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Paw Print Technology Solutions',
      description: 'Branding and business identity project for a software solutions company focused on smart, practical technology.',
      technologies: ['Branding', 'Web Design', 'UI Design'],
      category: 'Branding',
      status: 'Portfolio',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Paw Print Teller',
      description: 'Teller-focused interface for the carwash management system, designed for daily branch operations.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      category: 'Operations',
      status: 'In Progress',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Party With Us',
      description: 'Pipeline idea for a verified nightlife and party guide platform with trusted groups and event discovery.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      category: 'Concept',
      status: 'Planned',
      previewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal Angular portfolio website showing my profile, projects, skills, education, and experience.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      category: 'Portfolio',
      status: 'Portfolio',
      previewLink: '#',
      codeLink: '#'
    }
  ];

  readonly pageSize = 4;
  currentPage = 1;

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

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.pageSize);
  }

  get paginatedProjects(): Project[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.currentPage = page;
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

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
