

import React from "react";
import { SkillCategory } from "@/data/skillCategories";

const SkillsList: React.FC<{ categories: SkillCategory[] }> = ({
  categories,
}) => (
  <div className="glass-card p-8 rounded-3xl animate-scale-in">
    <h3 className="text-2xl font-bold text-foreground mb-6">
      Technical Skills
    </h3>

    <div className="space-y-6">
      {categories.map((cat, idx) => (
        <div key={idx}>
          <h4 className="text-lg font-semibold mb-3 text-primary">
            {cat.title}
          </h4>

          <div className="flex flex-wrap gap-2 ">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 bg-gradient-to-r ${cat.gradientClass} rounded-full text-sm font-medium hover-scale`}
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

export default SkillsList;
