import React from "react";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ---------------- Reusable Components ---------------- */
interface ContactInfoItemProps {
  icon: React.ElementType;
  value: string;
}
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  value,
}) => (
  <div className="flex items-center gap-2">
    <Icon className="w-4 h-4" />
    <span>{value}</span>
  </div>
);

interface ActionButtonProps {
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}
const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  variant = "primary",
}) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
      variant === "primary"
        ? "bg-gradient-primary text-white hover-lift"
        : "glass-card text-foreground hover-lift"
    }`}
  >
    {label}
    <Icon className="w-5 h-5" />
  </button>
);

interface SocialLinkProps {
  icon: React.ElementType;
  url: string;
  colorClass: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  url,
  colorClass,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 ${colorClass} flex items-center justify-center hover-glow transition-all duration-300`}
  >
    <Icon className="w-6 h-6 text-white" />
  </a>
);

/* ---------------- Main Hero Component ---------------- */
const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const contactInfo = [
    { icon: MapPin, value: "Damascus, Syria" },
    { icon: Mail, value: "yumnaataba33@gmail.com" },
    { icon: Phone, value: "+963 962 881 645" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yumna-ataba-b263802aa",
      colorClass: "circle-primary",
    },
    {
      icon: Github,
      url: "https://github.com/YumnaAtaba3",
      colorClass: "circle-secondary",
    },
    {
      icon: Mail,
      url: "mailto:yumnaataba33@gmail.com",
      colorClass: "circle-accent",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 circle-primary animate-float opacity-20"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 circle-secondary animate-float opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 circle-accent animate-float opacity-15"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 circle-primary animate-rotate opacity-25"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
            <h1 className="text-hero gradient-text mb-4">Yumna Ataba</h1>
            <h2 className="text-display text-foreground mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Passionate Frontend Developer with 2+ years of experience creating
              beautiful, responsive web and mobile applications using React.js,
              Flutter, and modern technologies.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground">
              {contactInfo.map((item, i) => (
                <ContactInfoItem key={i} {...item} />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <ActionButton
                label="Get In Touch"
                icon={ExternalLink}
                onClick={() => scrollToSection("contact")}
              />
              <ActionButton
                label="Download CV"
                icon={Download}
                variant="secondary"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./yumna_ataba_Resume (1).pdf"; 
                  link.download = "YumnaAtaba_CV.pdf"; 
                  link.click();
                }}
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <SocialLink key={i} {...social} />
              ))}
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-hero flex items-center justify-center text-6xl font-bold text-white animate-pulse-glow font-family-sans">
                YA
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 circle-accent animate-float opacity-80 flex items-center justify-center text-white font-bold ">
                2+
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 circle-secondary animate-float opacity-80 flex items-center justify-center text-white text-sm">
                ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
