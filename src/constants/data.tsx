// Import Image
import UDAYA from "@/assets/imgs/logo/udaya.png";
import Cambodia_Scholarship_Center from "@/assets/imgs/logo/cambodia_scholarship_center.png";
import BELTEI from "@/assets/imgs/logo/beltei_international_school.png";
import RUPP from "@/assets/imgs/logo/royal_university_of_phnom_penh.jpg";
import ANT from "@/assets/imgs/logo/ant.png";

//* About Me
export const AboutMeData = [
  "I'm a passionate Frontend Developer with a strong foundation in web technologies and a keen eye for design and usability. I graduated in May 2024 with a Bachelor's degree in Computer Science from the Royal University of Phnom Penh.",
  "Since then, I've been applying my skills to build clean, functional, and engaging web experiences that balance performance and aesthetics. I enjoy turning ideas into intuitive interfaces through modern JavaScript frameworks, responsive design, and best practices in UI/UX.",
  "I'm always eager to learn new technologies, refine my craft, and collaborate with others to create meaningful digital solutions that make a real impact.",
];

//* Work Experience
export const WorkExperienceData = [
  {
    image: UDAYA,
    title: "UDAYA Technology",
    role: "Frontend Developer Probation",
    date: "July 2025 - Oct 2025",
    description: [
      "Completed the development of a fully functional room booking website using React.js, TypeScript, and Chakra UI (v2).",
      "Integrated secure online payment functionality using the ABA Bank API, enabling real-time transaction processing.",
      "Implemented advanced state management and data synchronization with TanStack React Query to improve performance and user experience.",
      "Developed responsive and accessible UI components to ensure consistent performance across devices and screen sizes.",
      "Collaborated closely with backend and QA teams to deliver production-ready features within tight deadlines.",
      "Deployed and maintained the frontend application in production, ensuring bug-free operation and optimal performance.",
    ],
  },
  {
    image: UDAYA,
    title: "UDAYA Technology",
    role: "Frontend Developer Intern",
    date: "Mar 2025 - June 2025",
    description: [
      "Built the frontend for the company's RMS Control Center, an internal management system used for real-time resource monitoring and control.",
      "Developed interfaces by following provided UX/UI design prototypes, ensuring alignment with brand and usability standards.",
      "Implemented data fetching and caching logic using TanStack React Query for efficient communication with backend APIs.",
      "Utilized Chakra UI (Version 2) to design consistent, modular, and responsive UI components.",
      "Collaborated in an agile team environment using Git and GitHub for version control and code review workflows.",
      "Contributed to the project's successful production deployment, ensuring reliability and smooth operation after go-live.",
    ],
  },
  {
    image: Cambodia_Scholarship_Center,
    title: "Cambodia Scholarship Center",
    role: "Web Developer Intern",
    date: "Dec 2024 - Feb 2025",
    description: [
      "Maintained a custom, code-driven CMS (WordPress-like) and published fresh content daily.",
      "Built and updated content templates/components (HTML/JSX), ensuring brand consistency and accessibility.",
      "Performed on-page SEO: meta tags, structured data (JSON-LD), clean URLs, and internal linking.",
      "Fixed UI bugs and layout regressions, verified cross-browser behavior (Chrome, Safari, Firefox, Edge).",
    ],
  },
];

//* Education
export const EducationData = [
  {
    image: RUPP,
    title: "ROYAL UNIVERSITY OF PHNOM PENH",
    role: "Bachelor's Degree in Computer Science",
    date: "2020 - 2024",
  },
  {
    image: ANT,
    title: "ANT Technology Training Center",
    role: "CSS, CSS3 + Bootstrap 5 - Short Course",
    date: "Aug 2023 - Oct 2023",
  },
  {
    image: ANT,
    title: "ANT Technology Training Center",
    role: "HTML, HTML5 - Short Course",
    date: "Feb 2023 - Apr 2023",
  },
  {
    image: BELTEI,
    title: "BELTEI INTERNATIONAL SCHOOL",
    role: "Completed Secondary Education (Grades 6-12)",
    date: "2013 - 2020",
  },
];
