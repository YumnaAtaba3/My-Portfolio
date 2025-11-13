
export interface Link {
  label: string;
  url: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  links?: Link[];
}

export interface Certificate {
  name: string;
  issuer: string;
  year: number;
  url: string;
}
