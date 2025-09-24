import React from "react";
import { Heart, ArrowUp, Linkedin, Github, Mail } from "lucide-react";

/* ---------------- Reusable Components ---------------- */

interface SocialButtonProps {
  icon: React.ElementType;
  url: string;
  label: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({
  icon: Icon,
  url,
  label,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 circle-primary flex items-center justify-center hover-glow transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5 text-white" />
  </a>
);

interface QuickLinkProps {
  label: string;
  href: string;
}
const QuickLinkButton: React.FC<QuickLinkProps> = ({ label, href }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={() => scrollToSection(href.substring(1))}
      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
    >
      {label}
    </button>
  );
};

/* ---------------- Footer Component ---------------- */

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialButtonProps[] = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yumna-ataba-b263802aa",
    },
    { icon: Github, label: "GitHub", url: "https://github.com/YumnaAtaba3" },
    { icon: Mail, label: "Email", url: "mailto:yumnaataba33@gmail.com" },
  ];

  const contactInfo = [
    "Damascus, Syria",
    "+963 962 881 645",
    "yumnaataba33@gmail.com",
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-surface border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              Yumna Ataba
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Frontend Developer passionate about creating beautiful,
              functional, and user-friendly web and mobile applications using
              modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <SocialButton key={i} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <QuickLinkButton {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {contactInfo.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">
                  Available for Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Yumna Ataba. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee ☕</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-lift transition-all duration-300 text-sm font-medium"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
