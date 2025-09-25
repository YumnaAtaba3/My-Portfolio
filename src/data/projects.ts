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


 export const projects: Project[] = [
{ id: 2, title: 'Hotel & Travel Booking App', category: 'mobile', duration: '4 months', role: 'Frontend Developer', technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'BLoC'], description: 'Built a cross-platform Android/iOS app for hotel and flight bookings. Developed an admin dashboard, integrated Google Maps, secure payments, and user reviews.', features: [ 'Cross-platform mobile application', 'Hotel and flight booking system', 'Admin dashboard for partners', 'Google Maps integration', 'Secure payment processing', 'User reviews and ratings' ], image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', liveUrl: '#', githubUrl: '#' }, { id: 3, title: 'Weather App', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['React.js', 'REST API', 'Tailwind CSS'], description: 'Developed a multi-language weather app with live data from OpenWeather API. Delivered a responsive UI supporting English and Arabic.', features: [ 'Live weather data integration', 'Multi-language support (English/Arabic)', 'Responsive design for all devices', 'Modern and intuitive UI', 'Location-based weather forecasts' ], image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop', liveUrl: 'https://profound-jelly-5292c6.netlify.app/', githubUrl: '#' },
 { id: 4, title: 'E-Commerce Audio Store', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'LocalStorage'], description: 'An interactive front-end e-commerce web app for selling headphones, earphones, and earbuds. Built using HTML, CSS, and Vanilla JavaScript with a fully functional shopping cart, product filters, sliders, and modal product details.', features: [ 'Hero slider with auto-rotating images and clickable dots', 'Product filtering and real-time search functionality', 'Featured products slider with active dot navigation', 'Fully functional shopping cart with localStorage persistence', 'Product modal with detailed information and add to cart', 'Responsive layout for mobile-friendly design' ], image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop', liveUrl: 'https://x-beat.netlify.app/', githubUrl: 'https://github.com/YumnaAtaba3/E-commerce-app1' }, { id: 5, title: 'Todo List App', category: 'web', duration: '2 weeks', role: 'Frontend Developer', technologies: ['React.js', 'Hooks'], description: 'Created a task management app with features for adding, editing, filtering, and deleting tasks. Used React Hooks for state management.', features: [ 'Task creation and management', 'Filtering and sorting options', 'Local storage persistence', 'Clean and minimal UI', 'React Hooks implementation' ], image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop', liveUrl: 'https://zingy-biscotti-9f0021.netlify.app/', githubUrl: '#' }, { id: 6, title: 'Umbra – Comprehensive Visitor Management System', category: 'web', duration: '4 months', role: 'Frontend Developer', technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Pusher', 'REST API', 'Face Recognition API', 'Fingerprint Scanner API'], description: 'Advanced visitor management platform for entrepreneurship hubs with real-time notifications, biometric verification, and comprehensive reporting system.', features: [ 'Complete visitor lifecycle management with filtering and search', 'Real-time check-in/check-out tracking with daily monitoring', 'Event management with attendee handling and email notifications', 'Comprehensive reporting system with export capabilities', 'User and area management with security level controls', 'Security override system with temporary/permanent access', 'Biometric services: face recognition and fingerprint verification', 'Real-time notifications via Pusher integration', 'Public visitor registration portal', 'Blacklist management and visitor status tracking' ], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop', liveUrl: '#', githubUrl: '#' } ,
  {
    id: 7,
    title: 'Cezerin Ecommerce Platform',
    category: 'web',
    duration: 'Ongoing',
    role: 'Full Stack Developer',
    technologies: ['Node.js', 'React.js', 'Redux', 'Express.js', 'MongoDB', 'Babel', 'Webpack'],
    description: 'Cezerin is a React and Node.js based eCommerce Progressive Web App, providing a complete online store solution including backend, frontend, dashboard, and client API.',
    features: [
      'Cezerin API - Backend REST API',
      'Cezerin Store - Frontend SPA with server-side rendering',
      'Cezerin Admin - Dashboard with JWT authentication',
      'Cezerin Client - JavaScript client for API',
      'SEO friendly with Google Analytics ecommerce tracking',
      'Highly customizable themes and configuration',
      'Docker and deployment support for DigitalOcean'
    ],
    image: 'https://chost.ansiglobal.com/img/cezerin-plusha-theme.png',
    liveUrl: 'https://plusha.demo.chost.ansiglobal.com',
    githubUrl: ''
  },
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
  }
];