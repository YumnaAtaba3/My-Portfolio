// components/Experience/Experience.tsx

import React from "react";


import { experiences } from "@/data/experiences";
import { skillCategories } from "@/data/skillCategories";
import { Certificate } from "./components/types";
import ExperienceCard from "./components/ExperienceCard";
import SkillsList from "./components/SkillsList";
import CertificatesAndAwards from "./components/CertificatesAndAwards";

const certificates: Certificate[] = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (via Coursera)",
    year: 2025,
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    name: "IBM Front-End Development Certificate",
    issuer: "IBM",
    year: 2024,
    url: "https://www.coursera.org/professional-certificates/ibm-frontend-developer",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">
            Experience & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in frontend development.
          </p>
        </div>

        <div className="space-y-16">
          {/* Experience Section */}
          <div className="space-y-8">

            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>

          {/* Skills + Certificates */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SkillsList categories={skillCategories} />
            <CertificatesAndAwards certificates={certificates} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
