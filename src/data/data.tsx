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
//import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
 * bold: <strong className="text-stone-100">
 * TODO: resume.pdf
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

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Ich habe einen großen Erfahrungsschatz in der Full-Stack Webentwicklung insbesondere mit Angular, React und Node.js. 
  In meinem Studium durfte ich alle möglichen Technologien und Programmiersprachen kennenlernen. Auch wenn ich am meisten Erfahrung 
  in der Webentwicklung habe, bin ich durchaus in der Lage mich in neue Konzepte und Sprachen schnell einzuarbeiten.`,
  aboutItems: [
    {label: 'Wohnort', text: 'Ingolstadt, Bayern', Icon: MapIcon},
    {label: 'Alter', text: '23', Icon: CalendarIcon},
    {label: 'Nationalität', text: 'Deutsch', Icon: FlagIcon},
    {label: 'Interessen', text: 'Autos, Fitness', Icon: SparklesIcon},
    {label: 'Studium', text: 'Technische Hochschule Ingolstadt', Icon: AcademicCapIcon},
    {label: 'Firma', text: 'WebPulse Development', Icon: BuildingOffice2Icon},
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
        name: 'GitHub Actions',
        level: 6,
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
];

/**
 * Portfolio section
 * TODO
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Coding Challenge Plattform für amplimind',
    description: `Erstellung einer Coding Challenge Plattform für amplimind mit React und Kotlin. `,
    url: 'https://github.com/amplimindcc',
    image: porfolioImage3,
  },
  {
    title: 'Buisness-Intelligence-Tool',
    description: `Standalone Tool zur Generierung und visuellen Aufbereitung betriebswirtschaftlicher Kennzahlen aus CSV Dateien 
    (Kassensystem und Inventursystem) für einen Nachtclub. `,
    url: 'https://github.com/WebStackWizards',
    image: porfolioImage2,
  },
];

/**
 * Resume section 
 * TODO content thi
 */
export const education: TimelineItem[] = [
  {
    date: 'Oktober 2021 - Present',
    location: 'Technische Hochschule Ingolstadt',
    title: 'B. Sc. Informatik',
    content: <p>In meinem Informatikstudium durfte ich die Grundlagen der Informatik erlernen. Darunter: C, Rechnerarchitektur, 
      Mathematische Grundlagen 1&2, Physikalische und Elektrotechnische Grundlagen, Java, Betriebssysteme, Rechnernetze, 
      Algorithmen und Datenstrukturen, Software Engineering, Webtechnologien, Verteilte Systeme, Wissensbasierte Systeme, 
      Datenbanksysteme, Patterns in der Objektorientierten Programmierung, Grundlagen der Theoretischen Informatik,
      Diskrete Mathematik, Computergraphik, Projektmanagement, Funktionale Programmierung mit Haskell, Statistik und Kombinatorik,
      IT-Recht, Grundlagen der BWL, Fortgeschrittene Java Programmierung und Advanced Webtechnologies.
    </p>,
  },
  {
    date: 'September 2020 - Juli 2021',
    location: 'Technische Universität München',
    title: 'B. Sc. Bauingenieurwesen (ohne Abschluss)',
    content: <p>In meinem Bauingenieursstudium habe ich im Modul Bauinformatik mein Talent fürs Programmieren entdeckt.</p>,
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
    date: 'September 2023 - Januar 2024',
    location: 'BMW AG',
    title: 'Studentischer Praktikant',
    content: (
      <p>
        Arbeit an Kamäleon, einem internen Tool für das Kapazitätsmanagement. Full-Stack Entwicklung mit Angular 13 und Payara 5 in der Azure Cloud 
        sowie Migration der CI/CD-Pipeline von Jenkins auf GitHub Actions in einem multinationalen Entwicklerteam.
      </p>
    ),
  },
  {
    date: 'Mai 2021 - Present',
    location: 'WebPulse Development',
    title: 'Unternehmensinhaber',
    content: (
      <p>
        WebPulse Development (ehemals SythIT / Burger Steven, Linhardt David GbR) ist ein kleines Webentwicklungsunternehmen, das von mir mit einem Kommilitonen nebenbei betrieben wird.
        Wir bieten Webentwicklungsdienstleistungen für kleine und mittelständische Unternehmen an und sammeln so wertvolle Praxiserfahrung.
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
