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
import { motion } from "framer-motion";
import girlImage from "../assets/girl-hero.jpg";
/* ---------------- Reusable Components ---------------- */
interface ContactInfoItemProps {
  icon: React.ElementType;
  value: string;
}
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  value,
}) => (
  <motion.div
    className="flex items-center gap-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Icon className="w-4 h-4" />
    <span>{value}</span>
  </motion.div>
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
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-8 py-4 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
      variant === "primary"
        ? "bg-gradient-primary text-white hover-lift"
        : "glass-card text-foreground hover-lift"
    }`}
  >
    {label}
    <Icon className="w-5 h-5" />
  </motion.button>
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
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    className={`w-12 h-12 ${colorClass} flex items-center justify-center hover-glow transition-all duration-300`}
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.a>
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 md:mt-0"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          "circle-primary",
          "circle-secondary",
          "circle-accent",
          "circle-primary",
        ].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 ${cls} opacity-20`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 10}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 10 + i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hide "Hello I'm" on mobile */}
            <p className="text-lg text-muted-foreground mb-2 hidden lg:block">
              Hello, I'm
            </p>

            <motion.h1
              className="text-hero gradient-text mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Yumna Ataba
            </motion.h1>

            <motion.h2
              className="text-display text-foreground mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Frontend Developer
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Passionate Frontend Developer with 2+ years of experience creating
              beautiful, responsive web and mobile applications using React.js,
              Flutter, and modern technologies.
            </motion.p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground">
              {contactInfo.map((item, i) => (
                <ContactInfoItem key={i} {...item} />
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
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
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <SocialLink key={i} {...social} />
              ))}
            </div>
          </motion.div>

          {/* Avatar / Logo - hidden on mobile */}
          <motion.div
            className="hidden lg:flex justify-center lg:justify-end"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <img
                src={girlImage}
                alt="Yumna Ataba, Frontend Developer"
                // ⬇️ REPLACED className with the new combined animation
                className="w-80 h-80 rounded-full object-cover animate-hero-avatar"
              />
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 circle-accent opacity-80 flex items-center justify-center text-white font-bold"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                2+
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 circle-secondary opacity-80 flex items-center justify-center text-white text-sm"
                animate={{ y: [5, -15, 5] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
