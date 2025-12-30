// ==============================
// projects.ts
// ==============================

export interface Project {
  id: number;
  title: string;
  category: "web" | "mobile";
  techType?: "react" | "vanilla"; 
  duration: string;
  role: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

import multimartImage from '@/assets/image.png';
import ecomScreenshot from '../assets/Screenshot 2025-11-03 122320.png';
import travel from "../assets/Screenshot 2025-11-03 122926.png";
import dwello from "../assets/dwello.png";
import hosting from "../assets/Screenshot 2025-11-03 124023.png";
import mercation from "../assets/Screenshot 2025-11-04 105301.png";
import umbra from "../assets/Screenshot 2025-11-13 203657.png";
import finzaImg from "../assets/finza.png";
import complaintsImg from "../assets/compliants.png";
export const projects: Project[] = [
  {
    id: 1,
    title: 'Umbra – Comprehensive Visitor Management Platform',
    category: 'web',
    techType: 'react',
    duration: '4 months',
    role: 'Frontend Developer',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Pusher', 'REST API', 'Face Recognition API', 'Fingerprint Scanner API'],
    description: 'A real-time IoT-enabled visitor management platform for university entrepreneurship centers.',
    challenge: 'Needed a secure and scalable platform for managing visitors and events.',
    solution: 'Built interactive frontend with React/TypeScript and real-time dashboards with Pusher.',
    outcome: 'Delivered fully functional system for deployment at Digit Innovation Center.',
    features: ['Real-time visitor tracking', 'Dynamic dashboards', 'Event management', 'Access control', 'Responsive UI/UX'],
    image: umbra,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Key-Work – E-Commerce Website',
    category: 'web',
    techType: 'react',
    duration: '2 weeks',
    role: 'Frontend Developer',
    technologies: ['React.js', 'TypeScript', 'Material-UI', 'Framer Motion', 'Axios', 'React Router', 'LocalStorage'],
    description: 'A modern, fully responsive e-commerce web application.',
    challenge: 'Develop an engaging shopping interface without backend logic.',
    solution: 'Implemented React frontend with Material-UI and Framer Motion.',
    outcome: 'Delivered fully functional prototype demonstrating strong UI design.',
    features: ['Dynamic product listings', 'Cart system', 'Checkout flow', 'Authentication', 'Smooth transitions'],
    image: ecomScreenshot,
    liveUrl: 'https://yumnaataba3.github.io/E-commerce-Final-project',
    githubUrl: 'https://github.com/YumnaAtaba3/E-commerce-Final-project'
  },
  {
    id: 3,
    title: 'Hotel & Travel Booking App',
    category: 'mobile',
    duration: '4 months',
    role: 'Frontend Developer',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'BLoC'],
    description: 'A cross-platform mobile app for hotel and flight bookings.',
    challenge: 'Integrate booking, maps, and secure payments in one app.',
    solution: 'Built frontend using Flutter with BLoC and Firebase integration.',
    outcome: 'Delivered production-ready mobile app with smooth user experience.',
    features: ['Cross-platform app', 'Booking modules', 'Google Maps integration', 'Admin dashboard', 'User reviews'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Mercatino – E-Commerce Web App',
    category: 'web',
    techType: 'vanilla',
    duration: '3 days',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Swiper.js', 'LocalStorage'],
    description: 'A lightweight and responsive e-commerce web app.',
    challenge: 'Design a responsive storefront without backend.',
    solution: 'Implemented frontend using Tailwind CSS and Vanilla JS.',
    outcome: 'Delivered mobile-friendly e-commerce experience.',
    features: ['Responsive shopping', 'Swiper sliders', 'LocalStorage cart', 'Interactive modals', 'Clean Tailwind design'],
    image: mercation,
    liveUrl: 'https://mercatino-nine.vercel.app/',
    githubUrl: 'https://github.com/YumnaAtaba3/Mercatino.git'
  },
  // {
  //   id: 5,
  //   title: 'Multimart – E-Commerce Platform',
  //   category: 'web',
  //   techType: 'react',
  //   duration: '3 weeks',
  //   role: 'Frontend Developer',
  //   technologies: ['React.js', 'Redux Toolkit', 'React Router', 'React Bootstrap'],
  //   description: 'A complete e-commerce frontend platform.',
  //   challenge: 'Create robust shopping experience with real-time updates.',
  //   solution: 'Developed frontend using React and Redux Toolkit.',
  //   outcome: 'Delivered scalable e-commerce interface.',
  //   features: ['Redux cart management', 'Dynamic product pages', 'Real-time pricing', 'Responsive React Bootstrap UI', 'Scalable components'],
  //   image: multimartImage,
  //   liveUrl: 'https://multimart-ecommerce.onrender.com',
  //   githubUrl: ''
  // },
  {
    id: 6,
    title: 'Travel Landing Page',
    category: 'web',
    techType: 'vanilla',
    duration: '2 days',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'Swiper.js', 'JavaScript (ES6+)'],
    description: 'A modern travel landing page with multi-language support.',
    challenge: 'Create a compelling landing page with theme switching.',
    solution: 'Implemented theme toggling and translation using JSON and Vanilla JS.',
    outcome: 'Fully responsive landing page with polished UX.',
    features: ['Light/Dark theme toggle', 'Multi-language support', 'Swiper testimonial slider', 'Bootstrap responsive layout', 'Optimized UX'],
    image: travel,
    liveUrl: 'https://travel-landing-page-test.netlify.app/',
    githubUrl: 'https://github.com/YumnaAtaba3/travel-test.git'
  },
  {
    id: 7,
    title: 'Dwello – Real Estate Landing Page',
    category: 'web',
    techType: 'vanilla',
    duration: '2 days',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'TailwindCSS', 'Swiper.js', 'JavaScript (ES6+)'],
    description: 'A responsive landing page for real estate agencies.',
    challenge: 'Maintain elegant UI consistency across languages.',
    solution: 'Developed with TailwindCSS and Vanilla JS, with bilingual support.',
    outcome: 'Delivered fast and user-friendly frontend.',
    features: ['Multi-language support', 'Tailwind responsive layout', 'Interactive testimonials', 'High-performance UI', 'Clear structure'],
    image: dwello,
    liveUrl: 'https://dwello-landing-page.vercel.app/',
    githubUrl: 'https://github.com/YumnaAtaba3/Dwello-landing-page-'
  },
  // {
  //   id: 8,
  //   title: 'Hosting Company – Landing Page',
  //   category: 'web',
  //   techType: 'vanilla',
  //   duration: '2 days',
  //   role: 'Frontend Developer',
  //   technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript (Vanilla)', 'Swiper.js', 'Bootstrap Icons'],
  //   description: 'A professional landing page for a hosting company.',
  //   challenge: 'High-performance interface with clear pricing visibility.',
  //   solution: 'Built layout with Bootstrap 5 and Vanilla JS for interactivity.',
  //   outcome: 'Responsive, conversion-focused landing page.',
  //   features: ['Autoplay sliders', 'Tabbed pricing', 'Responsive layout', 'Smooth animations', 'Mobile-first optimization'],
  //   image: hosting,
  //   liveUrl: 'https://hosting-company-kappa.vercel.app/',
  //   githubUrl: 'https://github.com/YumnaAtaba3/Hosting-Company.git'
  // },
  {
  id: 9,
  title: "Finza Banking System",
  category: "web",
  techType: "react",
  duration: "1 week",
  role: "UI/UX Designer, Software Architect, Frontend Developer",
  technologies: ["React", "TypeScript", "MySQL", "Design Patterns", "UML", "Figma"],
  description:
    "An advanced banking system designed to implement 6+ software design patterns for a Software Engineering course. Focused on creating a scalable, maintainable banking platform using behavioral and structural design patterns.",
  challenge:
    "Traditional banking systems often become monolithic and difficult to maintain. Needed to demonstrate proper software architecture by implementing design patterns for complex banking operations.",
  solution:
    "Implemented Composite, Observer, Strategy, State, Chain of Responsibility, and Adapter patterns for accounts, transactions, notifications, and external integrations.",
  outcome:
    "Delivered a scalable banking system demonstrating 6+ behavioral and structural design patterns, with full account, transaction, and admin management.",
  features: [
    "Design Patterns Implementation (Composite, Observer, Strategy, State, Chain of Responsibility, Adapter)",
    "Account Management System (multiple account types with hierarchical structures)",
    "Transaction Processing (deposits, withdrawals, transfers, scheduled transactions)",
    "Academic Documentation (UML diagrams, design pattern justifications, test coverage)"
  ],
  image: finzaImg, 
  liveUrl: "#",
  githubUrl: "https://github.com/danasaadeh/advanced-banking-system"
},
{
  id: 10,
  title: "Complaints Management System",
  category: "web",
  techType: "react",
  duration: "2 months",
  role: "Frontend Developer",
  technologies: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Zustand",
    "TanStack Query (React Query)",
    "React Hook Form",
    "Yup",
    "i18next",
    "Axios"
  ],
  description:
    "A modern, scalable complaints management system for government entities, providing end-to-end complaint handling, user management, analytics, and activity tracking with a responsive and accessible UI.",
  challenge:
    "Building a large-scale, role-based system with high performance, multi-language support, and maintainable architecture while handling complex workflows and real-time data updates.",
  solution:
    "Adopted a feature-based architecture with React and TypeScript, leveraged React Query for caching and synchronization, implemented lazy loading, and enforced role-based access control.",
  outcome:
    "Delivered a production-ready complaints management platform with strong performance, clean architecture, and excellent user experience across devices.",
  features: [
    "Complaints lifecycle management (create, assign, track, versioning)",
    "Role-based authentication and protected routes",
    "Statistics dashboard with charts and KPIs",
    "Government units and user management",
    "Activity logs with filtering and export",
    "Multi-language support (English & Arabic)",
    "Dark / Light theme support",
    "Responsive, accessible UI"
  ],
  image: complaintsImg, 
  liveUrl: "#",
  githubUrl: "https://github.com/YumnaAtaba3/complaints-system"
},
// {
//   id: 11,
//   title: "Restaurant Management System",
//   category: "web",
//   techType: "react",
//   duration: "1 month",
//   role: "Frontend Developer",
//   technologies: [
//     "React",
//     "Vite",
//     "JavaScript (ES6+)",
//     "Axios",
//     "React Router",
//     "Tailwind CSS",
//     "REST API"
//   ],
//   description:
//     "A restaurant management web application that allows users to browse menu items, search products, make reservations, and access informational pages such as About and Services.",
//   challenge:
//     "Designing a scalable frontend that integrates multiple features such as item search, reservations, and authentication while maintaining clean code organization.",
//   solution:
//     "Implemented a feature-based React architecture with modular pages, reusable components, and centralized API services using Axios.",
//   outcome:
//     "Delivered a responsive and maintainable restaurant management frontend with clear navigation and seamless API integration.",
//   features: [
//     "Menu items listing and search",
//     "Table reservation system",
//     "User authentication (login)",
//     "About and Services pages",
//     "Reusable components architecture",
//     "Responsive UI for all devices"
//   ],
//   image: "/assets/restaurant-system.png",
//   liveUrl: "#",
//   githubUrl: "#"
// }



];
