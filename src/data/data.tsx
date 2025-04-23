import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'David Linhardt',
  description: "my CV",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'ich',
  About: 'über mich',
  Contact: 'kontakt',
  Portfolio: 'portfolio',
  Resume: 'CV',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ich bin David Linhardt.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Ich bin Informatikstudent an der
        <strong className="text-stone-100"> Technischen Hochschule Ingolstadt </strong>
        und betreibe nebenbei ein kleines Webentwicklungsunternehmen.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Ich habe viel Erfahrung in der TypeScript Webentwicklung mit React und modernen DevOps Praktiken.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Kontakt',
      primary: false,
    },
  ],
};

const bDay: string = '2002-01-10';
function calculateAge(birthDate: Date): number {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  if (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
const Age: number = calculateAge(new Date(bDay));

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Ich verfüge über einen umfangreichen Erfahrungsschatz in der Full-Stack-Webentwicklung, insbesondere mit Angular, 
  React und Node.js. Während meines Studiums konnte ich eine Vielzahl an Technologien und Programmiersprachen kennenlernen. 
  Obwohl mein Schwerpunkt in der Webentwicklung liegt, zeichne ich mich durch die Fähigkeit aus, mich schnell und effizient in 
  neue Konzepte und Programmiersprachen einzuarbeiten.`,
  aboutItems: [
    {label: 'Wohnort', text: 'Ingolstadt, Bayern', Icon: MapIcon},
    {label: 'Alter', text: Age.toString(), Icon: CalendarIcon},
    {label: 'Nationalität', text: 'Deutsch', Icon: FlagIcon},
    {label: 'Interessen', text: 'Autos, Kraftsport', Icon: SparklesIcon},
    {label: 'Studium', text: 'Technische Hochschule Ingolstadt', Icon: AcademicCapIcon},
    {label: 'Firma', text: 'DATEV eG', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Gesprochene Sprachen',
    skills: [
      {
        name: 'Deutsch (C2)',
        level: 10,
      },
      {
        name: 'English (C1)',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Angular 2+',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Electron.js',
        level: 5,
      },
    ],
  },
  {
    name: 'DevOps Praktiken',
    skills: [
      {
        name: 'Projektkonfiguration',
        level: 9,
      },
      {
        name: 'KCP (Kubernetes Control Plane)',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'GitHub Actions',
        level: 6,
      },
      {
        name: 'Docker',
        level: 4,
      },
    ],
  },
  {
    name: 'Sprachen',
    skills: [
      {
        name: 'TypeScript',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'HTML5',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'MATLAB',
        level: 5,
      },
      {
        name: 'bash/zsh',
        level: 4,
      },
      {
        name: 'Haskell',
        level: 4,
      },
      {
        name: 'Kotlin',
        level: 3,
      },
      {
        name: 'PHP',
        level: 3,
      },
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'CPLEX',
        level: 3,
      },
      {
        name: 'Powershell',
        level: 3,
      },
      {
        name: 'Prolog',
        level: 2,
      },
      {
        name: 'Intel x86 Assembly',
        level: 1,
      },
      {
        name: 'R',
        level: 1,
      },
    ],
  },
  {
    name: 'Testing',
    skills: [
      {
        name: 'Playwright',
        level: 8,
      },
      {
        name: 'JUnit 5',
        level: 6,
      },
      {
        name: 'Jest',
        level: 5,
      },
      {
        name: 'MSW',
        level: 5,
      },
      {
        name: 'Cypress',
        level: 4,
      },
      {
        name: 'Pact',
        level: 3,
      },
    ]
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Coding Challenge Plattform für amplimind',
    description: `Erstellung einer Coding Challenge Plattform für amplimind mit React und Kotlin Springboot. `,
    url: 'https://github.com/amplimindcc',
    image: portfolioImage3,
  },
  {
    title: 'BMW Kamäleon',
    description: `Mitarbeit an der Entwicklung und Optimierung von 'Kamäleon', einem internen Tool für das Kapazitätsmanagement
    bei BMW. Full-Stack-Entwicklung mit Angular 13 und Payara 5 in der Azure Cloud, Migration der CI/CD-Pipeline von Jenkins zu GitHub Actions 
    und Integration von ESLint, EditorConfig und Prettier.`,
    url: 'https://kamaeleon.bmw.com/',
    image: portfolioImage4,
  },
  {
    title: 'Business-Intelligence-Tool',
    description: `Standalone Tool zur Generierung und visuellen Aufbereitung betriebswirtschaftlicher Kennzahlen aus CSV Dateien 
    (Kassensystem und Inventursystem) für einen Gastronomiebetrieb. `,
    url: 'https://github.com/WebStackWizards',
    image: portfolioImage2,
  },
  {
    title: 'DATEV Anlag',
    description: `Arbeit an einem Tool zur Anlagenbuchführung. Full-Stack Entwicklung mit Angular 17 und Springboot
    mit Fokus auf Pact, Jest und Playwright Tests.`,
    url: '#portfolio',
    image: portfolioImage7,
  }
];

/**
 * Resume section 
 */
export const education: TimelineItem[] = [
  {
    date: 'Oktober 2021 - Present',
    location: 'Technische Hochschule Ingolstadt',
    title: 'B. Sc. Informatik',
    content: <p>
      Im Rahmen meines Informatikstudiums konnte ich fundierte Grundlagen der Informatik erlernen und dabei ein breites Spektrum an Themen 
      abdecken. Dazu zählen unter anderem C, Rechnerarchitektur, mathematische Grundlagen, physikalische und elektrotechnische Grundlagen, 
      Java, Betriebssysteme, Rechnernetze, Algorithmen und Datenstrukturen, Software Engineering, Webtechnologien, verteilte Systeme, 
      wissensbasierte Systeme, Datenbanksysteme, Design Patterns in der objektorientierten Programmierung, theoretische Informatik, diskrete 
      Mathematik, Computergraphik, Projektmanagement, funktionale Programmierung mit Haskell, Statistik, Kombinatorik, IT-Recht, 
      betriebswirtschaftliche Grundlagen sowie fortgeschrittene Java-Programmierung und fortgeschrittene Webtechnologien.
    </p>,
  },
  {
    date: 'September 2020 - Juli 2021',
    location: 'Technische Universität München',
    title: 'B. Sc. Bauingenieurwesen (ohne Abschluss)',
    content: <p>
      Während meines Bauingenieurstudiums habe ich im Modul Bauinformatik meine Leidenschaft und mein Talent für das 
      Programmieren entdeckt.
    </p>,
  },
  {
    date: 'August 2012 - Juli 2020',
    location: 'Apian Gymnasium Ingolstadt',
    title: 'Abitur',
    content: <p>Allgemeines Abitur mit Note 2,0</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'März 2025 - Present',
    location: 'DATEV eG',
    title: 'Werkstudent Softwareentwicklung',
    content: (
      <p>
        Werkstudent als Fullstack-Entwickler mit Fokus auf Frontend-Testing: Verantwortlich für Konzeption, Umsetzung und Wartung einer
        skalierbaren Testarchitektur (Pact, Playwright, Unit-Tests) zur Sicherstellung der Softwarequalität in einem modernen Cloud-Native
        CI/CD-Umfeld.
      </p>
    ),
  },
  {
    date: 'September 2023 - Januar 2024',
    location: 'BMW AG',
    title: 'Studentischer Praktikant',
    content: (
      <p>
        Entwicklung und Optimierung von 'Kamäleon', einem internen Tool für das Kapazitätsmanagement. Full-Stack-Entwicklung mit Angular 13 
        und Payara 5 in der Azure Cloud sowie Migration der CI/CD-Pipeline von Jenkins zu GitHub Actions. Zusammenarbeit in einem 
        multinationalen Entwicklerteam für eine effiziente und zukunftsorientierte Softwarelösung.
      </p>
    ),
  },
  {
    date: 'Mai 2021 - April 2025',
    location: 'WebPulse Development',
    title: 'Unternehmensinhaber',
    content: (
      <p>
        WebPulse Development (Burger Steven, Linhardt David GbR, ehemals SythIT) ist ein von mir und einem Kommilitonen gegründetes 
        Webentwicklungsunternehmen, das wir neben dem Studium betrieben. Wir spezialisierten uns auf die Bereitstellung von 
        Webentwicklungsdienstleistungen für kleine und mittelständische Unternehmen und nutzten diese Gelegenheit, um wertvolle Praxiserfahrung 
        in der realen Projektarbeit zu sammeln.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Vitalij Bojatschkin',
      text: 'Das Ergebnis übersteigt das, was ich von einem studentischen Projekt erwartet hätte.',
      image: '',
    },
    {
      name: 'Prof. Dr. Franz Regensburger',
      text: 'Haben Sie nicht diesen genialen Vortrag über das Decorator Pattern gehalten?.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Kontaktieren Sie mich!',
  description: 'Ich bin am besten per E-Mail erreichbar und antworte dort in der Regel am schnellsten.',
  items: [
    {
      type: ContactType.Email,
      text: 'linhardt.david@protonmail.com',
      href: 'mailto:linhardt.david@protonmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ingolstadt, Bayern',
      href: 'https://maps.app.goo.gl/iQTSf9aRpYCrYdJYA',
    },
    {
      type: ContactType.Github,
      text: 'MysterionAutotronic',
      href: 'https://github.com/MysterionAutotronic',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MysterionAutotronic'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/david-linhardt/'},
];
