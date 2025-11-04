
export interface SkillCategory {
  title: string;
  skills: string[];
  gradientClass: string;
}

 export  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: [
        "React.js",
        "Redux.js",
        "Zustand",
        "React Query",
        "Flutter",
        "JavaScript",
        "TypeScript",
        "Dart",
        "HTML5",
        "CSS3",
      ],
      gradientClass: "bg-gradient-primary",
    },
    {
      title: "Styling & UI",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Ant Design",
        "Responsive Design",
        "UI/UX Design",
      ],
      gradientClass: "bg-gradient-secondary",
    },
    {
      title: "Tools & Methodologies",
      skills: [
        "Git",
        "GitHub",
        "RESTful APIs",
        "Agile/Scrum",
        "Project Management",
        "LocalStorage",
        "State Management",
        "Accessibility Best Practices",
      ],
      gradientClass: "bg-gradient-accent",
    },
  ];