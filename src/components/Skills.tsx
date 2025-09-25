import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";
import Tilt from "react-parallax-tilt";

// ================= Animations =================
const transition: Transition = { duration: 0.6, ease: "easeOut" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: i * 0.15 },
  }),
};

// ================= Component =================
const Skills: React.FC = () => {
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
      title: "APIs",
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
      "bg-gradient-to-r from-blue-500 to-purple-500",
      "bg-gradient-to-r from-purple-500 to-indigo-500",
      "bg-gradient-to-r from-indigo-500 to-blue-500",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Subtle floating glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-display gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A concise overview of my core technical skills and the tools I use
            to build modern, high-quality applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.03}
                transitionSpeed={250}
              >
                <div className="glass-card p-8 rounded-3xl hover-lift bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl">
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
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
              <motion.span
                key={index}
                custom={index}
                variants={fadeUp}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground hover-scale transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Programming Languages", value: "5+", icon: Code },
            { label: "Frameworks & Libraries", value: "8+", icon: Globe },
            { label: "Design Tools", value: "6+", icon: Palette },
            { label: "Development Years", value: "2+", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center glass-card p-6 rounded-2xl hover-scale bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
