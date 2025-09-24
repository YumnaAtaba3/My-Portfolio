import React from "react";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "BLoC Pattern", "Firebase"],
    },
    {
      icon: Palette,
      title: "UI/UX & Styling",
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
        "Responsive Design",
        "UI/UX Design",
      ],
    },
    {
      icon: Database,
      title: " APIs",
      skills: [
        "RESTful APIs",
        "State Management",
        "Firebase",
        "API Integration",
      ],
    },
    {
      icon: Globe,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "GitLab", "Netlify", "VS Code"],
    },
    {
      icon: Zap,
      title: "Methodologies",
      skills: [
        "Agile/Scrum",
        "Problem Solving",
        "Team Collaboration",
        "Code Review",
      ],
    },
  ];

  const getGradientClass = (index: number) => {
    const gradients = [
      "bg-gradient-primary",
      "bg-gradient-secondary",
      "bg-gradient-accent",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A concise overview of my core technical skills and the tools I use
            to build modern, high-quality applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 rounded-3xl hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${getGradientClass(
                    categoryIndex
                  )} rounded-2xl flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React Hooks",
              "Context API",
              "React Router",
              "Axios",
              "JSON",
              "CSS Grid",
              "Flexbox",
              "SASS/SCSS",
              "Bootstrap",
              "Progressive Web Apps",
              "Cross-Browser Compatibility",
              "Performance Optimization",
              "SEO",
              "Accessibility (a11y)",
              "Code Splitting",
              "Lazy Loading",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Programming Languages", value: "5+", icon: Code },
            { label: "Frameworks & Libraries", value: "8+", icon: Globe },
            { label: "Design Tools", value: "6+", icon: Palette },
            { label: "Development Years", value: "2+", icon: Zap },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-6 rounded-2xl hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 ${getGradientClass(
                  index
                )} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
