 export interface Project {
  id: number;
  title: string;
  category: "web" | "mobile";
  duration: string;
  role: string;
  technologies: string[];
  description: string;
  features: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

import multimartImage from '@/assets/image.png';
import ecomScreenshot from '../assets/Screenshot 2025-11-03 122320.png';
import travel from "../assets/Screenshot 2025-11-03 122926.png"
import dwello from "../assets/dwello.png"
import hosting from "../assets/Screenshot 2025-11-03 124023.png"
import mercation from "../assets/Screenshot 2025-11-04 105301.png"

 export const projects: Project[] = [

   {
    id: 1,
    title: 'Key-Work E-Commerce Website',
    category: 'web',
    duration: '2 weeks',
    role: 'Frontend Developer',
    technologies: ['React.js', 'TypeScript', 'Material-UI', 'Framer Motion', 'Axios', 'React Router', 'LocalStorage'],
    description: 'A modern frontend-only e-commerce website simulating a real online shopping experience. Built with React, TypeScript, and Material-UI, featuring responsive design, smooth animations, and a fully functional cart and checkout flow.',
    features: [
      'Home page with featured categories, promotions, and popular products',
      'Product list with filters, sorting, and pagination',
      'Product details page with gallery, stock status, and add-to-cart',
      'Shopping cart with add, update, remove, and localStorage persistence',
      'Checkout flow with address entry, order review, and mock confirmation',
      'Authentication with login/register and route protection',
      'Search modal with keyboard shortcuts and arrow navigation',
      'Coupons system for discounts and free shipping',
      'Responsive design for mobile, tablet, and desktop',
      'Smooth animations with Framer Motion for pages and UI elements'
    ],
    image: ecomScreenshot,
    liveUrl: 'https://yumnaataba3.github.io/E-commerce-Final-project',
    githubUrl: 'https://github.com/YumnaAtaba3/E-commerce-Final-project'
  },
{ id: 2, title: 'Hotel & Travel Booking App', category: 'mobile', duration: '4 months', role: 'Frontend Developer', technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'BLoC'], description: 'Built a cross-platform Android/iOS app for hotel and flight bookings. Developed an admin dashboard, integrated Google Maps, secure payments, and user reviews.', features: [ 'Cross-platform mobile application', 'Hotel and flight booking system', 'Admin dashboard for partners', 'Google Maps integration', 'Secure payment processing', 'User reviews and ratings' ], image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', liveUrl: '#', githubUrl: '#' }, { id: 3, title: 'Weather App', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['React.js', 'REST API', 'Tailwind CSS'], description: 'Developed a multi-language weather app with live data from OpenWeather API. Delivered a responsive UI supporting English and Arabic.', features: [ 'Live weather data integration', 'Multi-language support (English/Arabic)', 'Responsive design for all devices', 'Modern and intuitive UI', 'Location-based weather forecasts' ], image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop', liveUrl: 'https://profound-jelly-5292c6.netlify.app/', githubUrl: '#' },
 { id: 4, title: 'E-Commerce Audio Store', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'LocalStorage'], description: 'An interactive front-end e-commerce web app for selling headphones, earphones, and earbuds. Built using HTML, CSS, and Vanilla JavaScript with a fully functional shopping cart, product filters, sliders, and modal product details.', features: [ 'Hero slider with auto-rotating images and clickable dots', 'Product filtering and real-time search functionality', 'Featured products slider with active dot navigation', 'Fully functional shopping cart with localStorage persistence', 'Product modal with detailed information and add to cart', 'Responsive layout for mobile-friendly design' ], image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop', liveUrl: 'https://x-beat.netlify.app/', githubUrl: 'https://github.com/YumnaAtaba3/E-commerce-app1' }, { id: 5, title: 'Todo List App', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['React.js', 'Hooks'], description: 'Created a task management app with features for adding, editing, filtering, and deleting tasks. Used React Hooks for state management.', features: [ 'Task creation and management', 'Filtering and sorting options', 'Local storage persistence', 'Clean and minimal UI', 'React Hooks implementation' ], image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop', liveUrl: 'https://zingy-biscotti-9f0021.netlify.app/', githubUrl: '#' }, { id: 6, title: 'Umbra – Comprehensive Visitor Management System', category: 'web', duration: '4 months', role: 'Frontend Developer', technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Pusher', 'REST API', 'Face Recognition API', 'Fingerprint Scanner API'], description: 'Advanced visitor management platform for entrepreneurship hubs with real-time notifications, biometric verification, and comprehensive reporting system.', features: [ 'Complete visitor lifecycle management with filtering and search', 'Real-time check-in/check-out tracking with daily monitoring', 'Event management with attendee handling and email notifications', 'Comprehensive reporting system with export capabilities', 'User and area management with security level controls', 'Security override system with temporary/permanent access', 'Biometric services: face recognition and fingerprint verification', 'Real-time notifications via Pusher integration', 'Public visitor registration portal', 'Blacklist management and visitor status tracking' ], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop', liveUrl: '#', githubUrl: '#' } ,
  // {
  //   id: 7,
  //   title: 'Cezerin Ecommerce Platform',
  //   category: 'web',
  //   duration: 'Ongoing',
  //   role: 'Full Stack Developer',
  //   technologies: ['Node.js', 'React.js', 'Redux', 'Express.js', 'MongoDB', 'Babel', 'Webpack'],
  //   description: 'Cezerin is a React and Node.js based eCommerce Progressive Web App, providing a complete online store solution including backend, frontend, dashboard, and client API.',
  //   features: [
  //     'Cezerin API - Backend REST API',
  //     'Cezerin Store - Frontend SPA with server-side rendering',
  //     'Cezerin Admin - Dashboard with JWT authentication',
  //     'Cezerin Client - JavaScript client for API',
  //     'SEO friendly with Google Analytics ecommerce tracking',
  //     'Highly customizable themes and configuration',
  //     'Docker and deployment support for DigitalOcean'
  //   ],
  //   image: 'https://chost.ansiglobal.com/img/cezerin-plusha-theme.png',
  //   liveUrl: 'https://plusha.demo.chost.ansiglobal.com',
  //   githubUrl: ''
  // },
  {
    id: 8,
    title: 'Multimart Ecommerce Platform',
    category: 'web',
    duration: '3 weeks',
    role: 'Frontend Developer',
    technologies: ['React.js', 'Redux Toolkit', 'React Router', 'React Bootstrap'],
    description: 'A responsive and fully functional e-commerce website with a beautiful UI, shopping cart, product detail pages, and quantity management.',
    features: [
      'Responsive and mobile-friendly UI',
      'Add items to cart and adjust quantities directly',
      'View total price in cart dynamically',
      'Product detail pages with complete information',
      'State management using Redux Toolkit',
      'Live demo available online'
    ],
    image: multimartImage,
    liveUrl: 'https://multimart-ecommerce.onrender.com',
    githubUrl: ''
  },
  {
  id: 9,
  title: 'Travel Landing Page',
  category: 'web',
  duration: '2 days',
  role: 'Frontend Developer',
  technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'Swiper.js', 'JavaScript (ES6+)'],
  description: 'A modern, responsive travel landing page designed for tourism agencies and travel platforms. Features multi-language support, light/dark themes, interactive testimonials, and a clean Bootstrap-based layout.',
  features: [
    'Responsive travel design optimized for all devices',
    'Multi-language support (English & Arabic) using translations.json',
    'Light/Dark theme toggle saved in localStorage',
    'Interactive testimonials slider using Swiper.js (vertical, autoplay, navigation)',
    'Bootstrap 5.3 components: responsive header, mobile menu (offcanvas), buttons',
    'Subscribe section with dynamic placeholder translation',
    'Structured components: Header, Hero, Categories, Booking, Testimonials, Footer'
  ],
  image: travel,
  liveUrl: 'https://travel-landing-page-test.netlify.app/',
  githubUrl: 'https://github.com/YumnaAtaba3/travel-test.git'
},{
  id: 10,
  title: 'Dwello Landing Page',
  category: 'web',
  duration: '2 days',
  role: 'Frontend Developer',
  technologies: ['HTML5', 'TailwindCSS', 'Swiper.js', 'JavaScript (ES6+)'],
  description: 'A modern, responsive real estate landing page designed for property platforms and agencies. Features multi-language support, interactive testimonials, and a fully responsive TailwindCSS layout.',
  features: [
    'Beautiful real estate design optimized for all devices',
    'Multi-language support (English & Arabic) using translations.json',
    'Interactive testimonials slider (horizontal/vertical) using Swiper.js',
    'TailwindCSS components: responsive header, mobile menu, buttons, and cards',
    'Structured sections: Header, Hero, Dream Home, Why Choose Us, Popular Residences, Testimonials, Contact, Footer'
  ],
  image: dwello,
  liveUrl: 'https://dwello-landing-page.vercel.app/',
  githubUrl: 'https://github.com/YumnaAtaba3/Dwello-landing-page-'
},{
  id: 11,
  title: 'Hosting Company Landing Page',
  category: 'web',
  duration: '2 days',
  role: 'Frontend Developer',
  technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript (Vanilla)', 'Swiper.js', 'Bootstrap Icons'],
  description: 'A responsive landing page for a hosting company featuring a modern design, mobile-friendly navigation, interactive sliders, and pricing tabs. Built to be mobile-first with smooth animations and reusable components.',
  features: [
    'Responsive Navbar with mobile drawer menu',
    'Hero section with autoplay Swiper.js slider',
    'Feature cards slider using Swiper.js',
    'Pricing section with tabbed Basic/Premium plans',
    'Testimonials section with real customer stories',
    'Integration-ready sections for contact, services, and partners',
    'Mobile-first design with smooth animations'
  ],
  image:hosting,
  liveUrl: 'https://hosting-company-kappa.vercel.app/',
  githubUrl: 'https://github.com/YumnaAtaba3/Hosting-Company.git'
},
{
   id: 12,
    title: 'Mercatino — E-Commerce App',
    category: 'web',
    duration: '3 days',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Swiper.js', 'LocalStorage'],
    description: 'A modern, responsive e-commerce web application allowing users to browse products, view product details, search, and shop by categories. Built with HTML, Tailwind CSS, and JavaScript, featuring a fully functional cart with localStorage persistence.',
    features: [
      'Homepage with featured products, new arrivals, and best-selling items',
      'Category-based shopping',
      'Product details page with image gallery',
      'Search modal with live results',
      'Interactive sliders using Swiper.js',
      'Shopping cart with add, update, remove, and localStorage persistence',
      'Responsive design for mobile, tablet, and desktop',
      'Smooth animations and hover effects'
    ],
    image: mercation,
    liveUrl: 'https://mercatino-nine.vercel.app/ ',
    githubUrl: 'https://github.com/YumnaAtaba3/Mercatino.git'
  },


];