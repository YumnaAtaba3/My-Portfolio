export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  links?: { label: string; url: string }[];
}
 
 export const experiences: ExperienceItem[] = [
     {
      title: "Frontend Developer Trainee",
      company: "IXCoders",
      period: "Oct 2025 - Present · 2 mos",
      location: "On-site",
      description:
        "Participating in iXcoder’s development team and contributing to collaborative training projects. Gaining hands-on experience in frontend development using HTML, CSS, JavaScript, and React. Building responsive and interactive web applications following best practices. Enhancing teamwork skills and practical experience in a professional development environment.",
      achievements: [
        "Hands-on experience in React, JavaScript, HTML, and CSS",
        "Contributed to collaborative training projects",
        "Built responsive and interactive web applications",
        "Enhanced teamwork and Agile development skills",
      ],
      links: [{ label: "IXCoders", url: "https://ixcoders.com" }],
    },
    {
      title: "Frontend Development Trainee",
      company: "Sanad Youth سند الشباب",
      period: "Aug 2025 - Present · 4 mos",
      location: "Damascus, Syria · On-site",
      description:
        "Gained solid foundations in web development, including HTML, CSS, JavaScript, and React.js. Contributed to building and improving user interfaces. Learned best practices in responsive and accessible design.",
      achievements: [
        "Learned React.js, Redux.js, TypeScript, and Tailwind CSS",
        "Built and improved user interfaces",
        "Applied best practices in responsive and accessible design",
        "Contributed to real projects in a professional environment",
      ],
      links: [{ label: "Sanad Youth", url: "https://sanadyouth.org" }],
    },
    {
      title: "Frontend Developer",
      company: "Freelance | Self-Employed",
      period: "Sep 2024 - Present · 1 yr 3 mos",
      location: "Remote",
      description:
        "Worked on diverse freelance projects delivering responsive, user-friendly web applications. Applied modern frontend technologies such as React, Redux, Zustand, and React Query. Focused on clean code, performance optimization, and reusability. Developed strong skills in client communication, requirements analysis, and independent project management, while continuously improving teamwork and collaboration abilities.",
      achievements: [
        "Delivered multiple responsive web applications",
        "Used React, Redux, Zustand, and React Query for modern projects",
        "Focused on clean code, performance, and reusability",
        "Strengthened client communication and project management skills",
      ],
      links: [{ label: "GitHub", url: "https://github.com/YumnaAtaba3" }],
    },
  ];

