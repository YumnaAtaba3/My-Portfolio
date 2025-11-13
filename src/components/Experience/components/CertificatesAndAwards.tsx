import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { Certificate } from "./types";

const CertificatesAndAwards: React.FC<{ certificates: Certificate[] }> = ({
  certificates,
}) => (
  <div className="glass-card p-8 rounded-3xl h-fit animate-scale-in">
    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
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
          className="flex justify-between items-center p-4 rounded-xl border border-muted hover:border-primary transition-all group hover-lift"
        >
          <div>
            <p className="text-lg font-semibold group-hover:text-primary">
              {cert.name}
            </p>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xl font-bold text-accent">{cert.year}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default CertificatesAndAwards;
