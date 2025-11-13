
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Linkedin, Github } from "lucide-react";

interface ContactInfoItemProps {
  icon: React.ElementType;
  value?: string;
  href: string;
  label: string;
}


const CompactSocialLink: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  href,
  label,
  value,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowValue = value && (Icon === Phone || Icon === MapPin);

  return (
    <motion.div className="relative flex items-center justify-center">
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={label}
        className="p-2 text-foreground/80 hover:text-primary transition-colors duration-300 rounded-full hover:bg-white/10"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <Icon className="w-5 h-5" />
      </motion.a>

      {shouldShowValue && (
        <motion.div
          className="absolute bottom-full mb-3 py-1 px-3 bg-card border border-border/70 rounded-lg shadow-xl whitespace-nowrap z-30"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        >
          <span className="text-xs font-semibold text-primary">
            {label.split(":")[0]}
          </span>
          <p className="text-sm text-foreground/90">{value}</p>
          <div className="absolute left-1/2 bottom-0 w-2 h-2 transform -translate-x-1/2 translate-y-1/2 rotate-45 bg-card border-b border-r border-border/70"></div>
        </motion.div>
      )}
    </motion.div>
  );
};


const floatingSocialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yumna-ataba-b263802aa",
    label: "LinkedIn Profile",
  },
  {
    icon: Github,
    href: "https://github.com/YumnaAtaba3",
    label: "GitHub Profile",
  },
  { icon: Mail, href: "mailto:yumnaataba33@gmail.com", label: "Send Email" },
  {
    icon: Phone,
    href: "tel:+963962881645",
    label: "Call Phone: +963",
    value: "+963 962 881 645",
  },
  {
    icon: MapPin,
    href: "#",
    label: "Location: Syria",
    value: "Damascus, Syria",
  },
];

const ContactIconBar: React.FC = () => (
  <motion.div
    className="absolute -bottom-4 left-0 md:left-1/2 transform -translate-x-1/2 p-2 bg-card/80 backdrop-blur-md rounded-full border border-border/70 shadow-2xl flex gap-1 z-20"
    style={{ transform: "translateZ(50px)" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.5 }}
  >
    {floatingSocialLinks.map((item, i) => (
      <CompactSocialLink key={i} {...item} />
    ))}
  </motion.div>
);

export default ContactIconBar;
