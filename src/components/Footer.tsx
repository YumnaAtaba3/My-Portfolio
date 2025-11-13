import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import ParticleSystem from "./Hero/components/FloatingParticles";

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
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 circle-primary flex items-center justify-center hover-glow transition-all duration-300"
    aria-label={label}
    whileHover={{ scale: 1.15 }}
  >
    <Icon className="w-5 h-5 text-white" />
  </motion.a>
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
    <motion.button
      onClick={() => scrollToSection(href.substring(1))}
      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
      whileHover={{ x: 4 }}
    >
      {label}
    </motion.button>
  );
};

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
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      <ParticleSystem />
      {/* Floating subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full top-10 left-0 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      <div className="section-container py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-1 text-muted-foreground text-sm text-center md:text-left">
            <span>© {currentYear} Yumna Ataba. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse mx-auto md:mx-1" />
            <span>and lots of coffee ☕</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-lift transition-all duration-300 text-sm font-medium mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
