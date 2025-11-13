// components/Hero/HeroContent.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Download, ExternalLink } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { DynamicCodeSnippet } from "./DynamicCodeSnippet";








// ---------------------------------------------

interface HeroContentProps {
  scrollToSection: (sectionId: string) => void;
  coreTechs: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({
  scrollToSection,
  coreTechs,
}) => (
  <motion.div
    className="text-center lg:text-left order-2 lg:order-1"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p className="text-xl text-primary font-semibold mb-3 tracking-wider">
      Hello, I'm
    </p>

    <motion.h1
      className="text-2xl md:text-6xl font-extrabold font-serif leading-none tracking-tighter mb-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Yumna <span className="gradient-text">Ataba</span>
    </motion.h1>

    <motion.h2
      className="text-3xl text-foreground/80 mb-6 font-light font-serif"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Frontend Developer
    </motion.h2>

    <motion.p
      className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 border-l-4 border-primary/50 pl-4 italic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Passionate Frontend Developer with 2+ years of experience creating
      beautiful, responsive web and mobile applications using React.js, Flutter,
      and modern technologies.
    </motion.p>

    {/* Creative Element: Dynamic Code Snippet */}
    <DynamicCodeSnippet techs={coreTechs} />

    {/* Action Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 mb-10"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 1.8 },
        },
      }}
    >
      <ActionButton
        label="Get In Touch"
        onClick={() => scrollToSection("contact")}
       icon={Zap || ExternalLink}
        variant="primary"
       
      />
      <ActionButton
        label="Download CV"
        icon={Download}
        variant="secondary"
        href="./yumna_ataba_Resume (1).pdf"
      />
    </motion.div>
  </motion.div>
);

export default HeroContent;
