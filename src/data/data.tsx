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
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
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
        Ich studiere Cloud Applications und Security Engineering im Master an der
        <strong className="text-stone-100"> Technischen Hochschule Ingolstadt </strong>
        und arbeite nebenher als Werkstudent bei <strong className="text-stone-100">DATEV</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Ich verfüge über breite Full-Stack- und DevOps-Erfahrung:
        moderne Web- und App-Entwicklung, skalierbare Backends sowie Entwicklung von Container- und 
        Kubernetes-Umgebungen.
        Ergänzend bringe ich fundiertes Know-how in Testarchitektur, Auth und Monitoring mit.
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
  description: `
    Ich bin Masterstudent im Bereich Cloud Applications und Security Engineering und
    verbinde tiefgehende praktische Erfahrung in Full-Stack Entwicklung mit moderner
    Cloud- und DevOps-Expertise.
    Durch meine Bachelorarbeit zu einem modernen Multi-Tenancy Ansatz zu hochskalierbaren
    Kubernetes-Architekturen, anspruchsvolle Enterprise-Projekte bei BMW und DATEV sowie
    eigenverantwortliche Arbeitsbereiche konnte ich weit über das typische Niveau von
    Absolventen hinausgehen.
    In meiner Selbstständigkeit habe ich vollständige Projekte ohne die Unterstützung von
    Senior-Entwicklern realisiert – von der Konzeption bis zur produktiven Umsetzung – und
    dadurch die Fähigkeit geschärft, auch unter hohem Druck verlässliche und innovative Lösungen
    zu liefern.
    Aktuell erweitere ich mein Profil gezielt im Bereich Cybersecurity, um meine technische
    Breite durch zertifizierte Tiefe zu ergänzen.
  `,
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
        name: 'Express',
        level: 8,
      },
      {
        name: 'Fiber (Go)',
        level: 7,
      },
      {
        name: 'Springboot',
        level: 6,
      },
      {
        name: 'Electron.js',
        level: 5,
      },
      {
        name: 'Quarkus',
        level: 4,
      },
    ],
  },
  {
    name: 'DevOps Praktiken',
    skills: [
      {
        name: 'Projektkonfiguration',
        level: 10,
      },
      {
        name: 'KCP',
        level: 8,
      },
      {
        name: 'TMC',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 8,
      },
      {
        name: 'ArgoCD',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'GitOps',
        level: 7,
      },
      {
        name: 'Podman',
        level: 6,
      },
      {
        name: 'Kustomize',
        level: 6,
      },
      {
        name: 'GitHub Actions',
        level: 6,
      },
      {
        name: 'Terraform',
        level: 5,
      },
      {
        name: 'Helm',
        level: 5,
      },
      {
        name: 'OIDC (Keycloak)',
        level: 5,
      },
            {
        name: 'Prometheus',
        level: 4,
      },
      {
        name: 'Grafana',
        level: 4,
      },
      {
        name: 'Ansible',
        level: 4,
      },
      {
        name: 'Splunk',
        level: 2,
      }
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
        name: 'Go',
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
  },
  {
    name: 'Datenbanken & Storage',
    skills: [
      {
        name: 'Redis',
        level: 7,
      },
      {
        name: 'Valkey',
        level: 7,
      },
      {
        name: 'S3',
        level: 7,
      },
      {
        name: 'MinIO',
        level: 7,
      },
      {
        name: 'PostgreSQL',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'Hadoop',
        level: 4,
      },
      {
        name: 'Spark',
        level: 4,
      },
      {
        name: 'Elasticsearch',
        level: 3,
      }
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
    url: 'https://www.datev.de/web/de/shop/produkt-details/datev-anlagenbuchfuehrung-99290',
    image: portfolioImage7,
  },
  {
    title: 'Echtzeitlagebild der deutschen Internet-Infrastruktur',
    description: `Plattformlösung zur Echtzeit-Visualisierung der deutschen Internet-Infrastruktur mit
    Go-Backend und Next.js-Frontend sowie Keycloak-basierter OIDC-SSO-Lösung inkl. eigenem Auth-Proxy,
    Admin-Dashboard und feingranularem RBAC, mit GitOps basierter CI/CD pipeline mit GitLab CI und ArgoCD auf Kubernetes.`,
    url: 'https://dashboard.univ.leitwert.net/',
    image: portfolioImage8,
  },
  {
    title: 'FocusBoard',
    description: `WIP`,
    url: 'https://focusboard.web-pulse.dev/',
    image: portfolioImage1,
  }
];

/**
 * Resume section 
 */
export const education: TimelineItem[] = [
  {
    date: 'Oktober 2025 - Present',
    location: 'Technische Hochschule Ingolstadt',
    title: 'M. Sc. Cloud Applications und Security Engineering',
    content: <p>
      Im Masterstudium vertiefe ich meine Kenntnisse in Cloud-Architekturen, DevOps und
      IT-Security und verknüpfe diese mit aktueller Forschung und Praxis.
    </p>,
  },
  {
    date: 'Oktober 2021 - September 2025',
    location: 'Technische Hochschule Ingolstadt',
    title: 'B. Sc. Informatik',
    content: <p>
      Mein Bachelorstudium in Informatik (Abschlussnote 2,0) vermittelte mir fundierte Kenntnisse
      in Softwareentwicklung, Algorithmen, Systemarchitekturen und IT-Management.
      Den Schwerpunkt legte ich auf moderne Web- und Cloud-Technologien, die ich in Projekten und
      Praktika praxisnah vertiefen konnte.
      Meine Bachelorarbeit mit der Note 1,3 behandelte die Konzeption, Implementierung und
      Evaluation einer hochskalierbaren Kubernetes-basierten SaaS-Plattform auf Kubernetes
      Control Plane (KCP).
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
        Werkstudent als Fullstack-Entwickler mit Schwerpunkt auf Testarchitektur und
        Cloud-Native-Umgebungen.
        Verantwortlich für die Konzeption und Implementierung einer eigenen mehrschichtigen
        End-to-End-Testarchitektur (Playwright, Pact, Jest) sowie für deren Integration in ein
        modernes CI/CD-Setup.
        Zusätzlich Entwicklung produktiver Container-Images (Podman) inklusive Build-Skripten,
        Umsetzung von OAuth2-Authentifizierung für E2E-Szenarien und Erweiterungen im Backend
        (Spring) und Frontend. Dabei übernehme ich die Rolle eines SDET/Testarchitekten, löse
        Probleme eigenständig und sorge so für die zuverlässige Qualitätssicherung von Software,
        die später von tausenden Kunden produktiv eingesetzt wird.
      </p>
    ),
  },
  {
    date: 'September 2023 - Januar 2024',
    location: 'BMW AG',
    title: 'Studentischer Praktikant',
    content: (
      <p>
        Werkstudent im internationalen Entwicklungsteam (50+ Entwickler) für das
        Kapazitätsmanagement-Tool Kamäleon.
        In fünf Monaten trug ich mit über 35.000 eigenen Codezeilen signifikant zur Weiterentwicklung
        der Anwendung bei. Neben Full-Stack-Aufgaben mit Angular und Payara übernahm ich Verantwortung
        in der Qualitätssicherung (Code Reviews, Defect-Analyse, Einführung von Linting-, Ruleset- und
        SonarQube-Standards) sowie in der Projektstruktur (Branching-Strategie, CI/CD-Migration von
        Jenkins zu GitHub Actions).
        Dabei sammelte ich umfassende Erfahrung in Cloud-Native-Umgebungen und arbeitete eng mit
        internationalen Kollegen in Südafrika und Bulgarien zusammen.
      </p>
    ),
  },
  {
    date: 'Mai 2021 - April 2025',
    location: 'WebPulse Development',
    title: 'Unternehmensinhaber',
    content: (
      <p>
        WebPulse Development (Burger Steven, Linhardt David GbR, ehemals SythIT) ist ein von mir vor
        dem Studium gegründetes Webentwicklungsunternehmen, das ich gemeinsam mit einem Kommilitonen
        betrieben habe.
        Neben der Umsetzung von Projekten für kleine und mittelständische Unternehmen habe ich dort
        insbesondere Erfahrung im Aufbau von Anwendungen from scratch, im Projektmanagement, Ticketing
        und in der Arbeit ohne Sicherheitsnetz gesammelt.
        Die eigenständige Verantwortung unter Zeitdruck hat mich gelehrt, Projekte ganzheitlich zu
        steuern und flexibel das jeweils beste Tool für die Anforderung auszuwählen.
      </p>
    ),
  },
];

export const certifications: TimelineItem[] = [
  {
    date: '2025 (in Arbeit)',
    location: 'ECCouncil',
    title: 'Certified Ethical Hacker (CEHv13)',
    content: (<div></div>),
  }
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
