import React from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { experiences } from "@/data/experiences";
import { skillCategories, SkillCategory } from "@/data/skillCategories";

// --- Mock Data Definitions (As original files were not provided) ---
interface Link {
  label: string;
  url: string;
}
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  links?: Link[];
}

interface Certificate {
  name: string;
  issuer: string;
  year: number;
  url: string;
}
const certificates: Certificate[] = [
  {
    name: "Advanced Web Development (Sanad Youth)",
    issuer: "Sanad Youth Initiative (Sanad Al-Shabab)",
    year: 2025,
    url: "#",
  },
  {
    name: "Meta Front-End Developer Professional Cert",
    issuer: "Meta (Coursera)",
    year: 2025,
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer", // رابط الشهادة المهنية
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: 2024, // تاريخ حديث
    url: "https://aws.amazon.com/certification/", // رابط عام لشهادات AWS
  },
  {
    name: "Front End Web Developer Certification",
    issuer: "W3C (World Wide Web Consortium)",
    year: 2024,
    url: "https://www.w3.org/standards/webdesign/", // رابط عام لمعايير W3C المتعلقة بالتطوير
  },
];


// --- Reusable Components ---

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="glass-card p-8 rounded-3xl hover-lift animate-slide-up">
    {/* 1. Header (Icon + Desktop Metadata) */}
    <div className="flex items-start justify-between mb-4">
      {/* Icon - Always visible */}
      <div className="w-16 h-16 circle-primary flex items-center justify-center">
        <Briefcase className="w-8 h-8 text-white" />
      </div>

      {/* Metadata (Period + Location) - Only for Desktop (lg and up) */}
      <div className="hidden lg:block text-right flex-shrink-0">
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

    {/* 2. Title & Company */}
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        {experience.title}
      </h3>
      <p className="text-lg text-primary font-semibold">{experience.company}</p>
    </div>

    {/* 3. Description */}
    <p className="text-muted-foreground leading-relaxed mb-6">
      {experience.description}
    </p>

    {/* 4. Achievements */}
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

    {/* 5. Mobile Metadata (Period + Location) - Only for Mobile (less than lg) */}
    <div className="mt-6 pt-4 border-t border-muted-foreground/10 lg:hidden">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <Calendar className="w-4 h-4" />
        <span>{experience.period}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span>{experience.location}</span>
      </div>
    </div>

    {/* 6. Links */}
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
  // Removed h-full as it's no longer needed for flex balancing in the new layout
  <div className="glass-card p-8 rounded-3xl animate-scale-in">
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
                className={`px-3 py-1 bg-gradient-to-r ${cat.gradientClass} from-current/70 to-current/90 text-white rounded-full text-sm font-medium hover-scale transition-transform`}
                style={
                  // Tailwind does not support dynamic background classes easily,
                  // but we can use the defined gradient classes.
                  // For better color blending, I'm adjusting the gradient structure slightly here
                  {
                    backgroundImage: `linear-gradient(135deg, hsl(var(--${cat.gradientClass.replace(
                      "bg-gradient-",
                      ""
                    )} )) 40%, hsl(var(--${cat.gradientClass.replace(
                      "bg-gradient-",
                      ""
                    )}-light)) 100%)`,
                  }
                }
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

// --- Component to Fill Space ---
const CertificatesAndAwards: React.FC<{ certificates: Certificate[] }> = ({
  certificates,
}) => (
  <div className="glass-card p-8 rounded-3xl h-fit animate-scale-in">
    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
      <Award className="w-6 h-6 text-accent" />
      Certificates & Awards
    </h3>
    <div className="space-y-4">
      {certificates.map((cert, idx) => (
        <a
          key={idx}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center p-4 rounded-xl border border-muted hover:border-primary transition-all duration-300 group hover-lift"
        >
          <div className="pr-4">
            <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {cert.name}
            </p>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="text-xl font-bold text-accent">{cert.year}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>
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
          <h2 className="text-display gradient-text mb-6">
            Experience & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in frontend development, focusing on
            creating exceptional user experiences and delivering high-quality
            solutions.
          </p>
        </div>

        {/* New Structure: All content stacked vertically with large spacing (space-y-16) */}
        <div className="space-y-16">
          {/* Section 1: Experience Cards (Full Width) */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 border-b pb-4">
              Professional Experience
            </h3>
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>

          {/* Section 2: Skills and Certificates (Side-by-Side on Desktop) */}
          {/* This section now uses a grid to place Skills and Certificates next to each other */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SkillsList categories={skillCategories} />
            {/* <CertificatesAndAwards certificates={certificates} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
