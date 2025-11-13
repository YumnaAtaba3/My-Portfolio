import React from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ExperienceItem } from "./types";

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="glass-card p-8 rounded-3xl hover-lift animate-slide-up">
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="w-16 h-16 circle-primary flex items-center justify-center">
        <Briefcase className="w-8 h-8 text-white" />
      </div>

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

    {/* Title */}
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        {experience.title}
      </h3>
      <p className="text-lg text-primary font-semibold">{experience.company}</p>
    </div>

    <p className="text-muted-foreground leading-relaxed mb-6">
      {experience.description}
    </p>

    {/* Achievements */}
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

    {/* Mobile Metadata */}
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

    {/* Links */}
    {experience.links && (
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

export default ExperienceCard;
