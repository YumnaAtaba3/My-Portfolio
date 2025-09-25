import React from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ExperienceItem, experiences } from "@/data/experiences";
import { skillCategories, SkillCategory } from "@/data/skillCategories";

/* ------------------ Reusable Components ------------------ */


const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="glass-card p-8 rounded-3xl hover-lift animate-slide-up">
    <div className="flex items-start justify-between mb-6">
      <div className="w-16 h-16 circle-primary flex items-center justify-center">
        <Briefcase className="w-8 h-8 text-white" />
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <Calendar className="w-4 h-4" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        {experience.title}
      </h3>
      <p className="text-lg text-primary font-semibold">{experience.company}</p>
    </div>

    <p className="text-muted-foreground leading-relaxed mb-6">
      {experience.description}
    </p>

    {experience.achievements.length > 0 && (
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-foreground">
          Key Achievements:
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <div className="w-2 h-2 circle-accent mt-2.5 flex-shrink-0"></div>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {experience.links && experience.links.length > 0 && (
      <div className="mt-6 flex flex-wrap gap-4">
        {experience.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-lift text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

const SkillsList: React.FC<{ categories: SkillCategory[] }> = ({
  categories,
}) => (
  <div className="glass-card p-8 rounded-3xl h-full animate-scale-in">
    <h3 className="text-2xl font-bold text-foreground mb-6">
      Technical Skills
    </h3>
    <div className="space-y-6">
      {categories.map((cat, idx) => (
        <div key={idx}>
          <h4 className="text-lg font-semibold text-foreground mb-3">
            {cat.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 ${cat.gradientClass} text-white rounded-full text-sm font-medium`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------ Main Experience Section ------------------ */

const Experience: React.FC = () => {



  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in frontend development, focusing on
            creating exceptional user experiences and delivering high-quality
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>

          <SkillsList categories={skillCategories} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
