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
  {
    id: 5,
    title: 'Multimart – E-Commerce Platform',
    category: 'web',
    techType: 'react',
    duration: '3 weeks',
    role: 'Frontend Developer',
    technologies: ['React.js', 'Redux Toolkit', 'React Router', 'React Bootstrap'],
    description: 'A complete e-commerce frontend platform.',
    challenge: 'Create robust shopping experience with real-time updates.',
    solution: 'Developed frontend using React and Redux Toolkit.',
    outcome: 'Delivered scalable e-commerce interface.',
    features: ['Redux cart management', 'Dynamic product pages', 'Real-time pricing', 'Responsive React Bootstrap UI', 'Scalable components'],
    image: multimartImage,
    liveUrl: 'https://multimart-ecommerce.onrender.com',
    githubUrl: ''
  },
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
  {
    id: 8,
    title: 'Hosting Company – Landing Page',
    category: 'web',
    techType: 'vanilla',
    duration: '2 days',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript (Vanilla)', 'Swiper.js', 'Bootstrap Icons'],
    description: 'A professional landing page for a hosting company.',
    challenge: 'High-performance interface with clear pricing visibility.',
    solution: 'Built layout with Bootstrap 5 and Vanilla JS for interactivity.',
    outcome: 'Responsive, conversion-focused landing page.',
    features: ['Autoplay sliders', 'Tabbed pricing', 'Responsive layout', 'Smooth animations', 'Mobile-first optimization'],
    image: hosting,
    liveUrl: 'https://hosting-company-kappa.vercel.app/',
    githubUrl: 'https://github.com/YumnaAtaba3/Hosting-Company.git'
  }
];
