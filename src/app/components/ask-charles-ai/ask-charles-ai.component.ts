import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AssistantKnowledge = {
  about: string;
  school: string;
  careerFocus: string;
  hobbies: string;
  values: string[];
  personalInterests: string;
  currentlyBuilding: string[];
  askMeAbout: string[];
  funFacts: string[];
  contact: string;
  socialMedia: {
    platform: string;
    handle: string;
    url: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    status: string;
  }[];
  liveProjects: string[];
};

@Component({
  selector: 'app-ask-charles-ai',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ask-charles-ai.component.html',
  styleUrl: './ask-charles-ai.component.css'
})
export class AskCharlesAiComponent {
  isOpen = false;
  question = '';
  response = 'Hi, I am Noma, short for Nomathemba AI. Ask me about Jali, his projects, skills, live apps, or what he enjoys building.';

  readonly suggestedQuestions = [
    'What projects has Jali built?',
    'Tell me about Vendor Lami',
    'What does Jali enjoy building?',
    'What makes Jali different?',
    'Where did Jali study?',
  ];

  readonly knowledge: AssistantKnowledge = {
    about: 'Charles Jali Mnisi is a Cloud Engineer and Backend Developer with experience in AWS, APIs, databases, Angular, Node.js, PostgreSQL, and practical business systems.',
    school: 'Jali started his school journey at Sinqobile Primary School in Soshanguve, continued through high school, and later studied Computer Science at Tshwane University of Technology.',
    careerFocus: 'Jali is focused on Cloud Engineering, Database Administrator, Software Developer, and Data-focused roles.',
    hobbies: 'Jali enjoys building side projects, learning new technologies, solving practical business problems, experimenting with AI tools, and creating useful platforms for real-world users.',
    personalInterests: 'Outside of work and coding, Jali enjoys exploring technology ideas, improving his projects, researching business opportunities, and building things that can solve real problems in communities.',
    values: [
      'Building useful systems, not just beautiful screens',
      'Keeping solutions simple, secure, and easy to understand',
      'Learning continuously',
      'Solving real business problems',
      'Helping local businesses grow through technology'
    ],
    currentlyBuilding: [
      'Vendor Lami - a township business discovery and advertising platform',
      'Carwash Management System - an operations platform for carwash businesses',
      'Portfolio Website - a personal portfolio with an AI assistant',
      'Scraper projects for property, car, and business data collection'
    ],
    askMeAbout: [
      'Cloud engineering',
      'AWS',
      'Backend development',
      'Database design',
      'Angular projects',
      'Node.js APIs',
      'PostgreSQL',
      'Web scraping',
      'Vendor Lami',
      'Carwash Management System',
      'Side projects',
      'Career journey'
    ],
    funFacts: [
      'Jali enjoys turning ideas into real working systems.',
      'He likes building projects that solve practical problems for businesses.',
      'He is interested in AI tools and how they can improve everyday workflows.',
      'He enjoys working with cloud, databases, APIs, and dashboards.',
      'He likes creating platforms that can support local communities and small businesses.'
    ],
    contact: 'Visitors can reach Jali through LinkedIn, GitHub, or the email link on this portfolio. Private personal details are not shared here.',
    socialMedia: [
      {
        platform: 'LinkedIn',
        handle: 'Charles Jali Mnisi',
        url: 'https://www.linkedin.com/in/charles-jali-mnisi-3b1193130',
        description: 'Professional profile, career updates, and work experience.'
      },
      {
        platform: 'GitHub',
        handle: 'Mnisi-coder',
        url: 'https://github.com/Mnisi-coder',
        description: 'Code repositories, projects, and technical work.'
      },
      {
        platform: 'Email',
        handle: 'Email Jali',
        url: 'mailto:charles.mnisi@example.com',
        description: 'Professional contact placeholder.'
      },
      {
        platform: 'Portfolio',
        handle: 'Jali Portfolio',
        url: '#',
        description: 'Personal portfolio with projects, skills, experience, and AI assistant.'
      }
    ],
    skills: [
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
    ],
    projects: [
      {
        title: 'Vendor Lami',
        description: 'a township business discovery and advertising platform with agents, business onboarding, admin dashboards, analytics, ratings, and future events',
        technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
        status: 'in progress'
      },
      {
        title: 'Carwash Management System',
        description: 'a full carwash operations system for tellers, admins, customers, vehicles, loyalty points, expenses, attendance, and dashboards',
        technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
        status: 'in progress'
      },
      {
        title: 'FVP Audit Platform',
        description: 'an audit and data-capture platform with evidence uploads, review workflows, findings, and operational reporting',
        technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'Docker'],
        status: 'in progress'
      },
      {
        title: 'Property24 Scraper',
        description: 'a Playwright scraper for collecting property listing URLs, property details, prices, locations, and Excel exports',
        technologies: ['Node.js', 'Playwright', 'JavaScript', 'Excel'],
        status: 'in progress'
      },
      {
        title: 'Portfolio Website',
        description: 'this Angular portfolio showing Jali’s profile, projects, skills, education, and experience',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        status: 'portfolio'
      }
    ],
    liveProjects: [
      'Studenterb.co.za',
      'Crypto.studenterb.co.za',
      'Koneseti',
      'Retail.flowvisualpatterns.co.za',
      'Portfolio Website'
    ]
  };

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  askSuggestedQuestion(question: string): void {
    this.question = question;
    this.sendQuestion();
  }

  sendQuestion(): void {
    const userQuestion = this.question.trim();

    if (!userQuestion) {
      return;
    }

    // Later, replace this local response with a backend API call so no API key is exposed in Angular.
    this.response = this.getLocalResponse(userQuestion);
    this.question = '';
  }

  private getLocalResponse(question: string): string {
    const normalizedQuestion = question.toLowerCase();

    if (
      normalizedQuestion.includes('social') ||
      normalizedQuestion.includes('linkedin') ||
      normalizedQuestion.includes('github') ||
      normalizedQuestion.includes('email')
    ) {
      return `You can find Jali here: ${this.formatSocialMedia()}`;
    }

    if (normalizedQuestion.includes('contact')) {
      return `${this.knowledge.contact} ${this.formatSocialMedia()}`;
    }

    if (
      normalizedQuestion.includes('school') ||
      normalizedQuestion.includes('education') ||
      normalizedQuestion.includes('study') ||
      normalizedQuestion.includes('background')
    ) {
      return `${this.knowledge.school} ${this.knowledge.careerFocus}`;
    }

    if (
      normalizedQuestion.includes('fun') ||
      normalizedQuestion.includes('hobby') ||
      normalizedQuestion.includes('enjoy') ||
      normalizedQuestion.includes('interest')
    ) {
      return `${this.knowledge.hobbies} Interests include ${this.knowledge.personalInterests} Fun facts: ${this.knowledge.funFacts.slice(0, 3).join(' ')}`;
    }

    if (normalizedQuestion.includes('value')) {
      return `Jali values ${this.formatList(this.knowledge.values)}.`;
    }

    if (
      normalizedQuestion.includes('currently building') ||
      normalizedQuestion.includes('building') ||
      normalizedQuestion.includes('building now') ||
      normalizedQuestion.includes('working on') ||
      normalizedQuestion.includes('current work')
    ) {
      return `Jali is currently building ${this.formatList(this.knowledge.currentlyBuilding)}.`;
    }

    if (normalizedQuestion.includes('ask') || normalizedQuestion.includes('talk about')) {
      return `You can ask Jali about ${this.formatList(this.knowledge.askMeAbout)}.`;
    }

    if (normalizedQuestion.includes('vendor lami')) {
      const vendorLami = this.knowledge.projects.find((project) => project.title === 'Vendor Lami');
      return vendorLami
        ? `Vendor Lami is ${vendorLami.description}. It uses ${vendorLami.technologies.join(', ')} and is currently ${vendorLami.status}.`
        : 'Vendor Lami is a township business discovery and advertising platform Jali is building.';
    }

    if (normalizedQuestion.includes('project')) {
      const featuredProjects = this.knowledge.projects.map((project) => project.title).join(', ');
      return `Jali has built and planned projects across business platforms, carwash systems, scrapers, audit tools, and portfolio work. Examples include ${featuredProjects}.`;
    }

    if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('technolog')) {
      return `Jali works with ${this.knowledge.skills.join(', ')}. His strongest focus areas are Angular, Node.js, PostgreSQL, AWS, APIs, and practical backend systems.`;
    }

    if (normalizedQuestion.includes('fun') || normalizedQuestion.includes('hobby') || normalizedQuestion.includes('enjoy')) {
      return this.knowledge.hobbies;
    }

    if (normalizedQuestion.includes('live')) {
      return `Live or viewable projects include ${this.knowledge.liveProjects.join(', ')}. Some links are placeholders while the portfolio is being connected to final URLs.`;
    }

    if (normalizedQuestion.includes('background') || normalizedQuestion.includes('about')) {
      return `${this.knowledge.about} ${this.knowledge.careerFocus}`;
    }

    if (normalizedQuestion.includes('different')) {
      return 'Jali combines cloud support experience, backend thinking, practical business problem-solving, and a habit of building real projects instead of only learning theory.';
    }

    return 'I can answer questions about Jali’s projects, skills, background, live apps, and what he enjoys building.';
  }

  private formatSocialMedia(): string {
    return this.knowledge.socialMedia
      .map((item) => `${item.platform} (${item.url})`)
      .join(', ');
  }

  private formatList(items: string[]): string {
    if (items.length <= 2) {
      return items.join(' and ');
    }

    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
  }
}
