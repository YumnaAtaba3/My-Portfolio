
export interface SkillCategory {
  title: string;
  skills: string[];
  gradientClass: string;
}

 export  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: ["React.js", "Flutter", "JavaScript", "TypeScript", "Dart"],
      gradientClass: "bg-gradient-primary",
    },
    {
      title: "Styling & UI",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Material UI", "Ant Design"],
      gradientClass: "bg-gradient-secondary",
    },
    {
      title: "Tools & Methodologies",
      skills: [
        "Git",
        "GitHub",
        "RESTful APIs",
        "State Management",
        "Agile/Scrum",
        "UI/UX Design",
      ],
      gradientClass: "bg-gradient-accent",
    },
  ];