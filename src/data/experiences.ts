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
      title: "Frontend Developer (Freelance)",
      company: "Freelancing",
      period: "May 2023 - Present",
      location: "Damascus, Syria",
      description:
        "Worked as a freelance Frontend Developer, designing, testing, and maintaining web and mobile applications. Specialized in React.js and Flutter, with responsibilities including responsive UI development, API integration, state management, and collaboration using Agile methodologies.",
      achievements: [
        "Delivered multiple projects across diverse domains",
        "Ensured code quality and user-focused solutions",
        "Collaborated with clients using Agile methodologies",
        "Specialized in responsive UI development and API integration",
        "Maintained high standards for accessibility and modern UX",
      ],
      links: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/yumna-ataba-b263802aa",
        },
        { label: "GitHub", url: "https://github.com/YumnaAtaba3" },
      ],
    },
    // Add more experiences here if needed
    
  ];